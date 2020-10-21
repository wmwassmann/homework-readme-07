const { info } = require("console");

function generateMarkdown(data) {

    var info001 = '';


    if (data.license === 'APACHE') {

        info001 = 'This project is licensed under APACHE version 2.0 - More information at https://www.apache.org/licenses/LICENSE-2.0.txt';
    } else if (data.license === 'GNU')  {
        info001 = 'This project is licensed under GNU Operating System - More information at https://www.gnu.org/licenses/licenses.html';
    } else if (data.license === 'BDS') {
        info001 = 'This project is licensed under BDS License - More information at https://opensource.org/licenses/BSD-2-Clause';
    } else if(data.license === 'MIT') { 
        info001 = 'This project is licensed under MIT - More information at https://www.mit.edu/~amini/LICENSE.md';
    } else if (data.license === 'APGL') {
        info001 = 'This project is licensed under Affero General Public License - More information at https://www.gnu.org/licenses/agpl-3.0.en.html';
    } else {
        info001 = 'This project is unlicensed.';
    }
        return ` # ${data.title}
        # Table of Contents
        
        -[Description](#description)
        -[Installation](#installation)
        -[Tests](#test)
        -[License](#info001)
        -[Usage](#usage)
        -[Contributing](#contribution)    
        # Description
        ${data.description}
        # Installation
        ${data.installation}
        # Tests
        ${data.test}
        # License
        ${info001}
        # Usage
        ${data.usage}
        # Contributing
        ${data.contribution}
        ## Author Contact Information
        ------------------------------
        Author Email: ${data.email}
        Author GitHub: ${data.github}

        `;
} module.exports = generateMarkdown;
