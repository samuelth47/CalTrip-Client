import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    default: {
        flex: 1, 
        alignItems: 'moz-left', 
        justifyContent: 'moz-left'
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    act_pic: {
      position: 'absolute',
      width: '100%', 
      height: 500,
      // margin: 'auto',
      alignItems: 'start',
      top: 0,
    },
    eventTitle: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#333',
    },
    eventDate: {
        fontSize: 20,
        fontStyle: 'italic',
        color: '#333',
    },
    eventDescription: {
        fontSize: 20,
        color: '#333',
        padding: 30,
    },
  });