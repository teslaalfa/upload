let mysql = require ('mysql')

let conn = mysql.createConnection ({
    host:'31.97.51.179',
    user:'holger123',
    password:'Holger@123',
    database:'upload'
})

conn.connect ((err) => {
    if (err) throw err
    console.log ('database has been connected')
}
)

module.exports = conn;