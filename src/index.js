import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export const askName = () => {
  const name = readlineSync.question('May I have your name? ') || 'Guest';
  console.log(`Hello, ${name}`);
};
