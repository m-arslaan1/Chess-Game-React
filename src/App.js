import './App.css';
import Board from './components/Board/Board';
import { reducer } from './reducer/reducer';
import { useReducer } from 'react';
import { initGameState } from './constants';
import AppContext from './contexts/Context';
import Control from './components/Control/Control';
import TakeBack from './components/Control/bits/TakeBack';
import MovesList from './components/Control/bits/MovesList';
import Timer from './components/Timer/Timer';
import { Toaster } from 'react-hot-toast';

function App() {
    const [appState, dispatch ] = useReducer(reducer, initGameState);

    const providerState = {
        appState,
        dispatch
    };

    return (
        <AppContext.Provider value={providerState} >
            <div className="App">
                <Board/>
                <Control>
                    <MovesList/>
                    <TakeBack/>
                </Control>
                <Timer />
                <Toaster />
            </div>
        </AppContext.Provider>
    ); 
}

export default App;