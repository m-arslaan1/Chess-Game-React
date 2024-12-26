import React, { useEffect, useState, useContext } from 'react';
import { toast } from 'react-hot-toast';
import AppContext from '../../contexts/Context';
import arbiter from '../../arbiter/arbiter';

const Timer = () => {
    const { appState } = useContext(AppContext);
    const [whiteTime, setWhiteTime] = useState(300); // 5 minutes
    const [blackTime, setBlackTime] = useState(300); // 5 minutes

    useEffect(() => {
        const timer = setInterval(() => {
            if (appState.turn === 'w') {
                setWhiteTime(prev => prev - 1);
            } else {
                setBlackTime(prev => prev - 1);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [appState.turn]);

    useEffect(() => {
        if (whiteTime === 0) {
            toast.error('White player ran out of time');
        } else if (blackTime === 0) {
            toast.error('Black player ran out of time');
        }
    }, [whiteTime, blackTime]);

    useEffect(() => {
        const currentPosition = appState.position[appState.position.length - 1];
        const opponent = appState.turn === 'w' ? 'b' : 'w';
        const castleDirection = appState.castleDirection[`${opponent === 'w' ? 'white' : 'black'}`];

        if (arbiter.isCheckMate(currentPosition, opponent, castleDirection)) {
            toast.error('Checkmate');
        } else if (arbiter.isPlayerInCheck({ positionAfterMove: currentPosition, position: currentPosition, player: opponent })) {
            toast.error('Check');
        }
    }, [appState.position, appState.turn]);

    useEffect(() => {
        const currentPosition = appState.position[appState.position.length - 1];
        const piece = appState.lastMove?.piece;
        const rank = appState.lastMove?.rank;
        const file = appState.lastMove?.file;

        if (piece && rank !== undefined && file !== undefined) {
            const validMoves = arbiter.getValidMoves({
                position: currentPosition,
                castleDirection: appState.castleDirection,
                prevPosition: appState.position[appState.position.length - 2],
                piece,
                rank,
                file
            });

            if (validMoves.length === 0) {
                toast.error('Illegal move');
            }
        }
    }, [appState.lastMove]);

    return (
        <div className="timer">
            <div>White: {Math.floor(whiteTime / 60)}:{whiteTime % 60}</div>
            <div>Black: {Math.floor(blackTime / 60)}:{blackTime % 60}</div>
        </div>
    );
};

export default Timer;