import {Component, OnInit} from '@angular/core';
import {SearchRepositoryService} from './search-repository.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-search-repository',
  templateUrl: './search-repository.component.html',
  styleUrls: ['./search-repository.component.css']
})
export class SearchRepositoryComponent implements OnInit{

  public repositories: any[] = [];
  public orgName = '';
  constructor(private  searchRepositoryService: SearchRepositoryService,
              public snackBar: MatSnackBar) {}

  ngOnInit() {}

  listRepositories(organizationName: string) {
    console.log('org name' , organizationName)
    this.searchRepositoryService.listOrganizationRepositories(organizationName).subscribe(data => {
      this.repositories = [];
      console.log(data);
      for(let item in data){
        this.repositories.push(data[item]);
      }
      console.log(this.repositories);
    },error => {
      this.openSnackBar('Found no organization with this name', 'Try another')
    });
  }

  openSnackBar(message:string, action: string) {
  this.snackBar.open(message, action, {
    duration: 2000,
   });
  }
}
