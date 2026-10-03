/*!
 * Monstro da Semana - Português (Brasil)
 * 2021 https://github.com/brunocalado
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3.
 */

import {
   configSheet
} from "./helper/config-sheet.mjs"

// Item tags offered by the PbtA tag picker, in PbtA's JSON-string format.
const ITEM_TAGS = [
   "1-dano", "2-dano", "3-dano", "4-dano", "área", "automática", "balanceada", "barreira",
   "barulhenta", "brutal", "contato", "drena-vida", "empurrão", "ignora-armadura", "incendiária",
   "inconveniente", "lenta", "longe", "mágica", "numerosa", "pequena", "perto", "pesada",
   "pessoal", "rápida", "recarga", "restritiva", "sagrada", "útil", "valiosa", "volátil",
   "[material]"
];

// PbtA only fires `pbtaSheetConfig` on GM clients (in its `ready` hook), so the tag override is
// set here instead: every client needs it, or players' item sheets miss the MotW tags.
// `game.pbta` is assigned in the system's `init`, which always runs before `setup`.
Hooks.once('setup', () => {
   game.pbta.tagConfigOverride = {
      item: {
         // Tags available to all items
         all: JSON.stringify(ITEM_TAGS.map(value => ({ value })))
      }
   };
});

// Replace PbtA's sheet with the MotW one.
Hooks.once('pbtaSheetConfig', configSheet);
