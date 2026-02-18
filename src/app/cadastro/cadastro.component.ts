import {Component, inject, OnInit} from '@angular/core';
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
import {NgxMaskDirective, provideNgxMask} from "ngx-mask";
import {MatSnackBar} from "@angular/material/snack-bar";
import {BrasilapiService} from "../shared/services/brasilapi.service";
import {Estado, Municipio} from "../shared/models/brasilapi.models";

@Component({
    selector: 'app-cadastro',
    imports: [
        FlexLayoutModule,
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButton,
        NgxMaskDirective
    ],
    providers: [
        provideNgxMask(),
    ],
    templateUrl: './cadastro.component.html',
    styleUrl: './cadastro.component.css',
    standalone: true
})
export class CadastroComponent implements OnInit {

    private _snackBar = inject(MatSnackBar);
    cliente: Cliente = Cliente.newCliente();
    protected atualizando = false;
    protected estados: Estado[] = [];
    protected municipios: Municipio[] = [];

    constructor(private clienteService: ClienteService,
                private brasilApiService: BrasilapiService,
                private route: ActivatedRoute,
                private routder: Router
    ) {
    }

    ngOnInit(): void {
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
        })

        this.carregarUFs();
    }

    carregarUFs() {
        this.brasilApiService.listarUFs().subscribe({
            next: ufResponse => {
                this.estados = ufResponse;
                console.log('Estados carregados: ', ufResponse);
            },
            error: err => {
                this.mostrarMensagem('Erro ao carregar lista de estados!')
            }
        });
    }

    salvar() {
        console.log('Cliente: ', this.cliente);
        if (this.atualizando) {
            this.clienteService.atualizar(this.cliente);
            this.routder.navigate(['/consulta']);
        } else {
            this.clienteService.salvar(this.cliente);
            this.cliente = Cliente.newCliente();
            this.mostrarMensagemSucesso();
        }
    }

    mostrarMensagemSucesso() {
        this.openSnackBar('Cliente salvo com sucesso!', 'Fechar');
    }

    mostrarMensagemErro() {
        this.openSnackBar('Erro ao salvar cliente!', 'Fechar');
    }

    mostrarMensagem(mensagem: string) {
        this.openSnackBar(mensagem, 'Fechar');
    }

    private openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action);
    }

}
