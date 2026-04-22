import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importaciones corregidas (sin puntos extra ni espacios invisibles)
import Iniciar_Sesion from './screens/Iniciar_Sesion';
import Nuevo_usuario from './screens/Nuevo_usuario';
import Recuperacion_contrasena from './screens/Recuperacion_contrasena';
import Inicio from './screens/Inicio';
import Historial_de_Siembra from './screens/Historial_de_Siembra';
import Control_de_Siembra from './screens/Control_de_Siembra'; 
import Perfil_del_Operador from './screens/Perfil_del_Operador';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Iniciar_Sesion"
        screenOptions={{ headerShown: false }} 
      >
        <Stack.Screen name="Iniciar_Sesion" component={Iniciar_Sesion} />
        <Stack.Screen name="Nuevo_usuario" component={Nuevo_usuario}/>
        <Stack.Screen name="Recuperacion_contrasena" component={Recuperacion_contrasena}/>
        <Stack.Screen name="Inicio" component={Inicio}/>
        <Stack.Screen name="Historial_de_Siembra" component={Historial_de_Siembra}/>
        <Stack.Screen name="Control_de_Siembra" component={Control_de_Siembra}/>
        <Stack.Screen name="Perfil_del_Operador" component={Perfil_del_Operador} />
      </Stack.Navigator>
      <StatusBar style="auto" /> 
    </NavigationContainer>
  );
}