import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

export const getBase64FromImage = async (imagePath: string) => {
  const buffer = await fs.readFile(imagePath);
  const { base64 } = await getPlaiceholder(buffer);
  return base64;
};

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
