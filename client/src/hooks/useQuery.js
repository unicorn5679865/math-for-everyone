import { useErrorStatus } from '../components/ApiErrorHandler/ApiErrorHandler';
import { useCallback, useEffect, useState } from 'react';

const baseUrl = "http://localhost:5000/api";

export const useQuery = (url, dependencies=[]) => {
  const { setErrorStatusCode } = useErrorStatus();
  const [apiData, setApiData] = useState();

  const fetchData = useCallback(() => {
    let dataUrls;
    if (typeof url === 'string') {
      dataUrls = [url];
    } else {
      dataUrls = url
    }

    Promise.all(
      dataUrls.map(url => fetch(baseUrl + url, {credentials: 'include'}))
    ).then(responses => {
      const failedResponse = responses.find(res => !res.ok || res.status >= 400);
      if (failedResponse) {
        setErrorStatusCode(failedResponse.status);
        return Promise.reject(failedResponse);
      }

      return Promise.all(responses.map(res => res.json()));
    })
    .then(apiData => {
        setApiData(apiData.length === 1 ? apiData[0] : apiData); 
    })

  }, [url, ...dependencies])

  useEffect (() => {
    fetchData();
  }, [fetchData]);
  
  return {data: apiData, refresh: fetchData};
}