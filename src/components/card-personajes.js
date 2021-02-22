import React from "react";
import "../styles/card-personajes.css";
class CardPersonajes extends React.Component {
  render() {
    return (
      <div className="col-lg-6">
        <div className="tarjetaPersonajes">
          <img
            src={this.props.imgPersonajes}
            alt=""
            className="imgCardPersonajes"
          />
          <h1 className="titleCardPersonajes">{this.props.nombrePersonaje}</h1>
          <p>Nickname: {this.props.nickname}</p>
          <p>Estado: {this.props.estado}</p>
        </div>
      </div>
    );
  }
}
export default CardPersonajes;
