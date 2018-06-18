import React, {Component} from "react";
import {connect} from 'react-redux';
import { compose, withProps } from "recompose";
import {withScriptjs,withGoogleMap,GoogleMap,Marker} from "react-google-maps";

import {mapSelect, showMapState} from '../ducks/reducer'


class MapComponent extends Component {
    constructor(){
        super()
        this.state={
            isMarkerShown: false,
            loading: true
        }
        this.handleMarkerClick = this.handleMarkerClick.bind(this)
    }

    componentDidMount() {
        this.delayedShowMarker()
        this.loadingTimer()
    }

    delayedShowMarker = () => {
        this.setState( {isMarkerShown:true })
    }
    
    handleMarkerClick = (ssidObj) => {
        this.props.mapSelect(ssidObj);
        this.props.showMapState(false)
    }

    loadingTimer = () => {
        this.setState( {loading:false })
    }


    MyMapComponent = compose(
        withProps({
            googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyAOvXtIIwONaI1CEhF9Ivw2-fDbFnmEPBU&v=3.exp&libraries=geometry,drawing,places",
            loadingElement: <div style={{ height: `100%` }} />,
            containerElement: <div style={{ height: `70vh`, width:`70vw` }} />,
            mapElement: <div style={{ height: `100%` }} />
        }),
        withScriptjs,
        withGoogleMap
    )(props => (
        <GoogleMap defaultZoom={11} defaultCenter={{lat:40.1857988,lng:-111.7409621}}>
            {props.isMarkerShown &&  this.props.mapData.map((el, i)=> {
                return (  
                    <Marker key={i} position={{ lat:el.trilat, lng:el.trilong }} onClick={()=>{this.handleMarkerClick(el)}}/>
                )
            })} 
        </GoogleMap>
    ));
    
    render() {
        if(this.state.loading===true){
            return (
            <div>
                <p>This is a Loading Animation....</p>
                {}
            </div>
            )
        }else{
            return (
                <div>
                    <div>Select Your Approximate Area</div>
                    <this.MyMapComponent
                        isMarkerShown={this.state.isMarkerShown}
                        onMarkerClick={this.handleMarkerClick}
                    />
                </div>
                )            
        }
    }
}

function mapStateToProps(state){
    return{
        user: state.user,
        mapData: state.mapData,
        showMap: state.showMap
    }
}

export default connect(mapStateToProps,{mapSelect, showMapState})(MapComponent); 