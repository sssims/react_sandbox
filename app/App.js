import React from 'react';

class App extends React.Component {
  render(){
    return <Button>I <Heart/> React</Button> 
  }
}

class Button extends React.Component {
  render() {
    return <button>{this.props.children}</button>
  }
}

//const Heart = () => <span className="glyphicon glyphicon-heart"></span>
const Heart = () => <span>Heart</span>

export default App
