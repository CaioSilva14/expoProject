import { View, Text, Image, ScrollView } from 'react-native';
import { Header } from "../components/header";
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight;

export default function BoxE() {
 return (
  <ScrollView
  style={{ flex: 1 }}
  showsVerticalScrollIndicator={false}
  contentContainerStyle={{ paddingBottom: 20, paddingTop: statusBarHeight }}
  className="bg-slate-400" // Altere a cor de fundo se desejar
>
  <View style={{ paddingHorizontal: 16, marginTop:10 }}>
    <Header />
  </View>

  <View style={{ alignItems: 'center', marginVertical: 20 }}>
    <Image
      source={require('../images/blocoE.png')} // Substitua pelo caminho real da sua imagem
      style={{ width: '90%', height: 200, borderRadius: 30 }} // Ajuste a largura e altura conforme necessário
      resizeMode="contain"
    />
  </View>

  <View
    style={{
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
    <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>Térreo - (Localizado no outro anexo da entrada pela Rua Eliseu Uchôa Beco.) </Text>
    <Text style={{ fontSize: 16, color: '#555' }}>
    Refeitório{"\n"}
    Piscina{"\n"}
    Academia{"\n"}
    Sala de Descanso{"\n"}
    Núcleo de Gestão{"\n"}
    Banheiros: Feminino e Masculino

    </Text>
  </View>

  <View
    style={{
      backgroundColor: '#ffffff',
      marginTop: 10,
      padding: 16,
      marginHorizontal: 16,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 2 },
      elevation: 4,
    }}
  >
    <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>1º Andar </Text>
    <Text style={{ fontSize: 16, color: '#555' }}>
    Biblioteca (1º Entrada){"\n"}
    Núcleo de Prática Jurídica{"\n"}
    Banheiros: Feminino e Masculino{"\n"}

    </Text>
  </View>

  <View
    style={{
      backgroundColor: '#ffffff',
      marginTop: 10,
      padding: 16,
      marginHorizontal: 16,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 2 },
      elevation: 4,
    }}
  >
    <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>2º Andar </Text>
    <Text style={{ fontSize: 16, color: '#555' }}>
    Biblioteca (2º Entrada){"\n"}
    Laboratório de informática{"\n"}
    Banheiros: Feminino e Masculino
    </Text>
  </View>
</ScrollView>
  );
}