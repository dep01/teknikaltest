import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import shallow from 'zustand/shallow';
import {sys_colors, sys_styles, sys_text_styles} from 'rbase-helpers/constants';
import {action,setter,useStore,base_state} from './store';
import { CustomInput } from 'rbase-components/atoms';
import { GlobalHeader } from 'rbase-components/molecules';
export default ({navigation}) => {
  const state = {
    ...useStore(
      state => (base_state(state)),
      shallow,
    ),
  };

useEffect(() => {
  action.initialize();
  return () => {
    action.cleanUp();
  };
}, [navigation, action]);
  return (
    <View style={sys_styles.scaffold}>
      <GlobalHeader title='SOAL NO 7' />
      <View style={sys_styles.container}>
        <Text style={styles.titleText}>HASH VALUE : {'\n'+state.hash_text}</Text>
        <CustomInput label='Nama Depan' onChangeText={(val)=>action.hashData(val)} value={state.text} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  titleText: {
    ...sys_text_styles.header_medium_black,
    textAlign:'left',
    marginBottom:10
  }
});
  