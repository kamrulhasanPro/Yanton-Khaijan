import { connect } from "@/lib/db";

const feedbacksCollection = connect("feedbacks");
export async function GET(request) {
  const feedbacks = await feedbacksCollection.find().toArray();
  return Response.json(feedbacks);
}

export async function POST(req) {
  const { review } = await req.json();
  
  if (!review || typeof review !== "string") {
    return Response.json({
      status: 404,
      message: "please give me a review",
    });
  }
  const result = await feedbacksCollection.insertOne({ review });
  return Response.json(result);
}
