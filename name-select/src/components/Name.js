import React from 'react';
import { wishes } from './wishes';
export class Name extends React.Component {

   
  render() {

    return (
      <div>
        <h1>Hey, my name is {this.props.isim}!</h1>
        <h2>Don't you think  {this.props.isim} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked  {this.props.isim}!</h2>
       {wishes[Math.floor(Math.random()*wishes.length)]}
      </div>
    );
  }
}