export class Pessoa {
    id: number;
    nome: string;
    cpfCnpj: number;
    sexo: boolean;
    cliente?: boolean;
    funcionario?: boolean;
    fornecedor?: boolean;
    cidade_nome?: string;
    bairro?: string;
    rua?: string;
    dataNascimento?: Date;

    constructor(
        id: number,
        nome: string,
        cpfCnpj: number,
        sexo: boolean,
        cliente?: boolean,
        funcionario?: boolean,
        fornecedor?: boolean,
        cidade?: string,
        bairro?: string,
        rua?: string,
        dataNascimento?: Date
    ) {
        this.id = id;
        this.nome = nome;
        this.cpfCnpj = cpfCnpj;
        this.sexo = sexo;
        this.cliente = cliente;
        this.funcionario = funcionario;
        this.fornecedor = fornecedor;
        this.cidade_nome = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.dataNascimento = dataNascimento;
    }




    

    
}
