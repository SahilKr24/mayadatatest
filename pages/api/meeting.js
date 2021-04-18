import { connectToDatabase } from "../../util/mongodb";

export const getAll = async (search = "", startDate, toDate = Date.now()) => {
  const { client, db } = await connectToDatabase();
  const meetings = db
    .collection("meetings")
    .find({ $and: [{ name: { $regex: search } }] })
    .toArray();
  return meetings;
};

export const createMeeting = async (data) => {
  const { client, db } = await connectToDatabase();
  const collection = db.collection("meetings");
  const insertedDocument = await collection.insertOne(data);
  return insertedDocument.ops;
};

export default async function (req, res) {
  switch (req.method) {
    case "GET": {
      try {
        let meetings = [];
        const { search, startDate, toDate } = req.query;
        meetings = await getAll(search, startDate, toDate);
        res.json(meetings);
      } catch (e) {
        console.error(e);
        res.json({ error: e }, 502);
      } finally {
        return;
      }
    }

    case "POST": {
      try {
        const { body } = req;
        const newMeeting = await createMeeting(body);
        res.json(newMeeting);
      } catch (e) {
        console.error(e);
        res.json({ error: e }, 502);
      }
    }
  }
}
