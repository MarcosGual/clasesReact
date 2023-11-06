import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import { Alert, Button, Text, TextInput, View } from "react-native"
import { auth } from "../../config/firebaseConfig";

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email !== '' && password !== '') {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => console.log('Inicio de sesión exitoso'))
                .catch(error => Alert.alert('Error de Inicio de Sesión', error.message))
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Inicio de Sesión</Text>
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
            <View>
                <Button title="Iniciar Sesión" onPress={handleLogin} />
                <Button title="Registrarse" onPress={() => navigation.navigate('Signup')} />
            </View>
        </View>
    )
}