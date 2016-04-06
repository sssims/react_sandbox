import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render(){
    let txt = this.props.txt
    return <div>{txt}</div>
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number 
}

App.defaultProps = {
  txt: 'default text value'
}

ReactDOM.render(
  <App txt="this is the props text" />,
  document.getElementById('app')
);

