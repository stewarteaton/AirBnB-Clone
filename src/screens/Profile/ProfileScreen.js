import React from 'react'
import { Text, View, Pressable, TouchableOpacity} from 'react-native'
import { Auth } from 'aws-amplify';



const ProfileScreen = (props) => {
// export default function ProfileScreen() {
    const signOut = () => {
        Auth.signOut();
    };
            return (
            <View style={{height: '100%', justifyContent: 'center',alignItems: 'center', display: 'flex' }}>
                <Pressable onPress={ signOut }
                            style={{ width: '100%', height: 40, backgroundColor: 'blue', justifyContent: 'center',alignItems: 'center', }}
                >
                    <Text style={{color: 'white'}}> Log Out bruh </Text>
                </Pressable>
            </View>
        )
}

export default ProfileScreen;










