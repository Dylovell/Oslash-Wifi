import React, {Component} from "react";
import {connect} from 'react-redux';
import { compose, withProps } from "recompose";
import {withScriptjs,withGoogleMap,GoogleMap,Marker} from "react-google-maps";

import {mapSelect, showMapState, showNothingFound} from '../ducks/reducer'
import { stat } from "fs";


class MapComponent extends Component {
    constructor(){
        super()
        this.state={
            isMarkerShown: true,
            mapCenter:{}
        }
        this.handleMarkerClick = this.handleMarkerClick.bind(this)
    }

    componentDidMount() {
        this.mapMiddle();
    }
    
    handleMarkerClick = (ssidObj) => {
        this.props.mapSelect(ssidObj);
        this.props.showMapState(false)
    }

    mapMiddle = () =>{
        let middleObj = this.props.mapData[Math.round(this.props.mapData.length/2)]
        middleObj === undefined
        ? this.props.showNothingFound(true)
        : this.setState({mapCenter:{lat:middleObj.trilat, lng:middleObj.trilong}})
    }

    MyMapComponent = compose(
        withProps({
            googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyAOvXtIIwONaI1CEhF9Ivw2-fDbFnmEPBU&v=3.exp&libraries=geometry,drawing,places",
            loadingElement: <div style={{ height: `100%` }} />,
            containerElement: <div style={{ height: `70vh`, width:`100%` }} />,
            mapElement: <div style={{ height: `100%` }} />
        }),
        withScriptjs,
        withGoogleMap
    )(props => (
        <GoogleMap defaultZoom={12} defaultCenter={{lat:this.state.mapCenter.lat,lng:this.state.mapCenter.lng}}>
            {props.isMarkerShown &&  this.props.mapData.map((el, i)=> {
                return (  
                    <Marker key={i} position={{ lat:el.trilat, lng:el.trilong }} onClick={()=>{this.handleMarkerClick(el)}}/>
                )
            })} 
        </GoogleMap> 
    ));
    
    render() {
        if(this.props.nothingFound===false){
            return (
                <div>
                    
                    <br/>
                    <br/>
                    <div>Select Your Approximate Area</div>
                    <br/>
                    <this.MyMapComponent
                        isMarkerShown={this.state.isMarkerShown}
                        onMarkerClick={this.handleMarkerClick}
                    />
                </div>
                )            
        }else{
            return(
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <div>    
                     It Looks like nothing came up
                    </div> 
                    <br/>
                    <p className="MainText">Try being more specific in the location or</p>
                    <p className="MainText">Make sure you spelled your WiFi name correctly</p>
                </div> 
            )
        }
    }
    
}

function mapStateToProps(state){
    return{
        user: state.user,
        mapData: state.mapData,
        showMap: state.showMap,
        nothingFound: state.nothingFound
    }
}

export default connect(mapStateToProps,{mapSelect, showMapState, showNothingFound})(MapComponent); 