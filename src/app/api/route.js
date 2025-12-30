export const feedbacks = [
  {
    id: 1,
    review: "It's food is very delicious.",
  },
  {
    id: 2,
    review: "Awesome boy service for serve food.",
  },
];

export async function GET(request) {
  return Response.json({
    status: 200,
    message: "server is successfully ruined",
  });
}
