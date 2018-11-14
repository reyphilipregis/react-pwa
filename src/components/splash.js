import React from 'react';
import { Link } from 'react-router-dom';
import CardList from '../components/card-list';
import axios from 'axios';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: [] };
  }

  componentWillMount() {
    axios.get('http://localhost:3000/view-disapproved', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    }).then(res => { 
        this.setState({
          cards: res.data.result
        });
    }).catch(error => {
        console.log('error', error);
    })
  }

  render() {
    return (
      <CardList cards={this.state.cards} />
    );
  };
}