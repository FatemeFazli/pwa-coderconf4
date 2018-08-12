import { Component } from '@angular/core';
import {SearchRepositoryService} from "./search-repository.service";

@Component({
  selector: 'app-search-repository',
  templateUrl: './search-repository.component.html',
  styleUrls: ['./search-repository.component.css']
})
export class SearchRepositoryComponent {

  public repositories :any[] = [];
  constructor(private  searchRepositoryService:SearchRepositoryService){}

  ngOnInit(){
    this.searchRepositoryService.listOrganizationRepositories('angular').subscribe(data => {
      console.log(data);
      for(let item in data){
        this.repositories.push(data[item]);
      }
    });
  }
}
