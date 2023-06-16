import {Client} from 'pg'

const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'blog',
    user: 'gureenkov56',
    password: 'root',
})

client.connect();

export {client};

