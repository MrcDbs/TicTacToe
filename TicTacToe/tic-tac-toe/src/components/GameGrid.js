import React, { useEffect, useState } from 'react';
import '../App.css';
import CardSlot from './CardSlot';

import PlayerCard from './PlayerCard';
import { Grid, Box } from '@mui/material';

const GameGrid = (props) => {

    const [isOver, setIsOver] = useState(false);
    const [val, setVal] = useState(props.player.symbol);
    const [cursor, setCursor] = useState('pointer');
    const [p1, setP1] = useState(true);
    const [p2, setP2] = useState(false);
    const [comp, setComp] = useState({
        playerFullName: 'COMPUTER'

    });
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

        // a: props.player.symbol,
        // b: props.player.symbol,
        // c: props.player.symbol,
        // d: props.player.symbol,
        // e: props.player.symbol,
        // f: props.player.symbol,
        // g: props.player.symbol,
        // h: props.player.symbol,
        // i: props.player.symbol
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


    useEffect(() => {
        //console.log(' 3 ENTRO NELLO USE EFFECT GRID');
    }, [matrix])

    useEffect(() => {

    }, [])

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
                                <h1 style={{ color: 'white' }}>Game is ON</h1>

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

    // const updateArr = (matrix, dx, num) => {
    //     console.log(' 2 ENTRO NEL CAMBIO ARRAY');
    //     matrix[dx].a = num;
    //     matrix[dx].cl = false;
    //     setVal(matrix[dx].a);
    //     console.log('QUESTA E A ', matrix[dx].a)
    //     console.log('QUESTA E VAL DOPO CAMBIO ARRAY', val);
    //     console.log('QUESTO E MATRIX DOPO CAMBIO ', matrix);
    //     return matrix;
    // }

    //  DA FINIRE IL GRID 3x3

    const mOver = (event, value, index) => {
        // console.log('**** QUESTO E L EVENTO *****', event.type);
        // console.log(matrix);
        // console.log('VALORE DI ' + index + ' DOPO SETTAGGIO ', matrix[index]);
        if (matrixClick[index] === false) {
            //console.log(' 1 entra nell if');
            setCursor('pointer');
            setMatrix((matrix) => ({ ...matrix, [index]: value }));
            // const tempMatrix = matrix;
            // tempMatrix[dx].a = num;
            //matrix[dx] = num;
            //setMatrix((matrix) => ({ ...matrix, matrix[dx]: { a: num, cl: false } }));
            //console.log('QUESTO `E IL VALORE DI INDICE E VALUE ', matrix[index].a);
        } else {
            setCursor('not-allowed');

        }
        // if (value.type === 'mouseover') {
        //     setIsOver(true);
        // } else {
        //     setIsOver(false);
        // }
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

    return (
        <>

            {play()}
        </>
    )
}

export default GameGrid;