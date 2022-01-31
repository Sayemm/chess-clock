import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

import Colors from '../../config/Colors';

interface props {
  buttonTitle: string;
  onPress?: () => void;
}

const CustomButton: React.FC<props> = ({buttonTitle, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(6),
    width: hp(24),
    backgroundColor: Colors.green0,
    borderWidth: wp(0.5),
    borderRadius: wp(3),
    borderColor: Colors.light0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.light4,
    fontWeight: '600',
    fontSize: RFValue(20),
  },
});

export {CustomButton};
