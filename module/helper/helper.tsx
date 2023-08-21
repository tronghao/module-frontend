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


