# vue-app

## Installation
```sh
$ git clone https://github.com/Fasosnql/vue-app.git
$ cd vue-app
$ npm install
```


## Commands

`$ npm run dev` - run webpack-dev-server on port `8088`

`$ npm run build` - build app to `dist` directory

`$ npm run test` - run unit test


## Run app via Docker
`$ docker build -t vue/dockerize-vue-app .` - build docker image
`$ docker run -it -p 8080:8080 --rm --name dockerize-vue-app-1 vue/dockerize-vue-app` - run bundle app on port `8080`

