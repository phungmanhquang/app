import * as React from "react";
import { Image, Linking, StyleSheet } from "react-native";

import { Text, View } from "./Themed";
import ItemComponent from "./Item";

export default function TrendingItemComponent() {
  return (
    <View style={styles.container}>
      <Text >Thịnh hành</Text>
      <View style={styles.outSideList}>
        <ItemComponent 
            style={{width: '100%', height: 150}} 
            showDesc  
        />
        {
          [1,2,3,4,5,6].map(x => 
              <ItemComponent 
                style={{width: '31%', height: 175}} 
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
  title: { fontSize: 20, fontWeight: 400  , marginBottom: 12},
  outSideList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  }
});
