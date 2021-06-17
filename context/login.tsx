import React, { FC, createContext, useContext, useState } from 'react';


const LoginContext = createContext<LoginContextValue>({  isLogged: false, onChange: () => {} });

interface LoginContextValue {
  isLogged: boolean;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginProvider: FC = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);


  const value = { isLogged, onChange: setIsLogged };

  return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>;
};

const useLoginContext = () => {
  const context = useContext(LoginContext);

  if (context === undefined) throw new Error('LoginProvider has no context!');
  return context;
};

export { LoginProvider, useLoginContext };
