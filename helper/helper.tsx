import { SelectType } from '@/interfaces/sign-up'
import { getToken } from './auth'
import { privateKey, jwtOption } from '@/constants'
import jwt from 'jsonwebtoken'
import jwtDecode from 'jwt-decode'
import router from 'next/router'
import { Dictionary as D, ScreenLink } from '@/constants'
import { roleEnum } from '@/interfaces/auth'
import { DropdownOption, ErrorResponse, MenuItem } from '@/interfaces/global'

//@ts-ignore
import commonSettings from '@12do/commonsettings'
import _ from 'lodash'

/**
 * getAppsyncToken handle get token from cookie or default token
 * @author   DinhPL
 */
export function getAppsyncToken() {
  const token = getToken()
  return token ? token : `custom-authorized`
}

/**
 * dataURLtoFile parse base64 to file like input form
 * @author   DinhPL
 */
export function dataURLtoFile(dataurl: any, filename: any) {
  const arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1])

  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, { type: mime })
}

/**
 * data years from->to
 * @author   DinhPL
 */
export const getYears = (from: number, to: number) => {
  const years = []
  for (let i = from; i <= to; i++) {
    years.push({ value: i, name: i.toString() })
  }
  return years
}
/**
 * data month from->to
 * @author   DinhPL
 */
export const getMonths = (from = 1, to = 12) => {
  const months = []
  for (let i = from; i <= to; i++) {
    months.push({ value: i, name: i.toString() })
  }
  return months
}
/**
 * data hour from->to
 * @author   DinhPL
 */
export const getHours = (from = 0, to = 23) => {
  const hours = []
  for (let i = from; i <= to; i++) {
    hours.push({ value: i, name: i.toString() })
  }
  return hours
}
/**
 * data hour from->to
 * @author   DinhPL
 */
export const getMinutes = (step = 5) => {
  const minutes = []
  for (let i = 0; i <= 60; i += step) {
    if (i != 60) {
      minutes.push({ value: i, name: i <= 9 ? '0' + i : i.toString() })
    }
  }
  return minutes
}


/**
 * data days in month
 * @param dateString date type string exp: 1990-01-01
 * @author   DinhPL
 */
export const daysInMonth = (dateString: string, subName = true) => {
  const date = new Date(dateString)
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

  const dataDays: DropdownOption[] = []
  for (let i = 1; i <= daysInMonth; i++) {
    dataDays.push({ value: i, name: subName ? i + ' 日' : i.toString() })
  }

  return dataDays
}

/**
 * handle scroll to top
 * @author   DinhPL
 */
export const scrollToTop = (top = 0) => {
  window.scrollTo({
    top: top,
    behavior: 'smooth',
  })
}

/**
 * formatDate exp: 1990-01-01 -> 1990年1月1
 * @author   DinhPL
 */
export const formatDate = (date: string) => {
  const dataDate = new Date(date)
  const d = dataDate.getDate()
  const m = dataDate.getMonth() + 1
  const y = dataDate.getFullYear()
  return y + '年' + m + '月' + (d <= 9 ? '0' + d : d) + ''
}


/**
 * getExpiredToken: get expired access_token
 * @author   DinhPL
 */
export const getExpiredToken = (access_token: string) => {
  const decoded: any = jwtDecode(access_token)
  return decoded.exp
}

/**
 * renderObjectSelected handle render data value select
 * @author   DinhPL
 */
export const renderObjectSelected = (value: string | number) => {
  return { value: value, name: value }
}

/**
 * renderObjectSelectedV2 handle render data value select version 3
 * @author   HaoDT
 */
export const renderObjectSelectedV2 = (
  value: string | number = '',
  options: Array<SelectType>,
  key: string = 'value'
) => {
  if (!value) {
    return { name: '', value: '' }
  }
  return options[options.findIndex((item: any) => item[key] === value)]
}

/**
 * numberWithCommas format number comma between
 * @author HaoDT
 */
export const numberWithCommas = (x: number | null | undefined) => {
  if (!x) {
    return x
  }
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const groupByViaObject = (datas: any, key: string | number) => {
  return _.mapValues(_.groupBy(datas, key), (clist) => clist.map((val) => _.omit(val, key)))
}

export const findArray = (arrays: any[], key: string, value: any) => {
  return arrays.find((obj) => {
    return obj[key] === value
  })
}

/**
 * stripHtml strip html
 * @author HaoDT
 */
export const stripHtml = (html: string) => {
  let tmp = document.createElement('DIV')
  tmp.innerHTML = html
  return tmp.textContent || tmp.innerText || ''
}

import moment from 'moment';

/**
 * checkOnlyNumber check only number of string
 * @author HaoDT
 */
export const checkOnlyNumber = string => {
  if (!string) {
    return true;
  }
  const regex = /^\d+$/;
  return regex.exec(string);
};

/**
 * btoa() text to basae64
 * @author DangLH
 */
export const convertBase64 = val => {
  return window.btoa(val);
};

