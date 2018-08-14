import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { AppMaterialModules } from './material.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SearchRepositoryService } from './github-repositories/search-repository.service';
import { SearchRepositoryComponent } from './github-repositories/search-repository.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent ,
    SearchRepositoryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppMaterialModules,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
  ],
  providers: [SearchRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
