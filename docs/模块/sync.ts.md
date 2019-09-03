---
title: sync.ts
nav_order: 3
parent: 模块
---

# 概述

文件系统常用的函数集合

---

<h2 class="text-delta">目录</h2>

- [GlobWhere (类型)](#globwhere-%E7%B1%BB%E5%9E%8B)
- [clearFolder (函数)](#clearfolder-%E5%87%BD%E6%95%B0)
- [createFile (函数)](#createfile-%E5%87%BD%E6%95%B0)
- [createFolder (函数)](#createfolder-%E5%87%BD%E6%95%B0)
- [deleteFile (函数)](#deletefile-%E5%87%BD%E6%95%B0)
- [deleteFolder (函数)](#deletefolder-%E5%87%BD%E6%95%B0)
- [existFile (函数)](#existfile-%E5%87%BD%E6%95%B0)
- [existFolder (函数)](#existfolder-%E5%87%BD%E6%95%B0)
- [file (函数)](#file-%E5%87%BD%E6%95%B0)
- [fileStream (函数)](#filestream-%E5%87%BD%E6%95%B0)
- [fileString (函数)](#filestring-%E5%87%BD%E6%95%B0)
- [folders (函数)](#folders-%E5%87%BD%E6%95%B0)
- [glob (函数)](#glob-%E5%87%BD%E6%95%B0)
- [updateFile (函数)](#updatefile-%E5%87%BD%E6%95%B0)
- [updateFolder (函数)](#updatefolder-%E5%87%BD%E6%95%B0)

---

# GlobWhere (类型)

**签名**

```ts
export type GlobWhere = { path: string[] | string; options?: GlobOptions }
```

# clearFolder (函数)

删除目录即使目录包含文件

**签名**

```ts

export const clearFolder = (strPath: string): void => ...

```

v0.2.0 中添加

# createFile (函数)

写入一个文件

**签名**

```ts

export const createFile = (
    { path, data, encoding }: { path: string, data: string | Buffer, encoding?: string }): void => ...

```

v0.2.0 中添加

# createFolder (函数)

创建一个目录。
当目录不存在时,建立目录。
目录存在，忽略

**签名**

```ts

export const createFolder = (path: string): void => ...

```

v0.2.0 中添加

# deleteFile (函数)

删除一个文件

**签名**

```ts

export const deleteFile = (path: string): void => ...

```

v0.2.0 中添加

# deleteFolder (函数)

删除目录即使目录包含文件

**签名**

```ts

export const deleteFolder = (strPath: string): void => ...

```

v0.2.0 中添加

# existFile (函数)

判断文件是否存在

**签名**

```ts

export const existFile = (path: string): boolean => ...

```

v0.2.0 中添加

# existFolder (函数)

核对指定的目录是否存在

**签名**

```ts

export const existFolder = (path: string): boolean => ...

```

v0.2.0 中添加

# file (函数)

得到一个文件信息

**签名**

```ts

export const file = (path: string): {
    path: string
    size: number
    lastModified: Date
} => ...

```

v0.2.0 中添加

# fileStream (函数)

得到一个文件流

**签名**

```ts

export const fileStream = (path: string): fs.ReadStream => ...

```

v0.2.0 中添加

# fileString (函数)

得到一个文本文件

**签名**

```ts

export const fileString = (path: string): string => ...

```

v0.2.0 中添加

# folders (函数)

在指定的目录下列出所有的目录和文件

**签名**

```ts

export const folders = (strPath: string): { folders: string[], files: string[] } => ...

```

v0.2.0 中添加

# glob (函数)

寻找文件或目录

**签名**

```ts

export const glob = ({ path, options }: GlobWhere): string[] => ...

```

v0.2.0 中添加

# updateFile (函数)

更新一个文件

当`path`不为空时,重命名文件用这个值

当`data`不为空时,替换文件内容

**签名**

```ts

export const updateFile = ({ data: { path, data, encoding }, where }:
    { data: { path?: string, data?: string | Buffer, encoding?: string }, where: string }): void => ...

```

v0.2.0 中添加

# updateFolder (函数)

重新命名一个存在的目录

**签名**

```ts

export const updateFolder = ({ name, where }: { name: string, where: string }): void => ...

```

v0.2.0 中添加
