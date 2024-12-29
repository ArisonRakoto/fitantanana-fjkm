import { Injectable, inject } from '@angular/core';
import { IProfile, UserStorageService } from '..';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  accessToken: string;

  http = inject(HttpClient);

  constructor(_userStorage: UserStorageService) {
    this.accessToken = _userStorage.getToken();
  }

  getProfiles(): Observable<IProfile[]> {
    const headers = {
      'Content-Type': 'application/json; charset=utf-8',
      'x-access-token': `${this.accessToken}`,
    };

    return this.http.get<IProfile[]>(
      `${environment.server}/${environment.profiles}`,
      { headers: headers }
    );
  }

  addProfile(profile: any): Observable<IProfile> {
    const headers = {
      'Content-Type': 'application/json; charset=utf-8',
      'x-access-token': `${this.accessToken}`,
    };

    return this.http.post<IProfile>(
      `${environment.server}/${environment.createProfile}`,
      profile,
      { headers: headers }
    );
  }

  deleteProfile(id: number): Observable<IProfile> {
    const headers = {
      'Content-Type': 'application/json; charset=utf-8',
      'x-access-token': `${this.accessToken}`,
    };
    return this.http.delete<IProfile>(
      `${environment.server}/${environment.deleteProfile}/${id}`,
      { headers: headers }
    );
  }

  updateProfile(Profile: any, id: number): Observable<IProfile> {
    const headers = {
      'Content-Type': 'application/json; charset=utf-8',
      'x-access-token': `${this.accessToken}`,
    };
    return this.http.put<IProfile>(
      `${environment.server}/${environment.updateProfile}/${id}`,
      Profile,
      { headers: headers }
    );
  }
}
