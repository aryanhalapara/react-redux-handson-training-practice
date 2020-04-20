import React from 'react';
import './App.css';
import HeaderComponent from './component/HeaderComponent';
import AppContainerComponent from './component/AppContainerComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <AppContainerComponent/>
    </div>
  );
}

export default App;
