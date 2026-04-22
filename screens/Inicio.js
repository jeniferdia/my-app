import React from 'react';
import { StyleSheet, Text, View, ScrollView,Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { User, Sprout, Monitor, History } from 'lucide-react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import foto from './img/foto.png';

const Inicio = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
    
      <View style={styles.header}>
        <MaterialCommunityIcons name="robot-industrial" size={70} color="#1f3821" />
        <Text style={styles.logoText}>AGROSEED</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>¡Bienvenido!</Text>
          <Text style={styles.welcomeSubtitle}>Panel de Control Agrícola</Text>
          <View style={styles.divider} />
        </View>

        
        <View style={styles.quickStatus}>
          <View style={styles.statusCard}>
            <Text style={styles.statusLabel}>Estado del Sistema</Text>
            <Text style={styles.statusValue}>Activo</Text>
          </View>
          
        </View>
        <View>
           <Image 
                          source={foto} 
                     style={styles.avatar} 
                            />
        </View>

      </ScrollView>

  
      <View style={styles.navBar}>
        <TouchableOpacity 
          style={[styles.navItem, styles.navItemActive]}
          onPress={() => navigation.navigate('Inicio')} 
        >
          <Monitor size={30} color="#fff" />
          <Text style={[styles.navText, { color: '#fff' }]}>INICIO</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Control_de_Siembra')} 
        >
          <Sprout size={30} color="#666" />
          <Text style={styles.navText}>CONTROL DE SIEMBRA</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Historial_de_Siembra')} 
        >
          <History size={30} color="#666" />
          <Text style={styles.navText}>HISTORIAL DE SIEMBRA</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Perfil_del_Operador')} 
        >
          <User size={30} color="#666" />
          <Text style={styles.navText}>PERFIL</Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#c9c9b2' 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    paddingHorizontal: 20,
  },
  logoText: {
    fontSize: 30,
    fontWeight: '900',
    color: '#39753d',
    marginLeft: 10,
    letterSpacing: 1,
  },
  scrollContent: { 
    paddingHorizontal: 20, 
    paddingBottom: 100 
  },
  welcomeSection: {
    marginTop: 40,
    marginBottom: 20,
  },
  welcomeTitle: {
    fontSize: 36,
    fontWeight: '900',
    color: '#1a3c15',
  },
  welcomeSubtitle: {
    fontSize: 18,
    color: '#4a6b40',
    marginTop: 5,
  },
  divider: {
    width: 60,
    height: 4,
    backgroundColor: '#39753d',
    marginTop: 15,
    borderRadius: 2,
  },
  quickStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  statusCard: {
    backgroundColor: '#fff',
    width: '48%',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  statusLabel: {
    fontSize: 12,
    color: '#888',
    fontWeight: 'bold',
  },
  statusValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a3c15',
    marginTop: 5,
  },
  // NavBar Estilos
  navBar: { 
    flexDirection: 'row', 
    position: 'absolute', 
    bottom: 0, 
    width: '100%', 
    backgroundColor: '#fff', 
    height: 80, 
    borderTopWidth: 1, 
    borderTopColor: '#eee' 
  },
  navItem: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  navItemActive: { 
    backgroundColor: '#1a3c15' 
  },
  navText: { 
    fontSize: 8, 
    marginTop: 4, 
    color: '#666', 
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default Inicio;