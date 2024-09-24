---
title: How to simulate writing in input including form validation in Angular?
publicationDate: 2024-09-24
---

I faced the problem where I had parent component which was passing value to child component.

This child component had simple form with input and confirm button which was disabled by default. To enable button user should provide correct value.

To simulate writing in input I used simply:

```ts
const inputElement = harness.routeNativeElement.querySelector<HTMLInputElement>(
  '[data-cy="modal-input"]'
)

inputElement.value = '100' // <- Here is simulation

harness.detectChanges()

const buttonElement =
  harness.routeNativeElement.querySelector<HTMLButtonElement>(
    '[data-cy="confirm-button"]'
  )

expect(buttonElement.disabled).toBeFalsy() // Test fails
```

Unfortunately, this method was not triggering form validation and button remained disabled.

To fix it it I used dispatchEvent function that simulates input value change by dispatching [input](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event) event.

Here is working code.

```ts
const inputElement = harness.routeNativeElement.querySelector<HTMLInputElement>(
  '[data-cy="modal-input"]'
)

inputElement.value = '100'
inputElement.dispatchEvent(new Event('input')) // <- Missing line

harness.detectChanges()

const buttonElement =
  harness.routeNativeElement.querySelector<HTMLButtonElement>(
    '[data-cy="confirm-button"]'
  )

expect(buttonElement.disabled).toBeFalsy() // Test fails
```
