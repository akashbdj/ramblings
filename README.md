# Ramblings - a blogging platform

### Deployed at:

- Frontend: https://ramblings-frontend.onrender.com
- Backend: https://ramblings-backend.onrender.com

**Note:** I've used [Render](https://render.com/) to deploy both the services. Their free plan has limits, and their instance will spin down if there is inactivity. So if you see a long loading time, most likely the instance was shut down because of the free tier. However, it will become active in a few minutes after you make the request. You can read more [here](https://render.com/docs/free#spinning-down-on-idle)

### How To Run Locally

- Frontend

  1. Clone the repo
  2. `cd frontend`
  3. run `yarn` or `npm install` to install the dependencies.
  4. run `yarn dev` or `npm run dev` to start the app locally.

- Backend

  1. Clone the repo
  2. `cd backend`
  3. run `npm install` to install the dependencies
  4. run `npm run dev` to start the local server. It uses `nodemon` to watch the file changes and restart the server.

  **Note:** the `backend` service uses Mongo Atlas cloud service for MongoDB, and its crendentials are saved in the `.env` file. The `.env` file is not committed to the Github repo. So the backend DB connection will not work for you locally. Let me know if you want to test it locally. Happy to push something that works.

### Technologies

1. React + Vite
2. Express/Nodejs
3. MongoDB/Mongoose(ODM) with MongoDB Atlas cloud service
4. Draftjs for Rich Text Editing.
5. Tailwindcss for styling

### Further Improvements

1. There are no test cases at the moment.
2. I didn't implement the logic to sanitize any html before saving to DB and rendering on the browser. It's not the right way because it could lead to XSS attacks.
3. I didn't implement any login/authentication/session management logic yet.
4. It's not responsive. However, it's pretty easy to make it with Tailwindcss.

All the above improvements can be done given some more time to it.
