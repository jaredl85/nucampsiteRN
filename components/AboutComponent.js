import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import { View, Text, ScrollView } from "react-native";
import { PARTNERS } from '../shared/partners';

function Mission(props) {
    return(
        <Card title={'Our Mission'}>
            <Text
                style={{margin: 10}}
            >
                We present a curated database of the best campsites in the vast woods and 
                backcountry of the World Wide Web Wilderness. We increase access to adventure 
                for the public while promoting safe and respectful use of resources. The expert 
                wilderness trekkers on our staff personally verify each campsite to make sure that 
                they are up to our standards. We also present a platform for campers to share 
                reviews on campsites they have visited with each other.
            </Text>
        </Card>
    )
}

class About extends Component {

    static navigationOptions = {
        title: "About",
      };

    render() {
        return (
            <ScrollView>
                <Mission />
            </ScrollView>
        )
    }
}

export default About;