import { Tabs } from "expo-router"
import  Foundation  from "@expo/vector-icons/Foundation"
import  FontAwesome5  from "@expo/vector-icons/FontAwesome5"
import AntDesign from '@expo/vector-icons/AntDesign'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function RootLayout() {
    return (
        <Tabs screenOptions= {{
            tabBarActiveTintColor: '#ff7b00',
            tabBarInactiveTintColor: '#ffdcdc',}}
            >
            <Tabs.Screen
                name="index"
                options={{ 
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({color}) => <Foundation name="home" size={24} color={color} />
                }}
                
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: "Sobre",
                tabBarIcon: ({ color }) => <FontAwesome5 name="house-user" size={20} color={color} />
            }}
            />
            <Tabs.Screen
                name="contact"
                options={{ 
                    title: "Contato",
                    tabBarIcon: ({ color }) => <AntDesign name="contacts" size={24} color={color} />
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{ 
                    title: "perfil",
                    tabBarIcon: ({ color }) => <Ionicons name="person-circle" size={24} color={color} />
                }}
            />
            </Tabs>
    )
}
