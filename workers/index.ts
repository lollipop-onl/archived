import { Hono } from "hono";
import { logger } from "hono/logger";
import { poweredBy } from "hono/powered-by";

const app = new Hono();

app.use(poweredBy());
app.use(logger())

export default app;