import {View, Text, StyleSheet} from 'react-native'

function Footer() {
  return (
    <View style={styles.footer}>
        <Text style={styles.ftext}>@ GUILHERME</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    flex: 2,
    width: "100%",
    backgroundColor: "#0f0f0f",
    justifyContent: 'center',
    alignItems: 'center'
  },
  ftext:{
    color: "#FFF"
  }
}) 

export default Footer