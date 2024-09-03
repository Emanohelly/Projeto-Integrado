import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import HomeHeader from "../../components/HomeHeader";
import Group from "../../components/Group";
import FuncionarioCard from "../../components/FuncionarioCard";

export default function Home() {
  const [deptFuncionario, setDeptFuncionario] = useState([
    "Design UI/UX",
    "DevOps",
    "Front-End",
    "Back-End",
    "Gerência",
  ]);

  const [nomeFuncionario, setNomeFuncionario] = useState([])

  const [deptFuncionarioSelected, setDeptFuncionarioSelected] = useState("Design UI/UX");

  return (
    <>
      <View style={styles.container}>
        <HomeHeader />
        <FlatList
          data={deptFuncionario}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Group
              name={item}
              isActive={deptFuncionarioSelected === item}
              onPress={() => setDeptFuncionarioSelected(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          style={{ marginTop: 20, marginBottom: 10, maxHeight: 44, minHeight: 44 }}
        />

        <View style={styles.containerColuna}>
          <Text style={styles.textoTitulo1}>Funcionários</Text>
          <FuncionarioCard />
        </View>

      </View>
    </>
  );
}