---
title: Jak dodać tablicę jako parametr w metodzie GET?
publicationDate: 2024-09-17
---

```ts
return this.http.get<ValidatedPressRelease[]>(this.api.checkPressReleases(), {
  params: {
    'press_releases_ids[]': Array.from(includedPressReleasesIds),
  },
})
```
