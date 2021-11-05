import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { color } from '../../utils/Constants';

export const styles = StyleSheet.create({
    header: {
        height: 150,
        backgroundColor: color.roxo,
        width: '100%',
        paddingTop: getStatusBarHeight(),
        resizeMode: 'contain',
        position:'absolute'

    },
    container: {
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        flexDirection: 'row',

    },
    subtitle: {
        fontSize: 15,
        color: color.branco,
        marginTop: 21
    }
});
