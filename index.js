import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers"

// playground: http://localhost:4000/

const options = {
    port: 8000,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/playground'
};

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers // resolvers: resolvers 의 모던 표현식
});

server.start(options, ({port})=> console.log(`AnimeQL Server is Running Port : ${port}`));
