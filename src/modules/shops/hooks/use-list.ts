import React from 'react';
import { IEntity } from '../types';
import { message } from 'antd';
import { Api, Mappers } from '..';

interface IState {
  isLoading: boolean;
  shops: IEntity.Shop[];
}

export const useList = () => {
  const [state, setState] = React.useState<IState>({
    isLoading: false,
    shops: []
  });

  React.useEffect(() => {
    async function load() {
      try {
        const { data } = await Api.List();
        const shops = (data || []).map(Mappers.Shop);
        setState({ shops, isLoading: false });
      } catch (err) {
        setState({ shops: [], isLoading: false });
        message.error('Failed to load shops');
      }
    }
    load();
  }, []);
  const refetch = async () => {
    try {
      setState(prev => ({ ...prev, isLoading: true, isFetching: true }));
      const { data } = await Api.List();
      const shops = (data || []).map(Mappers.Shop);
      setState(prev => ({ ...prev, shops, isLoading: false, isFetching: false }));
    } catch (error) {
      setState({ isLoading: false, shops: [] });
      message.error('Failed to fetch shops');
    }
  };
  

  return { ...state, refetch };
};

/**
 * https://axios-http.com/docs/interceptors
 * https://axios-http.com/docs/req_config
 */
