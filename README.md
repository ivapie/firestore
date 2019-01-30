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

1. On root path, run
```
npm run build
```

2. On root path run
```
cd build
```

3. CLI Command
```
gcloud functions ....
```

## List of the GCloud

1. createEntrySensorCollection

```
gcloud functions deploy createEntrySensorCollection --runtime nodejs6 --trigger-http
```

2. listEntriesSensor

```
gcloud functions deploy listEntriesSensor --runtime nodejs6 --trigger-http
```

## Deployment

Using the Local Functions Emulator

```
https://cloud.google.com/functions/docs/emulator


or

```
https://rominirani.com/google-cloud-functions-tutorial-using-the-local-functions-emulator-bd351bbe61de
```

## Authors

* **Ivan Piedra** - [PurpleBooth](https://github.com/ivapie)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
