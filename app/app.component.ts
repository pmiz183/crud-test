import { Component } from '@angular/core';
import { ImportService } from './import.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html'
})
export class AppComponent  {
    public companies;

    constructor(private _importService: ImportService) { }

    ngOnInit(){
      this.getCompanies();
    }

    getCompanies() {
      this._importService.getCompanies().subscribe(
        data => {this.companies = data},
        err => console.error(err),
        () => console.log('loaded keylog companies'));
    }
 }


