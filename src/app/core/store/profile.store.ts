import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { exhaustMap, pipe, switchMap, tap } from 'rxjs';
import { inject } from '@angular/core';
import { IProfile, ProfileService } from '..';

type initialState = {
  Profiles: IProfile[];
};

export const ProfileStore = signalStore(
  withState(<initialState>{ Profiles: [] }),
  withMethods((store, api = inject(ProfileService)) => ({
    getProfiles: rxMethod<void>(
      pipe(
        switchMap(() => api.getProfiles()),
        tap((Profiles) => patchState(store, Profiles))
      )
    ),
    // addProfile: rxMethod<Profile>(
    //   pipe(
    //     exhaustMap((Profile) => api.addProfile(Profile)),
    //     tap((profile) =>
    //       patchState(store, { Profiles: { ...store.Profiles(), profile } })
    //     )
    //   )
    // ),
  }))
);
