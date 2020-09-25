import { useState, useEffect } from 'react'
import Youtube from '../apis/youtube'

const useVideos = defaultSearchTerm => {
    const [ videos, setVideo ] = useState([])

    useEffect(()=> {
        search(defaultSearchTerm)
    }, [defaultSearchTerm])

    const search = async term => {
        const response = await Youtube.get('/search', {
            params: {
                q: term
            }
        })

        setVideo(response.data.items)
    }

    return [videos, search]
}

export default useVideos