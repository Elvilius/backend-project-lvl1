import readlineSync from 'readline-sync'; 

export const askName = () => {
    const name = readlineSync.question('May I have your name? ') || 'Guest';
    console.log(`Hello, ${name}`);
}