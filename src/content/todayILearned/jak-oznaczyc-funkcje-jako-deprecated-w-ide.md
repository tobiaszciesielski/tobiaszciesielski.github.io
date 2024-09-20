---
title: Jak oznaczyć funkcję jako deprecated w ide
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
