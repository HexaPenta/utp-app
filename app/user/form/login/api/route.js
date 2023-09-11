import DataBaseInteraction from "@/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  const email = request.nextUrl.searchParams.get("email");
  const password = request.nextUrl.searchParams.get("password");

  const actualUser = await DataBaseInteraction.user.findMany({
    where: {
      email,
      password,
    },
    include: {
      Access: true,
    },
  });
  const actualUserUnique = actualUser[0];

  return NextResponse.json(actualUserUnique);
}
