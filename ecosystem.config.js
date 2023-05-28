// for start on VPS with PM2
module.exports = {
    apps: [
        {
            name: 'Blog',
            port: '80',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}
