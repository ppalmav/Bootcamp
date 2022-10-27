// import StateBlock from "markdown-it/lib/rules_block/state_block";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorite } from "../../actions";
import './Favorites.css';

export class ConnectedList extends Component {
  constructor(props){
    super(props)
  }
  handleClick(id){
    this.props.removeMovieFavorite(id)
  }

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */
            this.props.moviesFavorites.map( movie => {
              return(
                <li>
                  <Link to={`/movie/${movie.id}`}>
                  <span>{movie.title}</span>
                </Link>
                <button onClick={() =>this.handleClick(movie.id)}>X</button>
                </li>
              )             
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    moviesFavorites: state.moviesFavorites
  }
}
const mapDispatchToProps =(dispatch)=>{
  return{
    removeMovieFavorite: id => dispatch(removeMovieFavorite(id))
  }
}

export default connect(mapDispatchToProps,mapStateToProps)(ConnectedList);
