import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const prisma = new PrismaClient();

  try {
    const userIdToDelete = 1000004;
    const deletedUser = await prisma.users.delete({
      where: {
        id: userIdToDelete,
      },
    });

    if (!deletedUser) {
      return NextResponse.json({ status: "error", message: "User not found" });
    }

    return NextResponse.json({ status: "deleted", data: deletedUser });
  } catch (err) {
    return NextResponse.json({ status: "error", message: err.message });
  } finally {
    await prisma.$disconnect();
  }
}
