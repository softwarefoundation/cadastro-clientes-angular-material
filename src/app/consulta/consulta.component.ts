import {Component, OnInit} from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormField, MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ClienteService} from "../shared/services/cliente.service";
import {Cliente} from "../cadastro/cliente";
import {MatTableModule} from "@angular/material/table";
import {Router} from "@angular/router";


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
        MatTableModule,
    ],
    templateUrl: './consulta.component.html',
    styleUrl: './consulta.component.css',
    standalone: true
})
export class ConsultaComponent implements OnInit {

    colunasTable: string[] = ['id', 'nome', 'cpf', 'email', 'dataNascimento', 'acoes'];
    listaClientes: Cliente[] = [];
    nomeBusca: string = '';


    constructor(private clienteService: ClienteService,
                private router: Router) {

    }

    ngOnInit() {
        this.listaClientes = this.clienteService.pesquisarCliente('');
        console.log('CLiente: ', this.listaClientes);
    }


    pesquisar() {
        this.listaClientes = this.clienteService.pesquisarCliente(this.nomeBusca);
    }

    prepararEditar(uuid: string) {
        console.log('Editar UUID: ', uuid);
        this.router.navigate(['/cadastro'], {queryParams: {'id': uuid}});
    }

}
