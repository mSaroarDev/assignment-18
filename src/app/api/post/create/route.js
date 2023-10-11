import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req, res) {
  const prisma = new PrismaClient();

  try {
    const formData = {
      authorId: "1n",
      parentId: "2n",
      title: "this is post title",
      metaTitle: "this is meta title",
      slug: "post slug goes here",
      summary: "post summery",
      published: "1",
      content: "this is post content",
    };

    const newPost = await prisma.post.create({
      data: formData,
    });

    const newPostWithID = {
      ...newPost,
      id: newPost.id.toString(),
    };

    return NextResponse.json({
      status: "data created successfully",
      data: newPostWithID,
    });
  } catch (err) {
    return NextResponse.json({ status: "error", data: err });
  }
}
