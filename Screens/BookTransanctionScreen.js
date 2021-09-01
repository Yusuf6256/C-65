import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import * as Permissions from 'expo-permissions'; 
import { BarCodeScanner } from 'expo-barcode-scanner';
import { askAsync } from 'expo-permissions';

export default class TransanctionScreen extends React .Component{
    constructor(){
        super();
        this.state={
            hasCameraPermissions: null,
            scanned: false,
            scannedData:'',
            buttonState: 'normal',
        }
    }
    getCameraPermissions = async () => {
        const {status}= await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermissions: status==='granted',
            buttonState: 'clicked',
        })
    }
    handledBarCodeScanned = async ({type,data})=> {
        this.setState({
            scanned: true,
            scannedData: data,
            buttonState: 'normal'
        })
    }
    render(){
        const hasCameraPermissions = this.state.hasCameraPermissions;
        const scanned = this.state.scanned;
        const buttonState = this.state.buttonState;

        if (buttonState === "clicked" && hasCameraPermissions){
            return(
              <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
              />
            );
          }
    
          else if (buttonState === "normal"){
              
          }
            return(
              <View style={styles.container}>
    
              <Text style={styles.displayText}>{
                hasCameraPermissions===true ? this.state.scannedData: "Request Camera Permission"
              }</Text>     
    
              <TouchableOpacity
                onPress={this.getCameraPermissions}
                style={styles.scanButton}>
                <Text style={styles.buttonText}>Scan QR Code</Text>
              </TouchableOpacity>
            </View>
            );
          }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    displayText: {
        fontSize: 22,
        textDecorationLine: 'underline'
    },
    scanButton:{
        backgroundColor:"blue",
        padding: 10,
        margin: 10,
    }
  });