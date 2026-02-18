import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Estado} from "../models/brasilapi.models";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BrasilapiService {


    BASE_URL: string = 'https://brasilapi.com.br/api';

    constructor(private http: HttpClient) {
    }


    listarUFs(): Observable<Estado[]> {
        return this.http.get<Estado[]>(`${this.BASE_URL}/ibge/uf/v1`);
    }

}
