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
   game.settings.set('pbta', 'sheetConfigOverride', true);

   // Replace the game.pbta.sheetConfig with the MotW version.
   configSheet();

});