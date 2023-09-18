import DataBaseInteraction from "@/prisma";
import { NextResponse } from "next/server";

export async function POST(r) {
  //   const email = r.nextUrl.searchParams.get("email");
  //   const { email } = request.nextUrl.searchParams;
  const { name, surname, email, password, headquarter, cycle, carrer } =
    await r.json();

  const def = {
    exist: true,
  };

  let idUser = "";

  const userByEmail = await DataBaseInteraction.user.findMany({
    where: {
      email,
    },
  });

  if (!userByEmail.length) {
    def.exist = false;
    const { id } = await DataBaseInteraction.user.create({
      include: {
        Access: true,
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
          create: {
            about: true,
            posts: true,
          },
        },
      },
    });
    idUser = id;
  }

  return NextResponse.json({ def, idUser });
  // return NextResponse.json({
  //   name,
  //   surname,
  //   email,
  //   password,
  //   headquarter,
  //   cycle,
  //   carrer,
  // });
}

export async function GET() {
  const all = await DataBaseInteraction.user.findMany({
    include: {
      Access: true,
    },
  });

  return NextResponse.json({ all });
}
