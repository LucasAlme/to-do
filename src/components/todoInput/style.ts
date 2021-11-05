import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { color } from '../../utils/Constants';

export const styles = StyleSheet.create({
    input: {
        height: 56,
        backgroundColor: color.branco,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        top: 122,
        paddingHorizontal: 20,
        flexDirection: 'row',

    },
    text: {
        color: color.cinzaEscuro,
        alignSelf: 'flex-start',
        paddingVertical: 19,
        fontSize: 14
    },
    inside: {
        height: '100%',
        borderLeftWidth: 1,
        marginLeft: 100,
        borderLeftColor: color.cinzaClaro
    }
});
