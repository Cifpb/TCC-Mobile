import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Welcome from "../pages/welcome";
import SignIn from "../pages/Signin";
import Home from "../pages/Home";
import Product from "../pages/product";
import Requests from "../pages/Requests";
import Plans from "../pages/Plans";
import Order from "../pages/order";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return(
        <Stack.Navigator>
        <Stack.Screen
         name="Welcome"
         component={Welcome}
         options={{headerShown: false}}
        />
         <Stack.Screen
         name="SignIn"
         component={SignIn}
         options={{headerShown: false}}
        />
        
        <Stack.Screen
         name="Home"
         component={Home}
         options={{headerShown: false}}
        />
          <Stack.Screen
         name="Product"
         component={Product}
         options={{headerShown: false}}
        />
         <Stack.Screen
         name="Plans"
         component={Plans}
         options={{headerShown: false}}
        />
           <Stack.Screen
         name="Requests"
         component={Requests}
         options={{headerShown: false}}
        />
        
         <Stack.Screen
         name="Order"
         component={Order}
         options={{headerShown: false}}
        />

        </Stack.Navigator>
    )
}