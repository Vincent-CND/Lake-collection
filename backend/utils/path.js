import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const backendDir = path.resolve(__dirname, '..');
const rootDir = path.resolve(backendDir, '..');

const frontendDir = path.join(rootDir, 'frontend');
const publicDir = path.join(frontendDir, 'public');
const viewsDir = path.join(frontendDir, 'views');

export { backendDir,frontendDir, publicDir, viewsDir };
export default rootDir;
