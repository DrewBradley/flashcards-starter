const http = require('http');
let app = http.createServer();
const data = require('./src/data');
const prototypeQuestions = data.prototypeData;
const musicData = require('./src/music-data');
const musicQuestions = musicData.musicData;
const Game = require('./src/Game');

// Start the server on port 3000
app.listen(3000, '127.0.0.1');  
console.log('Node server running on port 3000'); 
//let dataset
// if (newGame.round.roundCount ===1) {
//   dataset = prototypeQuestions
// } else {
//   dataset = musicQuestions
// }

const newGame = new Game();
newGame.start(prototypeQuestions);