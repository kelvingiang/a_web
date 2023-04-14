import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface GithubUser {
  items: [html_url: string, avatar_url: string, login: string, score: string];
}

@Injectable()
export class SearchService {
  constructor(private _http: HttpClient) {}
  private url = 'https://api.github.com/search/users';

  getGithubData(_searchTerm: string): Observable<GithubUser> {
    // link to search at github
    // https://api.github.com/search/users?q=greg
    return this._http.get<GithubUser>(this.url + '?q=' + _searchTerm);
  }
}
