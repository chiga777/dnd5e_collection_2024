export {
  replacementAbilityReferences,
  replacementConditionTypes,
  replacementSkillReferences,
  replacementSpellSchoolReferences,
  replacementRules,
  newRules
}

// Enrichment changes
const replacementAbilityReferences = {
  str: {
    reference: "STR"
  },
  dex: {
    reference: "DEX"
  },
  con: {
    reference: "CON"
  },
  int: {
    reference: "INT"
  },
  wis: {
    reference: "WIS"
  },
  cha: {
    reference: "CHA"
  },
};

const replacementSkillReferences = {
  acr: {
    reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.vF1Kqptk2gQmyq9P.JournalEntryPage.gnMnyNRtC2irNE3f"
  },
  ani: {
    reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.vF1Kqptk2gQmyq9P.JournalEntryPage.zKQae07dWH4xll5X"
  },
  arc: {
    reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.vF1Kqptk2gQmyq9P.JournalEntryPage.p55c25VTkids0QCZ"
  },
  ath: {
    reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.vF1Kqptk2gQmyq9P.JournalEntryPage.TtTdNuw7j2nOwAsr"
  },
  dec: {
    reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.vF1Kqptk2gQmyq9P.JournalEntryPage.XLCbnwhB0V9UxiCO"
  },
  his: {
    reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.vF1Kqptk2gQmyq9P.JournalEntryPage.iCGHTrKxET9MqLct"
  },
  ins: {
    reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.vF1Kqptk2gQmyq9P.JournalEntryPage.GgpjeAyhlQLEHd0P"
  },
  itm: {
    reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.vF1Kqptk2gQmyq9P.JournalEntryPage.5W3wey59ZeBArKBj"
  },
  inv: {
    reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.vF1Kqptk2gQmyq9P.JournalEntryPage.bcXEenQSxBIeDLYG"
  },
  med: {
    reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.vF1Kqptk2gQmyq9P.JournalEntryPage.ftMcuiSZkhoNFRQf"
  },
  nat: {
    reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.vF1Kqptk2gQmyq9P.JournalEntryPage.aX4XPgsqJIRiM9Sb"
  },
  prc: {
    reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.vF1Kqptk2gQmyq9P.JournalEntryPage.CxjO7TXSCvrqGfuV"
  },
  prf: {
    reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.vF1Kqptk2gQmyq9P.JournalEntryPage.vI3iV3DuRrC2fP1Y"
  },
  per: {
    reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.vF1Kqptk2gQmyq9P.JournalEntryPage.OlPZiJ2tPXNsHCJZ"
  },
  rel: {
    reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.vF1Kqptk2gQmyq9P.JournalEntryPage.AplOyVof66SNPweF"
  },
  slt: {
    reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.vF1Kqptk2gQmyq9P.JournalEntryPage.WA211CENfHN8ps8T"
  },
  ste: {
    reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.vF1Kqptk2gQmyq9P.JournalEntryPage.Os2KWP7eUZfa9Pgj"
  },
  sur: {
    reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.vF1Kqptk2gQmyq9P.JournalEntryPage.SVtu22HEjaRsqgBt"
  }
};

const replacementSpellSchoolReferences = {
  abj: {
    reference: "Abjuration"
  },
  con: {
    reference: "Conjuration"
  },
  div: {
    reference: "Divination"
  },
  enc: {
    reference: "Enchantment"
  },
  evo: {
    reference: "Evocation"
  },
  ill: {
    reference: "Illusion"
  },
  nec: {
    reference: "Necromancy"
  },
  trs: {
    reference: "Transmutation"
  }
};

const replacementRules = {
  inspiration: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.AQ1oTG7jHy5kZuN9",
  carryingcapacity: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.xk9KqsS54w8EpbZn",
  push: "push",
  lift: "lift",
  drag: "drag",
  encumbrance: "encumbrance",
  hiding: "hiding",
  passiveperception: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.Brc9AnUXBeg0MTX6",
  time: "time",
  speed: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.NSU7TjeJbJ0vVQaZ",
  travelpace: "travelpace",
  forcedmarch: "forcedmarch",
  difficultterrainpace: "difficultterrainpace",
  climbing: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.a4CjDIEMeSbRaEjA",
  swimming: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.53c9JMqckHagYYB5",
  longjump: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.NcSh8lVwlfk58VAO",
  highjump: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.sy6xon5AxuIZV1ca",
  falling: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.lCwPWK4ODxw2IV1x",
  suffocating: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.gAvV8TLyS8UGq00x",
  vision: "vision",
  light: "light",
  lightlyobscured: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.24I7GDO2vVahRan1",
  heavilyobscured: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.YkuKTIH2YaYW8lTS",
  brightlight: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.whTwAEsEXJJXBOt5",
  dimlight: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.cyCc2YhnD2TrMreG",
  darkness: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.UY4RGoKw9rOeazur",
  blindsight: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.tdtmXZbUIOZGSnKT",
  darkvision: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.7vQ1hLQ5fS6SSUqF",
  tremorsense: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.r64UrNusMhwJVnxb",
  truesight: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.be7g0q1xBAwb8drv",
  food: "food",
  water: "water",
  resting: "resting",
  restrained: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.dqLeGdpHtb8FfcxX",
  grappled: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.KbQ1k0OIowtZeQgp",
  charmed: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.vLAsIUa0FhZNsyLk",
  deafened: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.qlRw66tJhk0zLnwq",
  exhaustion: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.jSQtPgNm0i4f3Qi3",
  frightened: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.93uaingTESo8N1qL",
  incapacitated: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.4i3G895hy99piand",
  invisible: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.MQIZ1zRLWRcNOtPN",
  paralyzed: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.RnxZoTglPnLc6UPb",
  petrified: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.6vtLuQT9lwZ9N299",
  poisoned: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.HWs8kEojffqwTSJz",
  prone: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.QxCrRcgMdUd3gfzz",
  stunned: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.EjbXjvyQAMlDyANI",
  unconscious: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.fZCRaKEJd4KoQCqH",
  shortrest: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.wVuNbEADtC16ejAi",
  longrest: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.NGmwolHLA5ppbIZY",
  surprise: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.8gPSPovZD9reqFet",
  initiative: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.rwZa7b0CHh2n6mmA",
  bonusaction: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.EjR3KL7KLTwjWBS0",
  reaction: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.OhSIWaQ61dOp7S8M",
  difficultterrain: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.9tzB6KQDTIuw1FlZ",
  beingprone: "beingprone",
  droppingprone: "droppingprone",
  standingup: "standingup",
  crawling: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.zRZl7vdjzjqpazxn",
  movingaroundothercreatures: "movingaroundothercreatures",
  flying: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.ozHhbP8JVHCJAx0b",
  size: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.YwNA2I9Rzi4p8kjr",
  space: "space",
  squeezing: "squeezing",
  attack: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.f4fZHwBvpbpzRyn4",
  castaspell: "castaspell",
  dash: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.6l6nBKip4LqB1sCU",
  disengage: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.w1AGsemFERfjqWNx",
  dodge: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.3YJIuyCMmuUrfmuX",
  help: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.5S8i59qskkd9GGcJ",
  hide: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.rqhOsUY4wWa1oHTy",
  ready: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.nI9tN6Oq7fCV7hcA",
  search: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.ySj4gYZ4ADZoia7R",
  useanobject: "useanobject",
  attackrolls: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.W8uJrd1D8NeOuawp",
  unseenattackers: "unseenattackers",
  unseentargets: "unseentargets",
  rangedattacks: "rangedattacks",
  range: "range",
  rangedattacksinclosecombat: "rangedattacksinclosecombat",
  meleeattacks: "meleeattacks",
  reach: "reach",
  unarmedstrike: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.2Uvc5myrDs18Cf19",
  opportunityattacks: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.eNvzQabiTqTtfzis",
  twoweaponfighting: "twoweaponfighting",
  grappling: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.YSLWJcQCP6kzsPql",
  escapingagrapple: "escapingagrapple",
  movingagrappledcreature: "movingagrappledcreature",
  shoving: "shoving",
  cover: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.pGXkTaY8kLgqQuDa",
  halfcover: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.vF1Kqptk2gQmyq9P.JournalEntryPage.2DIPJaPUYfAyqYEL",
  threequarterscover: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.vF1Kqptk2gQmyq9P.JournalEntryPage.W9ekpzaesKUWVSr4",
  totalcover: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.vF1Kqptk2gQmyq9P.JournalEntryPage.0acdvQBocbZCqsm1",
  hitpoints: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.sh9GYVdAi8hfH1ru",
  damagerolls: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.HPEbNLJucJDVsnUZ",
  criticalhits: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.2dMF1Nsw7ysf6X6e",
  damagetypes: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.Za4Q2V2fpuIMkSXH",
  damageresistance: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.Uk3xhCTvEfx8BN1O",
  damagevulnerability: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.bCU0JHnmZsZf1SHp",
  healing: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.fJVuu8cS9oxNWGTC",
  instantdeath: "instantdeath",
  deathsavingthrows: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.VtyVX7M159v6UVqG",
  deathsaves: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.VtyVX7M159v6UVqG",
  stabilizing: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.klXWp4c90n7Kt5LB",
  knockingacreatureout: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.PjXBMVcEaWuKjder",
  temporaryhitpoints: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.qOKtJt8CB2qRaTNA",
  temphp: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.qOKtJt8CB2qRaTNA",
  mounting: "mounting",
  dismounting: "dismounting",
  controllingamount: "controllingamount",
  underwatercombat: "underwatercombat",
  spelllevel: "spelllevel",
  knownspells: "knownspells",
  preparedspells: "preparedspells",
  spellslots: "spellslots",
  castingatahigherlevel: "castingatahigherlevel",
  upcasting: "upcasting",
  castinginarmor: "castinginarmor",
  cantrips: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.3RRDH9XNKf1LHgWl",
  rituals: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.q6Bs0h1U9weuUqHk",
  castingtime: "castingtime",
  bonusactioncasting: "bonusactioncasting",
  reactioncasting: "reactioncasting",
  longercastingtimes: "longercastingtimes",
  spellrange: "spellrange",
  components: "components",
  verbal: "verbal",
  spellduration: "spellduration",
  instantaneous: "instantaneous",
  concentrating: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.0a2umg2mJMAzM9Q3",
  spelltargets: "spelltargets",
  areaofeffect: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.On6Sg3vUokAkXBB5",
  pointoforigin: "pointoforigin",
  spellsavingthrows: "spellsavingthrows",
  spellattackrolls: "spellattackrolls",
  combiningmagicaleffects: "combiningmagicaleffects",
  schoolsofmagic: "schoolsofmagic",
  detectingtraps: "detectingtraps",
  disablingtraps: "disablingtraps",
  curingmadness: "curingmadness",
  damagethreshold: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.hlPFubXjQG9gnnd5",
  poisontypes: "poisontypes",
  contactpoison: "contactpoison",
  ingestedpoison: "ingestedpoison",
  inhaledpoison: "inhaledpoison",
  injurypoison: "injurypoison",
  attunement: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.CpD1zLLviYjS9FBX",
  wearingitems: "wearingitems",
  wieldingitems: "wieldingitems",
  multipleitemsofthesamekind: "multipleitemsofthesamekind",
  paireditems: "paireditems",
  commandword: "commandword",
  consumables: "consumables",
  itemspells: "itemspells",
  charges: "charges",
  spellscroll: "spellscroll",
  creaturetags: "creaturetags",
  telepathy: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.gMTdiYGmbiwDyymt",
  legendaryactions: "legendaryactions",
  lairactions: "lairactions",
  regionaleffects: "regionaleffects",
  disease: "disease"
}

const newRules = {
  d20test: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.nxPH59t3iNtWJxnU",
  advantage: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.lvs9RRDi1UA1Lff8",
  disadvantage: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.fFrHBgqKUMY0Nnco",
  difficultyclass: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.afnB0KZZk2hKtjv4",
  armorclass: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.IL73rq9BlQowdon7",
  abilitycheck: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.XBQqXCoTbvp5Dika",
  savingthrow: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.Vlri6Mp6grn9wt3g",
  challengerating: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.BMoxmXB8pX6bOBus",
  expertise: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.69nu4Sk3V5O15GFf",
  influence: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.4V59Q1dlWjNhpJGo",
  magic: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.iIIDUsmSOkL0xNzF",
  study: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.Nuz0Wx4a4aAPcC34",
  utilize: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.UDlogfdiT2uYEZz4",
  friendly: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.RVcWSqblHIs7SUzn",
  indifferent: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.eYX5eimGuYhHPoj4",
  hostile: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.BNxLbtJofbNGzjsp",
  breakingobjects: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.RXTLVpAwcGm1qtKf",
  hazards: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.5hyEitPd1Kb27fP5",
  burning: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.mPBGM1vguT5IPzxT",
  dehydration: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.FZFvLNOX0lHaHZ1k",
  malnutrition: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.earBo4vQPC1ti4g7",
  suffocation: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.gAvV8TLyS8UGq00x",
  bloodied: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.shZaSIlFPpHufPFn",
  jumping: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.aaJOlRhI1H6vAxt9",
  resistance: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.Uk3xhCTvEfx8BN1O"
}

const replacementConditionTypes = {
  blinded: { reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.uDogReMO6QtH6NDw"},
  charmed: { reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.vLAsIUa0FhZNsyLk"},
  deafened: { reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.qlRw66tJhk0zLnwq"},
  dehydration: { reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.FZFvLNOX0lHaHZ1k"},
  exhaustion: { reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.jSQtPgNm0i4f3Qi3"},
  falling: { reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.lCwPWK4ODxw2IV1x"},
  frightened: { reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.93uaingTESo8N1qL"},
  grappled: { reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.KbQ1k0OIowtZeQgp"},
  incapacitated: { reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.4i3G895hy99piand"},
  invisible: { reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.MQIZ1zRLWRcNOtPN"},
  malnutrition: { reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.earBo4vQPC1ti4g7"},
  paralyzed: { reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.RnxZoTglPnLc6UPb"},
  petrified: { reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.6vtLuQT9lwZ9N299"},
  poisoned: { reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.HWs8kEojffqwTSJz"},
  prone: { reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.QxCrRcgMdUd3gfzz"},
  restrained: { reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.dqLeGdpHtb8FfcxX"},
  stunned: { reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.EjbXjvyQAMlDyANI"},
  suffocation: { reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.gAvV8TLyS8UGq00x"},
  unconscious: { reference: "Compendium.dnd5e_collection_2024.players-handbook.JournalEntry.JaBtNuiFJZaRoJWX.JournalEntryPage.fZCRaKEJd4KoQCqH"},
}
