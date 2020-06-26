import { WebBrowser } from 'expo'
import { CommonText } from '../constants/Text'
import { BANNER_TYPES } from '../constants/index'
import Config from '../config/config.json'

export const gotoContactUs = () => {
  WebBrowser.openBrowserAsync(Config.CONTACT_URL)
}

export const capitalizedText = (text) => {
  return text.slice(0, 1).toUpperCase() + text.slice(1, text.length)
}

export const dropDownFailedAlert = (dropDown, message) => {
  dropDown.alertWithType(
    BANNER_TYPES.error,
    CommonText.failedBanner,
    message
  )
}

export const isEven = (value) => {
  if (value % 2 == 0) return true
  else return false
}
