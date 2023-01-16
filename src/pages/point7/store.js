import create from 'zustand';
// const { createHash } = require('crypto');
import {sha256} from 'react-native-sha256';

  export function base_state (props) {
      return {
        loading: props?.loading??false,
        text:props?.text??'',
        hash_text:props?.hash_text??'',
      }
  }
  export const useStore = create(set => (base_state()));
  export const action = {
    initialize: () => {},
    cleanUp: () => {
      useStore.setState();
      useStore.destroy();
    },
    hashData
  };
  export const setter = {
    loading: (value = false) => useStore.setState({loading: value}),
    text: (value = '') => useStore.setState({text: value}),
    hash_text: (value = '') => useStore.setState({hash_text: value}),
  };

  function hashData(value=''){
    setter.text(value);
    const d = new Date();
    if(value==''){
      setter.hash_text('')
    }else{
      sha256(d.toISOString()+value+'priaifabula').then( hash => {
        console.log(d.toDateString()+value+'priaifabula');
        console.log(hash);
        setter.hash_text(hash)
    })
    }
  }