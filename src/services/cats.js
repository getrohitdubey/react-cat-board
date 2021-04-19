import axios from 'axios'
import {BaseUrl} from '../utils/config'
import RestClient from '../utils/RestClient'

export const getCats = () => {
    return RestClient.apiCaller(`${BaseUrl}?limit=5`)
}

export const getCatsByPage = (page) =>{
    return RestClient.apiCaller(`${BaseUrl}?limit=5&page=${page}`)

}