// import DataBaseInteraction from "@/prisma";
import DataBaseInteraction from "@/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const allUsers = await DataBaseInteraction.user.findMany({
    include: {
      Access: true,
    },
  });

  return NextResponse.json(allUsers);
}

export async function DELETE(request) {
  const idUser = request.nextUrl.searchParams.get("id");

  await DataBaseInteraction.user.delete({
    where: {
      id: idUser,
    },
  });

  return NextResponse.json({ ok: true });
}
