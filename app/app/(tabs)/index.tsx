import { registerRootComponent } from 'expo';
import AppNavigator from './AppNavigator'; // Make sure this is correct path

export default function App() {
  return <AppNavigator />;
}

registerRootComponent(App);
