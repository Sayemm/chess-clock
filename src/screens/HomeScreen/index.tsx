import React from 'react';
import {StyleSheet, View} from 'react-native';

import {PlayCard} from '../../components';
import Colors from '../../config/Colors';
import Padding from '../../config/Padding';

const index = () => {
  return (
    <View style={styles.container}>
      <PlayCard />
      <PlayCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Padding.paddingHorizontal,
    paddingVertical: Padding.paddingVertical,
    backgroundColor: Colors.blue1,
  },
});

export default index;
