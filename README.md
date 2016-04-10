# Contact form demo

A simple single-page application that demonstrates a contact form and an admin panel to handle messages.

__This is only intended for demonstration purposes, and was written in less than 3 hours.__ Do not expect any support, but feel free to [create an issue](https://github.com/theneva/contact-form/issues) or email me at martin@lehmann.tech if you have any questions or feedback.

## Start the application

### Production-like

1. `npm install --production`
2. `npm run build`
3. `npm start`
4. Go to [http://localhost:8392](http://localhost:8392) (the API is served from [/api](http://localhost:8392/api/messages))

### Development

This environment has hot reloading enabled for all files inside `src/web/` except `index.js`.

The server must be running.

1. `npm install`
2. `npm start` (you still need the server on port 8392)
3. (In another terminal) `npm run dev`
4. Go to [http://localhost:3000](http://localhost:3000)

## Technology stack

Go JavaScript!

### Front-end

- [React](https://facebook.github.io/react/)
- [Webpack](https://webpack.github.io/)
- [Babel](http://babeljs.io/)

### Back-end

- [Node.js](https://nodejs.org/en/)
- [Express](http://expressjs.com/)
