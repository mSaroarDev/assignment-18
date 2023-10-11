import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req, res) {
  const prisma = new PrismaClient();

  try {
    const formData = {
      firstName: "md",
      lastName: "jahan",
      middleName: "saroar",
      mobile: "01798456380",
      email: "mail@mail.com",
      passwordHash: "#123654",
      intro: "i am a developer",
      profile: "active",
    };

    const newUser = await prisma.Users.create({
      data: formData,
    });

    const newUsersWithID = {
      ...newUser,
      id: newUser.id.toString(),
    };

    return NextResponse.json({
      status: "data created successfully",
      data: newUsersWithID,
    });
  } catch (err) {
    return NextResponse.json({ status: "error" });
  }
}
