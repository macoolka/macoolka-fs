import {
    createFolder,
    existFolder,
    updateFolder,
    deleteFolder,
    clearFolder,
    folders,
    glob,
    createFile,
    deleteFile,
    updateFile,
    fileStream,
    file,
    existFile,
    fileString,
} from '../sync'
import * as path from 'path';
import { Buffer } from 'buffer';

describe(' sync folder', () => {
    const root = path.join(__dirname, 'fixtures', 'folders')
    it('createFolder when folder no exist', () => {
        createFolder(path.join(root, 'folder1', 'folder2'))
    });
    it('createFolder when folder exist', () => {
        createFolder(path.join(root, 'formats'))
    });
    it('createFolder when throw error', () => {
        expect(() => createFolder(path.join('/123', 'folders', 'exist'))).toThrow()

    });
    it('existFolder', () => {
        expect(existFolder(root)).toEqual(true)
        expect(existFolder(path.join(root, 'noexist'))).toEqual(false)
    });
    it('updateFolder', () => {
        createFolder(path.join(root, 'old'))
        expect(updateFolder({ where: path.join(root, 'old'), name: path.join(root, 'new') })).toEqual(void 0)
        expect(() => updateFolder({ where: path.join(root, 'old1'), name: path.join(root, 'new') })).toThrow()
    });
    it('deleteFolder', () => {
        createFolder(path.join(root, 'delete'))
        expect(deleteFolder(path.join(root, 'delete'))).toEqual(void 0)
        expect(() => deleteFolder(path.join(root, 'noexist'))).toThrow()
        expect(() => deleteFolder(path.join(root, 'deleteFiles'))).toThrow()
    });
    it('deleteFolder', () => {
        createFolder(path.join(root, 'delete'))
        expect(clearFolder(path.join(root, 'delete'))).toEqual(void 0)
        expect(clearFolder(path.join(root, 'noexist'))).toEqual(void 0)
        expect(clearFolder(path.join(root, 'deleteFiles'))).toEqual(void 0)
    });
    it('folders', () => {
        const names = folders(path.join(root, 'folders'))
        expect(names).toEqual({ folders: ['a', 'b', 'testsa'], files: ['a.txt'] })
    });
    it('glob', () => {
        expect(glob({ path: path.join(root, 'folders', '*') }).length).toEqual(1)
        expect(glob({ path: path.join(root, 'folders', '**/*') }).length).toEqual(4)
        expect(glob({ path: path.join(root, 'folders', '**/testsa/**/*') }).length).toEqual(1)
        expect(glob({ path: path.join(root, 'folders', '**/*'), options: { ignore: ['**/*.spec.txt'] } }).length).toEqual(2)
        expect(glob({ path: path.join(root, 'folders', '**/*'), options: { ignore: ['**/testsa/**/*'] } }).length).toEqual(3)
        expect(glob({ path: [path.join(root, 'folders', '**/*'), '!**/*.spec.txt'] }).length).toEqual(2)
        expect(glob({ path: [path.join(root, 'folders', '**/*'), '!**/testsa/**/*'] }).length).toEqual(3)
    });
});
describe('sync file', () => {
    const root = path.join(__dirname, 'fixtures', 'file')
    it('createFile deleteFile', () => {
        const a = createFile({ path: path.join(root, 'a.txt'), data: 'a.txt' })
        expect(a).toEqual(void 0);
        const b = createFile({ path: path.join(root, 'a.buffer.txt'), data: new Buffer('a.txt') })
        expect(b).toEqual(void 0);


        expect(deleteFile(path.join(root, 'a.txt'))).toEqual(void 0)
        expect(deleteFile(path.join(root, 'a.buffer.txt'))).toEqual(void 0)

    });

    it('file', () => {
        const a = file(path.join(root, 'info.txt'))
        expect(a.size).toEqual(4)
        expect(a.path).toEqual(path.join(root, 'info.txt'))
    });
    it('existFile', () => {

        expect(existFile(path.join(root, 'info.txt'))).toEqual(true)
        expect(existFile(path.join(root))).toEqual(false)
        expect(existFile(path.join(root, 'notexist.txt'))).toEqual(false)
    });
    it('fileStream', () => {
        const a = fileStream(path.join(root, 'info.txt'))
        let chunk: Buffer;

        a.on('readable', () => {

            while (null !== (chunk = a.read())) {
                expect(chunk.toString()).toEqual('test')
            }
        });
    });
    it('updateFile', () => {
        const o = fileString(path.join(root, 'update.txt'))
        const a = updateFile({ data: { path: path.join(root, 'update.txt'), data: 'new' }, where: path.join(root, 'update.txt') })
        expect(a).toEqual(void 0)
        const n = fileString(path.join(root, 'update.txt'))
        expect(n).toEqual('new')
        updateFile({ data: { data: o }, where: path.join(root, 'update.txt') })
    });

});




