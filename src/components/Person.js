import React from 'react';

class Person extends React.Component {
    render() {
        return (
            <div style={{
                color:this.props.color, fontSize:this.props.fontSize + 'px'
            }}>
            <div className="container">
            <div className="box">
       
                <div class="col-3">
                    <div class="material-icons">
                    directions_walk
                    </div>
                </div>
                <div class="col-3">
                    <div class="material-icons">
                    directions_walk
                    </div>
                </div>
            </div>
            </div>
            </div>
        );
    }
}
export default Person;