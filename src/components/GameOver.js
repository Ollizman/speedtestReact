import React from 'react';
import './GameOver.css';

const closeHandler = () => {
    window.location.reload();
}

const GameOver = (props) => {
    return (
<div id='overlay'>
    <div className='gameoverbox'>
        <p>Game over!! Your final score is: {props.score}</p>
        <button id='closeButton' onClick={closeHandler}> Close </button>
    </div>
</div>

    );
}

export default GameOver;