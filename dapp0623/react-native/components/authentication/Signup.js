import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import { Text, TextInput, View, Button, Alert } from "react-native"
import { auth } from "../../config/firebaseConfig";

export default function Signup({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const handleSignup = () => {
        if (email !== '' && password !== '' && password2 !== '') {
            if (password === password2) {
                createUserWithEmailAndPassword(auth, email, password)
                    .then(() => Alert.alert('Registro exitoso'))
                    .catch(error => Alert.alert('Error en el registro', error.message))
            } else {
                Alert.alert('Verifique que las contraseñas sean iguales.')
            }
        } else {
            Alert.alert('Complete los campos.')
        }
    }


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Registro</Text>
            <TextInput
                placeholder="Correo Electrónico"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                placeholder="Contraseña"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TextInput
                placeholder="Confirmar Contraseña"
                secureTextEntry
                value={password2}
                onChangeText={(text) => setPassword2(text)}
            />
            <View>
                <Button title="Registrarse" onPress={handleSignup} />
                <Button title="Volver a Login" onPress={() => navigation.navigate('Login')} />
            </View>
        </View>
    )
}