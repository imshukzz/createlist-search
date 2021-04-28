import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [itemList, setItemList] = useState([]);
  return (
    <View>
      <View style={styles.searchBar}>
        <TextInput
          value={userInput}
          onChange={(event) => {
            setUserInput(event.target.value);
            console.log(userInput);
          }}
        />{" "}
        <Button
          style={styles.searchButton}
          onPress={() => {
            setItemList([...itemList, userInput]);
            console.log("logging item list", itemList);
            setUserInput("");
          }}
        >
          +
        </Button>
      </View>
      <View>
        {itemList
          .filter((item) => item.includes(userInput))
          .map((item, index) => (
            <Text>{item}</Text>
          ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    flexDirection: "row",
  },
  searchButton: {
    backgroundColor: "black",
    color: "white",
  },
});
