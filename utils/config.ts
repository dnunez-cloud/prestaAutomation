import dotenv from 'dotenv';
dotenv.config();
 //Use this file to process and assign the env variables and make it usable
export const TIMEOUTS = {
  DEFAULT: 5000000
};

//Insert the full URLs
export const URLS = {
  PRESTAURL: process.env.PRESTAURL
}

//Insert json files paths
export const JSONPATHS ={
  ACCOUNJSONTPATH: process.env.ACCOUNTJSONPATH
}

//Insert small paths to redirect or check
export const PATHS = {
  ACCOUNTPATH: process.env.ACCOUNTPATH
}