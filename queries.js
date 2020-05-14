const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me', 
  host: 'localhost',
  database: 'api', 
  password: 'password', 
  port: 5432,
})

const getProfessors = (request, response) => {
  pool.query('SELECT * FROM professors ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}