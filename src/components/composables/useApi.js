//import axios from 'axios'
import { useAppStore } from '../../store/app'

/*
export async function useApiGet(url) {

  const appStore = useAppStore() 

  try {
    const response = await axios.get('http://localhost:3005' + url);
    appStore.appData = response.data
  } catch (error) {
    console.error(error);
  }

}

export async function useApiPost(url, data) {

  axios.post('http://localhost:3005' + url, data)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.error(error);
  });

}
*/


/* Fake data */
import dataJson from '../../../db.json';

export function useApiGet() {
  //Inicia a store
  const appStore = useAppStore() 

  //Verifica o localStorage
  if(localStorage.getItem('localAppData')) {
    appStore.appData = JSON.parse(localStorage.getItem('localAppData'));
  } else {
    appStore.appData = dataJson.user
  }

}

