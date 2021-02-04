import React from "react";
import Navbar from "./components/navbar.js";
import CardEpisodes from "./components/card-episodes";

import "./styles/page-episode.css";
class PageEpisodes extends React.Component {
  state = {
    numEpisodio: "",
    BreakingBad: {
      episodios: [],
    },
  };
  componentDidMount() {
    this.fetchData(`https://breakingbadapi.com/api/episodes`);
    let eleccion = this.props.history.location.search.substr(1);
    this.setState({
      busqueda: eleccion,
    });
  }
  componentDidUpdate(prevProps) {
    let cambio = this.state.numEpisodio;
    if (this.props.location !== prevProps.location) {
      this.fetchData(`https://breakingbadapi.com/api/episodes/` + cambio + ``);
    }
  }
  fetchData = async (url) => {
    const response = await fetch(url);
    const dataEpisodes = await response.json();
    this.setState({
      BreakingBad: {
        episodios: dataEpisodes,
      },
    });
    console.log(dataEpisodes);
  };
  handleChange = (e) => {
    e.preventDefault();
    this.props.history.push("/episodios/");
    this.setState({
      numEpisodio: e.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container container-edit">
          <form className="buscador" name="form" onSubmit={this.handleSubmit}>
            <div className="input">
              <h1>Filtrar por numero de Capitulo</h1>
              <input
                type="Number"
                placeholder="Ingrese Numero"
                value={this.onChange}
                onChange={this.handleChange}
                name="Buscador"
              />
            </div>
          </form>
          <div className="row">
            {this.state.BreakingBad.episodios.map((item, i) => {
              return (
                <CardEpisodes
                  img="https://hipertextual.com/files/2018/01/breaking_bad_vince_gilligan_amc.jpg"
                  nombre={item.title}
                  fechaEmision={item.air_date}
                  temporada={item.season}
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
export default PageEpisodes;
