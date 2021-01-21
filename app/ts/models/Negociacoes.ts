import { Negociacao } from './Negociacao';
export class Negociacoes {

    private _negociacoes: Negociacao[] = []; // um array que contém obejetos do tipo negociacao

    adiciona(negociacao: Negociacao): void {

        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {

        return ([] as Negociacao[]).concat(this._negociacoes); // pega os dados como array
    }
}