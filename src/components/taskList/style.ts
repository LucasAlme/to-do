import { StyleSheet } from 'react-native';
import { color } from '../../utils/Constants';

export const styles = StyleSheet.create({
    container: {

        width: '100%',
        height: 48,
        justifyContent: 'center',
        marginTop: 152
    },
    gradient: {
        height: '100%',
        width: '100%',
    },
    title: {
        color: color.cinzaEscuro2,
        fontSize: 14,
        paddingBottom: 8
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    checkBoxStyle: {
        height:'100%',
        paddingTop: 15
    }
});
