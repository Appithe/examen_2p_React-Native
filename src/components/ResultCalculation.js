import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function ResultCalculation(props) {
    const { usuario ,cantidad, interes, meses, total, errorMessage } = props;

    return (
        <View style={styles.content}>
            {total && (
                <View style={styles.boxResult}>
                    <Text style={styles.title}>Prestamo para ${usuario}</Text>
                    <DataResult style={styles.texto} title="Cantidad solicitada $" value={`${cantidad}`} />
                    <DataResult style={styles.texto} title="% Interes: " value={`${interes}`} />
                    <DataResult style={styles.texto} title="Plazos: " value={`${meses} meses`} />
                    <DataResult style={styles.texto} title="Pago mensual $" value={`${total.pmensual}`} />
                    <DataResult style={styles.texto} title="Total a pagar: $" value={`${total.ptotal}`} />
                </View>
            )}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    );


}

function DataResult(props) {
    const { title, value } = props;

    return (
        <View style={styles.datar}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 40
    },
    boxResult: {
        padding: 30,
    },
    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    error: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20
    },
    datar: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});