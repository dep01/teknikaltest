import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import shallow from 'zustand/shallow';
import {sys_colors, sys_styles, sys_text_styles} from 'rbase-helpers/constants';
import {action, setter, useStore, base_state} from './store';
import {GlobalHeader} from 'rbase-components/molecules';
import {heightPercentageToDP} from 'rbase-helpers/responsive';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
  return state.loading ? null : (
    <View style={sys_styles.scaffold}>
      <GlobalHeader title="SOAL NO 3-6" />
      <FlatList
        data={state.list}
        style={sys_styles.scroll_container}
        onRefresh={() => action.refresh()}
        refreshing={state.is_refresh}
        renderItem={value => (
          <View
            style={{
              width: '100%',
              height: heightPercentageToDP(10),
              flexDirection: 'row',
              borderRadius: 15,
              backgroundColor: sys_colors.text.white,
              alignItems: 'center',
              margin: 5,
              padding:5
            }}>
            <View style={{width: '80%', height: '100%'}}>
              <Text style={{...sys_text_styles.header_medium_black,overflow:'hidden'}} numberOfLines={1}>
                {value.item.title}
              </Text>
              <Text numberOfLines={2} style={{...sys_text_styles.content_medium_black,overflow:'hidden'}}>
                {value.item.body}
              </Text>
            </View>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
              onPress={() => action.removeData(value.index, state)}>
              <Icon name="delete" size={20} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  titleText: {
    ...sys_text_styles.header_medium_black,
  },
});
