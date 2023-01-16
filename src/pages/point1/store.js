import create from 'zustand';
  export function base_state (props) {
      return {
        loading: props?.loading??false,
        name:props?.name??'',
        age:props?.age??''
      }
  }
  export const useStore = create(set => (base_state()));
  export const action = {
    initialize: () => {},
    cleanUp: () => {
      useStore.setState();
      useStore.destroy();
    },
  };
  export const setter = {
    loading: (value = false) => useStore.setState({loading: value}),
    name: (value = '') => useStore.setState({name: value}),
    age: (value = '') => useStore.setState({age: value}),
    
  };
