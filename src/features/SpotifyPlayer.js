import { useEffect, useRef, useState } from 'react';

const SpotifyPlayer = ({ trackUri, isPlaying }) => {
    const iframeRef = useRef(null);
    const [spotifyEmbedWindow, setSpotifyEmbedWindow] = useState(null);
    const [iframeLoaded, setIframeLoaded] = useState(false);
    useEffect(() => {
        setIframeLoaded(false);
        setSpotifyEmbedWindow(document.querySelector('iframe[src*="spotify.com/embed"]').contentWindow);
    }, [trackUri]);

      useEffect(() => {
       if(trackUri && iframeLoaded) {
            spotifyEmbedWindow.postMessage({command: 'toggle'}, '*'); 
       }
      }, [trackUri, iframeLoaded, spotifyEmbedWindow, isPlaying]);

      const handleIframeLoad = () => {
        setIframeLoaded(true);
      };
    
    return (
        <>
        {trackUri && (<div style={styles.playerContainer}>
            <iframe 
                ref={iframeRef}
                title="Spotify Player"
                src={trackUri}
                width="100%"
                height={"80"}
                allowtransparency="true"
                onLoad={handleIframeLoad}
                allow="autoplay; encrypted-media;"
                loading="lazy"></iframe>
        </div>)}
        </>
        );
};
const styles = {
    playerContainer: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '80px',
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
};

export default SpotifyPlayer;