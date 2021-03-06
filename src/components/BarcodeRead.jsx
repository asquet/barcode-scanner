import React from 'react'
import QuaggaLive from './QuaggaLive'
import QuaggaFile from './QuaggaFile'

export default class BarcodeRead extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scanning: false,
      resultCode: '',
    }

    this.onDetect = this.onDetect.bind(this)
    this.startScan = this.startScan.bind(this)
    this.stopScan = this.stopScan.bind(this)
  }

  startScan() {
    this.setState({ scanning: true })
  }
  stopScan() {
    this.setState({ scanning: false })
  }

  onDetect(result) {
    this.setState({ resultCode: result ? result.codeResult.code : null, scanning: false })
  }

  render() {
    return (
      <div>
        <div style={!this.state.scanning ? { visibility: 'hidden' } : null}>
          <div id="scanner"
               style={{ width: '500px', height: '300px', margin: 'auto', overflow: 'hidden' }} />
        </div>

        {this.state.scanning ?
          <div>
            {navigator.mediaDevices
              ? <QuaggaLive onDetected={this.onDetect} />
              : <QuaggaFile onDetected={this.onDetect} />
            }

            <button onClick={this.stopScan}>Don't scan</button>
          </div>
          :
          <div>
            <button onClick={this.startScan}> Scan </button>
            {' '}OR{' '}
            Enter manually: <input value={this.state.resultCode} onChange={ev => this.setState({ resultCode: ev.target.value})} />
            <br/>
            {
              this.state.resultCode &&
              <button onClick={() => this.props.onCodeChange(this.state.resultCode)}>Proceed</button>
            }
          </div>
        }

      </div>
    )
  }
}