import axios from 'axios'

const initialState={
    user:{},
    localChannelData:{},
    mapData:{}
}

const GET_USER_DATA = 'GET_USER_DATA';
const CHANNEL_QUERY  = 'CHANNEL_QUERY';

export function getUser(){
    let userData = axios.get('/auth/user').then(res=>res.data);
    return {
        type: GET_USER_DATA,
        payload: userData
    }
}

export function channelQuery(location,ssid){
    let channelData = axios.post('/api/channelquery',({location,ssid})).then(res=>res.data);
    return {
        type: CHANNEL_QUERY,
        payload: channelData
    }
}

export default function reducer(state = initialState, action){
    switch (action.type) {
        case GET_USER_DATA + '_FULFILLED': 
            return Object.assign({}, state, {user: action.payload});
        case CHANNEL_QUERY + '_FULFILLED': 
            return Object.assign({}, state, {mapData: action.payload});
        default:
            return state;
    }
}