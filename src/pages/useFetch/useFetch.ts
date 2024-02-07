import axios from 'axios';
import React from 'react';
import { session } from 'services';

const token =session.get();
 const baseURL = 'http://137.184.188.134:4000/api';

interface Params {
  url: '/shops';
}

interface Result {
  data?: any;
  isLoading: boolean;
  isFetching: boolean;
  refetch(): void;
}

export function useFetch({ url }: Params): Result {
  const [state, setState] = React.useState<Omit<Result, 'refetch'>>({
    isLoading: true,
    isFetching: false
  });

  const refetch = async () => {
    try {
      setState(prev => ({ ...prev, isFetching: true }));

      const { data } = await axios.get(baseURL + url, { headers: { 'x-auth-token': token } });
      setState(prev => ({ ...prev, isFetching: false, data: data.data }));
    } catch (error) {
      setState({ isLoading: false, isFetching: false });
    }
  };

  React.useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(baseURL + url, { headers: { 'x-auth-token': token } });
        setState(prev => ({ ...prev, isLoading: false, data: data.data }));
      } catch (error) {
        setState({ isLoading: false, isFetching: false });
      }
    }

    fetchData();
  }, []);

  return { ...state, refetch };
}