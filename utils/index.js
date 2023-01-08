/**
 * dataURLtoFile parse base64 to file like input form
 * @author   DinhPL
 */
export function dataURLtoFile(dataurl, filename) {
  const arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]);

  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}

/**
 * data years from->to
 * @author   DinhPL
 */
export const getYears = (from, to, select = false) => {
  const years = [];
  for (let i = from; i <= to; i++) {
    years.push(select ? { value: i, name: i.toString() } : i);
  }
  return years;
};

/**
 * data month from->to
 * @author   DinhPL
 */
export const getMonths = (from = 1, to = 12, select = false) => {
  const months = [];
  for (let i = from; i <= to; i++) {
    months.push(select ? { value: i, name: i.toString() } : i);
  }
  return months;
};
/**
 * data hour from->to
 * @author   DinhPL
 */
export const getHours = (from = 0, to = 23, select = false) => {
  const hours = [];
  for (let i = from; i <= to; i++) {
    hours.push(select ? { value: i, name: i.toString() } : i);
  }
  return hours;
};

/**
 * data minutes from->to
 * @author   DinhPL
 */
export const getMinutes = (step = 5, select = false) => {
  const minutes = [];
  for (let i = 0; i <= 60; i += step) {
    if (i != 60) {
      minutes.push(
        select ? { value: i, name: i <= 9 ? "0" + i : i.toString() } : i
      );
    }
  }
  return minutes;
};

/**
 * data days in month
 * @param dateString date type string exp: 1990-01-01
 * @author   DinhPL
 */
export const daysInMonth = (dateString, subName = false, select = false) => {
  const date = new Date(dateString);
  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const dataDays = [];
  for (let i = 1; i <= daysInMonth; i++) {
    dataDays.push(
      select
        ? { value: i, name: subName ? i + " 日" : i.toString() }
        : subName
        ? i + " 日"
        : i.toString()
    );
  }

  return dataDays;
};

/**
 * handle scroll to top
 * @author   DinhPL
 */
export const scrollToTop = (top = 0) => {
  window.scrollTo({
    top: top,
    behavior: "smooth",
  });
};

/**
 * formatDate exp: 1990-01-01 -> 1990年1月1
 * @author   DinhPL
 */
export const formatDate = (date) => {
  const dataDate = new Date(date);
  const d = dataDate.getDate();
  const m = dataDate.getMonth() + 1;
  const y = dataDate.getFullYear();
  return y + "年" + m + "月" + (d <= 9 ? "0" + d : d) + "";
};

/**
 * stripHtml strip html
 * @author HaoDT
 */
export const stripHtml = (html) => {
  let tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

/**
 * checkOnlyNumber check only number of string
 * @author HaoDT
 */
export const checkOnlyNumber = (string) => {
  if (!string) {
    return true;
  }
  const regex = /^\d+$/;
  return regex.exec(string);
};

/**
 * btoa() text to base64
 * @author DangLH
 */
export const convertBase64 = (val) => {
  return window.btoa(val);
};
