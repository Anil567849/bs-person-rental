import connectDB from "@/lib/db/connectDB";
import User from "@/lib/db/models/Users";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    
    const formData = await request.formData();

    // Todo: store in db 
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const price = formData.get('price');
    const gender = formData.get('gender');
    const location = formData.get('location');
    const distance = formData.get('distance');
    const dob = formData.get('dob');
    const bio = formData.get('bio');
    const pref = formData.get('pref');
    const photo = formData.get('photo');
    const aadharCard = formData.get('aadharCard');
    console.log({name, email, phone, price, gender, location, distance, dob, bio, pref, photo, aadharCard});

    // @ts-ignore 
    const photoArrayBuffer = await getArrayBuffer(photo);
    // @ts-ignore 
    const aadharCardArrayBuffer = await getArrayBuffer(aadharCard);
    // @ts-ignore 
    const res = await saveInDB(name, email, phone, price, gender, location, distance, dob, bio, pref, photoArrayBuffer, aadharCardArrayBuffer);

    
    return Response.json({"data": res}, {status: 200});

}

async function getArrayBuffer(photo: File){
    try {
        // Read the file as a Buffer, then convert to string
        const buffer = Buffer.from(await photo.arrayBuffer());
        return buffer.toString('base64');
    } catch (error) {
        throw new Error('Error reading the file: ');
    }
}

async function saveInDB(name: string, email: string, phone: string, price: string, gender: string, location: string, distance: string, dob: string, bio: string, pref: string, photoArrayBuffer: string, aadharCardArrayBuffer: string){
    await connectDB();
    const user = new User({
        name,
        email,
        phone,
        price,
        gender,
        location,
        distance,
        dob,
        bio,
        pref,
        photoArrayBuffer,
        aadharCardArrayBuffer,
    })

    const saved = await user.save();

    if(!saved){
        return 'not saved';
    }else{
        return 'saved';
    }
}