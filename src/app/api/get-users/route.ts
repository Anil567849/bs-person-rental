
import connectDB from "@/lib/db/connectDB";
import User from "@/lib/db/models/Users";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest){
    try {
        await connectDB();
        const users = await User.find();
        return Response.json({"data" : users}, {status: 200});
    } catch (error) {
        return Response.json({"payment failed" : error}, {status: 401});
    }
}
