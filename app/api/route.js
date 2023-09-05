const DataBaseInteraction = require("@/prisma");
// const { users, posts } = require("@/utils/testData");
import { NextResponse } from "next/server";

export async function GET() {
  // const rawData = await DataBaseInteraction.user.createMany({
  //   data: users,
  // });

  const rawData = await DataBaseInteraction.post.create({
    data: {
      title: "April 21 ",
      description: " What's happend",
      image: "dataImage8168799.type(url)",
      postScope: {
        create: {
          industrialEngineering: true,
        },
      },
    },
    include: {
      postScope: true,
    },
  });

  // const rawData = await DataBaseInteraction.user.createMany({
  //   data: users,
  // });

  // const rawData = await DataBaseInteraction.postDetail.createMany({
  //   data: [
  //     {
  //       idPost: "b78b65f9-eba2-4df2-9e21-65805c0e82bc",
  //       idUser: "66843e16-464d-481b-8eae-f01a366ac62a ",
  //       iLove: true,
  //     },
  //     {
  //       idPost: "b78b65f9-eba2-4df2-9e21-65805c0e82bc",
  //       idUser: "3b3fef45-2b94-4b1f-a90d-eac0b585b463",
  //       iLove: true,
  //     },
  //     {
  //       idPost: "b78b65f9-eba2-4df2-9e21-65805c0e82bc",
  //       idUser: "cb7a8c3c-cd1f-4510-8127-c53ad595d847",
  //       iLove: true,
  //     },
  //   ],
  // });

  //   const rawData = await DataBaseInteraction.postDetail.create({
  //     data: {
  //       iLove: true,
  //       User: {
  //         connect: {
  //           id: "cb7a8c3c-cd1f-4510-8127-c53ad595d847",
  //         },
  //       },
  //       Post: {
  //         connect: {
  //           id: "b78b65f9-eba2-4df2-9e21-65805c0e82bc",
  //         },
  //       },
  //     },
  //   });

  // const rawData = await DataBaseInteraction.post.findMany({
  //   include: {
  //     postDetail: {
  //       where: {
  //         idUser: "cb7a8c3c-cd1f-4510-8127-c53ad595d847",
  //       },
  //       include: {
  //         User: true,
  //       },
  //     },
  //   },
  // });

  // const rawData = await DataBaseInteraction.postDetail.create({
  //   data: {
  //     iLove: true,
  //     User: {
  //       connect: {
  //         id: "85a0f2df-2a65-4ecd-b591-6b249af7a67d",
  //       },
  //     },
  //     Post: {
  //       connect: {
  //         id: "805c708f-4814-4c91-be1a-7e1dee3f4891",
  //       },
  //     },
  //   },
  // });

  return NextResponse.json({ rawData });
}
