const path = require('node:path');
const fs = require('node:fs/promises');

async function getBinary() {
  return await fs.readFile(path.join(__dirname, 'nodejs/lib_bg.wasm'));
}

module.exports = {
  getBinary,
};
