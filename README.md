# React Basic 
- [create the app] [https://reactjs.org/docs/create-a-new-react-app.html#create-react-app]

```
import React from 'react';
import Game from './tic-tac-toe/tic-tac-toe'; // import the needed component
import GreetTitle from './greet-title/greet-title'; // import the needed component
import './App.css';



class App extends React.Component {
  render() {
    return <div>
      <GreetTitle  name="sara" age="40"/> // name="sara" age="40" is the input data in react they called it as props
      <Game /> // the selector of the imported component
    </div>
  }
}

export default App;

```

- advanced use case
```
import React from 'react';

class ChangeNameButton extends React.Component { 
    render () {
      return <button className="square" onClick={this.props.onClick}> // output declaration
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
          onClick={() => this.changeName()} // output declaration implementation
        /> 
      </div>
    }
  }

  export default GreetTitle; // exporting the component so that anyone can use it
```
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
