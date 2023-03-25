import { NextApiRequest, NextApiResponse } from "next";
import {
  connectDatabase,
  insertDocument,
  fetchDocument,
} from "@/helpers/db-utils";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  let client;

  try {
    client = await connectDatabase();
  } catch (e) {
    res.status(500).json({ message: "Connection to the database failed!" });
    return;
  }

  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, comment } = req.body;

    const newComment = {
      eventId,
      email,
      name,
      comment,
    };

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      comment.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    try {
      if (client) {
        await insertDocument(client, "event", "comments", {
          comment: newComment,
        });
      }
    } catch (e) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }

    res.status(201).json({ message: "Comment added." });
  }

  if (req.method === "GET") {
    let documents;

    try {
      if (client) {
        documents = await fetchDocument(client, "event", "comments", {
          "comment.eventId": eventId,
        });
      }
    } catch (e) {
      res.status(500).json({ message: "Fetching data failed!" });
      return;
    }

    res.status(200).json({ comments: documents });
  }
}

export default handler;
