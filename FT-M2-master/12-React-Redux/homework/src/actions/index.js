import{
    ADD_MOVIE_FAVORITE,
    REMOVE_MOVIE_FAVORITE,
    GET_MOVIE_DETAIL,
    GET_MOVIES,
    CLEAN_DETAIL
} from "./action-types";

const apikey=`fb51de37`

export const getMovie = (titulo) =>{
    return function (dispatch){
        fetch("http://www.omdbapi.com/?apikey="+apikey+"&s=" + titulo)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: GET_MOVIES, payload: json });
      });
  };
}

export const getMovieDetail=(id)=>{
    return function(dispatch){
        fetch(`http://www.omdbapi.com/?apikey=${apikey}&i=${id}`)
        .then(response=>response.json())
        .then(obj=>dispatch({type:GET_MOVIE_DETAIL}))
    }
}

export const addMovieFavorite=(id)=>{
    return {type: ADD_MOVIE_FAVORITE,payload:id}
}

export const removeMovieFavorite=(id) =>{
    return {type: REMOVE_MOVIE_FAVORITE,payload:id}
}

export const cleanDetail = () =>{
    return {type: CLEAN_DETAIL}
}