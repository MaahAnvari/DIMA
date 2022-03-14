import React, { Component } from 'react';
import { View, Text, ImageBackground, FlatList, ScrollView } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';

  

class LoginForm extends Component {

    onUsernameChange(text) {
        this.props.emailChanged(text); 
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onRegisterButtonPress() {
        // const { username, password } = this.props;
        // this.props.registerUser({ username, password });
    }

    renderError() {
        // if (this.props.error) {
        //     return (
        //         <View style={{ backgroundColor: 'white' }}>
        //             <Text style={styles.errorTextStyle} >
        //                 {this.props.error}
        //             </Text>
        //         </View>
        //     );
        // }
    }


    renderRegisterButton() {
        // if (this.props.loading) {
        //     return <Spinner size="large" />;
        // }
        // return (
        //     <Button onPress={this.onRegisterButtonPress.bind(this)} >
        //         Register
        //     </Button>
        // );
    }

    


    render() {
        return (
           <View style={{backgroundColor: '#001120', height:'100%'}}>
               <Text style={{color:'#FFF'}}>Login Page</Text>
               
           </View>
        );
    }
}




const mapStateToProps = ({ auth }) => {
    console.log('state',auth)
    const { email, password, error } = auth;

    return { email, password, error };
};

export default connect(mapStateToProps, 
    {emailChanged, passwordChanged}
    )(LoginForm);
