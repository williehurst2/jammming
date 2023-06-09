import React, { useCallback } from 'react';
import './Playlist.css';
import TrackList from '../Tracklist/Tracklist';


const Playlist = (props) => {
    const handleNameChange = useCallback(
        (event) => {
            props.onNameChange(event.target.value);
        },
        [props.onNameChange]
    );

    return (
        <div className="Playlist">
            <input onChange={handleNameChange} defaultValue={"New Playlist"} />
        </div>
    )
}

export default Playlist;