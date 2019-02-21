import axios from "axios";


const _callApi = async (youbi) => {
    try {
        youbi = youbi ? youbi : new Date().getDay()
        const api_data = await axios(`https://www.anissia.net/anitime/list?w=${youbi}`)
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
async function getAPIList(youbi) {
    return await _callApi(youbi);
}

export const anime = youbi => {
    //console.log(youbi);
    return getAPIList(youbi);
}

export const getById  = id => {
    const filteredAnimes = anime.filter(anime => id === anime.id);
    return filteredAnimes[0];
}
