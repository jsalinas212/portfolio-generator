const fs = require('fs');
const { createPromptModule } = require('inquirer');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile(':/dist/index.html', fileContent, err => {
            // if there is an error, reject the promies and send error
            if (err) {
                reject(err);
                // return out of the function
                return;
            }

            resolve({
                ok: true,
                message: 'File created.'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            // if there is an error, reject the promies and send error
            if (err) {
                reject(err);
                // return out of the function
                return;
            }

            resolve({
                ok: true,
                message: 'File copied.'
            });
        });
    });
};

module.exports = { writeFile, copyFile };