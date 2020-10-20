import * as React from "react";
import { Image, Linking, StyleSheet } from "react-native";

import { Text, View } from "./Themed";
import ItemCircleComponent from "./ItemCircle";

export default function HotItemComponent() {
  return (
    <View style={styles.container}>
      <Text  >Truyện hot</Text>
      <View style={styles.outSideList}>
        {
          [1,2,3,4].map(x => 
              <ItemCircleComponent 
                style={{width: '24%', height: 80}} 
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
  title: { 
      fontSize: 20, 
      fontWeight: 400 , 
      marginBottom: 12 
    },
  outSideList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  }
});
