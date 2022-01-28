/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';

import {CustomButton, PlayCard} from '../../components';
import Colors from '../../config/Colors';
import Padding from '../../config/Padding';

const index = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <PlayCard playType="Bullet" playMinute={1} />
        <PlayCard playType="Blitz" playMinute={3} />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <CustomButton buttonTitle="CUSTOM" />
        <CustomButton buttonTitle="EXIT" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: Padding.paddingHorizontal,
    paddingVertical: Padding.paddingVertical,
    backgroundColor: Colors.blue1,
  },
});

export default index;
