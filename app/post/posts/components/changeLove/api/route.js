import DataBaseInteraction from "@/prisma";
import { NextResponse } from "next/server";

export async function PUT(req) {
  const { newLove, idUser, idPost } = await req.json();

  const { iLove } = await DataBaseInteraction.postDetail.upsert({
    where: {
      idUser_idPost: {
        idUser,
        idPost,
      },
    },
    update: {
      iLove: newLove,
    },
    create: {
      iLove: true,
      User: {
        connect: {
          id: idUser,
        },
      },
      Post: {
        connect: {
          id: idPost,
        },
      },
    },
  });

  return NextResponse.json(iLove);
}
