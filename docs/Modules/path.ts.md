---
title: path.ts
nav_order: 2
parent: Modules
---

# Overview

Common functions for file path

---

<h2 class="text-delta">Table of contents</h2>

- [directoryDepth (function)](#directorydepth-function)
- [foldPath (function)](#foldpath-function)
- [getAbsoluteFilePath (function)](#getabsolutefilepath-function)
- [getDirectoryName (function)](#getdirectoryname-function)
- [getFileName (function)](#getfilename-function)
- [isExtName (function)](#isextname-function)
- [isFullPath (function)](#isfullpath-function)
- [isSubPath (function)](#issubpath-function)
- [notExtName (function)](#notextname-function)
- [splitPath (function)](#splitpath-function)

---

# directoryDepth (function)

Calculate a path depth

**Signature**

```ts

export const directoryDepth = (strPath: string): number => ...

```

Added in v0.2.0

# foldPath (function)

fold for path array

**Signature**

```ts

export const foldPath = (a: string[]): string => ...

```

Added in v0.2.0

# getAbsoluteFilePath (function)

Get `process.cwd() + inputPath` when first char is not `/`,or get orgin path

**Signature**

```ts

export const getAbsoluteFilePath = (filePath: string) => ...

```

**Example**

```ts
import { getAbsoluteFilePath } from 'macoolka-fs/lib/path'

expect(getAbsoluteFilePath('abc')).toEqual(process.cwd() + '/abc')
expect(getAbsoluteFilePath('/abc')).toEqual('/abc')
```

Added in v0.2.0

# getDirectoryName (function)

Get directory from path

**Signature**

```ts

export const getDirectoryName = (strPath: string): string => ...

```

Added in v0.2.0

# getFileName (function)

Returns name of file name.

**Signature**

```ts

export const getFileName = (strPath: string): string => ...

```

Added in v0.2.0

# isExtName (function)

Check a file with extname

**Signature**

```ts

export const isExtName = (extname: string) => (filePath: string) => ...

```

**Example**

```ts
import { isExtName } from 'macoolka-fs'

expect(isExtName('ts')('abc.ts')).toEqual(true)
expect(isExtName('ts')('abc.ts1')).toEqual(false)
```

# isFullPath (function)

check path in root is full path

**Signature**

```ts

export const isFullPath = (strRoot: string, strPath: string): boolean => ...

```

Added in v0.2.0

# isSubPath (function)

check a path is int parent path

**Signature**

```ts

export const isSubPath = (parent: string, sub: string): boolean => ...

```

Added in v0.2.0

# notExtName (function)

Check a file not with extname

**Signature**

```ts

export const notExtName = (extname: string) => ...

```

**Example**

```ts
import { notExtName } from 'macoolka-fs'

expect(notExtName('ts')('abc.ts')).toEqual(false)
expect(notExtName('ts')('abc.ts1')).toEqual(true)
```

# splitPath (function)

split path with path.sep

**Signature**

```ts

export const splitPath = (a: string): string[] => ...

```

Added in v0.2.0
