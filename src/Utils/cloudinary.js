// Utils/cloudinaryUtils.js

import { Readable } from "stream";
import cloudinary from "cloudinary";

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

/**
 * Upload image stream to Cloudinary
 * @param {Object} file - The file object containing a stream.
 * @param {String} folder - The Cloudinary folder to upload the image.
 * @returns {Promise<Object>} - The uploaded image result.
 */
export const streamUpload = (file, folder) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.v2.uploader.upload_stream(
      { folder },
      (error, result) => {
        if (result) resolve(result);
        else reject(error);
      }
    );
    const readableStream = Readable.from(file.stream());
    readableStream.pipe(stream);
  });
};

export default cloudinary;
