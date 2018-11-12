import React from 'react'
import { Image, Text, View} from 'react-native'

import Card from './card'
import CardSection from './cardSection'

const AlbumDetail = ({album}) => {
    const { title, artist, url, image, thumbnail_image } = album;
    const { imageStyles , imageContainerStyles, textStyles } = styles;

    return (
        <Card>
            <CardSection>
                <View style={imageContainerStyles}>
                    <Image style={imageStyles} source={{ uri: thumbnail_image }} />
                </View>
                <View>
                    <Text style={textStyles}>{title}</Text>
                    <Text style={textStyles}>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Text key={title} style={textStyles}>{title}</Text>
            </CardSection>
            <CardSection>
                <Text>ooter Button</Text>
            </CardSection>
        </Card>
    )
}

const styles = {
    textStyles: {
        justifyContent: 'center'
    },
    imageStyles: {
        height: 50,
        width: 50
    },
    imageContainerStyles : {
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default AlbumDetail;