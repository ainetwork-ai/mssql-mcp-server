#!/usr/bin/env node
import { startMcpServer } from "@ainetwork/mssql-mcp-core";
import pkg from "../package.json" with { type: "json" };

startMcpServer({
  name: "mssql-mcp-server",
  version: pkg.version,
  tier: "admin",
}).catch((e) => {
  console.error("Fatal:", e);
  process.exit(1);
});
