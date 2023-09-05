import DataBaseInteraction from "@/prisma";
import { NextResponse } from "next/server";

// export async function GET(request) {
//   // return NextResponse.json({ request });

//   // DataBaseInteraction.postDetail.findMany({
//   //   where: {
//   //     idPost: "",
//   //     idUser: "",
//   //   },
//   // });
//   return NextResponse.json({ req: "1" });
// }

// export async function PUT(request) {
//   const { idUser, idPost, iLove, idPostDetailUse } = await request.json();
//   // const req = await request.json();

//   const dataRaw = await DataBaseInteraction.postDetail.upsert({
//     where: {
//       // id: idPostDetail,
//       id: idPostDetailUse,
//     },
//     // data: {
//     //   iLove,
//     // },
//     update: {
//       iLove,
//     },
//     create: {
//       iLove: true,
//       User: {
//         connect: {
//           id: idUser,
//         },
//       },
//       Post: {
//         connect: {
//           id: idPost,
//         },
//       },
//     },
//   });

//   return NextResponse.json(dataRaw);
// }

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
