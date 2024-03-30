import User from "@/app/(models)/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const body = await req.json();
    const userData = body.formData;

    if (!userData?.email || !userData.password) {
      return NextResponse.json(
        { message: "All fileds are required" },
        { status: 400 }
      );
    }
    //check duplicates emails
    const duplicate = await User.findOne({email:userData.email}).lean().exec();
    if(duplicate){
        return NextResponse.json(
            { message: "Duplicate email" },
            { status: 409 }
          );
    }

    const hashPassword = await bcrypt.hash(userData.password,10);
    userData.password= hashPassword

    await User.create(userData);
    return NextResponse.json({message:"User Createed"},{status
    :201});


  } catch (error) {
    console.log(err);
    return NextResponse.json({ message: Error, err }, { status: 500 });
  }
}
