import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {CustomButton} from '../../components';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../state';

const GameScreen = () => {
  const [counter, SetCounter] = useState(0);
  const onPress1 = () => {
    SetCounter(counter + 1);
  };
  const onPress2 = () => {
    SetCounter(counter - 1);
  };
  const onPress3 = () => {
    SetCounter(0);
  };

  const disPatch = useDispatch();
  const {depositMoney, withdrawMoney, bankruptMoney} = bindActionCreators(
    actionCreators,
    disPatch,
  );
  return (
    <View>
      <Text style={{fontSize: RFValue(80)}}>{counter}</Text>
      <CustomButton onPress={onPress1} buttonTitle="Diposit" />
      <CustomButton onPress={onPress2} buttonTitle="Withdraw" />
      <CustomButton onPress={onPress3} buttonTitle="Bankrupt" />
    </View>
  );
};

export default GameScreen;
