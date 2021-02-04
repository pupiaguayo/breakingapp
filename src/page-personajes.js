import React from "react";
import Navbar from "./components/navbar.js";
import CardPersonajes from "./components/card-personajes";
class PagePersonajes extends React.Component {
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
        `https://breakingbadapi.com/api/characters?category=` + cambioName + ``
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
    this.props.history.push("/personajes/");
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
              <h1>Filtrar por Serie</h1>
              <input
                type="text"
                placeholder="Breaking Bad o Better Call Saul"
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
                  fechaCumple={item.birthday}
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
export default PagePersonajes;
