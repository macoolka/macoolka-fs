---
title: sync.ts
nav_order: 3
parent: Modules
---

# Overview

Common functions for file system

---

<h2 class="text-delta">Table of contents</h2>

- [GlobWhere (type alias)](#globwhere-type-alias)
- [clearFolder (function)](#clearfolder-function)
- [createFile (function)](#createfile-function)
- [createFolder (function)](#createfolder-function)
- [deleteFile (function)](#deletefile-function)
- [deleteFolder (function)](#deletefolder-function)
- [existFile (function)](#existfile-function)
- [existFolder (function)](#existfolder-function)
- [file (function)](#file-function)
- [fileStream (function)](#filestream-function)
- [fileString (function)](#filestring-function)
- [folders (function)](#folders-function)
- [glob (function)](#glob-function)
- [updateFile (function)](#updatefile-function)
- [updateFolder (function)](#updatefolder-function)

---

# GlobWhere (type alias)

**Signature**

```ts
export type GlobWhere = { path: string[] | string; options?: GlobOptions }
```

# clearFolder (function)

Delete folder if directory exist and even directory contain files

**Signature**

```ts

export const clearFolder = (strPath: string): void => ...

```

Added in v0.2.0

# createFile (function)

Write a file

**Signature**

```ts

export const createFile = (
    { path, data, encoding }: { path: string, data: string | Buffer, encoding?: string }): void => ...

```

Added in v0.2.0

# createFolder (function)

Create a folder.

Create when folder not exist

Ignore When folder exist

**Signature**

```ts

export const createFolder = (path: string): void => ...

```

Added in v0.2.0

# deleteFile (function)

Delete a file

**Signature**

```ts

export const deleteFile = (path: string): void => ...

```

Added in v0.2.0

# deleteFolder (function)

Delete folder if directory exist and even directory contain files

**Signature**

```ts

export const deleteFolder = (strPath: string): void => ...

```

Added in v0.2.0

# existFile (function)

Check a file exist

**Signature**

```ts

export const existFile = (path: string): boolean => ...

```

Added in v0.2.0

# existFolder (function)

check directory that is existed

**Signature**

```ts

export const existFolder = (path: string): boolean => ...

```

Added in v0.2.0

# file (function)

Get a file info

**Signature**

```ts

export const file = (path: string): {
    path: string
    size: number
    lastModified: Date
} => ...

```

Added in v0.2.0

# fileStream (function)

Get a file stream

**Signature**

```ts

export const fileStream = (path: string): fs.ReadStream => ...

```

Added in v0.2.0

# fileString (function)

Get a file string

**Signature**

```ts

export const fileString = (path: string): string => ...

```

Added in v0.2.0

# folders (function)

List all folders and files in a given folder

**Signature**

```ts

export const folders = (strPath: string): { folders: string[], files: string[] } => ...

```

Added in v0.2.0

# glob (function)

find file or folder using the patterns the shell uses, like stars and stuff.

**Signature**

```ts

export const glob = ({ path, options }: GlobWhere): string[] => ...

```

Added in v0.2.0

# updateFile (function)

update a file.

Rename path when path isn't undefined

Replace content when data isn't undefined

**Signature**

```ts

export const updateFile = ({ data: { path, data, encoding }, where }:
    { data: { path?: string, data?: string | Buffer, encoding?: string }, where: string }): void => ...

```

Added in v0.2.0

# updateFolder (function)

rename a folder

**Signature**

```ts

export const updateFolder = ({ name, where }: { name: string, where: string }): void => ...

```

Added in v0.2.0
