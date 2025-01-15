/**
 * Custom journal sheet for displaying navigation between pages.
 */
export default class PlayersHandbookJournalSheet extends dnd5e.applications.journal.JournalSheet5e {
  constructor(doc, options) {
    super(doc, options);
    this.options.classes.push("phb");
  }

  /* --------------------------------------------- */
  /*  Rendering                                    */
  /* --------------------------------------------- */

  /** @inheritdoc */
  async _render(...args) {
    await super._render(...args);
    const [html] = this._element;
    const header = html.querySelector(".journal-entry-content .journal-header");

    // Insert navigation
    const nav = this.document.getFlag("dnd5e_collection_2024", "navigation");
    if ( nav ) {
      const getDocument = id => {
        if ( !this.document.pack ) return game.journal.get(id);
        return game.packs.get(this.document.pack).getDocument(id);
      };
      const previous = nav.previous ? await getDocument(nav.previous) : null;
      const up = nav.up ? await getDocument(nav.up) : null;
      const next = nav.next ? await getDocument(nav.next) : null;
      header.insertAdjacentHTML("afterend", `
        <nav class="book-navigation">
          <ul>
            <li>${previous ? `<a class="content-link" data-uuid="${previous.uuid}" rel="prev"
              data-tooltip="PHB.JOURNAL.Previous" data-link data-tooltip-direction="LEFT">${previous.name}</a>` : ""}</li>
            <li>${up ? `<a class="content-link parent" data-uuid="${up.uuid}"
            data-link data-tooltip="PHB.JOURNAL.Up">${up.name}</a>` : ""}</li>
            <li>${next ? `<a class="content-link" data-uuid="${next.uuid}" rel="next"
              data-tooltip="PHB.JOURNAL.Next" data-link data-tooltip-direction="RIGHT">${next.name}</a>` : ""}</li>
          </ul>
        </nav>
      `);
    }
  }
}
