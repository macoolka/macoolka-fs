---
title: path.ts
nav_order: 2
parent: 模块
---

# 概述

文件路径常用的函数集合

---

<h2 class="text-delta">目录</h2>

- [directoryDepth (函数)](#directorydepth-%E5%87%BD%E6%95%B0)
- [foldPath (函数)](#foldpath-%E5%87%BD%E6%95%B0)
- [getAbsoluteFilePath (函数)](#getabsolutefilepath-%E5%87%BD%E6%95%B0)
- [getDirectoryName (函数)](#getdirectoryname-%E5%87%BD%E6%95%B0)
- [getFileName (函数)](#getfilename-%E5%87%BD%E6%95%B0)
- [isExtName (函数)](#isextname-%E5%87%BD%E6%95%B0)
- [isFullPath (函数)](#isfullpath-%E5%87%BD%E6%95%B0)
- [isSubPath (函数)](#issubpath-%E5%87%BD%E6%95%B0)
- [notExtName (函数)](#notextname-%E5%87%BD%E6%95%B0)
- [splitPath (函数)](#splitpath-%E5%87%BD%E6%95%B0)

---

# directoryDepth (函数)

得到路径的深度

**签名**

```ts

export const directoryDepth = (strPath: string): number => ...

```

v0.2.0 中添加

# foldPath (函数)

把路径文本数组转换为单一路径

**签名**

```ts

export const foldPath = (a: string[]): string => ...

```

v0.2.0 中添加

# getAbsoluteFilePath (函数)

得到绝对路径，如果第一个字符不是'/'，路径前面增加`process.cwd()`

**签名**

```ts

export const getAbsoluteFilePath = (filePath: string) => ...

```

**示例**

```ts
import { getAbsoluteFilePath } from 'macoolka-fs/lib/path'

expect(getAbsoluteFilePath('abc')).toEqual(process.cwd() + '/abc')
expect(getAbsoluteFilePath('/abc')).toEqual('/abc')
```

v0.2.0 中添加

# getDirectoryName (函数)

从一个路径中得到文件夹

**签名**

```ts

export const getDirectoryName = (strPath: string): string => ...

```

v0.2.0 中添加

# getFileName (函数)

从一个路径中得到文件名

**签名**

```ts

export const getFileName = (strPath: string): string => ...

```

v0.2.0 中添加

# isExtName (函数)

检验文件是否是指定的扩展名

**签名**

```ts

export const isExtName = (extname: string) => (filePath: string) => ...

```

**示例**

```ts
import { isExtName } from 'macoolka-fs'

expect(isExtName('ts')('abc.ts')).toEqual(true)
expect(isExtName('ts')('abc.ts1')).toEqual(false)
```

# isFullPath (函数)

核对一个路径是否是全路径

**签名**

```ts

export const isFullPath = (strRoot: string, strPath: string): boolean => ...

```

v0.2.0 中添加

# isSubPath (函数)

核对一个路径是否是另一个路径的子路径

**签名**

```ts

export const isSubPath = (parent: string, sub: string): boolean => ...

```

v0.2.0 中添加

# notExtName (函数)

检验文件是否不是指定的扩展名

**签名**

```ts

export const notExtName = (extname: string) => ...

```

**示例**

```ts
import { notExtName } from 'macoolka-fs'

expect(notExtName('ts')('abc.ts')).toEqual(false)
expect(notExtName('ts')('abc.ts1')).toEqual(true)
```

# splitPath (函数)

用 path.sep 拆分路径

**签名**

```ts

export const splitPath = (a: string): string[] => ...

```

v0.2.0 中添加
