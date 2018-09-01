import types from './types';
import axios from 'axios';

export const signIn = (credentials) => async dispatch=>{
    try{
    const resp = await axios.post('http://api.reactprototypes.com/signin', credentials);
    localStorage.setItem('token', resp.data.token);
    dispatch({
        type: types.SIGN_IN
    });
    }catch(err){
        dispatch({
            type:types.AUTH_ERROR,
            error: 'Invalid Email and/or password'
        })
    }
}

export const signOut = () =>{
  localStorage.removeItem('token');
  return  { type: types.SIGN_OUT}
}

export const signUp = (credentials) => async dispatch =>{
    try{
    const resp = await axios.post('http://api.reactprototypes.com/signup', credentials);
    localStorage.setItem('token', resp.data.token);
    dispatch({type: types.SIGN_UP});
    } catch(err){
    dispatch({type: types.AUTH_ERROR, error: 'Error creating Account'});
    }
}

export const getMovieQuote = () => async dispatch =>{
    const axiosConfig = {
        headers: {
            authorization: localStorage.getItem('token')
        }
    };
    const resp = await axios.get('http://api.reactprototypes.com', axiosConfig);
    dispatch({
        type:types.GET_MOVIE_QUOTE,
        quote: resp.data.message,
    })
}
