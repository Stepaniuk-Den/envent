import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";

function bufferToBase64(buffer: Buffer): string {
  return `data:image/webp;base64,${buffer.toString("base64")}`;
}

async function getFileBufferLocal(filepath: string) {
  const realFilepath = path.join(process.cwd(), "public", filepath);
  return fs.readFile(realFilepath);
}

export async function getBase64FromImage(filepath: string) {
  try {
    const originalBuffer = await getFileBufferLocal(filepath);
    const resizedBuffer = await sharp(originalBuffer).resize(20).toBuffer();
    return {
      src: filepath,
      placeholder: bufferToBase64(resizedBuffer),
    };
  } catch {
    return {
      src: filepath,
      placeholder:
        "data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsa2yqBwAFCAICLICSyQAAAABJRU5ErkJggg==",
    };
  }
}

// ===================================
// import Jimp from "jimp";

// export const getImageUrlBase64 = async (imagePath: string) => {
//   const cachedImage = await redis.get(imagePath);
//   if (cachedImage) {
//     return cachedImage;
//   }

//   const response = await fetch(url);
//   const buffer = Buffer.from(await response.arrayBuffer());
//   const image = await Jimp.read(buffer);
//   const processedImage = image.resize(20, Jimp.AUTO).quality(60).blur(5);
//   const base64String = await processedImage.getBase64Async(Jimp.MIME_JPEG);

//   await redis.set(url, base64String);
//   return base64String;
// };
// ==========================================
// import fs from "node:fs/promises";
// import { getPlaiceholder } from "plaiceholder";
// import path from "path";

// Variant1
// const getBase64FromImage = async (imagePath: string) => {
//   const buffer = await fs.readFile(imagePath);
//   const { base64 } = await getPlaiceholder(buffer);
//   return base64;
// };

// export default getBase64FromImage;

// Variant2
// const getBase64FromImage = async (imagePath: string) => {
//   try {
//     const res = await fetch(imagePath);

//     if (!res.ok) {
//       throw new Error("Network response was not ok");
//     }

//     const buffer = await res.arrayBuffer();
//     const { base64 } = await getPlaiceholder(Buffer.from(buffer));
//     console.log(base64);
//     return base64;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default getBase64FromImage;

// =================generateBase64====================
// getBase64FromImage
// const projectsDataPath = path.join(process.cwd(), "data", "projects.json");
// const projectsData =  JSON.parse(fs.readFile(projectsDataPath: string, "utf8"));

// async function generateBase64(imagePath) {
//   // ----------------
// // const projectsDataPath = path.join(process.cwd(), "data", "projects.json");
// // const projectsData =  JSON.parse(fs.readFile(projectsDataPath: string, "utf8"));
//   // ----------------

//   const updatedProjects = await Promise.all(
//     projectsData.projects.map(async (project) => {
//       const imagePath = path.join(process.cwd(), "public", project.mainImg);
//       const buffer = await fs.readFile(imagePath);
//       const { base64 } = await getPlaiceholder(buffer);
//       return {
//         ...project,
//         base64,
//       };
//     })
//   );

//   const updatedData = {
//     ...projectsData,
//     projects: updatedProjects,
//   };

//   fs.writeFile(projectsDataPath, JSON.stringify(updatedData, null, 2));
// }

// generateBase64();
// =========================================

// import { NextApiRequest, NextApiResponse } from "next";
// import fs from "fs/promises";
// import { getPlaiceholder } from "plaiceholder";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { imagePath } = req.query;
//   if (!imagePath || typeof imagePath !== "string") {
//     return res.status(400).json({ error: "Image path is required" });
//   }

//   try {
//     const buffer = await fs.readFile(`./public${imagePath}`);
//     const { base64 } = await getPlaiceholder(buffer);
//     return res.status(200).json({ base64 });
//   } catch (error) {
//     return res.status(500).json({ error: "Failed to process image" });
//   }
// }

// =======================================
// import { getPlaiceholder } from "plaiceholder";

// export default async function getBase64(mainImg: string) {
//   try {
//     const res = await fetch(mainImg);

//     if (!res.ok) {
//       throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
//     }

//     const buffer = await res.arrayBuffer();

//     const { base64 } = await getPlaiceholder(Buffer.from(buffer));

//     console.log(`base64: ${base64}`);

//     return base64;
//   } catch (e) {
//     if (e instanceof Error) console.log(e.stack);
//   }
// }

// // ===================================

// export default async function addBluredData(
//   images: ImagesResults
// ): Promise<Photo[]> {
//   const base64Promises = images.photos.map((photo) =>
//     getBase64(photo.src.large)
//   );

//   const base64Results = await Promise.all(base64Promises);

//   const photosWithBlur: Photo[] = images.photos.map((photo, i) => {
//     photo.blurredData = base64Results[i];
//     return photo;
//   });
//   return photosWithBlur;
// }
