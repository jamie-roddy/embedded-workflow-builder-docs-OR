import fs from "node:fs";
import path from "node:path";
import cliProgress from "cli-progress";
import type { TypedDocument } from "graffle";
import { createPrismaticApiClient } from "./graphqlClient";
import { type Component, GET_PUBLIC_COMPONENTS } from "./queries";

interface GetPublicConnectorsParams {
  fromManifest: boolean;
}

type Document = TypedDocument.String<{
  components: {
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string;
    };
    totalCount: number;
    nodes: Component[];
  };
}>;

export async function getPublicConnectors({
  fromManifest,
}: GetPublicConnectorsParams): Promise<Component[]> {
  if (fromManifest) {
    return JSON.parse(
      fs.readFileSync(
        path.join(__dirname, "public-connectors-manifest.json"),
        "utf-8"
      )
    );
  }
  const connectors: Component[] = [];
  const prismaticApiClient = createPrismaticApiClient();

  let cursor = "";

  const progressBar = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic
  );
  console.log("Fetching connector manifests...");
  progressBar.start(1, 0);

  do {
    const result = await prismaticApiClient
      .gql<Document>(GET_PUBLIC_COMPONENTS)
      .send({ cursor });
    connectors.push(...result.components.nodes);
    progressBar.setTotal(result.components.totalCount);
    progressBar.update(connectors.length);
    cursor = result.components.pageInfo.hasNextPage
      ? result.components.pageInfo.endCursor
      : "";
  } while (cursor);
  progressBar.stop();
  return connectors;
}
