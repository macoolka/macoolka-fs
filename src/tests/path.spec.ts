import { getAbsoluteFilePath, isSubPath, isExtName, notExtName, directoryDepth,
     getDirectoryName, getFileName, isFullPath,foldPath ,splitPath} from '../path'
import * as path from 'path'
describe('path', () => {
    it('getAbsoluteFilePath', () => {
        expect(getAbsoluteFilePath('abc')).toEqual(process.cwd() + '/abc')
        expect(getAbsoluteFilePath('/abc')).toEqual('/abc')
    })

    it('isSubPath', () => {
        expect(isSubPath(path.join(__dirname, 'test'),
            path.join(__dirname, 'test', 'a.txt'))).toEqual(true);
        expect(isSubPath(path.join(__dirname, 'test'),
            path.join(__dirname, 'test', '..'))).toEqual(false);
        expect(isSubPath(path.join(__dirname, 'test'),
            path.join(__dirname, 'test'))).toEqual(true);
    });
    it('isFullPath', () => {
        expect(isFullPath(path.join(__dirname, 'test'),
            path.join(__dirname, 'test', 'a.txt'))).toEqual(true);
        expect(isFullPath(path.join(__dirname, 'test'),
            path.join(__dirname, 'test', '..'))).toEqual(true);
        expect(isFullPath(path.join(__dirname, 'test'),
            path.join(__dirname, 'test'))).toEqual(true);
    });
    it('getDirectoryName', () => {
        expect(getDirectoryName('/a/b/c/d/a.txt')).toEqual('/a/b/c/d')
    });
    it('foldPath', () => {
        expect(foldPath(['a','b','c','d','a.txt'])).toEqual('a/b/c/d/a.txt')
    });
    it('splitPath', () => {
        expect(splitPath('/a/b/c/d/a.txt')).toEqual(['','a','b','c','d','a.txt'])
    });
    it('getFileName', () => {
        expect(getFileName('/a/b/c/d/a.txt')).toEqual('a.txt')
    });
    it('isExtName', () => {
        expect(isExtName('ts')('abc.ts')).toEqual(true)
        expect(isExtName('ts')('abc.ts1')).toEqual(false)

    })

    it('notExtName', () => {
        expect(notExtName('ts')('abc.ts')).toEqual(false)
        expect(notExtName('ts')('abc.ts1')).toEqual(true)

    })
    it('directoryDepth', () => {
        expect(directoryDepth('/a/b/c/d/a.txt')).toEqual(6)
    })
})