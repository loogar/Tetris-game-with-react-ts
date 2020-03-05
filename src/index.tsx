import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tetris from './components/tetris';
import './styles/styles.css'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Tetris boardWidth="14" boardHeight="20" />, document.getElementById('root'))

serviceWorker.unregister();
