// useToggle.ts
import { useState, useCallback } from 'react';

type UseToggleReturnType = {
  value: boolean;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
};

const useToggle = (initialValue?: boolean): UseToggleReturnType => {
  const [value, setValue] = useState<boolean>(initialValue ?? false);

  const toggle = useCallback(() => {
    setValue((prevValue) => !prevValue);
  }, []);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  return {
    value,
    toggle,
    setTrue,
    setFalse,
  };
};

export default useToggle;
