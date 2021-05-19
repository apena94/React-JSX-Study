// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    return <div>Hi There!</div>;
};

// Take the react component and show it on screen(by calling index.html element)
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);

// if (module.hot) {
//     module.hot.accept();
// } // for auto refresh to index.js changes