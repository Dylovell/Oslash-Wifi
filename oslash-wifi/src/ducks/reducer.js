import axios from 'axios'

const initialState={
    user:{},
    localChannelData:{returned:false},
    mapData:[],
    showMap:false,
    loading:false,
    nothingFound:false
}

const GET_USER_DATA = 'GET_USER_DATA';
const CHANNEL_QUERY  = 'CHANNEL_QUERY';
const MAP_SELECT = 'MAP_SELECT';
const SHOW_MAP_STATE = 'SHOW_MAP_STATE';
const SHOW_LOADING_STATE = 'SHOW_LOADING_STATE';
const NOTHING_FOUND_STATE = 'NOTHING_FOUND_STATE';
const CLEAR_DATA = 'CLEAR_DATA';
///////////////////////FOR USERS LOGGING IN
export function getUser(){
    let userData = axios.get('/auth/user').then(res=>res.data);
    return {
        type: GET_USER_DATA,
        payload: userData
    }
}
/////////////////  PUT TURINARY HERE TO SEE IF YOU GET BACK MAP OR CHANNEL DATA
export function channelQuery(location,ssid){
    let channelData = axios.post('/api/areaquery',({location,ssid})).then(res=>res.data);
    return {
        type: CHANNEL_QUERY,
        payload: channelData
    }
}
/////////////////////////////////////////// SHOWS A MAP WHEN THE USER HAS TO CHOSE BETWEEN MULTIPLE LOCATIONS
export function showMapState(tOrF){
    return {
        type: SHOW_MAP_STATE,
        payload: tOrF
    }
}
////////////////////////////////  SHOWLOADING SCREEN
export function showLoading(tOrF){
    return {
        type: SHOW_LOADING_STATE,
        payload: tOrF
    }
}
////////////////////////////////  NOTHING FOUND SCREEN
export function showNothingFound(tOrF){
    return {
        type: NOTHING_FOUND_STATE,
        payload: tOrF
    }
}
////////////////////////////USED TO RESET DATA WHEN USER LEAVES LOOKUP
export function clearData(){
    return {
        type: CLEAR_DATA,
    }
}
//////////////////////// USED WHEN A USER NEEDS TO SPECIFY WHICH SSID LOCATION IS THIERS
export function mapSelect(netid){                   
    let mapdDataSelection = axios.post('api/mapselect', (netid)).then(res=>res.data);
    return{
        type: MAP_SELECT,
        payload: mapdDataSelection
    }
}

export default function reducer(state = initialState, action){
    switch (action.type) {
        case GET_USER_DATA + '_FULFILLED': 
            return Object.assign({}, state, {user: action.payload});
        case CHANNEL_QUERY + '_FULFILLED': 
            return Object.assign({}, state, {mapData: action.payload});
        case SHOW_MAP_STATE : 
            return Object.assign({}, state, {showMap: action.payload});
        case SHOW_LOADING_STATE : 
            return Object.assign({}, state, {loading: action.payload});
        case NOTHING_FOUND_STATE : 
            return Object.assign({}, state, {nothingFound: action.payload});
        case CLEAR_DATA : 
            return Object.assign({}, state, {localChannelData:{},mapData:{}});
        case MAP_SELECT + '_FULFILLED': 
            return Object.assign({}, state, {localChannelData: action.payload});
        default:
            return state;
    }
}