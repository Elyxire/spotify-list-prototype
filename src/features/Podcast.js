
const episodeList = [
    {
      id: 1,
      title: 'episode 1',
      description: 'Description of episode 1',
      image: 'https://via.placeholder.com/150',
      uri: 'https://open.spotify.com/embed/episode/43cbJh4ccRD7lzM2730YK3?utm_source=generator'
    },
    {
      id: 2,
      title: 'episode 2',
      description: 'Description of episode 2',
      image: 'https://via.placeholder.com/150',
      uri: 'https://open.spotify.com/embed/episode/332yTwGiILGKTS7dsHCj2P?utm_source=generator'
    },
    {
      id: 3,
      title: 'episode 3',
      description: 'Description of episode 3',
      image: 'https://via.placeholder.com/150',
      uri: 'https://open.spotify.com/embed/episode/3JdT4c2IazDDBsuGGf0sOE?utm_source=generator'
    },
  ];  

const Podcast = ({ playingTrack, setPlayingTrack, isPlaying, setIsPlaying }) => {
    
    const handlePlayPause = (trackUri) => {
        if (playingTrack === trackUri) {
            setIsPlaying(!isPlaying);
        } else {
            setPlayingTrack(trackUri);
            setIsPlaying(true);
        }
      };
    return (
        <div style={styles.container}>
            <h1>Podcast Page</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {episodeList.map(episode => (
                <div key={episode.id} style={{ margin: '10px', border: '1px solid #ccc', padding: '10px' }}>
                    <img src={episode.image} alt={episode.title} style={{ width: '150px', height: '150px' }} />
                    <h3>{episode.title}</h3>
                    <p>{episode.description}</p>
                    <button onClick={() => handlePlayPause(episode.uri)}>
                    {(playingTrack === episode.uri && isPlaying) ? 'Pause' : 'Play'}
                    </button>
                </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        paddingBottom: '100px',
    },
};

export default Podcast;