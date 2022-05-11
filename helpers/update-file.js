const path = require("path");
const { v4: uuidv4 } = require("uuid");
uuidv4();

const defaultExtencions = ["png", "jpg", "jpeg", "gif"];

const uploadFile = (files, validExtencions = defaultExtencions, dir = "") => {
  return new Promise((resolve, reject) => {
    const { file } = files;
    const cutName = file.name.split(".");
    const extencion = cutName[cutName.length - 1];

    // Validate Extencions

    if (!validExtencions.includes(extencion)) {
      return reject("No valid file extencion");
    }

    const tempName = uuidv4() + "." + extencion;
    const uploadPath = path.join(__dirname, "../uploads/", dir, tempName);

    file.mv(uploadPath, (err) => {
      if (err) {
        reject(err);
      }

      resolve(tempName);
    });
  });
};

module.exports = uploadFile;
