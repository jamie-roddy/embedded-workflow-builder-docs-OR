import type { CommanderStatic } from "commander";
import { globSync } from "node:fs";
import { Jimp } from "jimp";
import path from "node:path";

// Max Docusaurus content width is about 960px
const MAX_SCREENSHOT_SIZE = 1500;

async function resizeScreenshots() {
  const assetPath = path.join(__dirname, "..", "..", "..", "docs", "assets");
  const screenshotFiles = globSync("**/*.png", { cwd: assetPath });
  for (const screenshotFile of screenshotFiles) {
    const screenshotPath = path.join(assetPath, screenshotFile);
    const screenshot = await Jimp.read(screenshotPath);
    if (screenshot.width > MAX_SCREENSHOT_SIZE) {
      console.log(
        `${screenshotFile} is currently ${screenshot.width} pixels wide. Resizing to ${MAX_SCREENSHOT_SIZE}.`,
      );
      screenshot.resize({ w: MAX_SCREENSHOT_SIZE });
      await screenshot.write(screenshotPath as `${string}.${string}`);
    }
  }
}

async function resizeScreenshotsPlugin() {
  return {
    name: "resize-screenshots",
    extendCli(cli: CommanderStatic) {
      const command = cli.command("resize-screenshots");
      command
        .description("Resize all screenshots to a max width of 900px")
        .action(resizeScreenshots);
    },
  };
}

module.exports = resizeScreenshotsPlugin;
