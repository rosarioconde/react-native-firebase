import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import firebase from "../database/firebase";
const UserList = (props) => {
    //al inicio de la aplicacion no va a tener ningun usuario
    const [users, setUsers] = useState([])

    //llamar a la ejecucion de firebase
    useEffect(() => {
        firebase.db.collection('users').onSnapshot(querySnapshot => {
            const user = [];
            querySnapshot.docs.forEach((doc) => {
                const { name, email, cel } = doc.data()
                //console.log(doc.data())
                users.push({
                    id: doc.id,
                    name,
                    email,
                    cel
                })
            });
            setUsers(users)
        });
    }, [])
    return (
        <ScrollView>
            <Button title="crear usuario" onPress={() => props.navigation.navigate('CreateUser')} />
        </ScrollView>

    )
}

export default UserList