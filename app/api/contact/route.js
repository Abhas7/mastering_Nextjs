import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        console.log("Contact Form is gonna Submitted");

        return NextResponse.json({ 
            message: "Success! Your message has been sent." 
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ 
            message: "Failed to send message." 
        }, { status: 500 });
    }
}
 
