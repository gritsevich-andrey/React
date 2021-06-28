import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {
    state = {
cars: [
    {name: 'Ford', year: '2017'},
    {name: 'Mazda', year: '2018'},
    {name: 'Opel', year: '2019'}
],
        pageTitle: 'React component'
    }
  render() {
    const divStyle = {
      textAlign: 'center'
    }
const car = this.state.cars;
    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
        <Car name = {car[0].name} year = {car[0].year} />
        <Car name = {car[1].name} year = {car[1].year} />
        <Car name = {car[1].name} year = {car[1].year} />
      </div>
    );
  }
}

export default App;
