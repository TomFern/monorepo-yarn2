# GraphQL API server for country data

The code in this project is based on [trevorblades/countries](https://github.com/trevorblades/countries).

The API serves data about continents, countries, and states. For example the query:

```graphql
{
  country(code: "BR") {
    name
    native
    capital
    emoji
    currency
    languages {
      code
      name
    }
  }
}
```

Returns:

```graphql
{
  "data": {
    "country": {
      "name": "Brazil",
      "native": "Brasil",
      "capital": "Brasília",
      "emoji": "🇧🇷",
      "currency": "BRL",
      "languages": [
        {
          "code": "pt",
          "name": "Portuguese"
        }
      ]
    }
  }
}
```

## Running

To build the project:

```bash
$ npm install
```

To run the server

```bash
$ npm start
```

To run unit tests

```bash
$ npm start &
$ npm test
```
## Using the server

Start the server and open a browser at [port 4000](http://localhost:4000). You'll get a dashboard to run queries. 

You can also point a GraphQL client to port 4000, or use curl:

```bash
$ curl -X POST -H "Content-Type: application/json" --data '{ "query": "{ country(code: \"BR\") { name native capital emoji currency languages { code name }}}" }' http://localhost:4000 

{"data":{"country":{"name":"Brazil","native":"Brasil","capital":"Brasília","emoji":"🇧🇷","currency":"BRL","languages":[{"code":"pt","name":"Portuguese"}]}}}
```

## License







