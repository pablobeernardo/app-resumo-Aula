import { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

export default class MapPage extends Component {
    
    render() {
        return (
            <View>
                <MapView style={this.styles.map} />
            </View>    
        );
    }
    private styles = StyleSheet.create({
        map:{
            height: '100%',
            width: '100%'
        }
    
    
    })
}

