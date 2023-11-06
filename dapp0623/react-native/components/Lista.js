import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { AuthenticatedUserContext } from '../providers/AuthenticatedUserProvider';

const Lista = () => {
    const listaDeCompras = [
        { id: 1, nombre: 'pan' },
        { id: 2, nombre: 'yogur' },
        { id: 3, nombre: 'carne' }
    ]

    const { user, setUser } = useContext(AuthenticatedUserContext);

    return (
        <View style={styles.listContainer}>
            <Text style={styles.texto}>{user.email} || {user.uid === 'XQzbAHgmeedvzL9ItJqNco50XtF' ? 'Admin' : 'User'}</Text>
            <Text style={styles.texto}>Lista de Compras</Text>
            <FlatList
                data={listaDeCompras}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemLista}>
                        <Text>{item.nombre}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        padding: 10,
        borderColor: 'black',
        borderWidth: 2,
        height: 200,
        width: 200,
        marginTop: 50
    },
    texto: {
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
    itemLista: {
        padding: 10,
        marginBottom: 1
    }
})

export default Lista;