import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers"

// playground: http://localhost:4000/

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers // resolvers: resolvers 의 모던 표현식
});

server.start(()=> console.log("AnimeQL Server is Running"));
