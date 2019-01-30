# Monkey Jungles

One Paragraph of project description goes here

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

node
``` 
v6.11.5
```

Gcloud SDK
```
https://cloud.google.com/sdk/install
```

### Installing

```
npm install
```

## Deploy Functions

createEntrySensorCollection

```
gcloud functions deploy createEntrySensorCollection --runtime nodejs6 --trigger-http
```

listEntriesSensor

```
gcloud functions deploy listEntriesSensor --runtime nodejs6 --trigger-http
```

## Deployment

on path, run
```
npm run build
```

cd build
```
gcloud functions ....
```

## Authors

* **Ivan Piedra** - [PurpleBooth](https://github.com/ivapie)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
