/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import { useEffect, useState } from 'react';
import StorageKeys, {
  defaultStorageValues,
} from '../data/constants/storageKeys';
import parseStorageValues from '../utils/helpers/parseStorageValues';
import './App.css';

const App = () => {
  const [currentStorageValues, setCurrentStorageValues] = useState<{
    [key: string]: any;
  }>(defaultStorageValues);

  const parseAndSetStorageValues = (values: chrome.storage.StorageChange) => {
    const parsedValues = parseStorageValues(values);
    setCurrentStorageValues((values) => ({
      ...values,
      ...parsedValues,
      storageInitiallyChecked: true,
    }));
  };

  const onChangeOnlineState = (value: boolean) => {
    chrome.storage.sync.set({
      [StorageKeys.isOnline]: value,
    });
  };

  useEffect(() => {
    // get storage values in the beginning
    chrome.storage.sync.get(null, parseAndSetStorageValues);

    // listener for storage values
    chrome.storage.onChanged.addListener(parseAndSetStorageValues);

    // Detect when offline
    window.addEventListener('offline', () => onChangeOnlineState(false));
    window.addEventListener('online', () => onChangeOnlineState(true));
  }, []);

  // Detect when offline
  useEffect(() => {
    onChangeOnlineState(navigator.onLine);
  }, [navigator.onLine]);

  return <div className='App' />;
};

export default App;
