// Action Creator
export const selectSong = (song) => {
    // Return an Action
    return {
        type: "SONG SELECTED",
        payload: song
    } 
}