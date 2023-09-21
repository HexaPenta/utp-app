import DataBaseInteraction from "@/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  const idUser = request.nextUrl.searchParams.get("idUser");
  const category = request.nextUrl.searchParams.get("category");

  if (category === "all") {
    const posts = await DataBaseInteraction.post.findMany({
      include: {
        postDetail: {
          where: {
            idUser,
          },
          select: {
            iLove: true,
          },
        },
      },
    });

    return NextResponse.json(posts);
  }

  const posts = await DataBaseInteraction.post.findMany({
    include: {
      postDetail: {
        where: {
          idUser,
        },
        select: {
          iLove: true,
        },
      },
    },
    where: {
      postScope: {
        [category]: true,
      },
    },
    skip: 0,
    take: 5,
  });

  return NextResponse.json(posts);
}

export async function PUT(r) {
  const { idPost } = await r.json();

  await DataBaseInteraction.post.update({
    where: {
      id: idPost,
    },
    data: {
      id: "5",
    },
  });
}
