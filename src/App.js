import React from 'react';

import Person from './components/Person';
import HeartRate from './components/HeartRate';

const MIN_TEMPERATURE= -20;
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEPS = 0;
const MAX_STEPS = 50000;
class App extends React.Component {
  constructor(props) {
    super(props);

      this.state={
        water: 0,
        temperature:-10,
        heart:120,
        steps:3000
      };
      this.onHeartChange = this.onHeartChange.bind(this);
  }
onHeartChange(val) {
  console.log('>> App#onHeartChange');
  console.log('App#onHeartChange val', val);

  this.setState({
    heart: val
  });
}


  render() {

    return (
      <div className="container-fluid"> 
        <div className="row">
          <Person 
            steps={this.state.steps}  
          />
          <HeartRate 
            min={MIN_HEART}
            max={MAX_HEART}
            heart={this.state.heart}
            onChange={this.onHeartChange}
          />
        </div>
      </div>
    );
  }
}
export default App;