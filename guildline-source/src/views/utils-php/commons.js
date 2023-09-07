export const commons = [
  {
    name: "renameFile",
    param: "($pathOldHaveFileName, $filenameOld, $pathNewNotFileName, $filenameNew)",
    comment: "",
  },
  {
    name: "emailValid",
    param: "($email)",
    comment: "",
  },
  {
    name: "storeImage",
    param: "($file, $path, $extendName = '')",
    comment: "Storage image for file and base64",
  },
  {
    name: "encryptDecrypt",
    param: "($action, $string)",
    comment: "",
  },
  {
    name: "slugify",
    param: "($text, string $divider = '-')",
    comment: "convert text to english not sign and connect by '-' character",
  },
  {
    name: "randomString",
    param: "($length = 10)",
    comment: "random string; result example = aaaaa-aaaaa",
  },
  {
    name: "byteToMb",
    param: "($byte, $decimal = 2)",
    comment: "convert byte to megabyte",
  },
  {
    name: "isSpaceOrTab",
    param: "($text)",
    comment: "",
  },
  {
    name: "getNumberJapan",
    param: "($number)",
    comment: "",
  },
  {
    name: "fixSQLInjection",
    param: "($string)",
    comment: "",
  },
  {
    name: "",
    param: "",
    comment: "",
  },
];
