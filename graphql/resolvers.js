import { anime, getById } from "./db"

const resolvers = {
    Query: {
        animes: () => anime,
        anime: () => getById()
    }
};

export default resolvers;
