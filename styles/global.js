import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    default: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    month: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
    },
    buttonv: {
      padding: 20,
      // paddingBottom: 10,
      paddingTop: 700,
      flex: 1,
      // alignItems: 'flex-start',
      justifyContent: 'center',
      // width: '50%',
    },
    button: {
      fontSize: 2,
      justifyContent: 'flex-end',
    },
    login_button: {
      width: '200px',
      height: '50',
      marginBottom: 100,
      // backgroundColor: '#8C2131',

    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    act_pic: {
      position: 'absolute',
      width: '100%',
      height: '30%',
      alignItems: 'flex-start',
      top: 0,
    },
    eventTitle: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#333',
        position: 'absolute',
        top: '30%',
    },
    eventDate: {
        fontSize: 20,
        fontStyle: 'italic',
        color: '#333',
        position: 'absolute',
        top: '40%',
    },
    eventDescription: {
        fontSize: 20,
        color: '#333',
        padding: 30,
        position: 'absolute',
        top: '50%',
    },
    account: {
      flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    inputBox: {
      borderWidth: 1,
      borderRadius: 5,
      padding: 5,
    },
    logo: {
      width: "100%",
      height: "10%",
      marginBottom: 300,
    }
  });
