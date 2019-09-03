
/**
 * Common functions for file system
 * @desczh
 * 文件系统常用的函数集合
 * @file
 */
import * as mkDirP from 'mkdirp';
import { sync as rimrafSync } from 'rimraf';
import { sync, Options as GlobOptions } from 'fast-glob';
import * as fs from 'fs';
import * as _path from 'path';
import { pipe } from 'fp-ts/lib/pipeable';
import * as A from 'fp-ts/lib/Array';

/**
 * Create a folder.
 *
 * Create when folder not exist
 *
 * Ignore When folder exist
 *
 * @desczh
 * 创建一个目录。
 * 当目录不存在时,建立目录。
 * 目录存在，忽略
 * @since 0.2.0
 */
export const createFolder = (path: string): void => {

    mkDirP.sync(path);
    return void 0;
};

/**
 * check directory that is existed
 * @desczh
 * 核对指定的目录是否存在
 * @since 0.2.0
 */

export const existFolder = (path: string): boolean => {
    return fs.existsSync(path) && fs.statSync(path).isDirectory();
};

/**
 * rename a folder
 * @desczh
 * 重新命名一个存在的目录
 * @since 0.2.0
 */
export const updateFolder = ({ name, where }: { name: string, where: string }): void =>
    fs.renameSync(where, name);

/**
 * Delete folder if directory exist and even directory contain files
 * @desczh
 * 删除目录即使目录包含文件
 * @since 0.2.0
 */
export const deleteFolder = (strPath: string): void =>
    fs.rmdirSync(strPath);

/**
 * Delete folder if directory exist and even directory contain files
 * @desczh
 * 删除目录即使目录包含文件
 * @since 0.2.0
 */
export const clearFolder = (strPath: string): void =>
    rimrafSync(strPath);

/**
 * List all folders and files in a given folder
 * @desczh
 * 在指定的目录下列出所有的目录和文件
 * @since 0.2.0
 */

export const folders = (strPath: string): { folders: string[], files: string[] } => {
    const _folders: string[] = [];
    const _files: string[] = [];
    pipe(
        fs.readdirSync(strPath, { withFileTypes: true }),
        A.map(_file =>
            _file.isDirectory()
                ? _folders.push(_file.name)
                : _file.isFile()
                    ? _files.push(_file.name)
                    : 0
        )
    );
    return {
        folders: _folders,
        files: _files,
    };
};

export type GlobWhere = { path: string[] | string, options?: GlobOptions };
/**
 * find file or folder using the patterns the shell uses, like stars and stuff.
 * @desczh
 * 寻找文件或目录
 * @since 0.2.0
 */

export const glob = ({ path, options }: GlobWhere): string[] =>
    sync(path, options);

/**
 * Write a file
 * @desczh
 * 写入一个文件
 * @since 0.2.0
 */
export const createFile = (
    { path, data, encoding }: { path: string, data: string | Buffer, encoding?: string }): void => {
    createFolder(_path.dirname(path));

    fs.writeFileSync(path, data, { encoding });
};

/**
 * Delete a file
 * @desczh
 * 删除一个文件
 * @since 0.2.0
 */
export const deleteFile = (path: string): void =>
    fs.unlinkSync(path);
/**
 * Get a file stream
 * @desczh
 * 得到一个文件流
 * @since 0.2.0
 */
export const fileStream = (path: string): fs.ReadStream =>
    fs.createReadStream(path);
/**
 * Get a file string
 * @desczh
 * 得到一个文本文件
 * @since 0.2.0
 */
export const fileString = (path: string): string =>
    fs.readFileSync(path, { encoding: 'utf8' });

/**
 * Check a file exist
 * @desczh
 * 判断文件是否存在
 * @since 0.2.0
 */
export const existFile = (path: string): boolean =>
    fs.existsSync(path) && fs.statSync(path).isFile();

/**
 * Get a file info
 * @desczh
 * 得到一个文件信息
 * @since 0.2.0
 */
export const file = (path: string): {
    path: string
    size: number
    lastModified: Date
} => {
    const info = fs.statSync(path);
    return {
        path,
        size: info.size,
        lastModified: info.mtime,
    };
};

/**
 * update a file.
 *
 * Rename path when path isn't undefined
 *
 * Replace content when data isn't undefined
 * @desczh
 * 更新一个文件
 *
 * 当`path`不为空时,重命名文件用这个值
 *
 * 当`data`不为空时,替换文件内容
 * @since 0.2.0
 */
export const updateFile = ({ data: { path, data, encoding }, where }:
    { data: { path?: string, data?: string | Buffer, encoding?: string }, where: string }): void => {
    if (data) {
        deleteFile(where);
        createFile({ data, path: where, encoding });
    }
    if (path) {
        fs.renameSync(where, path);
    }

};
