import { anime, getById } from "./db"

const resolvers = {
    Query: {
        animes: () => anime,
        anime: (_, {id_arg}) => getById(id_arg)
    }
};

export default resolvers;
