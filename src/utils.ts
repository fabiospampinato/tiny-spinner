
/* IMPORT */

import truncate from 'tiny-truncate';

/* MAIN */

const writeLine = ( line: string ): void => {

  line = truncate ( line );

  const process = globalThis.process;

  if ( process ) {

    process.stdout?.cursorTo?.( 0 );
    process.stdout?.write?.( line );
    process.stdout?.clearLine?.( 1 );

  } else {

    console.log ( line );

  }

};

/* EXPORT */

export {writeLine};
