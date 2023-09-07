export const mails = [
  {
    name: "send",
    param: "($templateName, $arrVariableToTemplate, $arrayEmail, $subject)",
    comment: "",
  },
  {
    name: "sendByMailer",
    param: "($mailer, $templateName, $arrVariableToTemplate, $arrayEmail, $subject)",
    comment: "",
  },
  {
    name: "sendByMailerVersionLaravelOld",
    param: "($mailer, $templateName, $arrVariableToTemplate, $arrayEmail, $subject, $idSetting = -1)",
    comment: "Apply for laravel version < 7. Because Laravel version 7 have mailer",
  },
  {
    name: "getMailerSES",
    param: "()",
    comment: "",
  },
  {
    name: "",
    param: "",
    comment: "",
  },
];
