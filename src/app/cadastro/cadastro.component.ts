import {Component, OnInit} from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {Cliente} from "./cliente";
import {ClienteService} from "../shared/services/cliente.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ValidadorUtils} from "../shared/utils/validador.utils";

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
export class CadastroComponent implements OnInit {

    cliente: Cliente = Cliente.newCliente();
    protected atualizando = false;

    constructor(private clienteService: ClienteService,
                private route: ActivatedRoute,
                private routder: Router
    ) {
    }

    ngOnInit()
        :
        void {
        this.route.queryParamMap.subscribe((query: any) => {
                const params = query['params'];
                const uuid = params['id'];
                console.log('CadastroComponent -> ngOnInit: ', uuid);

                if (ValidadorUtils.isNotNullAndNotBlank(uuid)) {
                    let clienteEncontrado = this.clienteService.pesquisarClientePorUUID(uuid) || Cliente.newCliente();
                    if (clienteEncontrado) {
                        this.atualizando = true;
                        this.cliente = clienteEncontrado
                    }
                }
            }
        )
    }

    salvar() {
        console.log('Cliente: ', this.cliente);
        if (this.atualizando) {
            this.clienteService.atualizar(this.cliente);
            this.routder.navigate(['/consulta']);
        } else {
            this.clienteService.salvar(this.cliente);
            this.cliente = Cliente.newCliente();
        }
    }

}
