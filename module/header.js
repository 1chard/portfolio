'use strict'

var scrollTrack = 0;

class Menu {
    constructor(headerInicial) {
        this.header = headerInicial;

        //trata o efeitodesumir
        this.scrollTrack = window.scrollY;

        //criase um elemento da mesma autura para nao interferir no fluxo
        this.copiaHeader = document.createElement('div')
        this.copiaHeader.style.position = "relative"

        document.body.insertBefore(this.copiaHeader, this.header.parentElement.nextSibling)
        this.mudarCopia()
    }

    ativaDinamico(source1, source2) {
        window.onresize = () => {
            while ((this.minSize(this.header) + 0) > this.header.offsetWidth)
                this.adicionaFilho(source2, this.removeUltimoFilho(source1));
            
            this.mudarCopia()
        }
    }

    removeUltimoFilho(elemento) {
        return elemento.removeChild(elemento.children[elemento.children.length - 1]);
    }

    adicionaFilho(elemento, adicionado) {
        elemento.appendChild(adicionado)
    }

    minSize(source) {
        let minsize = 0;
        let array = source.children;

        for (let i = 0; i < array.length; i++)
            minsize += array[i].offsetWidth;

        return minsize;
    }

    mudarCopia() {
        this.copiaHeader.style.width = this.header.offsetWidth.toString() + "px";
        this.copiaHeader.style.height = this.header.offsetHeight.toString() + "px";
    }



    efeitoSumir() {
        document.body.onscroll = (e) => {
            //so escondo quando tiver saindo do cabecalho, cuidado! pode esconder o texto
            if (this.header.offsetHeight * 2 < window.scrollY) {

                //esconde ou nao
                if (scrollTrack < window.scrollY) {

                    this.header.style.marginTop =
                        '-' + this.header.offsetHeight.toString() + "px";
                }
                else {

                    this.header.style.marginTop = "0px";
                }
            }
            else
                this.header.style.marginTop = "0px"

            scrollTrack = window.scrollY
        }

        return this;
    }
}

export default Menu;