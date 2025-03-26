import PlayersHandbookJournalSheet from "./apps/journal-sheet.mjs";
import {
  replacementAbilityReferences,
  replacementConditionTypes,
  replacementSkillReferences,
  replacementSpellSchoolReferences,
  replacementRules,
  newRules,
  weaponMasteriesReferences
} from './references.mjs';

/* -------------------------------------------- */
/*  Hooks                                       */
/* -------------------------------------------- */

Hooks.once("init", () => {

  game.settings.register("dnd5e_collection_2024", "lastVersion", {
    name: "PHB.SETTING.VERSION.name",
    hint: "PHB.SETTING.VERSION.hint",
    scope: "world",
    config: false,
    type: String,
    default: "1.0.0"
  })

  // Creating PHB config object
  CONFIG.PHB = {};

  // Register Journal Sheet
  DocumentSheetConfig.registerSheet(JournalEntry, "dnd-players-handbook", PlayersHandbookJournalSheet, {
    types: ["base"],
    label: "玩家手册 Player's Handbook (2024)",
    makeDefault: false
  });

  // Merging system level alterations
  foundry.utils.mergeObject(CONFIG.DND5E.abilities, replacementAbilityReferences, {insertKeys: false});
  foundry.utils.mergeObject(CONFIG.DND5E.skills, replacementSkillReferences, {insertKeys: false});
  foundry.utils.mergeObject(CONFIG.DND5E.spellSchools, replacementSpellSchoolReferences, {insertKeys: false});
  foundry.utils.mergeObject(CONFIG.DND5E.rules, replacementRules, {insertKeys: false});
  foundry.utils.mergeObject(CONFIG.DND5E.conditionTypes, replacementConditionTypes, {insertKeys: false});
  foundry.utils.mergeObject(CONFIG.DND5E.rules, newRules);
  foundry.utils.mergeObject(CONFIG.DND5E.weaponMasteries, weaponMasteriesReferences);
  foundry.utils.mergeObject(CONFIG.DND5E.weaponIds, {
    battleaxe: "Compendium.dnd5e_collection_2024.phb-content.Item.8RnXJkdQuguu8wL1",
    blowgun: "Compendium.dnd5e_collection_2024.phb-content.Item.zdReQRaTZSYTTFmt",
    club: "Compendium.dnd5e_collection_2024.phb-content.Item.cCnRdsuj3AMyjZ42",
    dagger: "Compendium.dnd5e_collection_2024.phb-content.Item.TYHK2TmGMxTQhUrR",
    dart: "Compendium.dnd5e_collection_2024.phb-content.Item.Vb3qHZDZMZy0DSuL",
    flail: "Compendium.dnd5e_collection_2024.phb-content.Item.VYkIG6C6YnCIpRhv",
    glaive: "Compendium.dnd5e_collection_2024.phb-content.Item.KOlJf0iaOOaS0xzS",
    greataxe: "Compendium.dnd5e_collection_2024.phb-content.Item.gYvop24Mz3dUisXB",
    greatclub: "Compendium.dnd5e_collection_2024.phb-content.Item.BeRQw38CpK15Q7rn",
    greatsword: "Compendium.dnd5e_collection_2024.phb-content.Item.RFZ6nnVlkoCrmpji",
    halberd: "Compendium.dnd5e_collection_2024.phb-content.Item.VJ16JTK5o3qpHOI7",
    handaxe: "Compendium.dnd5e_collection_2024.phb-content.Item.QX6LfQOoEkIxB2hp",
    handcrossbow: "Compendium.dnd5e_collection_2024.phb-content.Item.BEAoW9SigYbFofuc",
    heavycrossbow: "Compendium.dnd5e_collection_2024.phb-content.Item.TkVZoP6ZQzodRChM",
    javelin: "Compendium.dnd5e_collection_2024.phb-content.Item.pbyqmgzEgD7bnBPY",
    lance: "Compendium.dnd5e_collection_2024.phb-content.Item.J8L7UX4wjuikLBPC",
    lightcrossbow: "Compendium.dnd5e_collection_2024.phb-content.Item.fbU38f7jCv3CRZN9",
    lighthammer: "Compendium.dnd5e_collection_2024.phb-content.Item.YNdVHj252RowFMiL",
    longbow: "Compendium.dnd5e_collection_2024.phb-content.Item.NrkMTxRVoJzDVqkc",
    longsword: "Compendium.dnd5e_collection_2024.phb-content.Item.rmSJn9nJpCyK85Zt",
    mace: "Compendium.dnd5e_collection_2024.phb-content.Item.FGjUVf3Ed9zjarRt",
    maul: "Compendium.dnd5e_collection_2024.phb-content.Item.2AhPiRQA1L25Y4AR",
    morningstar: "Compendium.dnd5e_collection_2024.phb-content.Item.qb99WfaZVgyA94CT",
    net: "Compendium.dnd5e_collection_2024.phb-content.Item.K7wfaxDS70dgzAxQ",
    pike: "Compendium.dnd5e_collection_2024.phb-content.Item.oKOhtLoc1rCYEcdE",
    quarterstaff: "Compendium.dnd5e_collection_2024.phb-content.Item.8aO87tJ7hlxjKt49",
    rapier: "Compendium.dnd5e_collection_2024.phb-content.Item.xgLHRzLQOcfmzldX",
    scimitar: "Compendium.dnd5e_collection_2024.phb-content.Item.HlOvL5ont4BTTPoo",
    shortsword: "Compendium.dnd5e_collection_2024.phb-content.Item.VaSejvkOe0FtpfH5",
    sickle: "Compendium.dnd5e_collection_2024.phb-content.Item.CXAkZte56H7ApGCg",
    spear: "Compendium.dnd5e_collection_2024.phb-content.Item.KRjK6FwloGxEsjrN",
    shortbow: "Compendium.dnd5e_collection_2024.phb-content.Item.8b32mUnV9Q0d2pds",
    sling: "Compendium.dnd5e_collection_2024.phb-content.Item.qbB6pWvBhFcrUZKP",
    trident: "Compendium.dnd5e_collection_2024.phb-content.Item.ivJmL2nAr1KWOPQf",
    warpick: "Compendium.dnd5e_collection_2024.phb-content.Item.f6MtntbXPJrzBo8M",
    warhammer: "Compendium.dnd5e_collection_2024.phb-content.Item.oKo6EbTjh4KMYZYh",
    whip: "Compendium.dnd5e_collection_2024.phb-content.Item.jfnhdAB1BY5GGodI",  
    musket: "Compendium.dnd5e_collection_2024.phb-content.Item.7p90pgKSDEo5GkgT",
    pistol: "Compendium.dnd5e_collection_2024.phb-content.Item.iepEmXxcuO7cTiRy"
  });
  foundry.utils.mergeObject(CONFIG.DND5E.armorIds, {
    breastplate: "Compendium.dnd5e_collection_2024.phb-content.Item.VwT157gBiBocr8ku",
    chainmail: "Compendium.dnd5e_collection_2024.phb-content.Item.ftP6TTzEyyPy15l3",
    chainshirt: "Compendium.dnd5e_collection_2024.phb-content.Item.0t7nCdX8kWIrDubL",
    halfplate: "Compendium.dnd5e_collection_2024.phb-content.Item.wSgxuD4ZI838PObv",
    hide: "Compendium.dnd5e_collection_2024.phb-content.Item.fLEEN7XpC8G66S3Y",
    leather: "Compendium.dnd5e_collection_2024.phb-content.Item.lVoJiLlIlADGLtSy",
    padded: "Compendium.dnd5e_collection_2024.phb-content.Item.HrVJIG3CVlwhUGtA",
    plate: "Compendium.dnd5e_collection_2024.phb-content.Item.vgepaYZeIu73ikvY",
    ringmail: "Compendium.dnd5e_collection_2024.phb-content.Item.oViJiPB73r1bUDu6",
    scalemail: "Compendium.dnd5e_collection_2024.phb-content.Item.UtYVLrMfgPK0XB76",
    splint: "Compendium.dnd5e_collection_2024.phb-content.Item.2v1K3kMvydzHG2dq",
    studded: "Compendium.dnd5e_collection_2024.phb-content.Item.lguKvMSFwjpvzioT"
  });
  foundry.utils.mergeObject(CONFIG.DND5E.shieldIds, {
    shield: "Compendium.dnd5e_collection_2024.phb-content.Item.Jw7zTIXKYOyHNZeq"
  });
  foundry.utils.mergeObject(CONFIG.DND5E.tools, {
    alchemist: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.TeNE1oggLImvNh8Q" },
    bagpipes: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.HY7DU10P80NNoyiv" },
    brewer: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.OoaZX0EHKHyjZnwL" },
    calligrapher: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.OszG1xFzZkL5LQhx" },
    card: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.orNR8nEkPoncDv8B" },
    carpenter: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.8sz0XsuaO7qZT4Un" },
    cartographer: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.erErs9022aP94znC" },
    chess: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.3TQGBGFI2ngWporc" },
    cobbler: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.527z1IuBAtYhBKmU" },
    cook: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.nbHr9QgT3kyTCy7Z" },
    dice: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.P0w3netopUDBKVEp" },
    disg: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.2p2uEUK0fmIIPT0U" },
    drum: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.ZSyfjIPMIDufenat" },
    dulcimer: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.34RLa3DMjTHgkcj0" },
    flute: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.PY6uZSxyyR4mpkYa" },
    forg: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.1mc33ggWBaQUNGWW" },
    glassblower: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.kfU19aGrYhVNZ1ta" },
    herb: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.UAiVX2CeBaHVa0vY" },
    horn: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.Rwd0VlYK0nyNu1nL" },
    jeweler: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.amcwWI0eB6uhxTx4" },
    leatherworker: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.xDEVHzjM1wRWZGAm" },
    lute: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.faGlyUkfoRufz8WV" },
    lyre: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.BS601oqeQIiNpnLh" },
    mason: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.NCf6g6UnOXoDs3uj" },
    navg: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.e9p3FGMHGa0QDa5X" },
    painter: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.DLy9qPI1rp6iKZCI" },
    panflute: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.yEk7zqMDqzDeuV2c" },
    pois: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.qlIRx0KocXlwDmCW" },
    potter: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.bBTCVKKVRGF0iTk5" },
    shawm: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.jAVDLZZ7sJVxUHhl" },
    smith: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.kE9pVT40W5YMtVjX" },
    thief: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.4TEUVBR5SDoXSzDE" },
    tinker: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.pbabrvYgehZOO5wJ" },
    viol: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.OiFZKoQHwt3D4dCB" },
    weaver: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.MXOWdIEzv1202LNQ" },
    woodcarver: { id: "Compendium.dnd5e_collection_2024.phb-content.Item.buRZLru2HNCpCvp6" }
  });
});

Hooks.once("ready", async () => {
  // Handle showing changelog
  const currentVersion = game.modules.get("dnd5e_collection_2024").version;
  const lastVersion = game.settings.get("dnd5e_collection_2024", "lastVersion");

  if (foundry.utils.isNewerVersion(currentVersion, lastVersion)) {
    const journal = await fromUuid("Compendium.dnd5e_collection_2024.index.JournalEntry.LIJ2edVRwBsE8HgV");
    const page = journal.pages.contents[journal.pages.contents.length - 1];
    journal.sheet.render(true, {pageId: page.id});
    game.settings.set("dnd5e_collection_2024", "lastVersion", currentVersion)
  }
});