import axios from "axios";
import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, FlatList, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function BlocNotas() {
    const [note, setNote] = useState('');
    const [notes, setNotes] = useState([]);

    useEffect(() => {

        retrieveNotes();
    }, []);

    //obtener todas las notas
    const retrieveNotes = async () => {
        const keys = await AsyncStorage.getAllKeys(); //obtener todas las llaves que haya almacenadas
        const filteredKeys = keys.filter(key => key.startsWith('_note'));
        console.log(keys)
        //recuperar las notas guardadas en memoria local
        const storedNotes = await AsyncStorage.multiGet(filteredKeys);
        setNotes(storedNotes.map(([key, value]) => ({ key, value })))
    }

    const addNote = async () => {
        if (note) {
            console.log('agregando nota... ' + note)
            const key = `_note${Date.now()}`;
            await AsyncStorage.setItem(key, note);
            retrieveNotes();
            setNote('');
            console.log('nota agregada')
        }
    }

    const deleteNote = async (key) => {
        if (key) {
            try {
                await AsyncStorage.removeItem(key);
                retrieveNotes();
            } catch (error) {
                console.log(error.message);
            }
        }
    }

    const clear = async()=>{
        try{
            // AsyncStorage.clear(); //método para limpiar la memoria
            retrieveNotes();
        }catch(error){
            console.log(error.message);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>Bloc De Notas</Text>
            <TextInput
                placeholder="Escriba una nota..."
                value={note}
                onChangeText={text => setNote(text)}
                style={styles.input}
            />
            <Button
                title="Agregar Nota"
                onPress={addNote}
                style={styles.button}
            />
            <Button
                title="Eliminar Todas"
                onPress={clear}
                color='red'
                style={styles.button}
            />
            <FlatList
                data={notes}
                keyExtractor={item => item.key}
                renderItem={({ item }) => (
                    <View style={styles.noteContainer}>
                        <Text style={styles.note}>{item.value}</Text>
                        <Button
                            title="Eliminar"
                            color="red"
                            onPress={() => deleteNote(item.key)}
                        />
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainTitle: {
        fontSize: 20,
        margin: 10,
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    },
    noteContainer: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 10
    },
    note: {
        fontSize: 16,
        marginBottom: 5
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 5
    },
    button: {
        marginBottom: 20
    }
});