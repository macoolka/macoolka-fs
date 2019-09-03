
/**
 * Common functions(async) for file system
 * @desczh
 * 文件系统常用的函数集合(async)
 * @file
 */
import * as fs from 'fs';
import * as _path from 'path';
import { Stream } from 'stream';
import { isStream } from 'macoolka-stream';
import * as T from 'fp-ts/lib/Task';
import { createFolder, deleteFile, updateFile } from './sync';
/**
 * Write a file(async)
 * @desczh
 * 写入一个文件
 * @since 0.2.1
 */
export const createFileTask = (
    { path, data, encoding }:
        { path: string, data: string | Buffer | Stream, encoding?: string }): T.Task<void> =>
    () =>
        new Promise((resolve, reject) => {
            createFolder(_path.dirname(path));
            if (isStream(data)) {
                const stream = data.pipe(fs.createWriteStream(path, { encoding }));
                stream.on('close', () => {
                    resolve();
                });
                stream.on('error', error => {
                    reject(error);
                });
            } else {
                fs.writeFileSync(path, data, { encoding });
                resolve();
            }
        });

/**
 * update a file(async).
 *
 * Rename path when path isn't undefined
 *
 * Replace content when data isn't undefined
 * @desczh
 * 更新一个文件(async)
 *
 * 当`path`不为空时,重命名文件用这个值
 *
 * 当`data`不为空时,替换文件内容
 * @since 0.2.1
 */
export const updateFileTask = ({ data: { path, data, encoding }, where }:
    { data: { path?: string, data?: string | Buffer | Stream, encoding?: string }, where: string }): T.Task<void> => {
    if (data && isStream(data)) {
        deleteFile(where);
        return createFileTask({ data, path: where, encoding });
    }
    return T.fromIO(() => updateFile({ data: { path, data, encoding }, where }));
};
