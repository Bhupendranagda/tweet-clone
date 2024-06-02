# Twitter Clone


https://github.com/Bhupendranagda/tweet-clone/assets/60057376/7aff3a4b-a771-4b3d-9f39-356b7cdcc153


## Overview
This is my first fullstack web application. I've used MongoDB as a database, ReactJS for the frontend, ExpressJS for the backend, and Redux for global state management. Follow the guide below to install the application on your desktop and run it locally. If you want to contribute to this project, please fork the repository.

## Features
- **Authentication** (Sign in/Sign up)
- **Add bookmarks**
- **Edit profile**
- **New tweet**
- **Like tweet**
- **Follow / Unfollow**
- **Logout**

## Start the App Locally 🔌

### Clone the Repository
git clone https://github.com/Bhupendranagda/tweet-clone.git


### Environment Setup
1. Navigate to the server folder:
    ```
    cd twitter-clone/server
    ```

2. Create a `.env` file:
    ```
    touch .env
    ```

3. Add these variables to the `.env` file and set them as you wish:
    ```
    PORT="XXXX"
    MONGO_URI="XXX"
    TOKENSECRET="XXX"
    ```

### Database 📥
If you don't have MongoDB installed on your local machine, create a MongoDB Atlas cluster and add the link to your `.env` file:
MONGODB_URI="your_mongodb_atlas_link"

### Server 🔧
1. Navigate to the server folder and install the requirements:
    ```
    cd twitter-clone/server
    npm install
    ```

2. Start the server:
    ```
    npm start
    ```

### Client 👨🏼‍💻
1. Navigate to the client folder and install the requirements:
    ```
    cd twitter-clone/client
    npm install
    ```

2. Start the client app:
    ```
    npm start
    ```

### Done 🥳
The app is ready to go. Check the localhost with the port that you set for `PORT` in the `.env` file.

## Contributing 🙌
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

Happy coding! 🎉
