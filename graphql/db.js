export const anime = [
    {
        id: "0",
        title: "버추얼 씨는 보고 있어",
        genre: "일상 / 드라마",
        time: "00:00"
    },
    {
        id: "1",
        title: "revisions",
        genre: "SF",
        time: "00:55"

    },
    {
        id: "2",
        title: "아이카츠 프렌즈!",
        genre: "드라마 / 아이돌",
        time: "18:25"

    },
    {
        id: "3",
        title: "Dimension 하이 스쿨",
        genre: "학원물",
        time: "22:00"

    },
    {
        id: "4",
        title: "꼭두각시 서커스",
        genre: "미스터리 / 모험",
        time: "22:30"
    },
];

export const getById  = id => {
    const filteredAnimes = animes.filter(anime => id === anime.id);
    return filteredAnimes[0];
}
