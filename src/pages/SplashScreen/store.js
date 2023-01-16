import create from 'zustand';
import {routes_name} from 'rbase-routes';
import { getSession } from 'rbase-helpers/session';
import { SESSION_USER } from 'rbase-helpers/constants';
export const useStore = create(set => ({
  loading: false,
}));
export const action = {
  initialize: async navigation => {
    const username =await getSession(SESSION_USER.USERNAME);
    if(username){
      navigation.replace(routes_name.LAYOUT);
    }else{
      navigation.replace(routes_name.LOGIN);
    }
  },
  cleanUp: () => {
    useStore.setState();
    useStore.destroy();
  },
};
export const setter = {
  loading: (value = false) => useStore.setState({loading: value}),
};
