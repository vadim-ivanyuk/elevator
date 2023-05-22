import React from "react";

interface InitValue {
  calledFloor: number | null;
  setCalledFloor: React.Dispatch<React.SetStateAction<number | null>>;
}

const initValue: InitValue = {
  calledFloor: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCalledFloor: () => {},
};

export const AppContext = React.createContext(initValue);
