---
title: How to narrow type of filter() operator in Rxjs?
publicationDate: 2024-10-07
---

Consider following property in our Angular component:

```ts
private user: User | null;
```

When we want to map this property with RxJS and be sure that user exist we will use `filter` operator.

```ts
userGreetings$ = of(this.user).pipe(
  filter((user) => {
    if (!user) {
      this.fetchUser()
      return false
    }

    return true
  }),
  map((user) => {
    // user type is User | null
    return `Greetings ${user?.name} with id ${user?.id}`
  })
)
```

The problem with filter operator is it doesn't narrow type. Inside `map` operator our parameter has type `User | null`.

To get rid of `null` we can do couple things.

## Firstly, we can use [Type Guard](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates).

For type `User` following Type Guard can be created.

```ts
interface User {
  name: string
  id: number
}

function isUser(obj: any): obj is User {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.id === 'number' &&
    typeof obj.name === 'string'
  )
}
```

And the use will look like this:

```ts
userGreetings$ = of(this.user).pipe(
  tap((user) => {
    if (!user) {
      this.fetchUser()
    }
  }),
  filter(isUser),
  map((user) => {
    // user type is User. No need for optional chaining
    return `Greetings ${user.name} with id ${user.id}` operator
  })
)
```

We can just simply put it inline

```ts
userGreetings$ = of(this.user).pipe(
  tap((user) => {
    if (!user) {
      this.fetchUser()
    }
  }),
  filter((user): user is User => !!user),
  map((user) => {
    // user type is User
    return `Greetings ${user.name} with id ${user.id}`
  })
)
```

or use little magic with `Boolean` ✨

```ts
userGreetings$ = of(this.user).pipe(
  // ...
  filter(Boolean)
  // ...
)
```

## Secondly, we can create custom operator that will filter all nullish values

This is more reusable option that can be used everywhere.
It has some cons. It will not check nested values.

Implementation of such operator can look like this.

```ts
export const filterNullish = <T>(): UnaryFunction<
  Observable<T | null | undefined>,
  Observable<T>
> => {
  return pipe(
    filter((x: T | null | undefined) => x != null) as OperatorFunction<
      T | null | undefined,
      T
    >
  )
}
```

And the use:

```ts
userGreetings$ = of(this.user).pipe(
  tap((user) => {
    if (!user) {
      this.fetchUser()
    }
  }),
  filterNullish(),
  map((user) => {
    // user type is User
    return `Greetings ${user.name} with id ${user.id}`
  })
)
```

Use what suits your needs best :)
