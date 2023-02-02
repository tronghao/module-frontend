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

/**
 * imageToBase64 get image base64
 * @author HaoDT
 */
export const imageToBase64 = async (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

/**
 * isBase64 checking the file is base64
 * @author SuTV
 */
export function isBase64(value) {
  const regex =
    "(data:\\w+\\/[a-zA-Z\\+\\-\\.]+;base64,)?(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+/]{3}=)?";
  return new RegExp("^" + regex + "$", "gi").test(value);
}

export function checkNumberOneAndTwoByte(string) {
  if (!string) {
    return true;
  }
  const regex = /^[０-９0-9]+$/;

  return regex.exec(string);
}


/**
 * convertDoubleByteToSingleByte Convert double byte integer to single byte
 * @author SuTV
 */
export function convertDoubleByteToSingleByte(value) {
  let result = '';
  const regex = /[\uFF10-\uFF19]/g;
  if (value) {
    result = value.toString().replace(regex, function (character) {
      return String.fromCharCode(character.charCodeAt(0) - 65248);
    });
  }

  return result;
}

/*
 * checkCharacterJP checking the character is japan
 * @param {*} value string
 * @return boolean
 * @author SuTV
 */
export function checkCharacterJP(value) {
  let flag = false;
  const regex = /^[Ａ-ｚぁ-んァ-ン一-龥０-９\s]+$/;
  for (let i = 0; i < value?.length; i++) {
    if (regex.test(value[i])) {
      flag = true;
      break;
    }
  }

  return flag;
}

/*
 * checkCharacterTwoByte checking the character is two byte
 * @param {*} value string
 * @return boolean
 * @author SuTV
 */
export function checkCharacterTwoByte(value) {
  let flag = false;
  const regex = /^[Ａ-ｚぁ-んァ-ン０-９\s]+$/;
  for (let i = 0; i < value?.length; i++) {
    if (regex.test(value[i])) {
      flag = true;
      break;
    }
  }

  return flag;
}

export function downloadTagA(path, filename) {
  const element = document.createElement('a');
  element.setAttribute('href', path);
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

/**
 *
 * @param string
 * @param expressions
 * @returns {boolean}
 */
export function matchInArray(string, expressions) {
  const len = expressions.length;
  let i = 0;

  for (; i < len; i++) {
    if (string.match(expressions[i])) {
      return true;
    }
  }

  return false;
}

/**
 * @returns {string}
 */
export function createUniqueString() {
  const timestamp = +new Date() + '';
  const randomNum = parseInt((1 + Math.random()) * 65536) + '';
  return (+(randomNum + timestamp)).toString(32);
}

/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result;
  const later = function () {
    // According to the last trigger interval
    const last = new Date().getTime() - timestamp;

    // The last time the wrapped function was called, the interval is last less than the set time interval wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      // If it is set to immediate===true, since the start boundary has already been called, there is no need to call it here.
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) {
          context = args = null;
        }
      }
    }
  };

  return function () {
    args = arguments; // "arguments" của func
    context = this;
    timestamp = new Date().getTime();
    const callNow = immediate && !timeout;
    // If the delay does not exist, reset the delay
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
}

/**
 * Parse params from URL and return an object
 *
 * @param {string} url
 */
export function param2Obj(url) {
  const search = url.split('?')[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"').replace(/\+/g, ' ') +
      '"}'
  );
}

/**
 * @param {string} input value
 * @returns {number} output value
 */
export function byteLength(str) {
  // returns the byte length of an utf8 string
  let s = str.length;
  for (var i = str.length - 1; i >= 0; i--) {
    const code = str.charCodeAt(i);
    if (code > 0x7f && code <= 0x7ff) {
      s++;
    } else if (code > 0x7ff && code <= 0xffff) {
      s += 2;
    }
    if (code >= 0xdc00 && code <= 0xdfff) {
      i--;
    }
  }
  return s;
}

export function secondToDay(second) {
  return second / (24 * 60 * 60);
}

/**
 *
 * @param time
 * @param cFormat '{y}-{m}-{d} {h}:{i}:{s}'
 * @returns {string|null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null;
  }

  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time) * 1000;
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000;
    }

    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  return format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][value];
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }

    return value || 0;
  });
}

/**
 *q
 * @param num
 * @param digits
 * @returns {string}
 */
 export function numberFormatter(num, digits) {
  const si = [
    { value: 1e18, symbol: 'E' },
    { value: 1e15, symbol: 'P' },
    { value: 1e12, symbol: 'T' },
    { value: 1e9, symbol: 'G' },
    { value: 1e6, symbol: 'M' },
    { value: 1e3, symbol: 'k' },
  ];
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol;
    }
  }
  return num.toString();
}

/**
 * format a thousand
 * @param num
 * @returns {string}
 */
export function toThousandFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','));
}

/**
 * format 1000 to "k"
 * @param num
 * @returns {string}
 */
export function kFormatter(num) {
  return num > 999 ? (num / 1000).toFixed(1) + 'k' : num;
}

/**
 * parseTimeToTzJapan
 * @author SuTV
 */
export function parseTimeToTzJapan(date) {
  if (date && date.includes('0Z')) {
    return moment(date).utcOffset('+09:00').format('YYYY/MM/DD HH:mm');
  } else {
    return parseTime(date, '{y}/{m}/{d} {h}:{i}');
  }
}

/**
 * checkOnlyNumber check only number of string
 * @author DangLH
 */
export const checkOnlyFloatNumber = string => {
  if (!string) {
    return true;
  }
  const regex = /^[+-]?\d+(\.\d+)?$/;
  return regex.test(string);
};


/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str) {
  return typeof str === 'string' || str instanceof String;
}

/**
 * @param {string|array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]';
  }
  return Array.isArray(arg);
}

export function validateLowerCase(str) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

export function validateAlphabets(str) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

export function isEmailValid(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
/**
 * validateOneByte validate only one byte
 * @author HaoDT
 */
export function validateOneByte(string) {
  if (string) {
    const regex = /^[~!@#$%^&*()-_+={}\[\]\'":;?\/.><,\\\\|a-zA-Z0-9]+$/;
    return regex.exec(string) !== null;
  }
  return true;
}

/**
 * numberOneByte check number one byte
 * @author HaoDT
 */
export function numberOneByte(string) {
  const regex = /^[0-9]+$/;
  return regex.exec(string) !== null;
}

/**
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL(url) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  );
  return !!pattern.test(url);
}