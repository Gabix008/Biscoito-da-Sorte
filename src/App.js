import React, { Component } from "react";
import "./style.css";
//Eventos
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: "",
    };
    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.frases = [
      "Siga os bons e aprenda com eles.",
      "O bom-senso vale mais do que muito conhecimento.",
      "O riso é a menor distância entre duas pessoas.",
      "Deixe de lado as preocupações e seja feliz.",
      "Realize o óbvio, pense no improvável e conquiste o impossível.",
      "Acredite em milagres, mas não dependa deles.",
      "A maior barreira para o sucesso é o medo do fracasso.",
      "A jornada de mil milhas começa com um único passo.", 
      "Acredite em si mesmo e tudo será possível.", 
      "A sorte favorece a mente bem preparada.", 
      "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      "O que quer que você possa fazer ou sonhe que pode, comece. A coragem contém em si mesma, gênio, poder e magia.",
      "A felicidade não é algo pronto. Ela é feita pelas suas próprias ações.",
      "A vida é 10% do que acontece comigo e 90% de como reajo a isso.",
     "Tudo o que a mente pode conceber e acreditar, pode ser alcançado.",
     "Nada é impossível, a palavra mesma diz 'eu sou possível'!",
     "O destino não é uma questão de sorte, é uma questão de escolha; não é algo a se esperar, é algo a se alcançar.",
    ];
  }

  quebraBiscoito() {
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.texto = '"' + this.frases[numeroAleatorio] + '"';
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <h2 className="textoInicial">Tire a sua frase da sorte!</h2>
        <img src={require("./assets/biscoito.png")} className="img" />
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito} />
        <h3 className="texto">{this.state.texto}</h3>
      </div>
    );
  }
}
class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaoBtn} className="botao">
          {this.props.nome}
        </button>
      </div>
    );
  }
}

export default App;
