 'use strict';

 const express = require('express');

 //Constants
 const PORT = 8080;
 //const HOST = '0.0.0.0';

 //App
 const app = express()
 app.get('/',(req,res)=>{
    res.send('Hello World node application changes for files');
 });

 app.listen(PORT, () => {
   //console.log(`Running on http://${HOST}:${PORT}`);  
   console.log(`Running on node application ${PORT}`)
 });
 


