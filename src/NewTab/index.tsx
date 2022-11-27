/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import world from '../assets/world.svg';
import '../App.css';
import getMediaUrl from '../utils/helpers/getMediaUrl';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={`${getMediaUrl(world)}`} className='App-logo' alt='world' />
        <p>Hello, World!</p>
        <p>I'm a Newtab!</p>
      </header>
    </div>
  );
}

export default App;
