import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SearchRepositoryService {
  constructor(private http: HttpClient) { }

  listOrganizationRepositories(orgName: string){
    return this.http.get(`https://api.github.com/orgs/${orgName}/repos` );
  }
}
