import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './season-display';
import Loader from './loader';

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     lat: null,
  //     errorMessage: ''
  //   };
  // }

  state = {
    lat: null,
    errorMessage: ''
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage}</div>;
    }
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Loader message="Please accept location request" />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
