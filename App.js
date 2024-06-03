import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Placeholder para as outras telas
function CardsScreen() {
  return <View><Text>Cards Screen</Text></View>;
}

function ShoppingListScreen() {
  return <View><Text>Shopping List Screen</Text></View>;
}

function CartScreen() {
  return <View><Text>Cart Screen</Text></View>;
}

function SettingsScreen() {
  return <View><Text>Settings Screen</Text></View>;
}

const Tab = createBottomTabNavigator();

function DashboardScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Dashboard"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case 'Dashboard':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'Cards':
                iconName = focused ? 'credit-card' : 'credit-card-outline';
                break;
              case 'ShoppingList':
                iconName = focused ? 'shopping' : 'shopping-outline';
                break;
              case 'Cart':
                iconName = focused ? 'cart' : 'cart-outline';
                break;
              case 'Settings':
                iconName = focused ? 'cog' : 'cog-outline';
                break;
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: tabBarStyles.activeTintColor,
          tabBarInactiveTintColor: tabBarStyles.inactiveTintColor,
          tabBarStyle: tabBarStyles.style,
          tabBarLabelStyle: tabBarStyles.labelStyle,
          headerTitleAlign: 'center'
        })}
      >
        <Tab.Screen 
          name="Dashboard" 
          component={DashboardPlaceholder} 
          options={{ tabBarLabel: 'Início', headerTitle: 'Início' }}
        />
        <Tab.Screen 
          name="Cards" 
          component={CardsScreen} 
          options={{ tabBarLabel: 'Cartões', headerTitle: 'Meus Cartões' }}
        />
        <Tab.Screen 
          name="ShoppingList" 
          component={ShoppingListScreen} 
          options={{ tabBarLabel: 'Compras', headerTitle: 'Lista de Compras' }}
        />
        <Tab.Screen 
          name="Cart" 
          component={CartScreen} 
          options={{ tabBarLabel: 'Desejos', headerTitle: 'Lista de Desejos' }}
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{ tabBarLabel: 'Config', headerTitle: 'Configurações' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function DashboardPlaceholder() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard with Graphs will be here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});

const tabBarStyles = {
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
  style: [{
    display: 'flex',
    backgroundColor: 'white',
    height: 60,
  }],
  labelStyle: {
    textAlign: 'center',
    marginBottom: 5,
  }
};

export default DashboardScreen;
