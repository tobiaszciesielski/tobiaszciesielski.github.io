---
title: NgRx Component Store [Part 1]
description:
publicationDate: 2024-09-24
image: http://abba.com/image.png
---

# Component store

> My background is - I don’t know strengths and weaknesses of component store and I want to know them 😤 I’ve never used it and I want to have experience with it 🧐

I read bunch of code from my teammates that implemented local state for component instead of using global state.

I couldn’t feel it.

I even spoke with Alex Okruschko on NgPoland 2023 and asked him about recommendation for our state managment solutions in Prowly - he recommened me to watch his [talk](https://www.youtube.com/watch?v=xPmtsD5LRqQ) about component store but it still didn’t clicked.

I’ve seen video from Joshua Morony (greatest tutorials about angular) about component store and guess what - still no AHA moment.

Until now (hope so…)

I just want to grab essential concepts around that. Its quite hyped solution, especially when ngrx team introduced signal store.

So lets jump in.

## Theory

Component store is alternative for global state. We can create local store that lives as long as component that is consumer of this state lives. Totally opposite to global state that lives as long as our app is opened in browser tab.

It has similar concepts to a normal store.

It is build with:

- selectors - api for component to get desired data from state
- updaters - reducers in ngrx jargon, place where state is updated
- effects - handlers for requests from component ex. `getData`, `updateUser` where api calls happens. I like to think about them they are little manager who says what to do next.

❗️However it doesn’t contains `actions` that could be `dispatched`

I could paste here entire documentation but it's just a brief information what it is and what it’s not.

## Pre-Setup

I prepared service that fetches dummy data - i totally recommend [json-server](https://www.npmjs.com/package/json-server) as it’s super simple and quick to extend.

```tsx
@Injectable({ providedIn: 'root' })
export class PostsService {
  #API_PATH = 'http://localhost:3000'

  #httpClient = inject(HttpClient)

  getAllPosts() {
    return this.#httpClient.get<Post[]>(`${this.#API_PATH}/posts`)
  }

  getPostsComments(postId: number) {
    return this.#httpClient.get<Post[]>(
      `${this.#API_PATH}/comments?postId=${postId}`
    )
  }
}
```

I have also my super simple component which will be place where component store will be living.

```tsx
import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

@Component({
  selector: 'component-store-name',
  templateUrl: 'component-store.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class ComponentStoreComponent {}
```
