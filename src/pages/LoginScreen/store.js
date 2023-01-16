import {SESSION_USER} from 'rbase-helpers/constants';
import {setSession} from 'rbase-helpers/session';
import {routes_name} from 'rbase-routes';
import {ToastAndroid} from 'react-native';
import create from 'zustand';

export function base_state(props) {
  return {
    loading: props?.loading ?? false,
    showPassword: props?.showPassword ?? false,
    username: props?.username ?? '',
    password: props?.password ?? '',
  };
}
export const useStore = create(set => base_state());
export const action = {
  initialize: () => {},
  cleanUp: () => {
    useStore.setState();
    useStore.destroy();
  },
  doLogin,
};
export const setter = {
  loading: (value = false) => useStore.setState({loading: value}),
  password: (value = '') => useStore.setState({password: value}),
  username: (value = '') => useStore.setState({username: value}),
  showPassword: () =>
    useStore.setState({showPassword: !useStore.getState().showPassword}),
};

async function doLogin(navigation, state) {
  const cur_state = base_state(state);
  if (cur_state.username == '' && cur_state.password == '') {
    ToastAndroid.show(
      'Username and password must be filled!',
      ToastAndroid.BOTTOM,
    );
  } else {
    await setSession(SESSION_USER.USERNAME, cur_state.username);
    await setSession(SESSION_USER.PASSWORD, cur_state.password);
    navigation.replace(routes_name.LAYOUT);
  }
}
