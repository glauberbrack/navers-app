import React, {useContext} from 'react';
import { Image, TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

import Dashboard from '../pages/Dashboard';
import NaverInfo from '../pages/NaverInfo';
import NaverForm from '../pages/NaverForm';
import ContextData from '../contexts/ContextData';

import logo from '../assets/logo.png';
import menuImg from '../assets/menu.svg';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const ItemLogout = (props) => {

    const {signOut} = useContext(ContextData);

    return (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem 
            label="Sair" 
            labelStyle={{ fontSize: 22, color: '#212121', fontFamily: 'Montserrat_600SemiBold' }}
            style={{ alignItems: 'center' }}
            onPress={() => { signOut(); }} />
        </DrawerContentScrollView>
      );
}

const DrawerUser = () => {
    
    return(
        <Drawer.Navigator initialRouteName="Navers" 
            drawerContent={props => <ItemLogout {...props} />}
            drawerContentOptions={{
                activeTintColor: '#FFF',
                itemStyle: { marginVertical: 5, alignItems: 'center' },
                labelStyle: { fontSize: 22, color: '#212121', fontFamily: 'Montserrat_600SemiBold',},
                style: { marginTop: 350} }}
        >
            <Drawer.Screen name="Navers" component={AppRoutes}  />
            
        </Drawer.Navigator>
    );
}


const AppRoutes: React.FC = ({navigation}) => {

    const navigationOptionsBack = {
        headerBackTitleVisible: false,
        headerTitle: () => ( <Image source={logo} resizeMode="contain" style={{  margin: 16, height: 32, width: 190 }} /> ), 
        headerTintColor: "#000",
        headerStyle: { height: 120, backgroundColor: '#FAFAFA' }, 
        headerTitleAlign: 'center'
    }

    return(
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard} 
            options={{
                headerTitle: () => ( <Image source={logo} resizeMode="contain" style={{ margin: 16, height: 32, width: 190, }} /> ), 
                headerTintColor: "#fff",
                headerStyle: { height: 120, backgroundColor: '#FAFAFA',  shadowOpacity: 0, shadowOffset: { height: 0, width: 0, } }, 
                cardShadowEnabled: true, 
                headerTitleAlign: 'center',
                headerLeft: () => (
                    <TouchableOpacity onPress={() => { navigation.openDrawer(); }} style={{ marginLeft: 15 }}>
                        <SvgUri width="25" height="25" source={menuImg}/> 
                    </TouchableOpacity>
                ),}} />

            <Stack.Screen name="NaverInfo" component={NaverInfo} options={navigationOptionsBack} />
            <Stack.Screen name="AddNaver" component={NaverForm} options={navigationOptionsBack} />
            <Stack.Screen name="EditNaver" component={NaverForm} options={navigationOptionsBack} />
            
        </Stack.Navigator>
    );
}

export default DrawerUser;