import React, { useState, useEffect}from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors';

export default function Form(props) {

    const { setCantidad, setMeses, setSueldo } = props;
    var items = {
        opt1: [
            { label: '3 meses', value: 3 },
            { label: '6 meses', value: 6 },
        ],
        opt2: [
            { label: '3 meses', value: 3 },
            { label: '6 meses', value: 6 },
            { label: '9 meses', value: 9 },
        ],
        opt3: [
            { label: '3 meses', value: 3 },
            { label: '6 meses', value: 6 },
            { label: '9 meses', value: 9 },
            { label: '12 meses', value: 12 },
            { label: '24 meses', value: 24 },
        ]
    }

    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput
                    placeholder="sueldo"
                    keyboardType="numeric"
                    style={styles.input}
                    onChange={(e) => setSueldo(e.nativeEvent.text)}
                />
            </View>
            <View style={styles.viewInputs}>
                <TextInput
                    placeholder="Cantidad"
                    keyboardType="numeric"
                    style={styles.input}
                    onChange={(e) => setCantidad(e.nativeEvent.text)}
                />
            </View>
            <RNPickerSelect
                style={pickerSelectStyles}
                onValueChange={(value) => setMeses(value)}
                placeholder={{
                    label: 'Seleccione plazos...',
                    value: null,
                }}
                items={items.opt1}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    viewForm: {
        bottom: 0,
        width: '85%',
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: 'center'
    },
    viewInputs: {
        flexDirection: 'row',
    },
    input: {
        height: 60,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: '100%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 20,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#fff'
    },
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#fff',
        marginLeft: -5,
        marginRight: -5,
    }
});