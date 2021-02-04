import React from "react";
import "../styles/card-episodes.css";
class CardPersonajes extends React.Component {
  render() {
    return (
      <div className="col-lg-6">
        <div className="tarjeta">
          <img src={this.props.imgPersonajes} alt="" className="imgCard" />
          <h1 className="titleCard">{this.props.nombrePersonaje}</h1>
          <p>Cumpleanos: {this.props.fechaCumple}</p>
          <p>Estado: {this.props.estado}</p>
        </div>
      </div>
    );
  }
}
export default CardPersonajes;
