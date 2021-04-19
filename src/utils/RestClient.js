import axios from 'axios';
import {SecretKey} from './config'

class RestClient {
  static async apiCaller(url, method = 'GET', params = {}) {
    const config = {
      url,
      method,
      headers: {
        'x-api-key': `${SecretKey}`,
      },
      data: method !== 'GET' ? params : undefined,
    };
    return axios.request(config)
  }
}

export default RestClient;
