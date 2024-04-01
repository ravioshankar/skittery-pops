import { createHandler, ServeHandlerInfo } from "$fresh/server.ts";
import manifest from "../fresh.gen.ts";
import config from "../fresh.config.ts";
import { assertEquals  } from "$std/testing/asserts.ts";

const CONN_INFO: ServeHandlerInfo = {
  remoteAddr: { hostname: "127.0.0.1", port: 53496, transport: "tcp" },
};

Deno.test("HTTP assert test.", async (t) => {
  const handler = await createHandler(manifest, config);

  await t.step("#1 GET /", async () => {
    const resp = await handler(new Request("http://127.0.0.1/"), CONN_INFO);
    assertEquals (resp.status, 200);
  });
});
