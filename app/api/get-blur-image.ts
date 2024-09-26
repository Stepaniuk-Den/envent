// import { NextApiRequest, NextApiResponse } from "next";
// import fs from "node:fs/promises";
// import { getPlaiceholder } from "plaiceholder";

// const getBlurImage = async (req: NextApiRequest, res: NextApiResponse) => {
//   const { imageUrl } = req.query;

//   if (!imageUrl) {
//     return res.status(400).json({ error: "Image URL is required" });
//   }

//   try {
//     const buffer = await fs.readFile(`public${imageUrl}`);
//     const { base64 } = await getPlaiceholder(buffer);
//     res.status(200).json({ base64 });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to process image" });
//   }
// };

// export default getBlurImage;

import { getPlaiceholder } from "plaiceholder";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { imageUrl } = req.query;

  if (!imageUrl) {
    return res.status(400).json({ message: "Image URL is required" });
  }

  try {
    const buffer = await fetch(imageUrl as string).then((res) =>
      res.arrayBuffer()
    );
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    res.status(200).json({ base64 });
  } catch (error) {
    res.status(500).json({ message: "Failed to generate blurDataURL", error });
  }
}
