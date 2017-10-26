import { Component } from 'react';
import Dice, { dice } from './Dice';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const ROLL_MS = 50;

export default class App extends Component {
  state = {};
  handleRoll = async (number, die) => {
    if (this.state.dieFace) {
      return;
    }
    this.setState({ die });
    let times = 6;
    while (times--) {
      this.showDie();
      await sleep(ROLL_MS);
    }
    this.setState({ number, dieFace: false });
  };
  showDie() {
    this.setState({
      dieFace: String.fromCharCode(9856 + Math.floor(Math.random() * 6))
    });
  }
  render() {
    const { number = '', dieFace, die } = this.state;
    return (
      <div style={{ height: '100%' }}>
        <div
          style={{
            height: '50%',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            ...(die === undefined ? {} : dice[die].style)
          }}
        >
          <h1>{dieFace || number}</h1>
        </div>
        <div
          style={{
            height: '50%',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Dice onRoll={this.handleRoll} />
        </div>
      </div>
    );
  }
}
