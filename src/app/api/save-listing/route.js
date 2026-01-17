import { connectDB } from "@/lib/mongodb";
import Listing from "@/models/Listing";

export async function POST(req) {
  try {
    const data = await req.json();
    await connectDB();

    await Listing.create(data);

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}
