import "./lib/env";
require('dotenv').config()
const express = require( "express" );
const app = express();
const port = process.env.PORT; 

// define a route handler for the default home page
app.get( "/", ( req:any, res:any ) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );