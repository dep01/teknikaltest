import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import shallow from 'zustand/shallow';
import {sys_colors, sys_styles, sys_text_styles} from 'rbase-helpers/constants';
import {action, setter, useStore, base_state} from './store';
import {GlobalHeader} from 'rbase-components/molecules';
import { CustomButton } from 'rbase-components/atoms';
export default ({navigation}) => {
  const state = {
    ...useStore(state => base_state(state), shallow),
  };

  useEffect(() => {
    action.initialize();
    return () => {
      action.cleanUp();
    };
  }, [navigation, action]);
  return (
    <View style={sys_styles.scaffold}>
      <GlobalHeader title="SOAL NO 9" />
      <View style={sys_styles.container_center_screen}>
        <Text style={styles.titleText}>Selamat datang {state.username}</Text>
        <CustomButton title='LOGOUT'  onPress={()=>action.doLogout(navigation)} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  titleText: {
    ...sys_text_styles.header_medium_black,
    marginBottom:10
  },
});
