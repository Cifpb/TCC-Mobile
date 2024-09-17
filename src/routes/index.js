import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Welcome from "../pages/welcome";
import SignIn from "../pages/Signin";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Reset from "../pages/ResetPassaword";
import Work from "../pages/Work";
import Requests from "../pages/Requests";

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
         name="Register"
         component={Register}
         options={{headerShown: false}}
        />
        <Stack.Screen
         name="Home"
         component={Home}
         options={{headerShown: false}}
        />
          <Stack.Screen
         name="Reset"
         component={Reset}
         options={{headerShown: false}}
        />
          <Stack.Screen
         name="Work"
         component={Work}
         options={{headerShown: false}}
        />
           <Stack.Screen
         name="Requests"
         component={Requests}
         options={{headerShown: false}}
        />
        </Stack.Navigator>
    )
}