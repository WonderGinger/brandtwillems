import { connect } from "react-redux";
import { getPokemon } from "./actions";
import Pokedex from "./Pokedex";

const mapStateToProps = state => {
  const { collection, isFetched } = state.pokemonReducer;
  return {
    collection,
    isFetched
  };
};
const mapDispatchToProps = { getPokemon };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pokedex);
