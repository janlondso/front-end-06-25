import styles from './App.module.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import Tracklist from './components/Tracklist ';
import Track from './components/Track';

function App() {
  return (
    <div className={styles.app}>
        {/* SearchBar */}
        <SearchBar />
        {/* SearchResults */}
        <SearchResults />
        {/* Playlist */}
        <Playlist />
        {/* Tracklist */}
        <Tracklist />
        {/* Track */}
        <Track />
    </div>
  );
}

export default App;
