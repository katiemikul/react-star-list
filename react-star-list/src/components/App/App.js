import React, { Component } from 'react';
import axios from 'axios'; //needs to go under react and above our components

import Introduction from '../Introduction/Intro';
import NewStar from '../NewStar/NewStar';
import StarList from '../StarList/StarList';
import NewStarForm from '../NewStarForm/NewStarForm';

const emptyStar = {
  name: '',
  diameter: '',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starList: [
        { name: 'Gacrux', diameter: 117 },
        { name: 'Kochab', diameter: 13 },
        { name: 'Menkar', diameter: 2 },
      ],
      newStar: emptyStar,
      planetArray: [],
    };
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      newStar: {
        ...this.state.newStar,
        [propertyName]: event.target.value,
      }
    })

  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      starList: [
        ...this.state.starList,
        this.state.newStar],
    });
  }
  // let starListItemArray = [];
  // for (let i = 0; i < this.state.starList.length; i++) {
  //   let starName = this.state.starList[i];
  //   starListItemArray.push(<li key={starName}>{starName}</li>);
  // }
  // onSubmit = (event) => {
  //   event.preventDefault();

  // }

  componentDidMount() {
    this.getPlanets('https://swapi.co/api/planets/?format=json');
  }

  getPlanets = (nextUrl) => {
    if (nextUrl) {
      axios({
        method: 'GET',
        url: nextUrl,
      }).then(response => {
        console.log(response);
        this.setState({
          planetArray: [...this.state.planetArray, ...response.data.results]
        });
        if (response.data.next) {
          this.getPlanets(response.data.next);
        }
      });
    }
  }

  render() {
    // const starListItemArray = this.state.starList.map(star => (<li key={star}>{star}</li>));
    return (
      <div>
        < Introduction />
        < NewStar currentStar={this.state.newStar} />
        < StarList taco={this.state.starList} />
        < NewStarForm
          newStar={this.state.newStar}
          handleChangeForChild={this.handleChangeFor}
          handleSubmitForChild={this.handleSubmit} />

        {/* <form >
       <input value={this.state.newStar.name} onChange={this.handleChangeFor('name')} placeholder='Name' />
       <input value={this.state.newStar.diameter} onChange={this.handleChangeFor('diameter')} placeholder='Diameter' />
       <input type="Submit" value='Add new star' />
     </form> */}
        {/* <ul>
       {this.state.planetArray.map(planet => (<li key={planet.name}>
         The planet {planet.name} is {planet.diameter} million km in diameters</li>))}
     </ul> */}
        {/* const newPlanetArray = planetArray.map(planet => ({planet.name})); */}
        {/* {JSON.stringify(this.state.planetArray)} */}
        <ul>
          {this.state.planetArray.map(planet => <li key={planet.name}>{planet.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
