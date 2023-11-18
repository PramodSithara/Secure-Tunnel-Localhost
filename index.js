const ngrok = require('ngrok');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function startNgrok() {
  rl.question('Enter the local server port number: ', async (answer) => {
    const port = parseInt(answer, 10);

    if (isNaN(port) || port <= 0 || port > 65535) {
      console.error('Invalid port number. Please enter a valid port number.');
      rl.close();
      return;
    }

    try {
      const url = await ngrok.connect(port);

      console.log('Host Web Address :', url);
      console.log('Press Ctrl+C to exit.');

    } catch (error) {
      console.error('Error starting ngrok:', error);
    } finally {
      rl.close();
    }
  });
}

startNgrok();
