import { useErrorStatus } from '../components/ApiErrorHandler/ApiErrorHandler';
import { useCallback, useEffect, useState } from 'react';

const baseUrl = "http://localhost:5000/api";

export const useQuery = (url, dependencies=[]) => {
  const { setErrorStatusCode } = useErrorStatus();
  const [apiData, setApiData] = useState();

  const fetchData = useCallback(() => {
    return fetch(baseUrl + url, {credentials: 'include'})
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
  }, [url, ...dependencies])

  useEffect (() => {
    fetchData();
  }, [fetchData]);
  
  return {data: apiData, refresh: fetchData};
}