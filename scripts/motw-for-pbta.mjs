import {
   configSheet
} from "./helper/config-sheet.mjs"

// once the game has initialized, set up the module
Hooks.once('init', () => {

   // register MotW settings
   game.settings.register('monstro-da-semana-pt-br', 'settings-override', {
      name: "Sobrescrever Configurações de Sistema",
      default: false,
      type: Boolean,
      scope: 'world',
      config: true,
      hint: "Se marcar esta opção várias opções do sistema PBTA serão marcadas no mundo. Desmarque ela para poder alterar as configurações.",
      requiresReload: true
   });

})

Hooks.once('pbtaSheetConfig', () => {

   // Disable the sheet config form.
   //game.settings.set('pbta', 'sheetConfigOverride', true);

   // Replace the game.pbta.sheetConfig with the MotW version.
   //configSheet();

	game.pbta.tagConfigOverride = {
	  item: {
		// Tags available to all actors
      all: '[ {"value":"1-dano"},{"value":"2-dano"},{"value":"3-dano"}, {"value":"4-dano"}, {"value":"área"}, {"value":"automática"}, {"value":"balanceada"}, {"value":"barreira"}, {"value":"barulhenta"}, {"value":"brutal"}, {"value":"contato"}, {"value":"drena-vida"}, {"value":"empurrão"}, {"value":"ignora-armadura"}, {"value":"incendiária"}, {"value":"inconveniente"}, {"value":"lenta"}, {"value":"longe"}, {"value":"mágica"}, {"value":"numerosa"}, {"value":"pequena"}, {"value":"perto"}, {"value":"pesada"}, {"value":"pessoal"}, {"value":"rápida"}, {"value":"recarga"}, {"value":"restritiva"}, {"value":"sagrada"}, {"value":"útil"}, {"value":"valiosa"}, {"value":"volátil"}, {"value":"[material]"} ]'
	  }
	}
   
/* EXAMPLE
game.pbta.tagConfigOverride = {
  // Tags available to any actor and item
  general: '[{"value":"fire"}, {"value": "water"}, {"value": "earth"}, {"value": "air"}]',
  actor: {
    // Tags available to all actors
    all: '[{"value":"person"}]',
    // Tags available to a specific actor type set up on game.pbta.sheetConfig.actorTypes (e.g. "character", "npc")
    character: '[{"value":"mook"}]'
  },
  item: {
    // Tags available to all actors
    all: '[{"value":"consumable"}]',
    // Tags available to a specific item type (e.g. "equipment", "move")
    move: '[{"value":"sword"}]'
  }
}

*/   
   
  
  
});