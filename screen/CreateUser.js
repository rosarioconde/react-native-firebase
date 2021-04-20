import React, { useState } from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";
import firebase from "../database/firebase";

const CreateUser = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        cel: ''
    })
    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value })
    }
    const AddNewUser = async () => {
        if (state.name === '') {
            alert("ingrese el name")
        } else {
            await firebase.db.collection('users').add({
                name: state.name,
                email: state.email,
                cel: state.cel
            })
            alert("guardado")
        }

    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Nombre del usuario"
                    onChangeText={(value) => handleChangeText('name', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Email"
                    onChangeText={(value) => handleChangeText('email', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Celular"
                    onChangeText={(value) => handleChangeText('cel', value)}
                />
            </View>
            <View>
                <Button title="Guardar" onPress={() => AddNewUser()} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    }
})

export default CreateUser