
/* IMPORT */

import {setTimeout as delay} from 'node:timers/promises';
import Spinner from '../dist/index.js';

/* MAIN */

const testPiping = async () => {

  const spinner = new Spinner ();

  spinner.start ( 'Starting...' );

  await delay ( 1500 );

  spinner.stop ( 'Stopping...' );

};

testPiping ();
