export const formats = [
  {
    name: "formatCurrency",
    param: "($number, $fractional=false)",
    comment: "",
  },
  {
    name: "",
    param: "",
    comment: "",
  },
];

export const times = [
  {
    name: "formatDate",
    param: "($date, $format='Y-m-d H:i:s')",
    comment: "",
  },
  {
    name: "convertDateFormat",
    param: "($dateObject, $format='Y-m-d')",
    comment: "",
  },
  {
    name: "convertStringToDate",
    param: "($string, $format = 'Y-m-d H:i:s')",
    comment: "",
  },
  {
    name: "dateNow",
    param: "($format = 'Y-m-d H:i:s')",
    comment: "",
  },
  {
    name: "dateYesterday",
    param: "($format = 'Y-m-d H:i:s')",
    comment: "",
  },
  {
    name: "dateTomorrow",
    param: "($format = 'Y-m-d H:i:s')",
    comment: "",
  },
  {
    name: "dateNowAddDay",
    param: "($value, $format = 'Y-m-d H:i:s')",
    comment: "",
  },
  {
    name: "dateNowAddMonth",
    param: "($value, $format = 'Y-m-d H:i:s')",
    comment: "",
  },
  {
    name: "dateNowAddHour",
    param: "($value, $format = 'Y-m-d H:i:s')",
    comment: "",
  },
  {
    name: "dateNowAddMinute",
    param: "($value, $format = 'Y-m-d H:i:s')",
    comment: "",
  },
  {
    name: "dateNowAddSecond",
    param: "($value, $format = 'Y-m-d H:i:s')",
    comment: "",
  },
  {
    name: "getMinuteOfTwoDate",
    param: "($date1, $date2)",
    comment: "",
  },
  {
    name: "dateStringToCarbon",
    param: "($dateString)",
    comment: "",
  },
  {
    name: "randomDate",
    param: "($start_date, $end_date)",
    comment: "",
  },
  {
    name: "dayOfWeek",
    param: "()",
    comment: "",
  },
  {
    name: "",
    param: "",
    comment: "",
  },
];

export const validates = [
  {
    name: "isNullOrEmpty",
    param: "($text, $ignoreWhiteSpace = true)",
    comment: "",
  },
  {
    name: "",
    param: "",
    comment: "",
  },
];

export const others = [
  {
    name: "compareTwoString",
    param: "($string1, $string2)",
    comment: "compare string = string",
  },
  {
    name: "stringToArray",
    param: "($string, $mark)",
    comment: "convert string to array",
  },
  {
    name: "arrayToString",
    param: "($arr, $mark)",
    comment: "convert array to string",
  },
  {
    name: "setCache",
    param: "($key, $value, $minute = 1440)",
    comment: "",
  },
  {
    name: "getCache",
    param: "($key)",
    comment: "",
  },
  {
    name: "checkCache",
    param: "($key)",
    comment: "check cache exist by cache_key",
  },
  {
    name: "forgetCache",
    param: "($key)",
    comment: "remove cache by cache key",
  },
  {
    name: "cacheClearAll",
    param: "($key, $i = 1)",
    comment: "",
  },
  {
    name: "cacheIncrease",
    param: "($key, $i = 1)",
    comment: "",
  },
  {
    name: "hitCache",
    param: "($key, $decayMinutes = 1)",
    comment: "add cache",
  },
  {
    name: "setSession",
    param: "($key, $value)",
    comment: "",
  },
  {
    name: "getSession",
    param: "($key)",
    comment: "",
  },
  {
    name: "forgetSession",
    param: "($key)",
    comment: "",
  },
  {
    name: "getIpClient",
    param: "()",
    comment: "",
  },
  {
    name: "getUserAgent",
    param: "()",
    comment: "",
  },
  {
    name: "genKey",
    param: "()",
    comment: "",
  },
  {
    name: "gentToken",
    param: "()",
    comment: "",
  },
  {
    name: "debugMode",
    param: "()",
    comment: "",
  },
  {
    name: "encryptMd5",
    param: "($value)",
    comment: "",
  },
  {
    name: "writeLogException",
    param: "(\\Exception $e = null)",
    comment: "",
  },
  {
    name: "deleteFileS3",
    param: "($path = '')",
    comment: "",
  },
  {
    name: "",
    param: "",
    comment: "",
  },
];
