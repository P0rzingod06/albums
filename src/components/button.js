import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = ({children, onPress}) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

const styles = {
    buttonStyle: {
        alignSelf: 'stretch',
        borderColor: 'blue',
        borderWidth: 1,
        flex: 1
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 16,
        padding: 5
    }
}

export default Button;
