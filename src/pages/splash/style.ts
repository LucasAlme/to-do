import { StyleSheet } from 'react-native';
import { color } from '../../utils/Constants';

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: color.roxo,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        marginHorizontal: 108,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
       
        color: color.branco,
       
    },
    text: {
        fontSize: 18,
        color: color.branco,
        paddingTop: 40,
        textAlign: 'center'
    }

});
