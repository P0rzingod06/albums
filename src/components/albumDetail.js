import React from 'react'
import { Image, Linking, Text, View} from 'react-native'

import Card from './card'
import CardSection from './cardSection'
import Button from './button'

const AlbumDetail = ({album}) => {
    const { title, artist, url, image, thumbnail_image } = album;
    const { thumbnailStyle , imageContainerStyles, imageStyle, headerTextContainerStyles, textStyles} = styles;

    return (
        <Card>
            <CardSection>
                <View style={imageContainerStyles}>
                    <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={headerTextContainerStyles}>
                    <Text style={textStyles}>{title}</Text>
                    <Text style={textStyles}>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={{ uri: image}} />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now!!!!!!
                </Button>
            </CardSection>
        </Card>
    )
}

const styles = {
    textStyles: {
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
        justifyContent: 'space-between'
    },
    imageStyle: {
        height: 300,
        width: null,
        flex: 1
    },
    headerTextContainerStyles: {
        justifyContent: 'space-around',
        paddingLeft: 5
    }
}

export default AlbumDetail;