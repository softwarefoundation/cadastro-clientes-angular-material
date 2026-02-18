import {Component} from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormField, MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ClienteService} from "../shared/services/cliente.service";
import {Cliente} from "../cadastro/cliente";

@Component({
    selector: 'app-consulta',
    imports: [
        FlexLayoutModule,
        FormsModule,
        MatCardModule,
        MatFormField,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
    ],
    templateUrl: './consulta.component.html',
    styleUrl: './consulta.component.css',
    standalone: true
})
export class ConsultaComponent {

    listaClientes: Cliente[] = [];

    constructor(private clienteService: ClienteService) {

    }

    ngOnInit() {
      console.log('ngOnInit ->');
      this.listaClientes = this.clienteService.pesquisarCliente('');
    }

}
