
/* IMPORT */

import truncate from 'tiny-truncate';

/* MAIN */

const writeLine = ( line: string ): void => {

  line = truncate ( line );

  const process = globalThis.process;

  if ( process ) {

    const isTerminal = /(\r?\n|\r)$/.test ( line );

    process.stdout?.cursorTo?.( 0 );
    process.stdout?.write?.( line.trim () );
    process.stdout?.clearLine?.( 1 );
    process.stdout?.write?.( isTerminal ? '\r\n' : '' );

  } else {

    console.log ( line );

  }

};

/* EXPORT */

export {writeLine};
