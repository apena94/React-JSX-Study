// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

const getButtonText = () => {
    return 'Click on me! 22';
}

// JSX cant show/reference Js object, especialyl where showing text

// Create a react component
const App = () => {
    const buttonText = 'Click Me!'

    return (
        <div>
            Hi There!
            {/* traditional: <button style="background-color: blue, color: white">Submit</button> */}
            <button style={{ backgroundColor: 'blue', color: 'white' }}>Submit</button>
            {/* can use single curly brace, to insert variables */}
            <button>{buttonText}</button>
            <button>{getButtonText()}</button>
        </div>
    );
};

// Take the react component and show it on screen(by calling index.html element)
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

// if (module.hot) {
//     module.hot.accept();
// } // for auto refresh to index.js changes