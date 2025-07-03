---
title: Method calls in computed angular signals
publicationDate: 2024-12-09
---

Hi there 👋

Last time I started to play with signals a lot. I felt in love with them!

I love how easy it is to write declarative code with them.

But!

I faced some problem.

I have one signal that is indicator for all my signals in component. Please take a look:

```ts
enum InstructionsStatus {
  InProgress,
  Completed,
}

enum StepState {
  Pristine,
  Visited,
  Active,
}

export class InstructionComponent implements OnInit {
  private readonly store: Store = inject(Store)

  private steps = [
    { id: 0, state: StepState.Pristine },
    { id: 1, state: StepState.Pristine },
    { id: 2, state: StepState.Pristine },
    { id: 3, state: StepState.Pristine },
  ]

  public currentStepId = signal(0)

  public instructionsStatus = computed(() => {
    if (this.currentStepId() === this.stepDefinitions().length) {
      this.completeInstructions()

      return InstructionsStatus.Completed
    }

    return InstructionsStatus.InProgress
  })

  public stepDefinitions = computed(() => {
    const currentStepId: number = this.currentStepId()

    return steps.map((step) => {
      if (step.id === currentStepId) {
        return {
          ...step,
          state: PdsStepState.Active,
        }
      }

      if (step.id < currentStepId) {
        return {
          ...step,
          state: PdsStepState.Visited,
        }
      }

      return {
        ...step,
        state: PdsStepState.Pristine,
      }
    })
  })

  public completeInstructions() {
    this.store.dispatch(InstructionActions.CompleteInstruction())
  }

  public goToNextStep(): void {
    this.currentStepId.update((value: number) => {
      if (value === this.stepDefinitions().length) {
        return value
      }

      return value + 1
    })
  }

  public goToPreviousStep(): void {
    this.currentStepId.update((value: number) => {
      if (value === 0) {
        return value
      }

      return value - 1
    })
  }
}
```

I know that there is quite a lot of logic but it is just demonstration how `currentStepId` is source of all other signals that are created on top of it by `computed` function.

In this code there is a problem.

Can you guess?

👀

🧐

🕵️‍♂️

Maybe some hint?

Look at `instructionsStatus` 👁️_👁️

In this code there is other function call
