---
title: Jak posortować tablicę po polu obiektu typu Date
publicationDate: 2024-09-20
---

```ts
blogEntries.sort(
  (a, b) =>
    a.data.publicationDate.getMilliseconds() -
    b.data.publicationDate.getMilliseconds()
)
```
