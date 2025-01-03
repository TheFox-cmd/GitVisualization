import { Function } from '../types/types';

const Functions = () => {

  const ls : Function = () => {
    console.log('ls');
  }

  const cd : Function = () => {
    console.log('cd');
  }

  const help : Function = () => {
    console.log('Help');
  }

  return {
    ls,
    cd,
    help
  }
}

export default Functions;