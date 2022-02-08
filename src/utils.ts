
/* IMPORT */

import width from 'cli-width';
import truncate from 'fixed-width-string';
import readline from 'readline';

/* MAIN */

const writeLine = ( line: string ): void => {

  readline.clearLine ( process.stdout, 0 );
  readline.cursorTo ( process.stdout, 0 );

  line = truncate ( line, width () );

  process.stdout.write ( line );

};

/* EXPORT */

export {writeLine};
