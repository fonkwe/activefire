import React from 'react'

import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';

import './index.css';

interface MapContainerProps {
    height: number,
    width: number
}

interface MapContainerState {}

class MapContainer extends React.Component<MapContainerProps, MapContainerState> {

    constructor (props: MapContainerProps, state?: MapContainerState) {
        super(props, state)
        this.state = {}
    }

    mapRef: any = React.createRef();

    componentDidMount () {
      new Map({
        target: this.mapRef.current,
        layers: [
          new TileLayer({
            source: new XYZ({
              url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
          })
        ],
        view: new View({
          center: [0, 0],
          zoom: 2
        })
      });
    }

    render() { 
        const {height, width} = this.props;

        return (
            <div ref={this.mapRef} style={{height: height, width: width}}></div>
        )
    }
}

export default MapContainer;
