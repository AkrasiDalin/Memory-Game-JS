import React, { Component } from 'react';
import Card from './card';


export default class Board extends Component {
    cards: Card[] = [];
  constructor(){
    super();
  }
  
  render() {
    return <div>
      this.cards.map((card) => card);
    </div>;
  }
}
