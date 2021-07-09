const fs = require("fs");
const path = require("path");

exports.resolvers = {
  RootQuery: {
    getAllFiles: () => "hello world",
  },
  RootMutation: {
    uploadFile: async (root, { file }) => {
      const { createReadStream, filename, mimetype, encoding } = await file;

      const stream = createReadStream();
      const pathName = path.join(__dirname, `../public/images/${filename}`);

      await stream.pipe(fs.createWriteStream(pathName));

      return {
        file: `http://localhost:4000/images/${filename}`,
      };
    },
  },
};
