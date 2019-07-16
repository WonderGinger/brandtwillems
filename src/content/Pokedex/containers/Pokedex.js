import { connect } from 'react-redux';
import { getPokemon } from '../actions/pokemonActions';
import Pokedex from '../components/Pokedex';

const mapStateToProps = state => {
  const { collection } = state.pokemonReducer
  return {
    collection
  }
}
const mapDispatchToProps = { getPokemon }

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex)