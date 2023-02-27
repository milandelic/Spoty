import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import classes from './Player.module.css';

const Player = (props: { playingTrack: string; }) => {
    if(!props.playingTrack) return null
    return(
        <div className={classes.playerContainer}>
            <div className={classes.playerContent}>
                {
                    props.playingTrack === 'NOT FOUNDED' ?
                    <div className={classes.notFound}>This song does not have preview to be played</div>:
                    <AudioPlayer autoPlay progressUpdateInterval={50} src={props.playingTrack} />
                }
            </div>
        </div>
        // <audio controls autoPlay key={props.playingTrack}>
        //     <source src={props.playingTrack} type="audio/mpeg"/>
        // </audio>
    );
}

export default Player;