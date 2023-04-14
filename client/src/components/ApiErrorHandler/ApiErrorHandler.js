import {createContext} from 'react';
import { useHistory } from 'react-router-dom';
import { useMemo, useState, useContext } from 'react';

const ErrorStatusContext = createContext();


export const ApiErrorHandler = ({ children }) => {
//   const history = useHistory();
  const [errorStatusCode, setErrorStatusCode ] = useState();
  

//   useEffect(() => {
//     const unlisten = history.listen(() => setErrorStatusCode(undefined));

//     return unlisten;
//   }, [])
  

  const renderContent = () => {
    if (errorStatusCode) {
        alert(`Request failed with status: ${errorStatusCode}`)
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