import React from 'react';

import Icon from './core/Icon';

class HeartRate extends React.Component {
    render() {
        return (       
            <div className="boxTwo col-md-2 col-6"> 
            {/* <span class="material-icons" style={{fontSize:100, color:"red"}}>    */}
                {/* favorite */}
            {/* </span> */}
  
                <Icon name={"favorite"} color="red"/>
                {this.props.heart}
            </div>
                
        );
    }
}
export default HeartRate;