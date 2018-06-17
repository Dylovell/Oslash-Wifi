import React, {Component} from "react";
import {connect} from 'react-redux';
import { compose, withProps } from "recompose";
import {withScriptjs,withGoogleMap,GoogleMap,Marker} from "react-google-maps";


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
        setTimeout(() => {
            this.setState( {isMarkerShown:true })}, 4000)
    }
    
    handleMarkerClick = (mac,channel) => {
        console.log('selected pin: '+mac+'      channel: '+channel)
    }

    loadingTimer = () => {
        setTimeout(() => {
            this.setState( {loading:false })}, 1500)
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
                    <Marker key={i} position={{ lat:el.trilat, lng:el.trilong }} onClick={()=>{this.handleMarkerClick(el.netid,el.channel)}}/>
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
        mapData: state.mapData
    }
}

export default connect(mapStateToProps)(MapComponent); 