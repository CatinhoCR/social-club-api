# Social Clubs API

REST API project

- [Social Clubs API](#social-clubs-api)
  - [Dependencies](#dependencies)
  - [Setup](#setup)
    - [Environment File](#environment-file)
    - [Usage](#usage)
      - [Notes](#notes)
        - [Folder Structure](#folder-structure)

## Dependencies

- Node
- Mongo DB

If you're using a Mac, using [Homebrew](https://brew.sh/#install) is heavily recommended. Use previous link for official install instructions.
Follow these very simple --official-- instructions to install [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition) using the Brew package manager.

## Setup

- Clone the repo
- Run `npm install`
- [Create and set your environment file & variables](#environment-file)

### Environment File

- Create a file in the --root-- of your project --named-- `.env`.
- Copy/paste the following snippet to your file
- Make sure to change the values to match your local development environment.

```.env
MONGO_LOCAL_CONN_URL=mongodb://127.0.0.1:
MONGO_LOCAL_MD_PORT=27017/
MONGO_DB_NAME=social_clubs_db
ACCESS_TOKEN_SECRET=addjsonwebtokensecrethere
REFRESH_TOKEN_SECRET=notsosecrettoken
PORT=8000
```

-These are sample values, make sure to change as needed.-
The `PORT` key at the bottom represents the port where the API will run on your localhost, not the database.

### Usage

`npm run start`

#### Notes

The `extras` folder holds a postman collection you can import to test the endpoints.

##### Folder Structure

To be continued...
