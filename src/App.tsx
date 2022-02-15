import React from 'react';
import './App.scss';
import MainPage from './components/MainPage';
import '@panenco/ui/lib/styles.css';
// import svgSprite from '!file-loader!@panenco/ui/lib/spritesheet.svg';

function App() {
  return (
    <div className="App">
      <MainPage/>

    </div>
  );
}

export default App;
