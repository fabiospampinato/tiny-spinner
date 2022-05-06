
/* IMPORT */

import {setTimeout as delay} from 'node:timers/promises';
import Spinner from '../dist/index.js';

/* MAIN */

const TIMEOUT = 1500;

const testUpdate = async () => {

  const spinner = new Spinner ();

  spinner.start (  'Solving puzzle' );

  const intervalId = setInterval ( () => {
    spinner.update ( Date.now () );
  }, 16 );

  await delay ( TIMEOUT );

  clearInterval ( intervalId );

  spinner.stop ();

};

const testWarning = async () => {

  const spinner = new Spinner ();

  spinner.start (  'Solving puzzle' );

  await delay ( TIMEOUT );

  spinner.warning ( 'Some warning message' );

};

const testSuccess = async () => {

  const spinner = new Spinner ();

  spinner.start (  'Solving puzzle' );

  await delay ( TIMEOUT );

  spinner.success ( 'Some success message' );

};

const testError = async () => {

  const spinner = new Spinner ();

  spinner.start (  'Solving puzzle' );

  await delay ( TIMEOUT );

  spinner.error ( 'Some error message' );

};

const testStop = async () => {

  const spinner = new Spinner ();

  spinner.start (  'Solving puzzle' );

  await delay ( TIMEOUT );

  spinner.stop ();

};

const testLong = async () => {

  const spinner = new Spinner ();

  spinner.start (  'Abc '.repeat ( 10000 ) );

  await delay ( TIMEOUT );

  spinner.stop ();

};

const testPretty = async () => {

  const spinner = new Spinner ();

  const messages = ['Working hard', 'Working harder', 'Working real hard', 'Working'];

  spinner.start (  'Working' );

  let iterations = 0;

  const intervalId = setInterval ( () => {
    spinner.update ( messages[iterations++ % messages.length] );
  }, 1000 );

  await delay ( 4000 );

  clearInterval ( intervalId );

  spinner.success ( 'Work done!' );

};

const test = async () => {

  await testUpdate ();
  await testWarning ();
  await testSuccess ();
  await testError ();
  await testStop ();
  await testLong ();
  await testPretty ();

};

test ();
