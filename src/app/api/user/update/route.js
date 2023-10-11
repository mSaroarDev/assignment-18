import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const prisma = new PrismaClient();

  try {
    const userIdToUpdate = 1000004;
    const updatedUserData = {
      firstName: "New First Name",
      lastName: "New Last Name",
      email: "newemail@mail.com",
    };

    const updatedUser = await prisma.users.update({
      where: {
        id: userIdToUpdate,
      },
      data: updatedUserData,
    });

    if (!updatedUser) {
      return NextResponse.json({ status: "error", message: "User not found" });
    }

    return NextResponse.json({ status: "updated", data: updatedUser });
  } catch (err) {
    return NextResponse.json({ status: "error", message: err.message });
  } finally {
    await prisma.$disconnect();
  }
}
