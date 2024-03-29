import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { header, homebutton } from '../../style/header/style';
import { global } from '../../style/global/style';
import ButtonHome from '../../components/home/button';
import { LinearGradient } from 'expo-linear-gradient';
import my from '../../assets/images/my.png';


export default function Home(){

    return (
        <View>
        {/* Header Start */}
        <View style={header.top}>
        <View>
            <Text style={header.name}>Hey</Text>
            <Text style={header.subtitle}>Belluzzo</Text>
        </View>
            
            <View style={global.row}>
                <TouchableOpacity>
                    <Ionicons name="notifications-outline" size={24} color="#0C1523" style={header.spaceicon}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Ionicons name="apps-outline" size={24} color="#0C1523" style={header.spaceicon}/>
                </TouchableOpacity>
            </View>
        </View>

        {/* Buttoes */}
        <View style={homebutton.align}>

        <LinearGradient colors={['#92A3FD', '#9DCEFF']} style={homebutton.hbutton1}>
            <View style={{
                width: '55%'
            }}>
                <Text style={homebutton.title}>Quem eu sou? O que eu quero?</Text>
                <ButtonHome name='Definir'/>
            </View>

            <Image source={my} style={{
                width: 210,
                height: 124,

                transform: [
                    { translateX: -30 },
                    { translateY: 6 }
                ],
            }}/>
        </LinearGradient>
        </View>

        </View>
    )
}