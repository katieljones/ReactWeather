import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {colours} from '../utils/index'
import {FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons'


const {PRIMARY_COLOUR, SECONDARY_COLOUR, BORDER_COLOUR} = colours


export default function WeatherDetails({ currentWeather }) {
  const {
    main: { feels_like, humidity },
  } = currentWeather
  return (
     <View style={styles.weatherDetails}>
       <View style={styles.weatherDetailsRow}>
         <View style={{ ...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOUR }}>
           <View style={styles.weatherDetailsRow}>
           <FontAwesome5 name="temperature-low" size={25} color={PRIMARY_COLOUR} />
           <View style={styles.weatherDetailItems}>
             <Text>Feels like:</Text>
             <Text style={styles.textSecondary}>{feels_like}</Text>
            </View>
        </View>
      </View>
      <View style={styles.weatherDetailsBox}>
       <View style={styles.weatherDetailsRow}>
        <FontAwesome5 name="temperature-low" size={25} color={PRIMARY_COLOUR} />
         <View style={styles.weatherDetailItems}>
            <Text>Humidity:</Text>
            <Text style={styles.textSecondary}>{humidity}</Text>
            </View>
            </View>
        </View>
       </View>
     </View>
  )
}

const styles = StyleSheet.create({
  weatherDetails: {
    marginTop: 'auto',
    margin: 15,
    borderWidth: 1,
    borderColor: BORDER_COLOUR,
    borderRadius: 10,
  },
  weatherDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  weatherDetailsBox: {
    flex: 1,
    padding: 20,
  },
  weatherDetailItems: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  textSecondary: {
    fontSize: 15,
    color: SECONDARY_COLOUR,
    fontWeight: '700',
    margin: 7,
  },
})
