class Negociacoes {
    constructor() {
        this._negociacoes = []; // um array que contém obejetos do tipo negociacao
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        return this._negociacoes; // pega os dados como array
    }
}
