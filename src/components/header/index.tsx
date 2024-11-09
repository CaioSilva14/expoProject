import { View, Pressable, Text, Image } from 'react-native';

export function Header() {
 return (
   <View className="w-full flex flex-row items-center justify-between">
      <Image 
        source={require('../../images/estacio-logo2.png')} // /images/estacio-logo2.pngUse o caminho relativo da sua logo
      />
  </View>
  );
}