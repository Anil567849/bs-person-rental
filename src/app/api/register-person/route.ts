import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    
    const formData = await request.formData();


    // Todo: store in db 
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const gender = formData.get('gender');
    const location = formData.get('location');
    const km = formData.get('km');
    const dob = formData.get('dob');
    const bio = formData.get('bio');
    const photo = formData.get('photo');
    const aadharCard = formData.get('aadharCard');


    console.log(name, email, phone, gender, location, km, dob, bio, photo, aadharCard);
    

    return Response.json({"data": 'result'}, {status: 200});

}