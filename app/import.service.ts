import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ImportService {
    constructor(private http:Http){}

    //imports pat.json file
    getCompanies() {
        return this.http.get('./res/pat.json').map((res:Response) => res.json());
    }
}