import {Injectable} from '@angular/core';
import {Cliente} from "../../cadastro/cliente";

@Injectable({
    providedIn: 'root'
})
export class ClienteService {


    static REPO_CLIENTES = "_CLIENTES";

    constructor() {
    }


    salvar(cliente: Cliente) {
        console.log('Salvando cliente: ', cliente);
        const storage = this.obterStorage();
        storage.push(cliente);
        localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
    }


    pesquisarCliente(nome: string): Cliente[] {

        const clientes: Cliente[] = this.obterStorage();

        if (!nome) {
            return clientes;
        }

        return clientes.filter((cliente) => cliente.nome?.indexOf(nome)  !== -1);

    }

    private obterStorage(): Cliente[] {
        const respositorioClientes = localStorage.getItem(ClienteService.REPO_CLIENTES);

        if (respositorioClientes) {
            return JSON.parse(respositorioClientes);
        }

        const clientes: Cliente[] = [];
        localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes));
        return clientes;

    }

}
