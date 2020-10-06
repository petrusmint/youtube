import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'
import useVideos from '../hooks/useVideos'

const App = () => {
    const [ selectedVideo, setSelectedVideo] = useState(null)
    const [ videos, search ] = useVideos('reactjs')

    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos])

    return (
        <div className="ui container">
            <div className="ui grid">
                <div className="ui row">
                    <div className="sixteen wide column">
                        <SearchBar onChange={search} />
                    </div>
                </div>
                <div className="ui row">
                    <div className="ten wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="six wide column">
                        <VideoList videos={videos} onVideoSelect={e => setSelectedVideo(e)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App