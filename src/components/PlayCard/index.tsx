import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Colors from '../../config/Colors';

const PlayCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>Hello Lets Play</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(24),
    width: hp(24),
    backgroundColor: Colors.blue2,
    borderWidth: wp(1),
    borderRadius: wp(3),
    borderColor: Colors.light4,
  },
});

export default PlayCard;
