---
title: How to cancel request in NGRX Effect?
publicationDate: 2024-09-18
---

Using `takeUntil` operator.

```ts
function assert(condition: unknown, message?: string): asserts condition {
  this.actions$.pipe(
    ofType(EmailsActions.GetEmailsSuccess),
    withLatestFrom(this.store.pipe(select(EmailsSelectors.getEmailsParams))),
    switchMap(([_, emailsParams]) =>
      this.mailingsService.getMailingsWithStats(emailsParams).pipe(
        map((mailingsResponse: IMailingsResponse) =>
          EmailsActions.GetEmailsWithStatsSuccess(mailingsResponse),
        ),
        catchError(() => of(AppActions.ShowErrorNotification('toast.emails.failedToGetEmails'))),
        takeUntil(this.actions$.pipe(ofType(EmailsActions.CancelGetEmails))),
      ),
    ),
  ),
);
```

Important!

If `takeUntil` will be placed outside switchMap, effect will be dead:

```ts
  private getEmailsWithStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmailsActions.GetEmailsSuccess),
      withLatestFrom(this.store.pipe(select(EmailsSelectors.getEmailsParams))),
      switchMap(([_, emailsParams]) =>
        this.mailingsService.getMailingsWithStats(emailsParams).pipe(
          map((mailingsResponse: IMailingsResponse) =>
            EmailsActions.GetEmailsWithStatsSuccess(mailingsResponse),
          ),
          catchError(() => of(AppActions.ShowErrorNotification('toast.emails.failedToGetEmails'))),
        ),
      ),
      takeUntil(this.actions$.pipe(ofType(EmailsActions.CancelGetEmails))),
    ),
  )
```
