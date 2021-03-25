import React, { Component } from "react";
import Cardlist from "./Cardlist";
import Scroll from './Scroll';
import SearchBox from "./SearchBox";
import "./App.css";


class App extends Component {
  constructor() {
    super()
    this.state = {
        robots: [],
        searchField: "",
      }
}


componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users=> this.setState({robots: users}));
}

onSearchChange = (event) => {
this.setState({searchField: event.target.value})
}

  render() {
    const {robots, searchField} = this.state;
    const filteredRobot = robots.filter(robot => {
      return (robot.name.toLowerCase().includes(searchField.toLowerCase()) || robot.email.toLowerCase().includes(searchField.toLowerCase()))
    }) 
    
      return (
        <div className="tc">
          <link
            rel="stylesheet"
            href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"
          />
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <Cardlist robots={filteredRobot} />
          </Scroll>
        </div>
      );
    }
  }


export default App;
