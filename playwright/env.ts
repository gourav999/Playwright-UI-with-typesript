import dotenv from 'dotenv';
import config from './config';


dotenv.config();
dotenv.config({ path: '.env/playwright.local',override: true });

const environment=process.env.environmentType || 'local';
const password=process.env.testPassword;

const env={
    environment,
    config:{
        ...config[environment],
        baseURL: process.env.BASE_URL || config[environment].baseUrl,
    },
    password,

};

export default env;

