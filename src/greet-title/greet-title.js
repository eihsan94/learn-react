import React from 'react';

class ChangeNameButton extends React.Component { 
    render () {
      return <button className="square" onClick={this.props.onClick}>
      change name
    </button>
    }
  }
  
  class GreetTitle extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: this.props.name}
    }
    names = [
      'ali',
      'ahmad',
      'abu',
      'kasim',
    ];
    changeName() {
      const randomIndex = Math.round(Math.random() * 10);
      const newName = randomIndex <= this.names.length ? this.names[randomIndex] : this.newName;
      this.setState(state => ({ name: newName}))
    }
    render() {
      return <div>
        <h1>hello, {this.state.name}</h1> 
        <ChangeNameButton 
          onClick={() => this.changeName()}
        /> 
      </div>
    }
  }

  export default GreetTitle;