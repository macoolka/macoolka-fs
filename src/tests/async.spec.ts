import {

    deleteFile,
    updateFile,


    fileString,
} from '../sync'
import {
    createFileTask,
    updateFileTask,
} from '../async'
import * as path from 'path';
import { Buffer } from 'buffer';
import * as fs from 'fs';


describe('async', () => {
    const root = path.join(__dirname, 'fixtures', 'file')

    it('createFileTask deleteFile', async () => {
        const a = await createFileTask({ path: path.join(root, 'a.task.txt'), data: 'a.txt' })()
        expect(a).toEqual(void 0);
        const b = await createFileTask({ path: path.join(root, 'a.buffer.task.txt'), data: new Buffer('a.txt') })()
        expect(b).toEqual(void 0);
        const reader = fs.createReadStream(path.join(__dirname, 'fixtures', 'a.txt'))

        const c = await createFileTask({ path: path.join(root, 'a.stream.task.txt'), data: reader })()

        expect(c).toEqual(void 0);
        expect(deleteFile(path.join(root, 'a.task.txt'))).toEqual(void 0)
        expect(deleteFile(path.join(root, 'a.buffer.task.txt'))).toEqual(void 0)
        expect(deleteFile(path.join(root, 'a.stream.task.txt'))).toEqual(void 0)
    });

    it('updateFileTask', async () => {
        const o = fileString(path.join(root, 'update.txt'))
        const a = await updateFileTask({ data: { path: path.join(root, 'update.txt'), data: 'new' }, where: path.join(root, 'update.txt') })()
        expect(a).toEqual(void 0)
        const n = fileString(path.join(root, 'update.txt'))
        expect(n).toEqual('new')
        updateFile({ data: { data: o }, where: path.join(root, 'update.txt') })

        const newContent = fileString(path.join(__dirname, 'fixtures', 'b.txt'))
        const reader = fs.createReadStream(path.join(__dirname, 'fixtures', 'b.txt'))
        const newResult = await updateFileTask({ data: { path: path.join(root, 'update.txt'), data: reader }, where: path.join(root, 'update.txt') })()
        expect(newResult).toEqual(void 0)
        const newResultContent = fileString(path.join(root, 'update.txt'))
        expect(newResultContent).toEqual(newContent)
        updateFile({ data: { data: o }, where: path.join(root, 'update.txt') })
    });
});




