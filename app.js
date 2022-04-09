//modules
const fs = require('fs');

const readLine = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readLine.createInterface({ input, output });

//modules local
const fMath = require('./modules/fMath');
const cfg = require('./config/app-config');
const { resolve } = require('path');

//constants and variables
const prefix = cfg.prefix;

//==========================MAIN CODE=============================//

console.log(`\nWitaj jestem Bambik,\npersonalny BOT\n\nkomendy:\n${ prefix }help - wyświetla pomoc\n${ prefix }menu - wyświetla menu\n${prefix}exit - wyjście\n`);

function exitBOT() {
  rl.question('Are you sure you want to exit? (y/n) ', (answer) => {
    // if (answer.match(/^y(es)?$/i)) rl.pause();
    (answer.match(/^y(es)?$/i)) ? rl.pause() : console.log('Canceled!\n')
  });
};

//readline event - CTRL + C to exit
rl.on('SIGINT', () => {
  exitBOT();
});

//readline event - line input of user
rl.on('line', (input) => {
  input = input.toLowerCase().trim();

  //check input is command (start with prefix np. "/")
  if (input.startsWith(prefix)) {
    //remove prefix
    input = input.substring(1);

    //commands and their actions
    if (input == 'exit') {
      exitBOT();
    }
    else if (input == 'help') {
      console.log(`Dostępne komendy:\n${ prefix }menu\n${ prefix }help\n${ prefix }exit`);
    }
    else if (input == 'menu') {
      console.log(`#==============MENU==============#\n ${ prefix }math - Funkcje matematyczne\n ${ prefix }Edycja plików\n ${prefix}about\n#================================#\n`);
    }
    else if (input == 'math') {
      console.log(`#=======Matematyka======#\n ${ prefix }math add - Dodawanie\n ${ prefix }math sub - Odejmowanie\n ${ prefix }math mult - Mnożenie\n ${ prefix }math div - Dzielenie\n ${ prefix }math sqEq - Równanie kwadratowe\n#=======================#`);

      rl.question(`Aby wyjść pisz ${ prefix }close`, answer => {
        if (answer == `${ prefix }close`)
          console.log('Moduł zamknięty\n')
        //KONIEC TUTAJ <<<<<<<<<<<<<<<<<<<< znaczy tylko zebym ja wiedzial xddd
      })
    };
  }
  else {
    if (input == 'top10') {
      top10();
    }
    else if (input == 'cześć') {
      console.log('Witaj towarzyszu');
    }
    else if (input == 'kto był w paryżu') {
      console.log('Luki kto był w Paryżu?');
    }
    else if (input == 'co?') {
      console.log('Ale co?');
    }
    else if (input == 'PANIC') {
      console.log('INFO: Wszystko co napiszesz zostanie zapisane!\nAby wyjść wpisz /close\n');
    }
    else if (input == 'json') {
      fs.readFile('config.json', (err, data) => {
        if (err) throw err;
  
        let jsonParsed = JSON.parse(data);
  
        console.log(jsonParsed.prefix);
      });
    }
    else if (input == 'cmdtest') {
      commandList();
    }
    else if (input == 'xtx') {
      test();
      test();
      test();
    };
  };
  // else
  //   console.log(`Received ${input}`);
});

//functions
function top10() {
  console.log('\nList of top 10');
  fs.readFile('dane.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(`${ data }\n`);
  });
}

function commandList() {
  rl.question(`======START======\nlist of avalible commands:\n ${ cfg.commands }\nType one:\n`, answer => {
    if (cfg.commands.includes(answer))
      console.log('Test passed!');
    else
      console.log('Do not work :(\nChek code!');

    console.log('=======END======')
  });
}

//=============TEST AREA==============//

function testt() {
  return new Promise(resolve => {
    rl.question('Wpisz cokolwiek\n', answer => {
      console.log('\n'+answer+'\n');
    });
  });
}
//==========================================================================

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('1. Type anythink: ', (answer) => {
      console.log(`Answer: ${answer}`)
      resolve()
    })
  })
}

const test = async () => {
  await question1();
  await question1();
}

//==========================================================================

function deleting() {
  rl.write('Delete this');
  setTimeout( () => {
    rl.write(null, { ctrl: true, name: 'u' });
  }, 1000)
}

// let a, b, c;
  
// rl.question('Podaj a: ', userA => {
//   a = userA;  

//   rl.question('Podaj b: ', userB => {
//     b = userB;

//     rl.question('Podaj c: ', userC => {
//       c = userC;
//       fMath.sqEquation(a, b, c); 
//     });
//   });
// });