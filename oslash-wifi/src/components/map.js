import React, {Component} from "react";
import {connect} from 'react-redux';
// import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {withScriptjs,withGoogleMap,GoogleMap,Marker} from "react-google-maps";


class MapComponent extends Component {
    constructor(){
        super()
        this.state={
            isMarkerShown: false,
            loading: true
        }
        this.posts = this.posts.bind(this)
    }

    componentDidMount() {
        this.delayedShowMarker()
        this.loadingTimer()
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState( {isMarkerShown:true })}, 4500)
    }
    
    handleMarkerClick = () => {
        this.setState({isMarkerShown:false })
        this.delayedShowMarker()
    }

    loadingTimer = () => {
        setTimeout(() => {
            this.setState( {loading:false })}, 3500)
    }

    loadingTicker = () => {

    }

    posts =()=>
         this.props.mapData.map((el,i)=>
        // {this.props.isMarkerShown && (
            <Marker alt={i} position={{ lat:el.trilat, lng:el.trilong }} />
        // )}
    )

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
        {/* {props.isMarkerShown && (
          <Marker alt='1' position={{ lat:this.props.mapData[0].trilat, lng:this.props.mapData[0].trilong }} />
        )} */}
        {props.isMarkerShown && this.props.mapData.map((el, i)=> {
                return (
                    <Marker key={i} position={{ lat:el.trilat, lng:el.trilong }} />
      )
    })}
      </GoogleMap>
    ));
    
    render() {
        if(this.state.loading===true){
            return (
            <div>
                <p>Loading</p>
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



// ReactDOM.render(<MyMapComponent isMarkerShown />, document.getElementById("root"));
