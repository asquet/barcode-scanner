import React, { Component } from 'react';
import './App.css';
import BarcodeRead from './components/BarcodeRead'
import DisplayDress, { getData } from './components/DisplayDress'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      code: null,
      needCode: true,
    }
  }

  onCodeChange(code) {
    this.setState({ code, needCode: false })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://mark.trademarkia.com/services/logo.ashx?sid=86853498" alt="logo" style={{ width: '457px', maxWidth: '80%'}} />
        </div>

        { this.state.needCode &&  <BarcodeRead onCodeChange={code => this.onCodeChange(code)}/> }

        { !this.state.needCode &&
          this.state.code &&
          <DisplayDress code={this.state.code} {...getData(this.state.code)} onBack={() => this.setState({ needCode: true })}/>
        }

      </div>
    );
  }
}

export default App;
