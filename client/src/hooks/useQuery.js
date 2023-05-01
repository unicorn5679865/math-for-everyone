import { useErrorStatus } from '../components/ApiErrorHandler/ApiErrorHandler';
import { useEffect, useState } from 'react';

const baseUrl = "http://localhost:5000/api";

export const useQuery = (requestInfo, ...dependencies) => {
  const { setErrorStatusCode } = useErrorStatus();
  const [apiData, setApiData] = useState();

  const [trigger, triggerRequest] = useState();
  
  let url, fetchOptions = {};
  if (typeof requestInfo === 'string') {
      url = `${baseUrl}${requestInfo}`;
  } else {
    fetchOptions = {
      ...fetchOptions, url: `${baseUrl}${fetchOptions.url}`
    }
  }
  
  useEffect (() => {
    fetch(url || fetchOptions, {credentials: 'include'})
      .then(res => {
        if (res.status >= 400) {
          return setErrorStatusCode(res.status)
        }

        return res.json();
      })
      .then(apiData => {
          setApiData(apiData); 
        }
      );
  }, [requestInfo, trigger, ...dependencies]);
  
  return {data: apiData, triggerUpdate: () => triggerRequest({})};
}