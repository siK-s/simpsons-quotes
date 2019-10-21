import React from 'react';
import Navbar from './components/Navbar';
import DisplayQuotes from './components/DisplayQuotes';

const sampleQuote = {
  quote:
    "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
  character: "Homer Simpson",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: sampleQuote
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <DisplayQuotes quote={this.state.quote} />
      </div>
    );
  }
}
export default App;
