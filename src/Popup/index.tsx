/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import logo from '../assets/world.svg';
import '../App.css';
import getMediaUrl from '../utils/helpers/getMediaUrl';
import { useEffect, useState } from 'react';
import StorageKeys, {
  defaultStorageValues,
  storageValuesTypes,
} from '../data/constants/storageKeys';
import parseStorageValues from '../utils/helpers/parseStorageValues';

function App() {
  const [currentStorageValues, setCurrentStorageValues] =
    useState<storageValuesTypes>(defaultStorageValues);

  const { [StorageKeys.isOnline]: isOnline } = currentStorageValues;

  const parseAndSetStorageValues = (values: chrome.storage.StorageChange) => {
    const parsedValues = parseStorageValues(values);
    setCurrentStorageValues((values) => ({
      ...values,
      ...parsedValues,
      storageInitiallyChecked: true,
    }));
  };

  useEffect(() => {
    // get storage values in the beginning
    chrome.storage.sync.get(null, parseAndSetStorageValues);

    // listener for storage values
    chrome.storage.onChanged.addListener(parseAndSetStorageValues);
  }, []);

  const onGoToOptions = () => {
    chrome.tabs.create({
      url: chrome.runtime.getURL('index.html#options'),
    });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={`${getMediaUrl(logo)}`} className='App-logo' alt='logo' />
        <p>Hello, World!</p>
        <p>I'm a Popup!</p>
        {isOnline ? 'You are online' : 'You are offline'}
        <button onClick={onGoToOptions}>Go to options</button>
      </header>
    </div>
  );
}

export default App;
