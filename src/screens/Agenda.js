import React, { Component } from 'react'
import moment from 'moment'
import 'moment/locale/pt'
import todayImage from '../../assets/imgs/today.jpg'
import commonStyle from '../commonStyle'

// components
import Task from '../components/Task'

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList
} from 'react-native'
export default class Agenda extends Component {
  state = {
    tasks: [
      {
        id: Math.random(),
        desc: "Comprar o Curso React Native",
        estimateAt: new Date(),
        doneAt: new Date()
      },
      {
        id: Math.random(),
        desc: "Comprar o curso",
        estimateAt: new Date(),
        doneAt: null
      }
    ]
  }
  render () {
    return (
      <View style={styles.container} styless={{}}>
        <ImageBackground source={todayImage} style={styles.background}>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subtitle}>
              {moment().locale('pt-br').format('ddd, D [de] MMMM')}
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.tasksContainer}>
          <FlatList data={this.state.tasks} keyExtractor={item => `${item.id}`} renderItem={ ({item}) => <Task {...item} /> }/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex: 3
  },
  titleBar: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  title: {
    fontFamily: commonStyle.fontFamily,
    color: commonStyle.colors.secondary,
    fontSize: 50,
    marginLeft: 20,
    marginBottom: 10
  },
  subtitle: {
    fontFamily: commonStyle.fontFamily,
    color: commonStyle.colors.secondary,
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 30
  },
  tasksContainer: {
    flex: 7
  }
})
