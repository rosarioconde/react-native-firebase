import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import firebase from "../database/firebase";
import { ListItem, Avatar } from "react-native-elements";
const UserList = (props) => {
    //al inicio de la aplicacion no va a tener ningun usuario
    const [users, setUsers] = useState([])

    //llamar a la ejecucion de firebase
    useEffect(() => {
        firebase.db.collection('users').onSnapshot(querySnapshot => {
            const users = [];
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
            {
                users.map(user => {
                    return (
                        <ListItem key={user.id}>
                            <ListItem.Chevron />
                            <Avatar source={{ 
                                uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', }}
                                rounded />
                            <ListItem.Content>
                                <ListItem.Title>{user.name}</ListItem.Title>
                                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    );
                })
            }
        </ScrollView>
        //recorrer lista de usuarios

    )
}

export default UserList