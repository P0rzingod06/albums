import React from 'react'
import { View } from 'react-native'

const Card = (props) => {
    const { container } = style;

    return (
        <View style={container}>
            {props.children}
        </View>
    )
}

const style = {
    container: {
        backgroundColor: '#EFD',
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10
    }
}

export default Card;
