/*

//ESSENTIAL UI COMPONENTS//

import { 
  View,          // Like a <div>: container for layout and flexbox styling
  Text,          // Like a <p>/<span>: ALL raw text MUST be wrapped in <Text>
  Image,         // Renders local or remote images
  TextInput,     // Form text fields
  TouchableOpacity, // Standard touchable button with opacity feedback
  FlatList,      // Performant list renderer for dynamic arrays
  ScrollView,    // Scrollable container for static/short content
  ActivityIndicator // Loading spinner
} from 'react-native';


//COMMON COMPONENTS//

/LAYOUTS, TEXTS, BUTTONS
<View style={{ flex: 1, padding: 16 }}>
  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Title Text</Text>
  
  <TouchableOpacity 
    style={{ backgroundColor: '#007AFF', padding: 12, borderRadius: 8 }}
    onPress={() => console.log('Button pressed!')}
  >
    <Text style={{ color: '#ffffff', textAlign: 'center' }}>Click Me</Text>
  </TouchableOpacity>
</View>

/TEXT INPUTS & STATES
import React, { useState } from 'react';
import { TextInput } from 'react-native';

const [text, setText] = useState('');

<TextInput
  value={text}
  onChangeText={setText} // Directly passes the string value
  placeholder="Enter your name..."
  placeholderTextColor="#888"
  style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 6 }}
/>

/REMOTE & LOCAL IMAGES
// Local image (using require)
<Image source={require('../assets/icon.png')} style={{ width: 50, height: 50 }} />

// Remote image (MUST explicitly set width and height)
<Image source={{ uri: 'https://via.placeholder.com/150' }} style={{ width: 100, height: 100 }} />

/LIST RENDERING (FLATLISTS)
import { FlatList, Text, View } from 'react-native';

const items = [
  { id: '1', name: 'Item 1' },
  { id: '2', name: 'Item 2' },
];

<FlatList
  data={items}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <View style={{ padding: 12, borderBottomWidth: 1, borderColor: '#eee' }}>
      <Text>{item.name}</Text>
    </View>
  )}
/>

//NAV (WITH EXPO ROUTER)//

/IMPERATIVE NAVIGATION
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.push('/profile')}>
      <Text>Go to Profile</Text>
    </TouchableOpacity>
  );
}

/DECLARATIVE NAVIGATION
import { Link } from 'expo-router';

<Link href="/details" style={{ color: '#007AFF' }}>
  View Details
</Link>

/PASSING & ACCESSING ROUTE PARAMS
// Push with parameters
router.push({ pathname: '/user/[id]', params: { id: '123' } });

// Reading parameters inside the destination screen
import { useLocalSearchParams } from 'expo-router';

const { id } = useLocalSearchParams<{ id: string }>();


//LAYOUTS & STYLING//

React Native uses Flexbox, but with two key defaults:

    flexDirection defaults to column (not row).

    Everything is display: 'flex' by default (display: 'block' does not exist).

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,                  // Takes up the entire available screen height
    flexDirection: 'row',     // Align items side-by-side horizontally
    justifyContent: 'center', // Main axis alignment (vertical or horizontal based on direction)
    alignItems: 'center',     // Cross axis alignment
    paddingHorizontal: 16,    // Shortcut for paddingLeft & paddingRight
    paddingVertical: 12,      // Shortcut for paddingTop & paddingBottom
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    // Android Shadow
    elevation: 4,
    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});

*/
