import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView 
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Nuevo_usuario({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      
     

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Título */}
        <View style={styles.titleSection}>
             <MaterialCommunityIcons name="robot-industrial" marginBottom={5} marginLeft={90}size={100} color="#1f3821" />
          <Text style={styles.mainTitle}>REGISTRO USUARIO NUEVO </Text>
          <Text style={styles.subTitle}>
            Ingrese su dato 
          </Text>
        </View>

        {/* Formulario */}
        <View style={styles.form}>
          <InputField label="NOMBRE COMPLETO" placeholder="nombre " />
          
          <InputField label="CORREO INSTITUCIONAL" placeholder="operador@terra-form.corp" />
        

          <InputField label="CONTRASEÑA" placeholder="••••••••" secureTextEntry />

          {/* Aviso de Seguridad */}
          <View style={styles.securityNotice}>
            <MaterialCommunityIcons name="lock-alert-outline" size={40} color="#5D4037" style={styles.securityIcon} />
            <View style={styles.securityTextContainer}>
              <Text style={styles.securityTitle}>AVISO DE SEGURIDAD</Text>
              <Text style={styles.securityDescription}>
                "Al hacer clic en Crear cuenta, usted acepta nuestros Términos y Condiciones y autoriza de manera previa, expresa e informada el tratamiento de sus datos personales, conforme a nuestra Política de Privacidad y las finalidades allí descritas (gestión de perfil, recordatorios médicos y contacto).

              </Text>
            </View>
          </View>

         
                 <TouchableOpacity 
                 style={styles.registerButton} 
                 onPress={() => navigation.navigate('Iniciar_Sesion')} 
>
                  <Text style={styles.registerButtonText}>CREAR CUENTA</Text>
                  <MaterialCommunityIcons name="arrow-right" size={24} color="white" />
                 </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const InputField = ({ label, ...props }) => (
  <View style={styles.inputWrapper}>
    <Text style={styles.label}>{label}</Text>
    <TextInput style={styles.input} placeholderTextColor="#A0A0A0" {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9c9b2',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 60,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  topBarTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#8A9A8B',
    letterSpacing: 1,
  },
  scrollContent: {
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  titleSection: {
    marginTop: 30,
    marginBottom: 25,
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: '900',
    color: '#39753d',
    marginLeft: 10,
    letterSpacing: 1,
  },
  subTitle: {
    fontSize: 15,
    color: '#666',
    marginTop: 8,
  },
  inputWrapper: {
    marginBottom: 18,
  },
  label: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#7B5E43', 
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  input: {
    backgroundColor: '#EBEBE6',
    height: 50,
    borderRadius: 4,
    paddingHorizontal: 15,
    fontSize: 15,
    color: '#333',
  },
  pickerContainer: {
    backgroundColor: '#EBEBE6',
    height: 50,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 18,
  },
  pickerText: {
    fontSize: 15,
    color: '#333',
  },
  securityNotice: {
    backgroundColor: '#F4F4F0',
    padding: 15,
    borderRadius: 4,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 30,
    borderLeftWidth: 3,
    borderLeftColor: '#8D6E63',
  },
  securityIcon: {
    marginRight: 12,
  },
  securityTextContainer: {
    flex: 1,
  },
  securityTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#5D4037',
    marginBottom: 4,
  },
  securityDescription: {
    fontSize: 11,
    color: '#777',
    lineHeight: 16,
  },
  registerButton: {
    backgroundColor: '#103014',
    flexDirection: 'row',
    height: 55,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
});