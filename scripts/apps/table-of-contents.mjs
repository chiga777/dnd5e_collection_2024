/**
 * Compendium that renders pages as a table of contents.
 */
class PHBTableOfContents extends dnd5e.applications.journal.TableOfContentsCompendium {
  /** @inheritdoc */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["table-of-contents", "phb"]
    });
  }
}

/**
 * Initializes the custom Table of Contents.
 */
export default function initialize() {
  Hooks.once("setup", () => {
    game.packs.get("dnd5e_collection_2024.players-handbook").applicationClass = PHBTableOfContents;
  });
}
