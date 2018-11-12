import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import axios from 'axios'

import AlbumDetail from './albumDetail'

class AlbumList extends Component {

    constructor() {
        super();
        this.state = { albumList: []};
    }

    componentDidMount(){
        axios.get("https://rallycoding.herokuapp.com/api/music_albums").then(response => {
            this.setState({
                albumList: response.data
            });
        });
    }
 
    renderAlbums(){
        return this.state.albumList.map(album => <AlbumDetail album={album} key={album.title}>{ album.title }</AlbumDetail>)
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
    )}
}

export default AlbumList;