import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Welcome from "../pages/welcome";
import SignIn from "../pages/Signin";
import Home from "../pages/Home";
import Product from "../pages/product";
import Requests from "../pages/Requests";
import Plans from "../pages/Plans";
import Profile from "../pages/profile";
import Order1 from "../pages/order";
import Filter from "../pages/clientFilter";
import PlansProd from "../pages/ProductPlans";

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
         component={Order1}
         options={{headerShown: false}}
        />

        <Stack.Screen
         name="Profile"
         component={Profile}
         options={{headerShown: false}}
        />

        <Stack.Screen
         name="Filter"
         component={Filter}
         options={{headerShown: false}}
        />
        <Stack.Screen
         name="PlansProd"
         component={PlansProd}
         options={{headerShown: false}}
        />

        </Stack.Navigator>
    )
}