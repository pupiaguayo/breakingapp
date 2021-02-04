import React from "react";
import Navbar from "./components/navbar.js";
class PageHome extends React.Component {
  state = {
    episodios: [],
  };
  componentDidMount() {
    this.fetchData(`https://breakingbadapi.com/api/`);
  }
  fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      episodios: data.results,
    });
    console.log(data);
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
      </React.Fragment>
    );
  }
}
export default PageHome;
