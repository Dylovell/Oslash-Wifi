import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Line,Bar} from 'react-chartjs-2'


class ChannelChart extends Component {
    constructor(){
        super()
        this.state={
        }
        this.ChannelDataMapper2GHz = this.ChannelDataMapper2GHz.bind(this);
        this.ChannelDataMapper5GHz = this.ChannelDataMapper5GHz.bind(this);
    }

    ChannelDataMapper2GHz(){
        let channelsArray = Object.entries(this.props.localChannelData.frequecy2GHz)
        let data = {
            labels:[],
            datasets: [{
                label: 'Networks per Channel',
                data: [],
                borderWidth: 1
            }]
        }
        channelsArray.map((el)=>
                data.datasets[0].data.push(el[1])
            )
        channelsArray.map((el)=>
                data.labels.push(el[0])
            )
        return data
    }

    ChannelDataMapper5GHz(){
        let channelsArray = Object.entries(this.props.localChannelData.frequecy5GHzNonDFS)
        let data = {
            labels:[],
            datasets: [{
                label: 'Networks per Channel',
                data: [],
                borderWidth: 1
            }]
        }
        channelsArray.map((el)=>
                data.datasets[0].data.push(el[1])
            )
        channelsArray.map((el)=>
                data.labels.push(el[0])
            )
        return data
    }

    render() {
        if(this.props.localChannelData.returned === false){
            return(
               <div>
                   <br/>
                   <p>Fill out the fields above</p>
                </div>
            )
        }else{
            return(
                <div>
                    2.4GHz Spectrum
                    <br/>
                    <Line data={this.ChannelDataMapper2GHz()}/>
                    <br/>
                    5GHz NonDFS Spectrum
                    <Bar data={this.ChannelDataMapper5GHz()}/>
                    <br/>
               
                </div>
            )
        }
    }
}

function mapStateToProps(state){
    return{
       localChannelData: state.localChannelData
    }
}

export default connect(mapStateToProps)(ChannelChart); 
