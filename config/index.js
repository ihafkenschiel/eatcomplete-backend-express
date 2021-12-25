import dotenv from 'dotenv'
dotenv.config({ silent: process.env.NODE_ENV === 'production' })

const { env } = process

const config = {
  db: {
    host: env.DB_HOST || '127.0.0.1',
    user: env.DB_USER || 'root',
    password: env.DB_PASSWORD || '',
    database: env.DB_NAME || 'eatcomplete',
    port: parseInt(env.DB_PORT) || 3306,
  },
}

export default config
