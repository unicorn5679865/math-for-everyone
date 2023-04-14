import { useErrorStatus } from '../components/ApiErrorHandler/ApiErrorHandler';
import { useEffect, useState } from 'react';

export const useQuery = (fetchOptions) => {
  const { setErrorStatusCode } = useErrorStatus();
  const [apiData, setApiData] = useState();
  
  useEffect (() => {
    fetch(fetchOptions, {credentials: 'include'})
      .then(data => data.json())
      .then(({ code, status, ...apiData }) => {
        if (code > 400) {
          setErrorStatusCode(code)
        } else {
          setApiData(apiData); 
        }
      });
  }, [fetchOptions]);
  
  return {data: apiData};
}