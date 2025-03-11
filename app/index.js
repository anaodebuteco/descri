import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

export default function CarDetails() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: "https://tse4.mm.bing.net/th?id=OIP.UIw0AxBVJnjyvffLWH_ysAHaEK&pid=Api&P=0&h=180" }}
        style={styles.image}
      />

      <View style={styles.card}>
        <Text style={styles.title}>Volkswagen Gol 2018</Text>
        <Text style={styles.description}>
          O Volkswagen Gol 2018 é um dos carros mais populares do Brasil, conhecido por sua durabilidade, baixo custo de manutenção e economia de combustível. Com um design moderno e um motor eficiente, ele é ideal tanto para o uso urbano quanto para viagens. Seu espaço interno confortável e a confiabilidade mecânica fazem dele uma excelente escolha para quem busca um carro acessível e versátil.

        </Text>
      </View>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.label}>Motor:</Text>
        <Text style={styles.description}>1.0 Flex</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.label}>Tanque:</Text>
        <Text style={styles.description}>40 Litros</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.label}>Consumo:</Text>
        <Text style={styles.description}>12 km/L (Gasolina) - 10 km/L (Etanol)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.label}>Câmbio:</Text>
        <Text style={styles.description}>Manual de 6 Marchas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.label}>Ano:</Text>
        <Text style={styles.description}>2018</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.label}>Quilometragem:</Text>
        <Text style={styles.description}>80.000 km</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.label}>Valor de mercado:</Text>
        <Text style={styles.description}> 49.999 mil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.label}>Tabela fipe:</Text>
        <Text style={styles.description}> 53.000 mil</Text>
      </TouchableOpacity>
    
    
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    marginTop: 10,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center", 
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    textAlign: "justify",
  },
});
