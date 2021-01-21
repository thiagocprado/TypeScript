export class Negociacao {

    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) { }

    get volume() {

        return this.quantidade * this.valor;
    }
}

// o "_" é uma convensão universal que é para alertar o programador que tal propriedade não deve ser instanciada fora da classe, ou seja, não deve ser modificada se não
// pelos próprios métodos da classe

// para que possamos acessar esses métodos utilizamos o método get