import React, { Component } from 'react'
import Pokemon from './pokemon';
import Search from './search';
import { Container } from '@material-ui/core';
import Cookies from 'js-cookie';
import '../style/main.css';

// const collection = Array(100).fill(null).map((item, i) => i+1);

export default class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      pokemonIds: []
    }
  }

  componentDidMount() {
    this.props.getPokemon({ }).then(action => {

      const searchString = Cookies.get('searchString');
      const { collection } = this.props;
    
      if (!searchString) {
        return this.setState({
          pokemonIds: Object.keys(collection)
        })
      }
  
      const pokemonIds = Object.keys(collection).filter(pokemonId => {
        const pokemon = collection[pokemonId];
        return pokemon.name.includes(searchString);
      })
  
      this.setState({
        pokemonIds,
        searchString
      })
    })
  }

  handleSearch = event => {
    const value = event.currentTarget.value.toLowerCase().trim();
    const { collection } = this.props;

    Cookies.set('searchString', value, {
      expires: 7,
      path: ''
    });

    if (value === '') {
      return this.setState({
        pokemonIds: Object.keys(collection),
        searchString: value,
      })
    }

    const pokemonIds = Object.keys(collection).filter(pokemonId => {
      const pokemon = collection[pokemonId]
      return pokemon.name.includes(value);
    })

    this.setState({
      pokemonIds,
      searchString: value,
    })
  }

  render() {
    const { searchString, pokemonIds } = this.state;
    const { collection, isFetched } = this.props;

    const pokedex = pokemonIds.map((id) => {
      const pokemon = collection[id];
      return (
        <li key={id} className="pokemon-list-item">
          <Pokemon pokemon={pokemon}/>
        </li>
      )
    });

    return (
    <Container className="page">
      <div className="top-gutter"/>
      <Search onChange={this.handleSearch} value={searchString}/>
      { isFetched ? (
        <p style={{color:"white", fontSize: '60'}}> Loading ... </p>
      ) : (
        <ul className="pokedex">
          {pokedex}
        </ul>
      )}
    </Container>
    )
  }
}
