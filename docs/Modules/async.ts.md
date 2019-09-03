---
title: async.ts
nav_order: 1
parent: Modules
---

# Overview

Common functions(async) for file system

---

<h2 class="text-delta">Table of contents</h2>

- [createFileTask (function)](#createfiletask-function)
- [updateFileTask (function)](#updatefiletask-function)

---

# createFileTask (function)

Write a file(async)

**Signature**

```ts

export const createFileTask = (
    { path, data, encoding }:
        { path: string, data: string | Buffer | Stream, encoding?: string }): T.Task<void> =>
    () =>
        new Promise((resolve, reject) => ...

```

Added in v0.2.1

# updateFileTask (function)

update a file(async).

Rename path when path isn't undefined

Replace content when data isn't undefined

**Signature**

```ts

export const updateFileTask = ({ data: { path, data, encoding }, where }:
    { data: { path?: string, data?: string | Buffer | Stream, encoding?: string }, where: string }): T.Task<void> => ...

```

Added in v0.2.1
