// @ts-ignore
import pg from 'pg'

export const client = new pg.Client({
    host: 'localhost',
    port: 5432,
    database: 'blog2',
    user: 'gureenkov56',
    password: 'root',
})

// async function start() {
//     await client.connect()

//     const query = {
//         text: 'INSERT INTO posts(title, content, created_on) VALUES($1, $2, $3)',
//         values: ['TitleTest', 'My first post', 'NOW()'],
//     }

//     const res = await client.query(query)
//     console.log(res.rows[0])

//     const result = await client.query('SELECT * FROM posts')
//     console.log(result)

//     await client.end()

// }

// start()

