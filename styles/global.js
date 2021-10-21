import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    default: {
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'flex-start'
    },
    month: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
    },
    // container for the homepage
    homepage: {
      flex: 1,
      backgroundColor: '#fff',
    },

    // where the events go
    intro: {
      flex: 1,
      textAlign: 'center',
      justifyContent: 'flex-start'
    },

    // wrapper for both "month" and "+" buttons
    wrapper: {
      padding: 20,
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    },

    // month button
    buttonv: {
      paddingBottom: 20,
      // paddingBottom: 10,
      // paddingTop: 700,
      flex: 1,
      // alignItems: 'flex-start',
      justifyContent: 'center',
      // width: '50%',
    },

    // text style of +
    plus: {
      fontSize: 50,
      color: '#C0C0C0',
    },

    // style for + button
    plusButton: {
      width: 50,
      height: 50,
      // backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'flex-end',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
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
  });
