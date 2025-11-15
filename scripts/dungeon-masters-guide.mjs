import DMGJournalSheet from "./apps/dmg-journal-sheet.mjs";
import {initialize2014Redirects, initialize2024Redirects} from "./redirects.mjs";

/* -------------------------------------------- */
/*  Hooks                                       */
/* -------------------------------------------- */

Hooks.once("init", () => {

  // Creating DMG config object
  CONFIG.DMG = {};

  // Register Journal Sheet
  DocumentSheetConfig.registerSheet(JournalEntry, "dungeon-masters-guide", DMGJournalSheet, {
    types: ["base"],
    label: "城主指南 Dungeon Master's Guide (2024)",
    makeDefault: false
  });

  if ( game.modules.get("dnd-monster-manual")?.active ) initialize2024Redirects();
  else initialize2014Redirects();

});

Hooks.once("init", () => {
  
});

Hooks.on("createScene", async (scene) => {
  if ( scene._stats.compendiumSource?.includes("dungeon-masters-guide") ) {
    for (const region of scene.collections.regions) {
      for (const behavior of region.behaviors) {
          if ( behavior.type !== "teleportToken" ) continue;
          const split = behavior.system.destination.split(".");
          split[1] = scene.id;
          await behavior.update({"system.destination": split.join(".")});
      }
    }
  }
})
