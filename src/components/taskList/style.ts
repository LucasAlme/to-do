import { StyleSheet } from 'react-native';
import { color } from '../../utils/Constants';

export const styles = StyleSheet.create({
    container: {

        width: '100%',
        height: 48,
        justifyContent: 'center',

    },
    gradient: {
        height: '100%',
        width: '100%',
    },
    title: {
        fontSize: 14,
        paddingLeft: 31,
        color: color.cinzaEscuro2
    },
    titleChecked: {
        color: color.verde,
        fontSize: 14,
        paddingLeft: 31,
        textDecorationColor: color.verde,
        textDecorationLine: 'line-through'
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

    },
    button: {
        height: 24,
        width: 24,
        borderWidth: 1.5,
        borderColor: color.cinza,
        borderRadius: 4,
        marginLeft: 24,

    },
    buttonChecked: {
        height: 24,
        width: 24,
        borderWidth: 1.5,
        borderColor: color.verde,
        borderRadius: 4,
        marginLeft: 24,
        backgroundColor: color.verde
    },
    rightContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '82%'
    }

});
