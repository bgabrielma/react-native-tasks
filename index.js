/**
 * @format
 */

import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import Navigator from './src/Navigator'
import Agenda from './src/screens/Agenda'

AppRegistry.registerComponent(appName, () => Navigator)
