import {createContext} from 'react';
import { useHistory } from 'react-router-dom';
import { useMemo, useState, useContext } from 'react';
import { useAuth } from "../../hooks/useAuth"

const ErrorStatusContext = createContext();


export const ApiErrorHandler = ({ children }) => {

  const { logout } = useAuth();
//   const history = useHistory();
  const [errorStatusCode, setErrorStatusCode ] = useState();
  

//   useEffect(() => {
//     const unlisten = history.listen(() => setErrorStatusCode(undefined));

//     return unlisten;
//   }, [])
  

  const renderContent = () => {
    if (errorStatusCode === 401 || errorStatusCode === 403) {
        console.error(`Request failed with status: ${errorStatusCode}`);
        logout();
    }

    return children;
  }
  

  const contextPayload = useMemo(
    () => ({ setErrorStatusCode }),

    [setErrorStatusCode]
  );
  

  return (
    <ErrorStatusContext.Provider value={contextPayload}>
      {renderContent()}
    </ErrorStatusContext.Provider>
  )
}

export const useErrorStatus = () => useContext(ErrorStatusContext);