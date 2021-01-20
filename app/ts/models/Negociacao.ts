class Negociacao {

    constructor(private _data: Date, private _quantidade: number, private _valor: number) { }

    get data() {

        return this._data;
    }

    get quantidade() {

        return this._quantidade;
    }

    get valor() {

        return this._valor;
    }

    get volume() {

        return this._quantidade * this._valor;
    }
}

// o "_" é uma convensão universal que é para alertar o programador que tal propriedade não deve ser instanciada fora da classe, ou seja, não deve ser modificada se não
// pelos próprios métodos da classe

// para que possamos acessar esses métodos utilizamos o método get