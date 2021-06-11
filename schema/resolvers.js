const Link = require("../models/link");
const { generatePublicUrl, drive } = require("../utils/google-drive");
const { fileExtension } = require("../constants");

const resolvers = {
  Query: {
    uploads: (_, { type }) => {
      return Link.find({ type }).sort({ _id: -1 });
    }
  },

  Mutation: {
    uploadFile: async (_, { file, type }) => {
      try {
        const { createReadStream, filename, mimetype } = await file;

        const extension = filename
          .split(".")
          .pop()
          .toLowerCase();

        if (!fileExtension[type].includes(extension))
          return { success: false, message: "File not supported" };

        const response = await drive.files.create({
          resource: {
            name: filename
          },
          media: {
            mimeType: mimetype,
            body: createReadStream()
          },
          fields: "id"
        });

        const url = await generatePublicUrl(response.data.id);

        await Link.create({
          name: filename,
          url,
          type
        });
      } catch (e) {
        return { sucess: false, message: e.message };
      }

      return { success: true, message: "File uploaded" };
    }
  }
};

module.exports = resolvers;
