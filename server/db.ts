// @ts-ignore
import pg from 'pg'

export const client = new pg.Client({
    host: 'localhost',
    port: 5432,
    database: 'blog2',
    user: 'gureenkov56',
    password: 'root',
})

