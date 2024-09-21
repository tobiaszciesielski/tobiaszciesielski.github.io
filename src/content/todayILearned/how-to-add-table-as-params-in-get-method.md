---
title: How to add table as params in GET method??
publicationDate: 2024-09-17
---

```ts
return this.http.get<ValidatedPressRelease[]>(this.api.checkPressReleases(), {
  params: {
    'press_releases_ids[]': Array.from(includedPressReleasesIds),
  },
})
```
