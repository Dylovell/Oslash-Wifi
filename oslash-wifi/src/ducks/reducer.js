import axios from 'axios'

const initialState={
    user:{},
    localChannelData:{},
    mapData:{},
    showMap:false
}

const GET_USER_DATA = 'GET_USER_DATA';
const CHANNEL_QUERY  = 'CHANNEL_QUERY';
const MAP_SELECT = 'MAP_SELECT';
const SHOW_MAP_STATE = 'SHOW_MAP_STATE';

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
///////////////////////////////////////////     NOT WORKING
export function showMapState(tOrF){
    return {
        type: SHOW_MAP_STATE,
        payload: tOrF
    }
}
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
        case SHOW_MAP_STATE + '_FULFILLED': 
                return Object.assign({}, state, {showMap: action.payload});
        case MAP_SELECT + '_FULFILLED': 
            return Object.assign({}, state, {localChannelData: action.payload});
        default:
            return state;
    }
}