---
title: Jak przerwać request w efekcie NGRX
publicationDate: 2024-09-18
---

Za pomocą operatora `takeUntil`.

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
          takeUntil(this.actions$.pipe(ofType(EmailsActions.CancelGetEmails))),
        ),
      ),
    ),
  );
```

Ważne!

Jeżeli `takeUntil` będzie tutaj to nigdy już ten efekt się nie wykona:

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
