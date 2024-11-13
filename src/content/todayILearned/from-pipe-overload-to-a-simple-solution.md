---
title: From Pipe overload to a simple solution.
publicationDate: 2024-11-14
---

I had situation where I had to cast one value to another before passing it to child components.

I've created pipe for that which transform numbers `1`, `3` or `12` to strings: `Month`, `Quarter` or `Year`.

The implementation looks like this:

```ts
@Pipe({ name: 'toPeriod', standalone: true })
export class MonthsToPeriodPipe implements PipeTransform {
  public transform(value: 1 | 3 | 12): 'Month' | 'Quarter' | 'Year' {
    switch (value) {
      case 1:
        return 'Month'
      case 3:
        return 'Quarter'
      default:
        return 'Year'
    }
  }
}
```

It turned out that I need to transform these values also inside typescript code in components.

So I injected this pipe into component and used it as a service.

```ts
@Component({
  /* ... */
})
export class MyComponent {
  #monthsToPeriodPipe = inject(MonthsToPeriodPipe)

  someFunction(months) {
    const period = this.#monthsToPeriodPipe.transform(months)

    // ...
  }
}
```

The problem was I had to do this in many places and I didn't wanted to inject it to every component in app.

I came up with an idea to us it without dependency injection.

```ts
function someFunction(months) {
  const period = new MonthsToPeriodPipe().transform(months)

  // ...
}
```

But it requires to create new object every time.

I figured out that I can create static method of class I have. But I couldn't find better name than `transform` so there are two transforms 😂

```ts
@Pipe({ name: 'toPeriod', standalone: true })
export class MonthsToPeriodPipe implements PipeTransform {
  public transform(value: 1 | 3 | 12): 'Month' | 'Quarter' | 'Year' {
    switch (value) {
      case 1:
        return 'Month'
      case 3:
        return 'Quarter'
      default:
        return 'Year'
    }
  }

  public transform(value: BillingCycleFrequency): BillingPeriod {
    return BillingCycleFrequencyToBillingPeriodPipe.transform(value)
  }
}
```

This approach didn't meet with approval from my teammates and we had discussion what to use here!

We ended up with completely removing pipe and use dictionary instead! As simple as that.

```ts
export const monthsToPeriodMap: {
  [key in 1 | 3 | 12]: 'Month' | 'Quarter' | 'Year'
} = {
  1: 'Month',
  3: 'Quarter',
  12: 'Year',
}
```

This is simple to use and it's type safe.

```ts
import { monthsToPeriodMap } from '../path'

@Component({
  /* ... */
  template: '<div> {{ monthsToPeriodMap[months] }} <div>',
})
export class MyComponent {
  #monthsToPeriodMap = monthsToPeriodMap

  someFunction(months) {
    const period = monthsToPeriodMap[months]

    // ...
  }
}
```

Then we achieved consensus 🤝
