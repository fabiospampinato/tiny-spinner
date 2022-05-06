
/* IMPORT */

import truncate from 'tiny-truncate';

/* MAIN */

const writeLine = ( line: string ): void => {

  line = truncate ( line );

  const process = globalThis.process;

  if ( process ) {

    process.stdout?.clearLine?.( 0 );
    process.stdout?.cursorTo?.( 0 );
    process.stdout?.write?.( line );

  } else {

    console.log ( line );

  }

};

/* EXPORT */

export {writeLine};
