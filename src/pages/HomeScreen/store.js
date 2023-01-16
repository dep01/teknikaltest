import { SESSION_USER } from 'rbase-helpers/constants';
import { clearSession, getSession } from 'rbase-helpers/session';
import { routes_name } from 'rbase-routes';
import create from 'zustand';
export function base_state(props) {
  return {
    loading: props?.loading ?? false,
    username:props?.username??'',
  };
}
export const useStore = create(set => base_state());
export const action = {
  initialize: async() => {
    const username = await getSession(SESSION_USER.USERNAME);
    setter.username(username);
  },
  cleanUp: () => {
    useStore.setState();
    useStore.destroy();
  },
  doLogout

};
export const setter = {
  loading: (value = false) => useStore.setState({loading: value}),
  username: (value = '') => useStore.setState({username: value}),
};

async function doLogout(navigation) {
  await clearSession();
  navigation.popToTop();
  navigation.replace(routes_name.LOGIN);
}