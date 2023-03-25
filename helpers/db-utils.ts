import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}.mqpyhdm.mongodb.net/?retryWrites=true&w=majority`
  );

  return client;
}

export async function insertDocument(
  client: MongoClient,
  dbName: string,
  collection: string,
  document: object
) {
  const db = client.db(dbName);
  await db.collection(collection).insertOne(document);
}

export async function fetchDocument(
  client: MongoClient,
  dbName: string,
  collection: string,
  filterQuery: object
) {
  const db = client.db(dbName);
  return await db
    .collection(collection)
    .find(filterQuery)
    .sort({ _id: -1 })
    .toArray();
}
