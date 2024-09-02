//we seperate out the logic to listen to an hppt server from the basec-logic to write tests
//because index.js is the file that tests will use to run the tests so we dont want them to run or listen to the server
// if we dont do that then when ever tests import the index.ts that will actually start on a port 
// but usually when we start tests or writing test we dont want any resourse of the machine 


// to run the application we do ,  npx tsc -b && node dist/bin.js

import { app } from "./index";
app.listen(3000, () => {
    console.log('server is running on port 3000');
});

