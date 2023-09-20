import DataBaseInteraction from "@/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { image } = await request.json();

  await DataBaseInteraction.post.create({
    data: {
      title: "testTile-Wilson",
      description: "anyDescriptionHere-Alonso",
      image,
      postScope: {
        create: {
          systemsEngineering: true,
          civilEngineering: true,
          industrialEngineering: true,
          architecture: true,
        },
      },
    },
  });

  return NextResponse.json({ okNewPost: true });
}
