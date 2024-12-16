---
title: Domain modeling with TypeScript - types with XOR
publicationDate: 2024-12-16
---

Consider a situation where you have an email object that can be send from User to Recipient. Both are a different interfaces. An implementation looks like this:

```tsx
interface Email {
  id: number
  message: string
  from: Sender
  to: Recipient
}
```

But when `Recipient` will answer to `User` we will have situation where we had to swap `from` with `to` .

Let’s adjust our interface to match these requirement. Field `from` and `to` will have both interfaces available.

```tsx
interface Email {
  id: number
  message: string
  from: Recipient | Sender
  to: Recipient | Sender
}
```

But now it is possible that `from` and `to` will have the same types.

```tsx
const myEmail: Email = {
  id: 0,
  message: 'Hello',
  from: {} as Recipient,
  to: {} as Recipient,
}
```

This situation is impossible in real world.

**We should model our type to match only possible cases.**

This is domain modeling.

In this case we can use `XOR` logic to make our type match exact domain requirement.

Here is `XOR` logic in table:

| Input A | Input B | A XOR B |
| ------- | ------- | ------- |
| 0       | 0       | 0       |
| 0       | 1       | 1       |
| 1       | 0       | 1       |
| 1       | 1       | 0       |

As you can see only different values pass check and return positive output.

Here is the implementation.

```tsx
type Email = {
  id: number
  message: string
} & (
  | {
      from: Recipient
      to: Sender
    }
  | {
      from: Sender
      to: Recipient
    }
)
```

It looks like overengineering but it does the job perfectly. When we want to create interface which are both the same, we get an error.

```tsx
const mailing: Email = {
  // Type '{ id: number; message: string; from: Recipient; to: Recipient; }' is not assignable to type 'Email'.
  id: 1,
  message: 'Hello',
  from: {} as Recipient,
  to: {} as Recipient,
}
```

I hope this short post will be useful for you.

Jump to Typescript playground [HERE](https://www.typescriptlang.org/play/?#code/JYOwLgpgTgZghgYwgAgEoQcADsC5kDeycAXMgM5hSgDmAvgFCiSyIoDKeAJtIcgEZlK1EDWSMGYAJ5YUAUQC2cYABtkAXkINkyYFzIgArgv7QA3NuQKI5cnBoQhVWgzrIAZMgAUlgD5adQOQYKAB7BTJ0TBw8MAsgnTBQsk4QHih4wMYdfwJLIJDwlO5zfMCkyIxsXHBMnUYASgsGBFCQSitlFVoyRS6NAMC9MgBGABoy61t7R2QAIgAJCBUVULmJgrCIwjc4cjQqmPAN8uSd4n2o6tjXIA) to play with it :)

Here is also good example how to exclude some fields from your interface
[https://stackoverflow.com/questions/44425344/typescript-interface-with-xor-barstring-xor-cannumber](https://stackoverflow.com/questions/44425344/typescript-interface-with-xor-barstring-xor-cannumber)

See you soon! Have a great day :)
