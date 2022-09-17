import React, { useEffect, useState } from 'react';

import { Card, CardContent, CardActions } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

const CardSlot = (props) => {

    useEffect(() => {

    }, [props.open])

    return (
        <>

            {
                // style={{
                //     backgroundColor: isBackgroundRed ? 'red' : 'blue',
                //   }}

                // sx={{ backgroundColor: '#38383b', cursor: 'pointer' }}>

                props.open ? <Card sx={{ backgroundColor: '#38383b', cursor: [props.cursor] }}>
                    <CardContent>
                        <div style={{ height: '60px', textAlign: 'center' }}>
                            {props.turn === 'x' ? <CloseIcon style={{ color: 'white', fontSize: '65px' }} /> : <PanoramaFishEyeIcon style={{ fontSize: '65px', color: 'white' }} />}

                        </div>
                    </CardContent>
                    <CardActions>
                        {/* #7c7c80 */}
                    </CardActions>
                </Card> : <Card sx={{ backgroundColor: '#7c7c80', cursor: 'pointer' }}>
                    <CardContent>
                        <div style={{ height: '60px' }}>

                        </div>
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>
            }

        </>
    )
}

export default CardSlot;