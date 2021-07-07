import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import Dialog, {
  DialogFooter,
  DialogButton,
  DialogContent,
} from 'react-native-popup-dialog';
import Colors from '../../constants/Colors';
import { chooseDevice } from '../../store/actions/cart';

const ChooseDevicePopup = ({ togglePopup, setTogglePopup }) => {
  const dispatch = useDispatch();
  return (
    <View>
      <Dialog
        width={0.5}
        visible={togglePopup}
        footer={
          <DialogFooter>
            <DialogButton
              text='Device A'
              onPress={() => {
                dispatch(chooseDevice('deviceA'));
                setTogglePopup(false);
              }}
            />
            <DialogButton
              style={styles.button}
              text='Device B'
              onPress={() => {
                dispatch(chooseDevice('deviceB'));
                setTogglePopup(false);
              }}
            />
          </DialogFooter>
        }>
        <DialogContent>
          <Text style={styles.dialogContent}>
            Select the device you want to order to:{' '}
          </Text>
        </DialogContent>
      </Dialog>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
  },
  dialogContent: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'FiraSans_700Bold',
    color: Colors.lightGreen,
  },
  button: {
    fontSize: 5,
    color: Colors.blue,
  },
});

export default ChooseDevicePopup;
