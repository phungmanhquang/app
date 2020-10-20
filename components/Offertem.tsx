import * as React from "react";
import { Image, Linking, StyleSheet } from "react-native";

import { Text, View } from "./Themed";
import ItemComponent from "./Item";

export default function ListItemComponent() {
  return (
    <View style={styles.container}>
      <Text>Đề xuất</Text>
      <View style={styles.outSideList}>
        {
          [1,2,3,4].map(x => 
              <ItemComponent 
                style={{width: '48%', height: 160}} 
                showDesc  
              />
          )
        }
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  title: { fontSize: 20, fontWeight: 400, marginBottom: 12  },
  outSideList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  }
});
