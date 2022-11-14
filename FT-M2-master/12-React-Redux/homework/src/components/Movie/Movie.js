import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
    // constructor(props){
    //     super(props)
    // }
    componentDidMount(){
        this.props.getMovieDetail(this.props.match.params.id)
    }

    render() {
        return (
            <div className="movie-detail">
                <h1>{this.props.getMovieDetail.Title}</h1>
                <p>{this.props.getMovieDetail.Year}</p>
                <img src={this.props.getMovieDetail.Poster} alt='poster'></img>
                <p>{this.props.getMovieDetail.Plot}</p>
            </div>
        );
    }
}


const mapStateToProps = (state) =>{
    return{
        movieDetail: state.movieDetail
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        getMovieDetail: (id)=> dispatch(getMovieDetail(id))
    }
}
export default connect(mapDispatchToProps,mapStateToProps) (Movie);