import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Alert, StyleSheet, Text, View, Button, Image, ImageBackground, TouchableOpacity,TextInput, FlatList, CheckBox, } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();
const LoginScreen = () => {
  
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
};
const HomeScreen = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);
  let number = 1
  const ageHandler=() =>{
    if(number = 1){
      Alert.alert("Site is down for maintenance", "You may still access your online banking through the login UI but the other parts of the site may not be working at the moment.")
    }
  }
  return (
    <View style={styles.container}>
      
      <ImageBackground 
        style={{width: 1400, height: 400, top: 600, right: 20,}}
        source={require('./assets/stockphoto.jpg')} >

      </ImageBackground>
       <Image
        style={{width: 140, height: 140, top: 25, right: 550,}}
        source={require('./assets/sofinancial1.png')} 
        />

      <Image
        style={{width: 300, height: 300, top: 80, right: 500,}}
        source={require('./assets/darksquare.png')} 
        />


       <TouchableOpacity style={{right: 500, backgroundColor: 'white', bottom: 200, }}>
          <TextInput style={{ fontSize: 18, backgroundColor:'white', paddingVertical: 15, paddingHorizontal: 40, }} placeholder="User ID">
          </TextInput>
        </TouchableOpacity> 
      

      <TouchableOpacity style={{right: 500, backgroundColor: 'white', bottom: 180, }}>
        <TextInput style={{fontSize: 18, paddingVertical: 15, paddingHorizontal: 40,}} placeholder="Password">
        </TextInput>

      </TouchableOpacity>
      <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={{right: 620, bottom: 126, }}
        
        />
        
        <TouchableOpacity style={{borderColor:'white', borderRadius: 6, borderWidth:1 ,right: 430, bottom: 160,paddingVertical: 10, paddingHorizontal: 10,}}>
          <Text style={{fontWeight:'600',fontSize: 18, color:'white',}}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{right: 560, bottom: 150,}}>
          <Text style={{fontSize: 18, color:'white', }}>Forgot ID/Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{right: 573, bottom: 140,}}>
          <Text style={{fontSize: 18, color: 'white',}}>Open an Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{bottom: 400, left: 130,}}>
          <Text style={{fontSize: 28, fontWeight: 600,}}>SCHEDULE AN IN-PERSON ON ON ONE APPOINTMENT AND SAVE TIME</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{bottom: 380, left: 160,}}>
          <Text style={{fontSize: 20, fontWeight: 600,}}>STILL HAVE QUESTIONS? SCHEDULE A TIME TO MEET WITH AN ASSOCIATE AND GET THE ANSWERS YOU NEED</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>ageHandler()} style={{bottom: 350,left: 100,backgroundColor:'#004AAD', borderWidth: 1, borderRadius: 6, paddingVertical: 10, paddingHorizontal: 10,}}>
          <Text style={{fontSize: 18, color:'white', fontWeight: '600', }}>Schedule Appointment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{bottom: 650, left: 555,}}>
          <Text style={{fontSize: 18,}}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{left: 600, bottom: 715,}}>
          <Text style={{fontSize: 18,}}>Help</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{bottom: 738, left: 500,}}>
          <Text style={{fontSize: 18,}}>Contact Us</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{right: 550, bottom: 420,}}>
          <Text style={{fontSize: 18, color:'white',}}>Save User ID</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{right: 390, bottom: 370,}}>
          <Text style={{fontSize: 18, color:'white'}}>Enroll</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{bottom: 810, left: 380,}}>
          <Text style={{fontSize: 18,}}>En Espanol</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{bottom: 300,}}>

       
        <Text style={{top: 100,}}>

        Investing in securities involves risks, and there is always the potential of losing money when you invest in securities. You should review any planned financial transactions that may have tax or legal implications with your personal tax or legal advisor.

            Securities products are provided by Merrill Lynch, Pierce, Fenner & Smith Incorporated (also referred to as "MLPF&S", or "Merrill"), a registered broker-dealer, registered investment adviser, Member SIPC layer, and a wholly-owned subsidiary of Service One Financial Corporation. MLPF&S makes available certain investment products sponsored, managed, distributed or provided by companies that are affiliates of Service One Financial Corporation.  {'\n'}
            {'\n'}


            Service One Financial Private Bank is a division of Service One Financial, N.A., Member FDIC and a wholly owned subsidiary of Service One Financial Corporation. Trust and fiduciary services are provided by Service One Financial, N.A. and U.S. Trust Company of Delaware. Both are indirect subsidiaries of Service One Financial Corporation.

            Insurance Products are offered through Merrill Lynch Life Agency Inc.  {'\n'} {'\n'} (MLLA) and/or  Service One Financial Insurance Services, Inc., both of which are licensed insurance agencies and wholly-owned subsidiaries of Service One Financial Corporation.

            Banking, credit card, automobile loans, mortgage and home equity products are provided by Service One Financial, N.A. and affiliated banks, Members FDIC and wholly owned subsidiaries of Service One Financial Corporation. Credit and collateral are subject to approval. Terms and conditions apply. This is not a commitment to lend. Programs, rates, terms and conditions are subject to change without notice.
        </Text>

  </TouchableOpacity> 
      
      <TouchableOpacity style={{bottom: 955,}}>
        <Text style={{fontSize: 20}}>SMALL BUSINESS            COMMERCIAL         INVESTING & WEALTH          CHECKING          SAVINGS            AUTO LOANS           HOME LOANS</Text>
      </TouchableOpacity>
    
     


  
      
  <FlatList 
      
      horizontal={true}
      style={{bottom: 100, fontSize: 28,  }} 
      showsVerticalScrollIndicator={true}
      scrollEnabled='true'
      data={[
        
        {fikey: <TouchableOpacity style={{}}>
                  <Text style={{}}>ENROLL</Text>
                </TouchableOpacity>
         },
        {fikey: <TouchableOpacity style={{}}>
                <Text style={{}}>CONTACT US</Text>
              </TouchableOpacity>
        },

        {fikey: <TouchableOpacity style={{}}>
                <Text style={{}}>HELP</Text>
              </TouchableOpacity>
        },

       
       


      ]}
      renderItem={({item}) => <TouchableOpacity style={{ marginLeft: 50, fontSize: 28, }}>{item.fikey}
     </TouchableOpacity>}
      />


    
      <StatusBar style="auto" />
    </View>
  );
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ 
            title: 'Home',
            headerShown: false,

        
        }}
        />
        <Stack.Screen name="login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default MyStack;
