import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const input = path.join(root, 'public', 'images', 'AKA icon.png');
const output = path.join(root, 'public', 'images', 'cursor-32.png');

await sharp(input)
  .resize(32, 32)
  .png()
  .toFile(output);

console.log('32x32 cursor saved to public/images/cursor-32.png');
