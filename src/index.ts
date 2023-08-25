
/* IMPORT */

import Blocker from 'stdin-blocker';
import colors from 'tiny-colors';
import Cursor from 'tiny-cursor';
import {FRAMES, FRAMES_INTERVAL, SYMBOL_ERROR, SYMBOL_SUCCESS, SYMBOL_WARNING} from './constants';
import {writeLine} from './utils';

/* MAIN */

class Spinner {

  /* VARIABLES */

  private intervalId?: number;
  private iteration = 0;
  private message = '';

  /* API */

  render = (): void => {

    const frame = FRAMES[( this.iteration++ ) % FRAMES.length];
    const line = `${colors.cyan ( frame )} ${this.message}`;

    writeLine ( line );

  };

  start = ( message: string ): void => {

    if ( this.intervalId ) return;

    this.message = message;

    Blocker.block ();
    Cursor.hide ();

    this.intervalId = setInterval ( this.render, FRAMES_INTERVAL );

  };

  update = ( message: string ): void => {

    this.message = message;

  };

  warning = ( message: string ): void => {

    return this.stop ( `${colors.yellow.bold ( SYMBOL_WARNING )} ${message}` );

  };

  success = ( message: string ): void => {

    return this.stop ( `${colors.green ( SYMBOL_SUCCESS )} ${message}` );

  };

  error = ( message: string ): void => {

    return this.stop ( `${colors.red ( SYMBOL_ERROR )} ${message}` );

  };

  stop = ( message: string = '' ): void => {

    if ( !this.intervalId ) return;

    Blocker.unblock ();
    Cursor.show ();

    clearInterval ( this.intervalId );

    const line = message ? `${message}\n` : '';

    writeLine ( line );

  };

}

/* EXPORT */

export default Spinner;
