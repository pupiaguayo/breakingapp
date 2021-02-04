import React from "react";
import "../styles/card-episodes.css";
class CardEpisodes extends React.Component {
  render() {
    return (
      <div className="col-lg-4">
        <div className="tarjeta">
          <img src={this.props.img} alt="" className="imgCard" />
          <h1 className="titleCard">{this.props.nombre}</h1>
          <p>Temporada: {this.props.temporada}</p>
          <p>Emision: {this.props.fechaEmision}</p>
        </div>
      </div>
    );
  }
}
export default CardEpisodes;
