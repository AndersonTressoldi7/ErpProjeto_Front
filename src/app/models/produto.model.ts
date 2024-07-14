export class Produto {
    id: number;
    nome: string;
    quantidade: number;
    preco: number;
    referencia?: string;

    constructor(id: number, nome: string, quantidade: number, preco: number, referencia?: string) {
        this.id = id;
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
        this.referencia = referencia;
    }
}
