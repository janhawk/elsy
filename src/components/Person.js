import React from 'react';

import Icon from './core/Icon';
class Person extends React.Component {
    render() {
        return (
          
            <div className="box col-md-2 col-6">   
            {/* <span class="material-icons" style={{fontSize:100, color:"black"}}>    */}
                {/* directions_walk */}
            {/* </span> */}

                <Icon name={"directions_walk"} color="black"/>               
            </div> 
        );
    }
}
export default Person;