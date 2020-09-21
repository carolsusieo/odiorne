module.exports = {
apps : [
     {
       name          : 'odiorne',
       script        : 'npx',
       interpreter   : 'none',
       args          : 'serve build -s',
       env_production : {
         NODE_ENV: 'production',
         NODE_PORT: '8003'
       }
     }
   ]
}
