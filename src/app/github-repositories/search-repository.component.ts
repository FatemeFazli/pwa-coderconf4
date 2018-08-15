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
  public  buttonText = 'List Repositories';
  public  disabled = false;

  constructor(private  searchRepositoryService: SearchRepositoryService,
              public snackBar: MatSnackBar) {}

  ngOnInit() {
    if (!navigator.onLine) {
      this.buttonText = 'Sorry, you\'re offline';
      this.disabled = true;
    }
  }

  listRepositories(organizationName: string) {
    this.searchRepositoryService.listOrganizationRepositories(organizationName).subscribe(data => {
      this.repositories = [];
      for(let item in data){
        this.repositories.push(data[item]);
      }
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

