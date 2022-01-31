import React from 'react';
import {Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {CustomButton} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators, State} from '../../state';

const GameScreen = () => {
  // const [counter, SetCounter] = useState(0);
  // const onPress1 = () => {
  //   SetCounter(counter + 1);
  // };
  // const onPress2 = () => {
  //   SetCounter(counter - 1);
  // };
  // const onPress3 = () => {
  //   SetCounter(0);
  // };

  const disPatch = useDispatch();
  const {depositMoney, withdrawMoney, bankruptMoney} = bindActionCreators(
    actionCreators,
    disPatch,
  );

  const amount = useSelector((state: State) => state.bank);

  return (
    <View>
      <Text style={{fontSize: RFValue(80)}}>{amount}</Text>
      <CustomButton onPress={() => depositMoney(1000)} buttonTitle="Diposit" />
      <CustomButton onPress={() => withdrawMoney(500)} buttonTitle="Withdraw" />
      <CustomButton onPress={() => bankruptMoney()} buttonTitle="Bankrupt" />
    </View>
  );
};

export default GameScreen;
