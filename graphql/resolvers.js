import { anime, getById } from "./db"

const resolvers = {
    Query: {
        animes: (_, {youbi_arg}) => anime(youbi_arg),
        anime: (_, {id_arg}) => getById(id_arg)
    }
};

export default resolvers;
