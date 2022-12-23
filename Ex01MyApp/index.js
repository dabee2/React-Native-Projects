/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import MyApp from './MyApp'; //.js는 생략가능

//앱의 시작 컴포넌트를 설정하는 코드
// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => MyApp);
