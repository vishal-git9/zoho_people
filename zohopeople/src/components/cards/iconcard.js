import React from 'react'
import { Text, View } from 'react-native'
import { Surface } from 'react-native-paper'
export const Iconcard = ({iconName,Provider,size,color,backgroundColor,borderRadius,text}) => {
  return (
    <Surface>
        <View style={{ backgroundColor: backgroundColor,justifyContent:"center",alignItems:"center",borderRadius:borderRadius,padding:20 }}>
          <Provider
            name={iconName}
            size={size}
            color={color}
          />
        </View>
        <Text style={{textAlign:"center",fontWeight:"600"}}>{text}</Text>
      </Surface>
  )
}
