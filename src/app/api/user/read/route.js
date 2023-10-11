import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.Users.findMany();
  const usersData = users.map((user) => ({
    ...user,
    id: user.id.toString(),
  }));
  // console.log("users", usersData);

  return NextResponse.json({ msg: "success", data: usersData });
}
