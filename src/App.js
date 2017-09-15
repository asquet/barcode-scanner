import React, { Component } from 'react';
import './App.css';
import QuaggaLive from './components/QuaggaLive'
import QuaggaFile from './components/QuaggaFile'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scanning: false,
      result: '',
    }

    this.onDetect = this.onDetect.bind(this)
    this.startScan = this.startScan.bind(this)
    this.stopScan = this.stopScan.bind(this)
  }

  onDetect(result) {
    this.setState({ result, scanning: false })
  }
  startScan() {
    this.setState({ scanning: true })
  }
  stopScan() {
    this.setState({ scanning: false })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://mark.trademarkia.com/services/logo.ashx?sid=86853498" alt="logo" style={{ width: '457px', maxWidth: '80%'}} />
        </div>

        <div style={!this.state.scanning ? { visibility: 'hidden' } : null}>
          <div id="scanner" style={{ width: '500px', height: '300px', margin: 'auto' }} />
        </div>

        { this.state.scanning ?
          <div>
            {navigator.mediaDevices
              ? <QuaggaLive onDetected={this.onDetect} />
              : <QuaggaFile onDetected={this.onDetect} />
            }

            <button onClick={this.stopScan}>Don't scan</button>
          </div>
          :
          <button onClick={this.startScan}> Scan </button>
        }

        <div>
          Scan Result: {this.state.result ? this.state.result.codeResult.code : 'none'}
        </div>
      </div>
    );
  }
}

export default App;
