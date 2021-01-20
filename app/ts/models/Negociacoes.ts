class Negociacoes {

    private _negociacoes: Negociacao[] = []; // um array que contém obejetos do tipo negociacao

    adiciona(negociacao: Negociacao) {

        this._negociacoes.push(negociacao);
    }

    paraArray() {

        return this._negociacoes; // pega os dados como array
    }
}