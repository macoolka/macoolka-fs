---
title: async.ts
nav_order: 1
parent: 模块
---

# 概述

文件系统常用的函数集合(async)

---

<h2 class="text-delta">目录</h2>

- [createFileTask (函数)](#createfiletask-%E5%87%BD%E6%95%B0)
- [updateFileTask (函数)](#updatefiletask-%E5%87%BD%E6%95%B0)

---

# createFileTask (函数)

写入一个文件

**签名**

```ts

export const createFileTask = (
    { path, data, encoding }:
        { path: string, data: string | Buffer | Stream, encoding?: string }): T.Task<void> =>
    () =>
        new Promise((resolve, reject) => ...

```

v0.2.1 中添加

# updateFileTask (函数)

更新一个文件(async)

当`path`不为空时,重命名文件用这个值

当`data`不为空时,替换文件内容

**签名**

```ts

export const updateFileTask = ({ data: { path, data, encoding }, where }:
    { data: { path?: string, data?: string | Buffer | Stream, encoding?: string }, where: string }): T.Task<void> => ...

```

v0.2.1 中添加
