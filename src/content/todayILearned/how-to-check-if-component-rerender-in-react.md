---
title: How to check if component rerender in react?
publicationDate: 2024-11-14
---

```ts
return this.http.get<ValidatedPressRelease[]>(this.api.checkPressReleases(), {
  params: {
    'press_releases_ids[]': Array.from(includedPressReleasesIds),
  },
})
```
