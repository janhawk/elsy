import React from 'react';

import Icon from './core/Icon';
import Slider from './core/Slider';

class HeartRate extends React.Component {
    render() {
        console.log('cnp/HeartRate/render this.props')
        return (       
            <div className="boxTwo col-md-2 col-6"> 
            {/* <span class="material-icons" style={{fontSize:100, color:"red"}}>    */}
                {/* favorite */}
            {/* </span> */}
  
                <Icon 
                    name="favorite"
                    color="red"
                />
               <Slider 
                    min={this.props.min}
                    max={this.props.max}
                    value={this.props.heart}
                    onChange={this.props.onChange}
               />
            </div>
                
        );
    }
}
export default HeartRate;