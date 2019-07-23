import React, { Component } from 'react'
import moment from 'moment'
import 'moment/locale/pt'
import todayImage from '../../assets/imgs/today.jpg'
import commonStyle from '../commonStyle'
import Icon from 'react-native-vector-icons/FontAwesome'
import ActioButton from 'react-native-action-button'

// components
import Task from '../components/Task'
import AddTask from './AddTask'

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Platform
} from 'react-native'
export default class Agenda extends Component {
  state = {
    tasks: [],
    visibleTasks: [],
    showTasksDone: true,
    showAddTask: false
  }

  addTask = task => {
    const tasks = [...this.state.tasks]
    tasks.push({
      id: Math.random(),
      desc: task.desc,
      estimateAt: task.date,
      doneAt: null
    })

    this.setState({ tasks, showAddTask: false }, this.filterTasks)
  }

  deleteTask = id => {
    const tasks = this.state.tasks.filter(task => task.id !== id)
    this.setState({ tasks }, this.filterTasks)
  }

  filterTasks = () => {
    let visibleTasks = null
    if (this.state.showTasksDone) {
      visibleTasks = [...this.state.tasks]
    } else {
      // filter expression
      const pending = task => task.doneAt === null
      visibleTasks = this.state.tasks.filter(pending)
    }
    this.setState({ visibleTasks })
  }

  toggleFilter = () => {
    this.setState({ showTasksDone: !this.state.showTasksDone }, this.filterTasks)
  }

  componentDidMount = () => {
    this.filterTasks()
  }

  toggleTask = id => {
    const tasks = [...this.state.tasks]
    tasks.forEach(task => {
      if (task.id === id) {
        task.doneAt = task.doneAt ? null : new Date()
      }
    })
    this.setState({ tasks }, this.filterTasks)
  }

  render () {
    return (
      <View style={styles.container}>
        <AddTask isVisible={this.state.showAddTask}
          onSave={this.addTask}
          onCancel={() => this.setState({ showAddTask: false })} />
        <ImageBackground source={todayImage} style={styles.background}>
          <View style={styles.iconBar}>
            <TouchableOpacity onPress={this.toggleFilter}>
              <Icon name={this.state.showTasksDone ? 'eye' : 'eye-slash'}
                size={20}
                color={commonStyle.colors.secondary} />
            </TouchableOpacity>
          </View>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subtitle}>
              {moment().locale('pt-br').format('ddd, D [de] MMMM')}
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.tasksContainer}>
          <FlatList
            data={this.state.visibleTasks}
            keyExtractor={item => `${item.id}`}
            renderItem={ ({ item }) => <Task {...item} toggleTask={this.toggleTask} onDelete={this.deleteTask }/> }/>
        </View>
        <ActioButton buttonColor={commonStyle.colors.today}
          onPress={() => { this.setState({ showAddTask: true }) }} />
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
  },
  iconBar: {
    marginTop: Platform.OS === 'ios' ? 30 : 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})
