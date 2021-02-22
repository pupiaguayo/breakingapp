import React from "react";
import Navbar from "./components/navbar.js";
import CardPersonajes from "./components/card-personajes";
class PageHome extends React.Component {
  state = {
    nombre: "",
    BreakingBad: {
      personajes: [],
    },
  };
  componentDidMount() {
    this.fetchData(`https://breakingbadapi.com/api/characters`);
    let eleccion = this.props.history.location.search.substr(1);
    this.setState({
      nombre: eleccion,
    });
  }
  componentDidUpdate(prevProps) {
    let cambioName = this.state.nombre;
    if (this.props.location !== prevProps.location) {
      this.fetchData(
        `https://breakingbadapi.com/api/characters?name=` + cambioName + ``
      );
    }
  }
  fetchData = async (url) => {
    const response = await fetch(url);
    const dataEpisodes = await response.json();
    this.setState({
      BreakingBad: {
        personajes: dataEpisodes,
      },
    });
    console.log(dataEpisodes);
  };
  handleChange = (e) => {
    e.preventDefault();
    this.props.history.push("/");
    this.setState({
      nombre: e.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container container-edit">
          <form className="buscador" name="form" onSubmit={this.handleSubmit}>
            <div className="input">
              <h1>Buscar personaje por nombre</h1>
              <input
                type="text"
                placeholder="Ingrese Nombre"
                value={this.onChange}
                onChange={this.handleChange}
                name="Buscador"
              />
            </div>
          </form>
          <div className="row">
            {this.state.BreakingBad.personajes.map((item, i) => {
              return (
                <CardPersonajes
                  imgPersonajes={item.img}
                  nombrePersonaje={item.name}
                  nickname={item.nickname}
                  estado={item.status}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default PageHome;
