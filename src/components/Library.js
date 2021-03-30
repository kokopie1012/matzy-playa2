import LibrarySong from "./LibrarySong";

const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus}) => {
    return (
        <div className={`library ${libraryStatus ? "active-library" : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => <LibrarySong song={song} setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} songs={songs} id={song.id} key={song.id} setCurrentSong={setCurrentSong}/>)}
            </div>
        </div>
    )
}

export default Library