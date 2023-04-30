import {createContext} from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import { useMemo, useState, useContext, useEffect } from 'react';
import { useAuth } from "../../hooks/useAuth"

const ErrorStatusContext = createContext();


export const ApiErrorHandler = ({ children }) => {
  const { logout } = useAuth();
  const [errorStatusCode, setErrorStatusCode ] = useState();


  useEffect(() => {
    if (!errorStatusCode) return;

    if (errorStatusCode === 401 || errorStatusCode === 403) {
      logout();
    }

    setErrorStatusCode(null);
  }, [errorStatusCode]);

  const contextPayload = useMemo(
    () => ({ setErrorStatusCode }),

    [setErrorStatusCode]
  );

  return (
    <ErrorStatusContext.Provider value={contextPayload}>
      {children}
    </ErrorStatusContext.Provider>
  )
}

export const useErrorStatus = () => useContext(ErrorStatusContext);