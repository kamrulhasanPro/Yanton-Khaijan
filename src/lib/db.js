import dns from 'node:dns/promises'
dns.setServers(["8.8.8.8", "1.1.1.1"])

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const connect = (collection) => {
  const database = process.env.DB;
  return client.db(database).collection(collection);
};
