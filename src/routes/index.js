import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Welcome from "../pages/welcome";
import SignIn from "../pages/Signin";
import Product from "../pages/product";
import Requests from "../pages/Requests";
import Plans from "../pages/Plans";
import Profile from "../pages/profile";
import Order1 from "../pages/order";
import Filter from "../pages/clientFilter";
import PlansProd from "../pages/ProductPlans";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Pedidos"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#202020', 
          height: 55,                
          borderTopWidth: 0,  
          bottom: 14,
          position: 'absolute',
          marginLeft: 25,
          marginRight: 25,
          borderRadius: 10,
        },
        tabBarActiveTintColor: '#E0C200', 
        tabBarInactiveTintColor: '#ccc', 

      }}
    >
      <Tab.Screen
        name="Pedidos"
        component={Requests}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="clipboard-list" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Catálogo"
        component={PlansProd}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="tasks" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Produtos"
        component={Product}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="box" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Clientes"
        component={Filter}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="filter" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


export default function Routes() {
  return (
    <Stack.Navigator>
      
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />

      
      <Stack.Screen
        name="MainTabs"
        component={TabRoutes}
        options={{ headerShown: false }}
      />

      
      <Stack.Screen
        name="Plans"
        component={Plans}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Order"
        component={Order1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
