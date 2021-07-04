import { combineReducers } from "redux"

export const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: "4:05"},
        {title: 'Macarena', duration: "2:30"},
        {title: 'All Star', duration: "3:!5"},
        {title: 'I want it that way', duration: "2:25"}
    ]
}

export const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === "SONG SELECTED") {
        return action.payload
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})