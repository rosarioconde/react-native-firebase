import React from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";
const CreateUser = () => {
    return (
        <ScrollView>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Nombre del usuario"></TextInput>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Email"></TextInput>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Celular"></TextInput>
            </View>
            <View>
                <Button title="Guardar"></Button>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    }
})

export default CreateUser