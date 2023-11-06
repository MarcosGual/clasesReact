import { onAuthStateChanged } from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { auth } from './config/firebaseConfig';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './components/navigation/StackNav';
import AuthStack from './components/navigation/AuthStack';
import { AuthenticatedUserContext, AuthenticatedUserProvider } from './providers/AuthenticatedUserProvider';
import Lista from './components/Lista';

//componente navegador raíz

function RootNavigator() {
  const {user, setUser} = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsuscribeAuth = onAuthStateChanged(
      auth,
      async (authenticatedUser) => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      }
    )

    return unsuscribeAuth;
  }, [user])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <NavigationContainer independent={true}>
      {user ? <Lista /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
}

