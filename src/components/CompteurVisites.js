import React, { Component } from "react";

class CompteurVisites extends Component {
  constructor(props) {
    super(props);
    this.state = { compteur: 0 };
    this.ajouter = this.ajouter.bind(this);
    this.reinitialiser = this.reinitialiser.bind(this);
  }

  ajouter() {
    this.setState({ compteur: this.state.compteur + 1 });
  }

  reinitialiser() {
    this.setState({ compteur: 0 });
  }

  render() {
    return (
      <div>
        <h2>Nombre de stagiaires présents : {this.state.compteur}</h2>
        <button onClick={this.ajouter}>+ Ajouter un stagiaire</button>
        <button onClick={this.reinitialiser}>Réinitialiser</button>
      </div>
    );
  }
}

export default CompteurVisites;