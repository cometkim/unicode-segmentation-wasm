import * as path from 'node:path';
import * as fs from 'node:fs/promises';

export async function getBinary() {
  return await fs.readFile(path.join(import.meta.dirname, 'nodejs/lib_bg.wasm'));
}
