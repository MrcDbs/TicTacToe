import React, { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

const PlayerCard = (props) => {

    const [punteggio, setPunteggio] = useState(0);
    const [count1, setCount1] = useState(10);
    const [count2, setCount2] = useState(10);


    const increasePunteggio = () => {
        setPunteggio(punteggio++);
    }
    return (
        <>
            <div >
                <h1 style={{ color: 'white', fontSize: '65px' }}>{props.player.playerFullName}</h1>
                {props.symbol === 'x' ? <CloseIcon style={{ color: 'white', fontSize: '65px' }} /> : <PanoramaFishEyeIcon style={{ fontSize: '65px', color: 'white' }} />}
                {/* <h2 style={{ color: 'white', fontSize: '50px' }}>{props.player.symbol}</h2> */}
                <p style={{ color: 'white', fontSize: '40px' }}>Score</p>
                <p style={{ color: 'white', fontSize: '40px' }}>{punteggio}</p>
                {props.p1 === true ? <h2 style={{ color: '#07f52f', fontSize: '50px' }}>It's your TURN</h2> : <></>}
                {props.p2 === true ? <h2 style={{ color: '#07f52f', fontSize: '50px' }}>It's your TURN</h2> : <></>}

            </div>
        </>
    )
}

export default PlayerCard;