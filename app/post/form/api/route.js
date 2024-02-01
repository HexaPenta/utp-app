export const dynamic = "edge"; // defaults to auto

// import DataBaseInteraction from "@/prisma";
import { v2 as cloudinary } from "cloudinary";
import DataBaseInteraction from "../../../../prisma";

cloudinary.config({
  cloud_name: "dputhhzyb",
  api_key: "645242162575664",
  api_secret: "hXQFGVBItNRiiJ7DPD_8B4Avmew",
});

export async function POST(request) {
  try {
    const { image, data, postScope } = await request.json();
    const { title, description } = data;
    const {
      architecture,
      industrialEngineering,
      systemsEngineering,
      civilEngineering,
    } = postScope;

    const imagesFromCloudinary = image.map(async (value) => {
      const response = await cloudinary.uploader.upload(value);
      return response.secure_url;
    });

    const resolveImagesFromCloudinary = await new Promise((resolve, reject) => {
      Promise.all(imagesFromCloudinary).then(
        (values) => {
          resolve(values);
        },
        (reason) => {
          reject(reason);
        }
      );
    });

    await DataBaseInteraction.post.create({
      include: {
        postScope: true,
      },
      data: {
        title,
        description,
        image: resolveImagesFromCloudinary,
        postScope: {
          create: {
            systemsEngineering,
            civilEngineering,
            industrialEngineering,
            architecture,
          },
        },
      },
    });

    const toResponse = {
      okNewPost: resolveImagesFromCloudinary,
      title,
      description,
    };

    // return NextResponse.json({ okNewPost: true });
    return Response.json(toResponse, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }

  // return NextResponse.json({
  //   data: {
  //     title,
  //     description,
  //     image,
  //     postScope: {
  //       create: {
  //         systemsEngineering,
  //         civilEngineering,
  //         industrialEngineering,
  //         architecture,
  //       },
  //     },
  //   },
  // });
}

export async function GET() {
  return Response.json(
    { message: "Get from /post/form/api" },
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    }
  );
}
