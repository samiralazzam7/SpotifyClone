import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import PlayerWidgets from './components/PlayerWidget';

import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

import { AppContext } from './AppContext';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [essayId, setEssayId] = useState<string|null>(null);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppContext.Provider value={{
          essayId,
          setEssayId: (id: string) => setEssayId(id),
        }}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
          <PlayerWidgets />
        </AppContext.Provider>
      </SafeAreaProvider>
    );
  }
}
