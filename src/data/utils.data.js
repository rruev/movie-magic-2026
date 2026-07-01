import fs from 'fs/promises';

export const readDb = async (collection) => {
    const content  = await fs.readFile('./src/db.json', 'utf-8');
    const db = JSON.parse(content);

    if (collection && !db.hasOwnProperty(collection)) {
        throw new Error(`Collection ${collection} does not exist in the database!`);
    }

    return collection ? db[collection] : db;
}

export const writeDb = async (collection, data) => {
    const content  = await fs.readFile('./src/db.json', 'utf-8');
    const db = JSON.parse(content);

    if (!db.hasOwnProperty(collection)) {
        throw new Error(`Collection ${collection} does not exist in the database!`);
    }

    db[collection] = data;

    await fs.writeFile('../db.json', JSON.stringify(db, null, 2));
}