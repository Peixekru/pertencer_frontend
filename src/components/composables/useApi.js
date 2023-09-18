import axios from 'axios'
import { useAppStore } from '../../store/app'

const server = 'http://localhost'


export async function useApiGet(port, url, token) {
	const appStore = useAppStore() 

	try {

		const request = await axios.get(server + port + url, token);

		if(url == '/login' ) {
			//Atualiza o localStorage
			localStorage.setItem('userToken', JSON.stringify(request.data));
			appStore.logginStatus = true
		} 
		else {
			appStore.appData = request.data 
		}

	} catch (error) {
		console.error(error);
	}

}

export async function useApiPost(url, data) {
	
	axios.post(server + url, data).then(function (response) {
		console.log(response);
	})
	.catch(function (error) {
		console.error(error);
	});
	

}



/* Fake data 
import dataJson from '../../../db.json';

export function useApiGet() {
	//Inicia a store
	const appStore = useAppStore()

	//Verifica o localStorage
	if (localStorage.getItem('localAppData')) {
		appStore.appData = JSON.parse(localStorage.getItem('localAppData'));
	} else {
		appStore.appData = dataJson.user
	}
}
*/
