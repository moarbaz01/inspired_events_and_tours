import { mailTemplate } from "@/template/mailTemplate";
import { sendEmail } from "@/utils/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    if (!name && !email) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }
    await sendEmail(
      email,
      "New Contact Form Submission",
      mailTemplate({ email, name, message })
    );
    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
