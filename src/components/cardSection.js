import React from 'react'
import { View } from 'react-native'

const CardSection = (props) => {
    const { container } = styles;

    return (
        <View style={container}>
            {props.children}
        </View>
    )
};

const styles = {
    container: {
        borderColor: 'pink',
        borderWidth: 1,
        flexDirection: 'row',
        padding: 10
    }
};

export default CardSection