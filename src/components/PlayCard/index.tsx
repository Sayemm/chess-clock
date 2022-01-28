import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Colors from '../../config/Colors';

interface props {
  playType: string;
  playMinute: number;
}

const PlayCard: React.FC<props> = ({playType, playMinute}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.playType}>{playType}</Text>
      <Text style={styles.playMinute}>{playMinute}</Text>
      <Text style={styles.min}>min</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(24),
    width: hp(24),
    backgroundColor: Colors.blue2,
    borderWidth: wp(0.5),
    borderRadius: wp(3),
    borderColor: Colors.light4,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  min: {
    color: Colors.light4,
    fontSize: RFValue(20),
    fontWeight: '600',
  },
  playMinute: {
    color: Colors.light4,
    fontSize: RFValue(60),
    fontWeight: '900',
  },
  playType: {
    color: Colors.light4,
    fontSize: RFValue(25),
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});

export default PlayCard;
