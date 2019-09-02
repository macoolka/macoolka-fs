/**
 * Common functions for file path
 * @desczh
 * 文件路径常用的函数集合
 * @file
 */
import * as path from 'path';
import { not } from 'fp-ts/lib/function';
/**
 * Get `process.cwd() + inputPath` when first char is not `/`,or get orgin path
 * @desczh
 * 得到绝对路径，如果第一个字符不是'/'，路径前面增加`process.cwd()`
 * @example
 * import { getAbsoluteFilePath } from 'macoolka-fs/lib/path'
 *
 * expect(getAbsoluteFilePath('abc')).toEqual(process.cwd() + '/abc')
 * expect(getAbsoluteFilePath('/abc')).toEqual('/abc')
 *
 * @since 0.2.0
 */
export const getAbsoluteFilePath = (filePath: string) =>
    filePath[0] === '/' ? filePath : path.join(process.cwd(), filePath);

/**
 * Calculate a path depth
 * @desczh
 * 得到路径的深度
 * @since 0.2.0
 */

export const directoryDepth = (strPath: string): number => {
    strPath = path.normalize(strPath);
    return strPath.split(path.sep).length;
};

/**
 * Get directory from path
 * @desczh
 * 从一个路径中得到文件夹
 * @since 0.2.0
 */
export const getDirectoryName = (strPath: string): string => {
    return path.parse(strPath).dir;
};

/**
 * Returns  name of file name.
 * @desczh
 * 从一个路径中得到文件名
 * @since 0.2.0
 */

export const getFileName = (strPath: string): string => {

    return path.parse(strPath).base;

};

/**
 * check path in root is full path
 * @desczh
 * 核对一个路径是否是全路径
 * @since 0.2.0
 */

export const isFullPath = (strRoot: string, strPath: string): boolean => {
    return path.resolve(strRoot, strPath) === strPath;
};

/**
 * check a path is int parent path
 * @desczh
 * 核对一个路径是否是另一个路径的子路径
 * @since 0.2.0
 */
export const isSubPath = (parent: string, sub: string): boolean =>
    !(path.relative(parent, sub).indexOf('..') >= 0);

/**
 * fold for path array
 * @desczh
 * 把路径文本数组转换为单一路径
 * @since 0.2.0
 */
export const foldPath = (a: string[]): string => a.join(path.sep);

/**
 * split path with path.sep
 * @desczh
 * 用path.sep拆分路径
 * @since 0.2.0
 */
export const splitPath = (a: string): string[] => a.split(path.sep);

/**
 * Check a file with extname
 * @desczh
 * 检验文件是否是指定的扩展名
 * @example
 * import {isExtName} from 'macoolka-fs'
 *
 * expect(isExtName('ts')('abc.ts')).toEqual(true)
 * expect(isExtName('ts')('abc.ts1')).toEqual(false)
 *
 */
export const isExtName = (extname: string) => (filePath: string) => filePath.endsWith(`.${extname}`);

/**
 * Check a file not with extname
 * @desczh
 * 检验文件是否不是指定的扩展名
 * @example
 * import {notExtName} from 'macoolka-fs'
 *
 * expect(notExtName('ts')('abc.ts')).toEqual(false)
 * expect(notExtName('ts')('abc.ts1')).toEqual(true)
 *
 */
export const notExtName = (extname: string) => not(isExtName(extname));
