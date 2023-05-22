import React, { useMemo, useState } from "react";
import { AppContext } from "@/shared/utils";

export const withAppContext = (component: () => React.ReactNode) => () => {
  const [calledFloor, setCalledFloor] = useState<number | null>(null);

  const initValue = useMemo(
    () => ({ calledFloor, setCalledFloor }),
    [calledFloor]
  );

  return (
    <AppContext.Provider value={initValue}>{component()}</AppContext.Provider>
  );
};
