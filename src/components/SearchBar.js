import React, { useState } from 'react'
import './SearchBar.css'

const SearchBar = ({ onChange }) => {
    const [ keyword, setKeyword ] = useState('')

    const onFormSubmit = e => {
        e.preventDefault()
        onChange(keyword)
    }
    
    return (
        <div className="search-bar ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <div className="ui searchbar-list list">
                        <div className="item">
                            <img className="ui avatar image" src="avatar.jpg" alt="PetTube" />
                            <div className="content">
                                <h2 className="header">PeTube</h2>
                            </div>
                        </div>
                    </div>
                    <input value={keyword} type="text" onChange={e => setKeyword(e.target.value)} placeholder="Search a very wide input..." />
                </div>
            </form>
        </div >
    )
}

export default SearchBar