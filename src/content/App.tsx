/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import { useEffect, useState } from "react";
import StorageKeys, {
  defaultStorageValues,
  storageValuesTypes,
} from "../data/constants/storageKeys";
import parseStorageValues from "../utils/helpers/parseStorageValues";

const App = () => {
  const [currentStorageValues, setCurrentStorageValues] =
    useState<storageValuesTypes>(defaultStorageValues);

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
    window.addEventListener("offline", () => onChangeOnlineState(false));
    window.addEventListener("online", () => onChangeOnlineState(true));
  }, []);

  // Detect when offline
  useEffect(() => {
    onChangeOnlineState(navigator.onLine);
  }, [navigator.onLine]);

  return (
    <span
      aria-label="camera"
      role="img"
      style={{
        fontSize: "3rem",
        cursor: "pointer",
      }}
    >
      📷
    </span>
  );
};

export default App;
