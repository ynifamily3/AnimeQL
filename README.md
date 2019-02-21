# AnimeQL
Anime API with GraphQL

사용방법
yarn install
yarn start

#Endpoint
POST http://127.0.0.1:8000/graphql
##Headers 
###Content-Type: application/graphql
##Body : `` query {
  animes(youbi_arg: 5) {
    id
    time
    title
    genre
  }
} ``


Playground
http://127.0.0.1:8000/playground
