import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const Recuperacion_Contrasena = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSendCode = () => {
    // Aquí iría la lógica para enviar el código, e.g., llamar a una API
    alert(`Se ha enviado un código de verificación a ${email}`);
    
  };

  const handleBackToLogin = () => {
    navigation.navigate('Iniciar_Sesion'); 
    
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
          
              <View style={styles.header}>
                <MaterialCommunityIcons name="robot-industrial" size={70} color="#1f3821" />
                <Text style={styles.logoText}>AGROSEED</Text>
              </View>

        
        <Text style={styles.descriptionText}>
          Ingrese su dirección de correo electrónico  para recibir un código de
          acceso temporal y restablecer su acceso al sistema.
        </Text>

        
        <View style={styles.inputCard}>
          <Text style={styles.inputLabel}>CORREO </Text>
          <View style={styles.inputFieldContainer}>
            <MaterialCommunityIcons name="email-outline" size={24} color="#888" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="nombre@empresa.com"
              placeholderTextColor="#888"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>

        
        <TouchableOpacity style={styles.sendButton} onPress={handleSendCode}>
          <Text style={styles.sendButtonText}>Enviar Código de Verificación</Text>
          <MaterialCommunityIcons name="arrow-right" size={20} color="white" />
        </TouchableOpacity>

        {}
        <TouchableOpacity style={styles.backToLoginButton} onPress={() => navigation.navigate("Iniciar_Sesion")}>
            <MaterialCommunityIcons name="arrow-left" size={18} color="#222" style={{marginRight: 6}} />
            <Text style={styles.backToLoginText}>VOLVER AL LOGIN</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9c9b2', 
  },
  contentContainer: {
    paddingHorizontal: 30,
    paddingTop: 40, 
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
  brandText: {
    color: '#a3b5a1',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 40, 
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: '700', 
    color: '#000',
    lineHeight: 34, 
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 14,
    color: '#555', 
    lineHeight: 20,
    marginBottom: 40, 
  },
  inputCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2, 
    padding: 15,
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
  },
  inputFieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eeeeee', 
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  sendButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1b4a1b', 
    borderRadius: 8,
    height: 50,
    marginBottom: 100, 
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10, 
  },
  backToLoginButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    
  },
  backToLoginText: {
    fontSize: 12,
    color: '#222',
    fontWeight: 'bold',
  },
});

export default Recuperacion_Contrasena;