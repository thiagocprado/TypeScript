class NegociacaoController {

    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes: Negociacoes = new Negociacoes();

    constructor() {

        this._inputData = <HTMLInputElement>document.querySelector('#data'); // casting
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade'); // casting
        this._inputValor = <HTMLInputElement>document.querySelector('#valor'); // casting
    }

    adiciona(event: Event) {

        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ',')),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        console.log(negociacao);
    }
}