enum StorageKeys {
  exampleKey
};

export default StorageKeys;

export enum ExampleKeyOptions {
  option1,
  option2
};

export const defaultStorageValues = {
  [StorageKeys.exampleKey]: ExampleKeyOptions.option1,
};