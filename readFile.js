 import { readFile } from 'fs/promises';

const readTextFile = async (filePath) => {
    const data = await readFile(filePath, 'utf-8');
    console.log(data);
}

export default readTextFile;
