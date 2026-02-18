import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Estado, Municipio} from "../models/brasilapi.models";
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

    listarMunicipiosPorUF(value: string) {
        return this.http.get<Municipio[]>(`${this.BASE_URL}/ibge/municipios/v1/${value}`);
    }
}
