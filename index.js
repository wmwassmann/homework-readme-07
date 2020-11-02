// setting up our libraries and requirements. 

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js");


function writeToFile(file001, answers001) {
    fs.writeFile(file001, generateMarkdown(answers001), function(err){
        if (err) {
            throw(err);
        } else console.log('Success');
    });

};


// function initializes the prompts and asks the user a series of questions. Each question is then stored into the generateMarkdown using the writeToFile method.
function init() {
    inquirer.prompt([
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:'
    },{
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username:'
    }, {
        type: 'input',
        name: 'describe',
        message: 'Please describe your GitHub project:'
    },{
        type: 'list',
        name: 'license',
        message: 'Please select a liscense:',
        choices: ['APACHE', 'GNU', 'BDS', 'MIT', 'AGPL', "Unlicensed"]
    },{
        type: 'input',
        name: 'installation',
        message: 'Please enter the command prompt to run dependancies:',
        default: 'npm install'
    },{
        type: 'input',
        name: 'test',
        message: 'Please enter the command to allow for trial runs:',
        default: 'npm test'
    },{
        type: 'input',
        name: 'usage',
        message: 'Please enter user information:'
    },{
        type: 'input',
        name: 'contribution',
        message: 'Please briefly describe user contribution to this repo:'
    },  
    // writes to the README.md      
        ]).then((answers001) => {
            console.log(answers001);
            writeToFile('README.md', answers001);
        });
};
// call funciton
init();






// function write001(file001, data) {
//     fs.write002(file001, generateMarkdown(data), function(err) {
//     if (err) { 
//         throw (err);
//     }
//         else console.log('Success');
//     });
// };

// function init001() {
//     inquirer.prompt(questions001).then((response001) => { 
//         console.log('README construction underway...');
//         write001('README.md', generateMarkdown({...response001}));
//     });
// };
  
// init001();