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
      justifyContent: 'flex-end',
    },
    act_pic: {
      position: 'absolute',
      width: '100%', 
      height: '30%',
      alignItems: 'start',
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
  });