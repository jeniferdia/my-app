import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Iniciar_Sesion({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
        <MaterialCommunityIcons name="robot-industrial" size={70} color="#1f3821" />
        <Text style={styles.logoText}>AGROSEED</Text>
      </View>

      {/* Título Principal */}
      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>Acceso de Operador</Text>
        <Text style={styles.subTitle}>
          Ingrese sus credenciales para iniciar sesión.
        </Text>
      </View>

      {/* Formulario */}
      <View style={styles.form}>
        <Text style={styles.label}>IDENTIFICADOR</Text>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="card-account-details-outline" size={20} color="#666" style={styles.icon} />
          <TextInput 
            style={styles.input} 
            placeholder="usuario" 
            placeholderTextColor="#C4C4C4"
          />
        </View>

        <View style={styles.labelRow}>
          <Text style={styles.label}>CONTRASEÑA</Text>
          <TouchableOpacity
           onPress={() => navigation.navigate("Recuperacion_contrasena")}
          >
            <Text style={styles.forgotText}>¿OLVIDÓ SU CONTRASEÑA?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="lock-outline" size={20} color="#666" style={styles.icon} />
          <TextInput 
            style={styles.input} 
            placeholder="••••••••" 
            secureTextEntry 
            placeholderTextColor="#C4C4C4"
          />
        </View>

        
        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={() => navigation.navigate("Inicio")}
        >
          <Text style={styles.loginButtonText}>INICIAR SESIÓN</Text>
          <MaterialCommunityIcons name="logout-variant" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.divider} />
        <Text style={styles.footerQuestion}>¿No tiene cuenta todavia ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Nuevo_usuario')}>
          <Text style={styles.requestAccount}> CREACIÓN DE CUENTA </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomInfo}>
        <Text style={styles.versionText}>●proyecto </Text>
        <Text style={styles.versionText}>V1</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9c9b2',
    paddingHorizontal: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  logoText: {
    fontSize: 30,
    fontWeight: '900',
    color: '#39753d',
    marginLeft: 10,
    letterSpacing: 1,
  },
  titleContainer: {
    marginTop: 50,
    marginBottom: 40,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  subTitle: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
    lineHeight: 22,
  },
  
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    letterSpacing: 1,
    marginBottom: 8,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  forgotText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333',
    textDecorationLine: 'underline',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EBEBE6',
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 55,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  loginButton: {
    marginTop: 20,
    backgroundColor: '#1B3D14',
    flexDirection: 'row',
    height: 60,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginRight: 10,
  },
  footer: {
    marginTop: 60,
    alignItems: 'center',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#EEE',
    marginBottom: 30,
  },
  footerQuestion: {
    color: '#666',
    fontSize: 15,
    marginBottom: 10,
  },
  requestAccount: {
    color: '#1B3D14',
    fontWeight: '900',
    fontSize: 16,
  },
  bottomInfo: {
    position: 'absolute',
    bottom: 20,
    left: 30,
    right: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  versionText: {
    fontSize: 10,
    color: '#A0A0A0',
  },
});