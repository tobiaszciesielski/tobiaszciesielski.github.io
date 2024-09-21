---
title: How to mark function as deprecated in IDE?
publicationDate: 2024-09-20
---

```ts
  /**
   *
   * @deprecated The method should not be used. Use `CasingService` instead.
   *
   */
  public methodToDeprecate<T = unknown>(data: T): T {
    // ...
  }
```
