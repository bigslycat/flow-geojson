/* @flow */

import { resolve } from 'path';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';

const fileName = 'GeoJSON.js';
const libDir = resolve(__dirname, 'lib');
const source = resolve(__dirname, 'src', fileName);
const bundle = resolve(libDir, fileName);

if (!existsSync(libDir)) mkdirSync(libDir);

const raw = readFileSync(source, 'utf8');
const code = `/* @flow */\n\n/* flow-include\n\n${raw}\n*/\n`;

writeFileSync(bundle, code);
