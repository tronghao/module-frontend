export const images = [
  {
    name: "saveImgBase64",
    param: "($base64, $folder, $filename)",
    comment: "",
  },
  {
    name: "resizeImage",
    param: "($resourceType, $image_width, $image_height, $resizeWidth, $resizeHeight)",
    comment: "",
  },
  {
    name: "moveFile",
    param: "($oldfilename, $newImageName, $pathFolder)",
    comment: "move file from old dir to new dir",
  },
  {
    name: "existFolder",
    param: "($pathFolder)",
    comment: "check directory exist or not exist",
  },
  {
    name: "saveImgFile",
    param: "($file, $pathFolder, $fileName)",
    comment: "save image file",
  },
  {
    name: "saveImgFromUrl",
    param: "($url, $pathFolder, $fileName)",
    comment: "save image from url",
  },
  {
    name: "",
    param: "",
    comment: "",
  },
];
