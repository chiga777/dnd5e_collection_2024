import initTableOfContents from "./apps/table-of-contents.mjs";
import PlayersHandbookJournalSheet from "./apps/journal-sheet.mjs";
import {
  replacementAbilityReferences,
  replacementConditionTypes,
  replacementSkillReferences,
  replacementSpellSchoolReferences,
  replacementRules,
  newRules
} from './references.mjs';

/* -------------------------------------------- */
/*  Hooks                                       */
/* -------------------------------------------- */

Hooks.once("init", () => {

  // Adding module symbols to module namespace
  const module = game.modules.get("dnd5e_collection_2024");
  module.apps = {};
  module.dataModels = {};

  // Creating PHB config object
  CONFIG.PHB = {};

  // Register Journal Sheet
  DocumentSheetConfig.registerSheet(JournalEntry, "dnd-players-handbook", PlayersHandbookJournalSheet, {
    types: ["base"],
    label: "玩家手册 Player's Handbook (2024)",
    makeDefault: false
  });

  initTableOfContents();

  foundry.utils.mergeObject(CONFIG.DND5E.abilities, replacementAbilityReferences, {insertKeys: false});
  foundry.utils.mergeObject(CONFIG.DND5E.skills, replacementSkillReferences, {insertKeys: false});
  foundry.utils.mergeObject(CONFIG.DND5E.spellSchools, replacementSpellSchoolReferences, {insertKeys: false});
  foundry.utils.mergeObject(CONFIG.DND5E.rules, replacementRules, {insertKeys: false});
  foundry.utils.mergeObject(CONFIG.DND5E.conditionTypes, replacementConditionTypes, {insertKeys: false});
  foundry.utils.mergeObject(CONFIG.DND5E.rules, newRules);
});
