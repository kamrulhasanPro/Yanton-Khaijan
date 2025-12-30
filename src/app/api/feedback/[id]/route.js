import { connect } from "@/lib/db";
import { ObjectId } from "mongodb";

const feedbacksCollection = connect("feedbacks");

// specific get
export async function GET(req, { params }) {
  const { id } = await params;
  if (!id || id.length !== 24) {
    return Response.json({
      status: 404,
      message: "give me valid _id",
    });
  }

  const query = { _id: new ObjectId(id) };
  const feedback = await feedbacksCollection.findOne(query);
  return Response.json(feedback);
}

// specific update
export async function PATCH(req, { params }) {
  const { id } = await params;
  if (!id || id.length !== 24) {
    return Response.json({
      status: 404,
      message: "give me valid _id",
    });
  }
  const query = { _id: new ObjectId(id) };
  const { review } = await req.json();
  const updatedReview = {
    $set: { review },
  };

  const result = await feedbacksCollection.updateOne(query, updatedReview);
  return Response.json(result);
}

// specific delete
export async function DELETE(req, { params }) {
  const { id } = await params;
  if (!id || id.length !== 24) {
    return Response.json({
      status: 404,
      message: "give me valid _id",
    });
  }

  const query = { _id: new ObjectId(id) };
  const result = await feedbacksCollection.deleteOne(query);
  return Response.json(result);
}
