import{get, post} from './request';

const url = 'http://localhost:5000/ram'

export const postNewRAMData = (body) => {
    return post(url, body);
}

export const getRAMLatestData = () => {
    return get(url);
}

