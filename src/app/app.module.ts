import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppMaterialModules } from './material.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SearchRepositoryService } from './github-repositories/search-repository.service';
import { SearchRepositoryComponent } from './github-repositories/search-repository.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent ,
    SearchRepositoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppMaterialModules,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
  ],
  providers: [SearchRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
