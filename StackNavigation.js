import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import HomeScreen from './screens/HomeScreen';
import Tabs from './navigation/tabs';
import Login from './screens/Login';
import Restaurant from './screens/Restaurant';
import OrderDelivery from './screens/OrderDelivery';
//import useAuth from './hooks/useAuth';


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    // const { user } = useAuth();
    // const { registerForPushNotificationsAsync, handleNotificationResponse } = useNotifications();

    // useEffect(() => {
    //     //registerForPushNotificationsAsync().then((response) => { console.log(response) })
    //     Notifications.setNotificationHandler({
    //         handleNotification: async () => ({
    //             shouldShowAlert: true,
    //             shouldPlaySound: true,
    //             shouldSetBadge: true,
    //         }),
    //     });

    //     const responseListener = Notifications.addNotificationResponseReceivedListener(handleNotificationResponse);

    //     return () => {
    //         if (responseListener) Notifications.removeNotificationSubscription(responseListener);
    //     }
    // }, [])

    const user = false;


    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {user ? (
                <>
                    <Stack.Group>
                        <Stack.Screen name="Tabs" component={Tabs} />
                        <Stack.Screen name="Restaurant" component={Restaurant} />
                        <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
                    </Stack.Group>
                </>
            ) :
                <Stack.Screen name="Login" component={Login} />
            }
        </Stack.Navigator>
    )
}

export default StackNavigation