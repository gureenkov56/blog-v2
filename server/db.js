import pg from 'pg'

const client = new pg.Client({
    host: 'localhost',
    port: 5432,
    database: 'blog',
    user: 'gureenkov56',
    password: 'root',
})

async function connectAndTest() {
    await client.connect();
    const test = await client.query('SELECT * FROM posts;')
    console.log('test.rows', test.rows); 
}

connectAndTest()

export {client};

