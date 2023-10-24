import DataBaseInteraction from "/prisma/index.js";
import { NextResponse } from "next/server";

export async function GET() {
  const allUsers = await DataBaseInteraction.user.findMany({
    include: {
      Access: true,
    },
    orderBy: {
      name: "asc",
    },
  });

  return NextResponse.json(allUsers);
}

export async function DELETE(request) {
  const idUser = request.nextUrl.searchParams.get("id");

  await DataBaseInteraction.postDetail.deleteMany({
    where: {
      idUser,
    },
  });

  await DataBaseInteraction.user.delete({
    where: {
      id: idUser,
    },
  });

  return NextResponse.json({ ok: true });
}

export async function PUT(request) {
  const { idUser, initData, Access } = await request.json();
  const { name, surname, email, password, headquarter, cycle, carrer } =
    initData;
  const { about, posts, dashboardPosts, dashboardUsers } = Access;

  await DataBaseInteraction.user.update({
    where: {
      id: idUser,
    },
    data: {
      name,
      surname,
      email,
      password,
      headquarter,
      cycle,
      carrer,
      Access: {
        update: {
          about,
          posts,
          dashboardPosts,
          dashboardUsers,
        },
      },
    },
  });

  return NextResponse.json({ ok: true });
}
