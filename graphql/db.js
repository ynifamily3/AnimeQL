import axios from "axios";


const _callApi = async () => {
    try {
        const api_data = await axios('https://www.anissia.net/anitime/list?w=4')
        return api_data.data.map(({ t, i, g, s }) => ({
            id: i,
            title: s,
            time: t,
            genre: g
        }))
    } catch (err) {
        console.log(err);
    }
}
async function getAPIList() {
    return await _callApi();
}

export const anime = getAPIList();

export const getById  = id => {
    const filteredAnimes = anime.filter(anime => id === anime.id);
    return filteredAnimes[0];
}
