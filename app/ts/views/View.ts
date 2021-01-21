import { logarTempoDeExecucao } from '../helpers/decorators/index'
export abstract class View<T> {

    private _elemento: JQuery;
    private _escapar: boolean;

    constructor(seletor: string, escapar: boolean = false) {

        this._elemento = $(seletor);
        this._escapar = escapar;
    }

    // @logarTempoDeExecucao(true);

    update(model: T) {

        let template = this.template(model)
        if (this._escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
            this._elemento.html(template);
        }

        this._elemento.html(this.template(model));
    }

    abstract template(model: T): string;
}

// a '?' torna o parâmetro opcional, passando o mesmo como undefined

