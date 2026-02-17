import {Component} from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButton, MatFabButton} from "@angular/material/button";
import {Cliente} from "./cliente";

@Component({
    selector: 'app-cadastro',
    imports: [
        FlexLayoutModule,
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatFabButton,
        MatButton
    ],
    templateUrl: './cadastro.component.html',
    styleUrl: './cadastro.component.css',
    standalone: true
})
export class CadastroComponent {

    cliente: Cliente = Cliente.newCliente();


    salvar() {
        console.log('Cliente: ', this.cliente);
    }
}
