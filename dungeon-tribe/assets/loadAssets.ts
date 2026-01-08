import { Assets } from "@pixi/assets";
import { extensions } from "@pixi/core";
import { spritesheetAsset } from "@pixi/spritesheet";
import { Log } from "../utils/Log";
import { manifest } from "./assetManifest";

export async function loadAssets(
  onUpdate: (ratio: number) => void
): Promise<void> {
  extensions.add(spritesheetAsset);

  await Assets.init({ manifest: manifest });
  await Assets.loadBundle("main", onUpdate);
  await Assets.loadBundle("audio", onUpdate);

  Log.log("info", "Assets: loading finished", Assets.cache);
}
