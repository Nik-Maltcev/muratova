import React, { createContext, useContext, useState, useEffect } from 'react';

interface DesignContextType {
  version: number;
  setVersion: (v: number) => void;
  designName: string;
}

const DESIGN_NAMES: Record<number, string> = {
  1: 'Classic',
  2: 'Modern',
  3: 'Editorial',
  4: 'Swiss',
  5: 'Noir'
};

const DesignContext = createContext<DesignContextType>({ 
  version: 1, 
  setVersion: () => {},
  designName: 'Classic'
});

export const useDesign = () => useContext(DesignContext);

export const DesignProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [version, setVersion] = useState(1);

  return (
    <DesignContext.Provider value={{ version, setVersion, designName: DESIGN_NAMES[version] }}>
      {children}
    </DesignContext.Provider>
  );
};