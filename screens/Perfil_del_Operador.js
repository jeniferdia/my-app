import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { User, Sprout, ChevronRight, Download, Monitor, History, Drill, Award } from 'lucide-react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import miImagen from './img/image.png';
import { useNavigation } from '@react-navigation/native';

function Perfil() {
  return (
    <View>
      <img src={miImagen} alt="Foto de perfil" />
    </View>
  );
}
const Perfil_del_Operador = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="robot-industrial" size={70} color="#1f3821" />
        <Text style={styles.logoText}>AGROSEED</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
           <Image 
                source={miImagen} 
           style={styles.avatar} 
                  />
            <View style={styles.verifiedBadge}>
              <View style={styles.checkInner} />
            </View>
          </View>
          
          <View style={styles.levelBadge}>
            <Text style={styles.levelText}>NIVEL DE ACCESO</Text>
          </View>
          
          <Text style={styles.name}>Nombre compreto</Text>
          <Text style={styles.idText}>correo electronico</Text>
      
        </View>

        
        <View style={styles.cardWhite}>
          <Text style={styles.cardLabel}>EFICIENCIA DE OPERACIÓN</Text>
          <View style={styles.efficiencyRow}>
            <Text style={styles.efficiencyValue}>94.2</Text>
            <Text style={styles.percentSymbol}> %</Text>
          </View>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: '94.2%' }]} />
          </View>
          <Text style={styles.cardSubtext}>Superior al promedio regional (+4.1%)</Text>
        </View>

        {/* Horas de Campo */}
        <View style={styles.cardLightGray}>
          <Text style={styles.cardLabel}>HORAS DE CAMPO</Text>
          <Text style={styles.bigNumber}>1,240</Text>
          <Text style={styles.cardSubtext}>TOTAL ACUMULADO</Text>
        </View>

        
        <View style={styles.cardDarkGreen}>
          <Sprout color="#fff" size={24} />
          <Text style={[styles.cardLabel, { color: '#fff', marginTop: 10 }]}>HECTÁREAS SEMBRADAS</Text>
          <Text style={[styles.bigNumber, { color: '#fff' }]}>8,421</Text>
          <View style={styles.greenLine} />
        </View>

        
        <View style={styles.reportCard}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <Text style={styles.reportTitle}>Reportes de Rendimiento</Text>
            <Text style={styles.reportDesc}>Acceda a la analítica detallada de telemetría.</Text>
          </View>
          <TouchableOpacity style={styles.downloadBtn}>
            <Download color="#fff" size={20} />
            <Text style={styles.downloadBtnText}>DESCARGAR</Text>
          </TouchableOpacity>
        </View>

     
        <TouchableOpacity style={styles.listItem}>
          <View style={styles.iconBox}><Drill color="#1a3c15" size={20} /></View>
          <View style={{ flex: 1, marginLeft: 15 }}>
            <Text style={styles.listLabel}>semillas utilisadas</Text>
            
          </View>
          <ChevronRight color="#ccc" size={20} />
        </TouchableOpacity>
          <TouchableOpacity 
                 style={styles.registerButton} 
                 onPress={() => navigation.navigate('Iniciar_Sesion')} 
>
                  <Text style={styles.registerButtonText}>SALIR DE CUENTA</Text>
                  <MaterialCommunityIcons name="arrow-right" size={24} color="#1a3c15" />
                 </TouchableOpacity>

      </ScrollView>

      
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}
        onPress={() => navigation.navigate('Inicio')} ><Monitor size={30} color="#666" /><Text style={styles.navText}>INICIO</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem}
        onPress={() => navigation.navigate('Control_de_Siembra')} ><Sprout size={30} color="#666" /><Text style={styles.navText}>CONTROL DE SIEMBRA</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem}
        onPress={() => navigation.navigate('Historial_de_Siembra')} ><History size={30} color="#666" /><Text style={styles.navText}>HISTORIAL  DE SIEMBRA</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}
        onPress={() => navigation.navigate('Perfil_del_Operador')} ><User size={30} color="#fff" /><Text style={[styles.navText, {color: '#fff'}]}>PERFIL</Text></TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#c9c9b2' },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, alignItems: 'center', paddingTop: 50 },
  headerTitle: { fontWeight: 'bold', fontSize: 14, letterSpacing: 1 },
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
  scrollContent: { paddingHorizontal: 20, paddingBottom: 100 },
  profileSection: { alignItems: 'center', marginVertical: 20 },
  avatarContainer: { width: 140, height: 140, marginBottom: 15 },
  avatar: { width: '100%', height: '100%', borderRadius: 10 },
  verifiedBadge: { position: 'absolute', bottom: -5, right: -5, backgroundColor: '#1a3c15', padding: 5, borderRadius: 5 },
  checkInner: { width: 10, height: 10, backgroundColor: '#7ed957', borderRadius: 2 },
  levelBadge: { backgroundColor: '#c8e6c9', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 4, marginBottom: 10 },
  levelText: { color: '#1b5e20', fontSize: 10, fontWeight: 'bold' },
  name: { fontSize: 32, fontWeight: '900', color: '#1a3c15' },
  idText: { color: '#888', fontSize: 12 },
  shiftText: { color: '#666', fontSize: 12, fontWeight: 'bold', marginTop: 5 },
  cardWhite: { backgroundColor: '#fff', padding: 20, borderRadius: 10, marginBottom: 15, elevation: 3 },
  cardLightGray: { backgroundColor: '#f0f0f0', padding: 20, borderRadius: 10, marginBottom: 15, borderLeftWidth: 5, borderLeftColor: '#1a3c15' },
  cardDarkGreen: { backgroundColor: '#1a3c15', padding: 25, borderRadius: 10, marginBottom: 15 },
  cardLabel: { fontSize: 10, color: '#888', fontWeight: 'bold' },
  efficiencyRow: { flexDirection: 'row', alignItems: 'baseline', marginVertical: 5 },
  efficiencyValue: { fontSize: 48, fontWeight: '900', color: '#1a3c15' },
  percentSymbol: { fontSize: 24, fontWeight: '700', color: '#1a3c15' },
  bigNumber: { fontSize: 36, fontWeight: '900', marginVertical: 5 },
  progressBarBg: { height: 10, backgroundColor: '#eee', borderRadius: 5, overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: '#1a3c15' },
  cardSubtext: { fontSize: 12, color: '#666', marginTop: 10 },
  greenLine: { width: 40, height: 3, backgroundColor: '#fff', opacity: 0.3, marginTop: 10 },
  reportCard: { backgroundColor: '#e2e2de', padding: 15, borderRadius: 10, flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  reportTitle: { fontWeight: 'bold', fontSize: 16 },
  reportDesc: { fontSize: 11, color: '#555' },
  downloadBtn: { backgroundColor: '#1a3c15', padding: 10, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  downloadBtnText: { color: '#fff', fontSize: 8, fontWeight: 'bold', marginTop: 5 },
  listItem: { backgroundColor: '#fff', padding: 15, borderRadius: 10, flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  iconBox: { backgroundColor: '#f0f4ef', padding: 10, borderRadius: 8 },
  listLabel: { fontSize: 9, color: '#888', fontWeight: 'bold' },
  listValue: { fontSize: 13, fontWeight: 'bold' },
  navBar: { flexDirection: 'row', position: 'absolute', bottom: 0, width: '100%', backgroundColor: '#fff', height: 70, borderTopWidth: 1, borderTopColor: '#eee' },
  navItem: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  navItemActive: { backgroundColor: '#1a3c15' },
  navText: { fontSize: 9, marginTop: 4, color: '#666', fontWeight: 'bold' },
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

export default Perfil_del_Operador;