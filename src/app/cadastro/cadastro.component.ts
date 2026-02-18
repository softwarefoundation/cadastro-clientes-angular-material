import {Component} from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {Cliente} from "./cliente";
import {ClienteService} from "../shared/services/cliente.service";

@Component({
    selector: 'app-cadastro',
    imports: [
        FlexLayoutModule,
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButton
    ],
    templateUrl: './cadastro.component.html',
    styleUrl: './cadastro.component.css',
    standalone: true
})
export class CadastroComponent {

    cliente: Cliente = Cliente.newCliente();


    constructor(private clienteService: ClienteService) {
    }

    salvar() {
        console.log('Cliente: ', this.cliente);
        this.clienteService.salvar(this.cliente);
    }
}
