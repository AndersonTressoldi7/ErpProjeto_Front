export class Produto {
    id: number;
    nome: string;
    quantidade: number;
    preco: number;
    referencia?: string;
    codigoBarras?: string;
    observacao?: string;
    categoria?: string;
    marca?: string;
    sku?: string;
    unidadeMedida?: string;
    peso?: number;
    dimensoes?: string;
    dataEntradaEstoque?: Date;
    status?: boolean;
    created_at?: Date;
    updated_at?: Date;

    constructor(
        id: number,
        nome: string,
        quantidade: number,
        preco: number,
        referencia?: string,
        codigoBarras?: string,
        observacao?: string,
        categoria?: string,
        marca?: string,
        sku?: string,
        unidadeMedida?: string,
        peso?: number,
        dimensoes?: string,
        dataEntradaEstoque?: Date,
        status?: boolean,
        created_at?: Date,
        updated_at?: Date
    ) {
        this.id = id;
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
        this.referencia = referencia;
        this.codigoBarras = codigoBarras;
        this.observacao = observacao;
        this.categoria = categoria;
        this.marca = marca;
        this.sku = sku;
        this.unidadeMedida = unidadeMedida;
        this.peso = peso;
        this.dimensoes = dimensoes;
        this.dataEntradaEstoque = dataEntradaEstoque;
        this.status = status;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}
