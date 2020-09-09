const Express = require('express');
const app = Express();
let port = process.env.PORT || 5000;
app.listen(port, () => { console.log("rodando na porta: ", port) });
app.use(Express.static('./Public'));