// src/db.mjs
import { MongoClient } from 'mongodb'

const uri = 'mongodb://localhost:27017' // Change this if you're using Atlas or a different host

const client = new MongoClient(uri)

let db

export async function connectToDB() {
  if (!db) {
    await client.connect()
    db = client.db('shop')
  }
  return db
}
