export const exceptionService = [
  {
    name: "jsonData",
    param: "($data = [], int $status = Response::HTTP_OK)",
    comment: "",
  },
  {
    name: "jsonTable",
    param: "($data, int $status = Response::HTTP_OK)",
    comment: "",
  },
  {
    name: "jsonError",
    param: "($error, int $status = Response::HTTP_INTERNAL_SERVER_ERROR)",
    comment: "",
  },
  {
    name: "jsonMessage",
    param: "($message, bool $success = true, int $status = Response::HTTP_OK)",
    comment: "",
  },
  {
    name: "jsonValidate",
    param: "($errors, bool $success = false, int $status = Response::HTTP_UNPROCESSABLE_ENTITY)",
    comment: "",
  },
  {
    name: "jsonDataAndMessage",
    param: "($data, $message, $status = Response::HTTP_OK)",
    comment: "",
  },
  {
    name: "forceJsonError",
    param: "($error, int $status = Response::HTTP_INTERNAL_SERVER_ERROR)",
    comment: "",
  },
  {
    name: "jsonErrorMessage",
    param: "($message, bool $success = false, int $status = Response::HTTP_INTERNAL_SERVER_ERROR)",
    comment: "",
  },
  {
    name: "exceptionMessage",
    param: "($e, $checkSql = false)",
    comment: "",
  },
  {
    name: "exceptionOnlyWriteLog",
    param: "($e)",
    comment: "only write log exception",
  },
  {
    name: "",
    param: "",
    comment: "",
  },
];
