 import { createStore } from 'redux';
 import reducer from './ducks/reducer';
 
 //dont forget to add the provider from react-redux in your index file
 
 export default createStore(reducer);