import pg from 'pg'

const client = new pg.Client({
    host: 'localhost',
    port: 5432,
    database: 'blog',
    user: 'gureenkov56',
    password: 'root',
})

async function connectAndTest() {
    await client.connect((err) => {
        if (err) {
            console.log('Connecting to database isn`t success');
        }
    });
}

connectAndTest()

export {client};

