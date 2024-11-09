import { Text, View, ScrollView } from "react-native";
import { Header } from "../components/header";
import Constants from 'expo-constants'
import Banner from "../components/banner";
import {Link} from "expo-router"

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView 
    style={{ flex: 1 }} 
    className="bg-slate-400" 
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header/>
        <Banner/>

        <Link 
          href="/boxA" 
          style={{
            width: "85%", 
            marginHorizontal: 28,
            marginBottom: 20,
            height: 100,
            backgroundColor: '#f8f9fa', 
            borderRadius: 10, 
            shadowColor: '#000', 
            shadowOpacity: 0.2, 
            shadowOffset: { width: 0, height: 2 },
            justifyContent: 'center',  // Centraliza verticalmente
            alignItems: 'center',      // Centraliza horizontalmente
            display: 'flex',           // Habilita o layout flex
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: "bold",color: '#000' }}>
            Bloco A
          </Text>
        </Link>

        <Link 
          href="/boxB" 
          style={{
            width: "85%",
            marginHorizontal: 28,
            marginBottom: 20,
            height: 100,
            backgroundColor: '#f8f9fa', 
            borderRadius: 10, 
            shadowColor: '#000', 
            shadowOpacity: 0.2, 
            shadowOffset: { width: 0, height: 2 },
            justifyContent: 'center',  // Centraliza verticalmente
            alignItems: 'center',      // Centraliza horizontalmente
            display: 'flex',           // Habilita o layout flex
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: "bold",color: '#000' }}>
            Bloco B
          </Text>
        </Link>
        
        <Link 
          href="/boxC" 
          style={{
            width: "85%",
            marginHorizontal: 28,
            marginBottom: 20,
            height: 100,
            backgroundColor: '#f8f9fa', 
            borderRadius: 10, 
            shadowColor: '#000', 
            shadowOpacity: 0.2, 
            shadowOffset: { width: 0, height: 2 },
            justifyContent: 'center',  // Centraliza verticalmente
            alignItems: 'center',      // Centraliza horizontalmente
            display: 'flex',           // Habilita o layout flex
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: "bold",color: '#000' }}>
            Bloco C
          </Text>
        </Link>

        <Link 
          href="/boxD" 
          style={{
            width: "85%",
            marginHorizontal: 28,
            marginBottom: 20,
            height: 100,
            backgroundColor: '#f8f9fa', 
            borderRadius: 10, 
            shadowColor: '#000', 
            shadowOpacity: 0.2, 
            shadowOffset: { width: 0, height: 2 },
            justifyContent: 'center',  // Centraliza verticalmente
            alignItems: 'center',      // Centraliza horizontalmente
            display: 'flex',           // Habilita o layout flex
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: "bold",color: '#000' }}>
            Bloco D
          </Text>
        </Link>

        <Link 
          href="/boxE" 
          style={{
            width: "85%",
            marginHorizontal: 28,
            marginBottom: 20,
            height: 100,
            backgroundColor: '#f8f9fa', 
            borderRadius: 10, 
            shadowColor: '#000', 
            shadowOpacity: 0.2, 
            shadowOffset: { width: 0, height: 2 },
            justifyContent: 'center',  // Centraliza verticalmente
            alignItems: 'center',      // Centraliza horizontalmente
            display: 'flex',           // Habilita o layout flex
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: "bold",color: '#000' }}>
            Bloco E
          </Text>
        </Link>

      </View>
      
    </ScrollView>
  );
}
