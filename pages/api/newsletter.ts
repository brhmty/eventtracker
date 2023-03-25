import { NextApiRequest, NextApiResponse } from "next";
import { connectDatabase, insertDocument } from "@/helpers/db-utils";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    let client;

    try {
      client = await connectDatabase();
    } catch (e) {
      res.status(500).json({ message: "Connection to the database failed!" });
      return;
    }

    try {
      if (client) {
        await insertDocument(client, "event", "newsletter", {
          email: userEmail,
        });
      }
    } catch (e) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }

    res.status(201).json({ message: "Signed Up!" });
  }
}

export default handler;
