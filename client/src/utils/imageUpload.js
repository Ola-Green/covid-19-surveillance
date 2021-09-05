export const checkImage = (file) => {
  let err = "";
  if (!file) return (err = "File does not exist");
  if (file.size > 1024 * 1024)
    //1mb
    err = "Image is too large";

  if (
    file.type !== "image/jpeg" &&
    file.type !== "image/jpg" &&
    file.type !== "image/png"
  )
    err = "Image format is invalid";

  return err;
};

export const imageUpload = async (images) => {
  let imgArr = [];
  for (const item of images) {
    const formData = new FormData();

    if (item.camera) {
      formData.append("item", item.camera);
    } else {
      formData.append("file", item);
    }

    formData.append("upload_preset", "addjs6x9");
    formData.append("cloud_name", "deviga-hub");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/deviga-hub/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    imgArr.push({ public_id: data.public_id, url: data.secure_url });
  }
  return imgArr;
};
