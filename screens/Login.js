import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import React from "react";
//import GlobalStyles from '../GlobalStyles'
import { isIphoneX } from "react-native-iphone-x-helper";
import {
  icons,
  images,
  SIZES,
  COLORS,
  FONTS,
  GOOGLE_API_KEY,
} from "../constants";
import { color } from "react-native-reanimated";

const Login = () => {
  function renderMap() {
    return (
    <View style={{ flex: 1 }}>
      <View style={{ height: SIZES.height * 0.65 }}>
        <Image
          source={images.mother}
          resizeMode="cover"
          style={{
            width: SIZES.width,
            height: "100%",
          }}
        />
      </View>
    </View>
    )
  }

  function renderDeliveryInfo() {
    return (
        <View
            style={{
                position: 'absolute',
                bottom: 70,
                left: 0,
                right: 0,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
          <View
                    style={{
                        backgroundColor: COLORS.white,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20
                    }}
                >
                  {/* input */}
                  <View
                        style={{
                            padding: SIZES.padding * 2,
              
                        }}
                    >
                      <Text style={{ color: COLORS.secondary}}>ชื่อผู้ใช้</Text>
                      <TextInput
        style={styles.input}
      />
                      <Text style={{ color: COLORS.secondary}}>รหัสผ่าน</Text>
                      <TextInput
        style={styles.input}
        
      />


                    </View>

{/* forgot pass */}
<View
style={{
  padding: SIZES.padding * 2,
  alignItems: 'center',
  justifyContent: 'center'
}}
><Text style={{ color: COLORS.secondary}}>ลืมรหัสผ่าน</Text></View>

                    {/* Order Button */}
                    <View
                        style={{
                            padding: SIZES.padding * 2,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: SIZES.width * 0.9,
                                padding: SIZES.padding,
                                backgroundColor: COLORS.primary,
                                alignItems: 'center',
                                borderRadius: SIZES.radius
                            }}
                            onPress={() => navigation.navigate("OrderDelivery", {
                                restaurant: restaurant,
                                currentLocation: currentLocation
                            })}
                        >
                            <Text style={{ color: COLORS.white, ...FONTS.h2 }}>เข้าสู่ระบบ</Text>
                        </TouchableOpacity>
                    </View>

                    {/* register */}
                    <View
                        style={{
                            padding: SIZES.padding * 2,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row'
                        }}
                    >
                      <Text style={{ ...FONTS.h5 }}>คุณยังไม่มีบัญชีใช้หรือไม่?</Text>
                      <Text style={{ ...FONTS.h5 , color: COLORS.secondary}}> ลงทะเบียน</Text>
                    </View>
                </View>

                {isIphoneX() &&
                    <View
                        style={{
                            position: 'absolute',
                            bottom: -34,
                            left: 0,
                            right: 0,
                            height: 34,
                            backgroundColor: COLORS.white
                        }}
                    >
                    </View>
                }
        </View>
    )
}

  return (
    <View style={{ flex: 1 }}>
    {renderMap()}
    {renderDeliveryInfo()}
    </View>
  )
 
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Login;
