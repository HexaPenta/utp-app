// import DataBaseInteraction from "@/prisma";
import { NextResponse } from "next/server";
import DataBaseInteraction from "../../../../prisma";

export async function GET() {
  const allUsers = await DataBaseInteraction.user.findMany({
    include: {
      Access: true,
    },
  });

  return NextResponse.json(allUsers);
}
