const Koa = require('koa');
const serve = require('koa-static');
const router = require('koa-router')();
const fs = require('fs');
const {
    promisify
} = require('util');
const koaBody = require('koa-body');
const Users = require('./Users');
const cors = require('@koa/cors');

const app = new Koa();
const readFileAsync = promisify(fs.readFile);
const users = new Users();
const viewPath = './build/index.html';
const PORT = 5666;

app
    .use(serve('./build/'))
    .use(cors())
    .use(koaBody({strict: false}))
    .use(router.allowedMethods())
    .use(router.routes());

router
    .get('/data', async (ctx) => {
        ctx.type = 'json';
        ctx.status = 200;
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.body = JSON.stringify(users.get());
    })
    .put('/data', async (ctx) => {
        ctx.set('Accept', 'application/json');
        ctx.type = 'json';
        ctx.set('Access-Control-Allow-Origin', '*');
        users.put(ctx.request.body);
        ctx.status = 200;
        ctx.body = JSON.stringify(users.get());
    })
    .del('/data', async (ctx) => {
        ctx.set('Accept', 'application/json');
        ctx.set('Access-Control-Allow-Origin', '*');
        users.delete(ctx.request.body.id);
        ctx.status = 200;
        ctx.body = JSON.stringify(users.get());
    });

router.get('/', async (ctx) => {
    const view = await readFileAsync(viewPath);
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.status = 200;
    ctx.body = view.toString();
});

/* eslint-disable */

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

/* eslint-disable */
