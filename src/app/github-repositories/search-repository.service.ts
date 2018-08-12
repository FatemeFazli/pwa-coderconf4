import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SearchRepositoryService {
  constructor(private http: HttpClient) { }

  listOrganizationRepositories(orgName: string){
    return this.http.get(`http://api.github.com/orgs/${orgName}/repos`);
  }

  getTextFile(filename: string) {
    // return this.http.get(filename, {responseType: 'text'})
    //   .pipe(
    //     tap( // Log the result or error
    //       data => this.log(filename, data),
    //       error => this.logError(filename, error)
    //     )
    //   );
  }
}
