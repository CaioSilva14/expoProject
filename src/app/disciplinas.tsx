
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { View, Text, ScrollView } from 'react-native';
import { Header } from "../components/header";
import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight;

interface Disciplina {
  nome: string;
  bloco: string;
  sala: string;
}

export default function Disciplinas() {
  const [disciplinaAds, setDisciplinaAds] = useState<Disciplina | null>(null);
  const [disciplinaCiencia, setDisciplinaCiencia] = useState<Disciplina | null>(null);

  useEffect(() => {
    const fetchDisciplinas = async () => {
      try {
        const docRefAds = doc(db, "disciplinas", "ads");
        const docSnapAds = await getDoc(docRefAds);

        if (docSnapAds.exists()) {
          setDisciplinaAds(docSnapAds.data() as Disciplina);
        } else {
          console.log("Documento 'ads' não encontrado!");
        }

        const docRefCiencia = doc(db, "disciplinas", "ciencia");
        const docSnapCiencia = await getDoc(docRefCiencia);

        if (docSnapCiencia.exists()) {
          setDisciplinaCiencia(docSnapCiencia.data() as Disciplina);
        } else {
          console.log("Documento 'ciencia' não encontrado!");
        }

      } catch (error) {
        console.error("Erro ao buscar dados: ", error);
      }
    };

    fetchDisciplinas();
  }, []);

  if (!disciplinaAds || !disciplinaCiencia) {
    return <Text>Carregando...</Text>;
  }

  return (
    <ScrollView
      style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20, paddingTop: statusBarHeight }}
      className="bg-cyan-400"
    >
      <View style={{ paddingHorizontal: 16, marginTop: 10 }}>
        <Header />
      </View>

      <View
        style={{
          marginTop: 20,
          backgroundColor: '#ffffff',
          padding: 16,
          marginHorizontal: 16,
          borderRadius: 10,
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowOffset: { width: 0, height: 2 },
          elevation: 4,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
          {disciplinaAds.nome}
        </Text>
        <Text style={{ fontSize: 16, color: '#555' }}>
          <Text style={{ fontWeight: 'bold' }}> {disciplinaAds.bloco} </Text> - 
          <Text style={{ fontWeight: 'bold' }}> {disciplinaAds.sala} </Text>
        </Text>
      </View>

      <View
        style={{
          marginTop: 20,
          backgroundColor: '#ffffff',
          padding: 16,
          marginHorizontal: 16,
          borderRadius: 10,
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowOffset: { width: 0, height: 2 },
          elevation: 4,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
          {disciplinaCiencia.nome}
        </Text>
        <Text style={{ fontSize: 16, color: '#555' }}>
          <Text style={{ fontWeight: 'bold' }}> {disciplinaCiencia.bloco} </Text> - 
          <Text style={{ fontWeight: 'bold' }}> {disciplinaCiencia.sala} </Text>
        </Text>
      </View>
    </ScrollView>
  );
}
