import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Bienvenue, inscrivez-vous !",
      bouton: "Inscription",
    };
    this.sInscrire = this.sInscrire.bind(this);
  }

  sInscrire() {
    this.setState({
      message: "Votre inscription est effectuée",
      bouton: "Merci",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.sInscrire}>{this.state.bouton}</button>
      </div>
    );
  }
}

export default Message;