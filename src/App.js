import React from 'react';
import './App.css';
import ErrorBoundary from "./ErrorBoundary";
// import MyComponent from "./MyComponent";
import RouteTest from './RouteTest';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        {/* <MyComponent /> */}
        <RouteTest />
      </ErrorBoundary>
    </div>
  );
}

export default App;
