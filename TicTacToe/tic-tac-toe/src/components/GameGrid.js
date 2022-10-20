import React, { useEffect, useState } from 'react';
import '../App.css';
import CardSlot from './CardSlot';

import PlayerCard from './PlayerCard';
import { Grid, Box, DialogContent } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

const GameGrid = (props) => {

    const [isOver, setIsOver] = useState(false);
    const [color, setColor] = useState('#282830');
    const [val, setVal] = useState(props.player.symbol);
    const [cursor, setCursor] = useState('pointer');
    const [p1, setP1] = useState(true);
    const [p2, setP2] = useState(false);
    const [count, setCount] = useState(3);
    const [comp, setComp] = useState({
        playerFullName: 'COMPUTER',
        symbol: '',
        id: null

    });
    const [grigliaDiGioco, setGrigliaDiGioco] = useState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ])
    const [turn, setTurn] = useState({
        a: val,
        b: val,
        c: val,
        d: val,
        e: val,
        f: val,
        g: val,
        h: val,
        i: val
    });
    const [player, setPlayer] = useState(props.player);
    const [matrix, setMatrix] = useState({
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
        h: 0,
        i: 0
    });

    const [matrixClick, setMatrixClick] = useState({
        a: false,
        b: false,
        c: false,
        d: false,
        e: false,
        f: false,
        g: false,
        h: false,
        i: false
    })

    const [dialog, setDialog] = useState(true);


    useEffect(() => {
        //console.log(' 3 ENTRO NELLO USE EFFECT GRID');
    }, [matrix])

    useEffect(() => {
        if (count > 1) {
            setTimeout(() => setCount(count - 1), 1000);
        }
        else {
            setTimeout(() => handleClose(), 1000);

        }
    }, [count])

    const handleClose = () => {

        setDialog(false);

    };


    const beginningDialog = () => {
        return (

            <Dialog onClose={handleClose} open={dialog} >
                <DialogTitle sx={{ backgroundColor: '#282830', color: 'white', fontSize: '50px' }}>GAME STARTS IN</DialogTitle>
                <DialogContent sx={{ backgroundColor: '#282830' }}>

                    <h1 style={{ fontSize: '80px', textAlign: 'center', color: 'white' }}> {count}</h1>
                </DialogContent>
            </Dialog>

        )
    }

    const play = () => {
        //console.log('ENTRA NEL PLAY', props.player)

        return (
            <>


                <div style={{ textAlign: 'center', borderTop: '2px solid white', height: '400px' }}>
                    <Grid container spacing={3} >
                        <Grid item xs={4} sx={{ borderRight: '0.5px solid white', margin: 'none' }}>
                            <PlayerCard p1={p1} player={player} symbol={player.symbol} />
                        </Grid>
                        <Grid item xs={4}  >
                            <div style={{ marginBottom: '150px', textAlign: 'center', borderLeft: 'none', borderRight: 'none', marginRight: '20px' }}>
                                {dialog ? <h1 style={{ color: '#282830', fontSize: '30px' }}>GAME IS ON</h1> :
                                    <h1 style={{ color: '#07f52f', fontSize: '30px' }}>GAME IS ON</h1>
                                }


                                <div >
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={3} >
                                            <Grid container item spacing={3} >
                                                <Grid item xs={4} onMouseOver={(event) => mOver(event, 1, 'a')} onMouseLeave={(event) => mOver(event, 0, 'a')} onClick={(event) => btnClicked(event, 1, 'a')}>
                                                    {matrix.a === 1 ? <CardSlot open={true} player={player} turn={turn.a} cursor={cursor} /> : <CardSlot open={false} />}

                                                </Grid>
                                                <Grid item xs={4} onMouseOver={(event) => mOver(event, 1, 'b')} onMouseLeave={(event) => mOver(event, 0, 'b')} onClick={(event) => btnClicked(event, 1, 'b')}>
                                                    {matrix.b === 1 ? <CardSlot open={true} player={player} turn={turn.b} cursor={cursor} /> : <CardSlot open={false} />}
                                                </Grid>
                                                <Grid item xs={4} onMouseOver={(event) => mOver(event, 1, 'c')} onMouseLeave={(event) => mOver(event, 0, 'c')} onClick={(event) => btnClicked(event, 1, 'c')}>
                                                    {matrix.c === 1 ? <CardSlot open={true} player={player} turn={turn.c} cursor={cursor} /> : <CardSlot open={false} />}
                                                </Grid>
                                            </Grid>
                                            <Grid container item spacing={3}>
                                                <Grid item xs={4} onMouseOver={(event) => mOver(event, 1, 'd')} onMouseLeave={(event) => mOver(event, 0, 'd')} onClick={(event) => btnClicked(event, 1, 'd')}>
                                                    {matrix.d === 1 ? <CardSlot open={true} player={player} turn={turn.d} cursor={cursor} /> : <CardSlot open={false} />}
                                                </Grid>
                                                <Grid item xs={4} onMouseOver={(event) => mOver(event, 1, 'e')} onMouseLeave={(event) => mOver(event, 0, 'e')} onClick={(event) => btnClicked(event, 1, 'e')}>
                                                    {matrix.e === 1 ? <CardSlot open={true} player={player} turn={turn.e} cursor={cursor} /> : <CardSlot open={false} />}
                                                </Grid>
                                                <Grid item xs={4} onMouseOver={(event) => mOver(event, 1, 'f')} onMouseLeave={(event) => mOver(event, 0, 'f')} onClick={(event) => btnClicked(event, 1, 'f')}>
                                                    {matrix.f === 1 ? <CardSlot open={true} player={player} turn={turn.f} cursor={cursor} /> : <CardSlot open={false} />}
                                                </Grid>
                                            </Grid>
                                            <Grid container item spacing={3}>
                                                <Grid item xs={4} onMouseOver={(event) => mOver(event, 1, 'g')} onMouseLeave={(event) => mOver(event, 0, 'g')} onClick={(event) => btnClicked(event, 1, 'g')}>
                                                    {matrix.g === 1 ? <CardSlot open={true} player={player} turn={turn.g} cursor={cursor} /> : <CardSlot open={false} />}
                                                </Grid>
                                                <Grid item xs={4} onMouseOver={(event) => mOver(event, 1, 'h')} onMouseLeave={(event) => mOver(event, 0, 'h')} onClick={(event) => btnClicked(event, 1, 'h')}>
                                                    {matrix.h === 1 ? <CardSlot open={true} player={player} turn={turn.h} cursor={cursor} /> : <CardSlot open={false} />}
                                                </Grid>
                                                <Grid item xs={4} onMouseOver={(event) => mOver(event, 1, 'i')} onMouseLeave={(event) => mOver(event, 0, 'i')} onClick={(event) => btnClicked(event, 1, 'i')}>
                                                    {matrix.i === 1 ? <CardSlot open={true} player={player} turn={turn.i} cursor={cursor} /> : <CardSlot open={false} />}
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </div>
                                <h2 style={{ color: 'white', fontSize: '50px', cursor: 'pointer', border: '1px solid white', backgroundColor: [color] }} onClick={(event) => reset()} onMouseOver={(event) => onHover(true)} onMouseLeave={(event) => onHover(false)}>RESET</h2>
                            </div>

                        </Grid>
                        <Grid item xs={4} sx={{ borderLeft: '0.5px solid white', marginLeft: 'none' }}>
                            {player.symbol === 'x' ? <PlayerCard p2={p2} player={comp} symbol={'o'} btnClicked={btnClicked} /> : <PlayerCard p2={p2} player={comp} symbol={'x'} btnClicked={btnClicked} />}

                        </Grid>
                    </Grid>
                </div>

            </>
        )
    }

    const mOver = (event, value, index) => {

        if (matrixClick[index] === false) {
            //console.log(' 1 entra nell if');
            setCursor('pointer');
            setMatrix((matrix) => ({ ...matrix, [index]: value }));
        } else {
            setCursor('not-allowed');

        }
    }

    const btnClicked = (event, value, index) => {
        setMatrixClick((matrixClick) => ({ ...matrixClick, [index]: true }));
        setMatrix((matrix) => ({ ...matrix, [index]: value }));
        if (p1) {
            setP1(false);
            setP2(true);
        } else {
            setP1(true);
            setP2(false);
        }

        console.log(' CLICK DEL BOTTONE');
        if (turn[index] === 'x') {
            console.log('ENTRO NELL IF PER VEDERE SE TURN.INDEX E X ')
            setTurn((turn) => {
                for (var key in turn) {
                    if (key != index && matrixClick[key] === false) {
                        turn[key] = 'o';
                        console.log('CHIAVE DI TURN ', turn[key])
                    }
                }
                return turn;
            });

            //setTurn((turn) => ({ ...turn, [index]: 'o' }));
        } else if (turn[index] === 'o') {
            setTurn((turn) => {
                for (var key in turn) {
                    if (key != index && matrixClick[key] === false) {
                        turn[key] = 'x';
                        console.log('CHIAVE DI TURN ', turn[key])
                    }
                }
                return turn;
            });
        }
    }

    const reset = () => {
        setTurn((turn) => {
            for (let key in turn) {
                turn[key] = val;
            }
            return turn;
        });
        setMatrix((matrix) => {
            for (let key in matrix) {
                matrix[key] = 0;
            }
            return matrix;
        })
        setMatrixClick((matrixClick) => {
            for (let key in matrixClick) {
                matrixClick[key] = false;
            }
            return matrixClick;
        })
        setCursor('pointer');
        setComp((comp) => ({ ...comp, playerFullName: 'COMPUTER' }));
        setP1(true);
        setP2(false);
    }

    const onHover = (param) => {
        param ? setColor('#4e4e59') : setColor('#282830');
    }

    return (
        <>
            {beginningDialog()}
            {play()}
        </>
    )
}

export default GameGrid;