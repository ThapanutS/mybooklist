import React from 'react'
import { View ,Text ,StyleSheet } from 'react-native'

const Header = ({title}) => {
  return(
    <View style={styles.header}>
        <Text style={styles.text}>{title}</Text>
    </View>
  )
}

Header.defaultProps ={
    title : 'My Books List'
}

const styles = StyleSheet.create({
    header: {
        height : 60,
        paddingTop : 15,
        backgroundColor : 'darkblue'
    },
    text: {
        color: '#ffff',
        fontSize: 24,
        textAlign: 'center'
    }
})

export default Header;
