import React, { useState, useEffect } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import firebase from "../utils/firebase";
import "firebase/auth/";

import Form from './Form';
import ResultCalculation from './ResultCalculation';
import Footer from './Footer'
import colors from '../utils/colors';

export default function Home() {
    const usuario = firebase.auth().currentUser;

    const [sueldo, setSueldo] = useState(null);
    const [cantidad, setCantidad] = useState(null);
    const [meses, setMeses] = useState(null);
    const [total, setTotal] = useState(null);
    const [errorMessage, setErrorMessage] = useState('')

    var interes = 0.0;

    useEffect(() => {
        if (cantidad && interes && meses) calculate();
        else reset();
    }, [cantidad, interes, meses]);

    if (usuario) {
        console.log(usuario.email);
    }

    const calculate = () => {
        reset();
        if (!cantidad) {
            setErrorMessage('No has ingresado ningun monto');
            console.log(errorMessage)
        } else if (!meses) {
            setErrorMessage('añade los meses');
            console.log(errorMessage)
        } else {

            if (sueldo < 10000) interes = 0.02
            if (sueldo <= 20000 && sueldo > 10000) interes = 0.04
            if (sueldo > 20000) interes = 0.06
            const mensual = (cantidad * (1 + interes)) / meses;
            console.log(mensual)
            setTotal(
                {
                    pmensual: mensual.toFixed(2),
                    ptotal: (mensual * meses).toFixed(2)
                }
            );
        }
    };

    const reset = () => {
        setErrorMessage('');
        setTotal(null)
    }

    return (
        <View>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.background} />
                <Text style={styles.titleApp}>Prestamos</Text>
                <Form
                    setCantidad={setCantidad}
                    setSueldo={setSueldo}
                    setMeses={setMeses}
                />
            </SafeAreaView>
            <ResultCalculation
                usuario={usuario.email}
                cantidad={cantidad}
                interes={interes}
                meses={meses}
                total={total}
                errorMessage={errorMessage}
            />

            <Footer calculate={calculate} />
        </View>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        marginTop: 40,
        alignItems: "center",

    },
    background: {
        backgroundColor: colors.PRIMARY_COLOR,
        height: 200,
        width: '100%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        position: 'absolute',
        zIndex: -1
    },
    titleApp: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 15
    }
});
