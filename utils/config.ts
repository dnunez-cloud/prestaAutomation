import * as dotenv from 'dotenv';
dotenv.config();
 //Use this file to process and assign the env variables and make it usable
export const TIMEOUTS = {
  DEFAULT: 50000
};

//Insert the full URLs
export const URLS = {
  PRESTAURL: process.env.PRESTAURL,
  ACCOUNTURL: process.env.ACCOUNTURL,
  CONTACTURL: process.env.CONTACTURL
}

//Insert json files paths
export const JSONPATHS ={
  ACCOUNJSONTPATH: process.env.ACCOUNTJSONPATH
}

//Insert small paths to redirect or check
export const PATHS = {
  FILEPATH: process.env.FILEPATH
}