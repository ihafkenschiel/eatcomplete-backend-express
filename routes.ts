import config from './config'
// Packages
import express from 'express'
import mysql from 'mysql2'

var router = express.Router()

const connection = mysql.createConnection(config.db)

router.get('/foods', (req, res) => {
  connection.query(
    'SELECT id, name FROM `foods` ORDER BY name ASC LIMIT 20',
    function (err: any, rows: any, fields: any) {
      if (err) {
        res.status(400)
        res.send('Error: ' + err)
      } else {
        res.status(200)
        res.json(rows)
      }
    }
  )
})

router.get('/nutrients', (req, res) => {
  connection.query(
    'SELECT id, name FROM `nutrients` ORDER BY name ASC',
    function (err: any, rows: any, fields: any) {
      if (err) {
        res.status(400)
        res.send('Error: ' + err)
      } else {
        res.status(200)
        res.json(rows)
      }
    }
  )
})

export default router
