/*!
 * Monstro da Semana - Português (Brasil)
 * 2021 https://github.com/brunocalado
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3.
 */

// PbtA options the module enforces alongside the sheet.
const PBTA_SETTINGS = {
   advForward: true,
   hideRollFormula: true,
   hideForward: false,
   hideOngoing: false,
   hideRollMode: true,
   hideUses: true
};

// The MotW sheet in the form PbtA uses at runtime. Following PbtA's module-integration guide
// (https://github.com/asacolips-projects/pbta/wiki/Module-Integration) it was exported from
// game.pbta.sheetConfig after loading template/monstro-da-semana-1.8.txt through the sheet
// config dialog, so worlds configured by hand with that template get identical actor data.
// Changing the sheet means changing it here; keep the template in step for manual setups.
export const MOTW_SHEET_CONFIG = {
  "rollFormula": "2d6",
  "rollShifting": true,
  "rollResults": {
    "critical": {
      "start": 12,
      "end": null,
      "label": "Movimento Avançado!"
    },
    "success": {
      "start": 10,
      "end": 11,
      "label": "Sucesso!"
    },
    "partial": {
      "start": 7,
      "end": 9,
      "label": "Sucesso Parcial."
    },
    "failure": {
      "start": null,
      "end": 6,
      "label": "Falha..."
    }
  },
  "actorTypes": {
    "character": {
      "details": {
        "biography": {
          "label": "Biografia",
          "value": ""
        }
      },
      "stats": {
        "tough": {
          "label": "Braveza",
          "value": 0
        },
        "sharp": {
          "label": "Esperteza",
          "value": 0
        },
        "weird": {
          "label": "Estranheza",
          "value": 0
        },
        "cool": {
          "label": "Firmeza",
          "value": 0
        },
        "charm": {
          "label": "Sutileza",
          "value": 0
        }
      },
      "attributes": {
        "armour": {
          "label": "Armadura",
          "description": "Reduzem o dano sofrido segundo a classificação.",
          "customLabel": false,
          "userLabel": false,
          "playbook": null,
          "limited": false,
          "position": "top",
          "type": "Clock",
          "value": 0,
          "max": 3
        },
        "harm": {
          "label": "Ferimento",
          "description": "Quando você chegar em 4 de dano, marque Instável.",
          "customLabel": false,
          "userLabel": false,
          "playbook": null,
          "limited": false,
          "position": "top",
          "type": "Clock",
          "value": 0,
          "max": 7
        },
        "unstable": {
          "label": "Instável",
          "description": "(Lesões instáveis pioraram com o tempo)",
          "customLabel": false,
          "userLabel": false,
          "playbook": null,
          "limited": false,
          "position": "top",
          "type": "Checkbox",
          "checkboxLabel": "Lesões instáveis",
          "value": false
        },
        "luck": {
          "label": "Sorte",
          "description": "Marque para mudar a rolagem para 12 ou evitar todo o dano.",
          "customLabel": false,
          "userLabel": false,
          "playbook": null,
          "limited": false,
          "position": "top",
          "type": "Clock",
          "value": 0,
          "max": 7
        },
        "reservas": {
          "label": "Reservas",
          "description": "Cada ponto pode ser gasto para obter um efeito específico.",
          "customLabel": false,
          "userLabel": false,
          "playbook": null,
          "limited": false,
          "position": "left",
          "type": "ListMany",
          "condition": false,
          "sort": false,
          "options": {
            "0": {
              "values": {
                "0": {
                  "value": false
                },
                "1": {
                  "value": false
                },
                "2": {
                  "value": false
                }
              },
              "label": "[Text]"
            },
            "1": {
              "values": {
                "0": {
                  "value": false
                },
                "1": {
                  "value": false
                },
                "2": {
                  "value": false
                }
              },
              "label": "[Text]"
            }
          }
        },
        "xp": {
          "label": "Experiência",
          "description": "Quando rolar falha ou um movimento disser, marque Xp.",
          "customLabel": false,
          "userLabel": false,
          "playbook": null,
          "limited": false,
          "position": "left",
          "type": "Xp",
          "value": 0,
          "max": 5
        },
        "advances": {
          "label": "Melhorias",
          "description": "Toda vez que colocar uma melhoria no personagem, some 1 aqui.",
          "customLabel": false,
          "userLabel": false,
          "playbook": null,
          "limited": false,
          "position": "left",
          "type": "Number",
          "value": 0
        }
      },
      "moveTypes": {
        "basic": {
          "label": "Básicos"
        },
        "class": {
          "label": "Arquétipo"
        },
        "relationships": {
          "label": "Relacionamentos"
        }
      },
      "equipmentTypes": {
        "gear": {
          "label": "Equipamento"
        },
        "weapon": {
          "label": "Armas"
        },
        "transport": {
          "label": "Transporte"
        },
        "armour": {
          "label": "Armadura"
        }
      }
    },
    "npc": {
      "details": {
        "biography": {
          "label": "Biografia",
          "value": ""
        }
      },
      "attributes": {
        "harm": {
          "label": "Ferimentos",
          "description": null,
          "customLabel": false,
          "userLabel": false,
          "playbook": null,
          "limited": false,
          "position": "top",
          "type": "Resource",
          "value": 0,
          "max": 1
        },
        "armour": {
          "label": "Armadura",
          "description": null,
          "customLabel": false,
          "userLabel": false,
          "playbook": null,
          "limited": false,
          "position": "top",
          "type": "Number",
          "value": 0
        },
        "type": {
          "label": "Tipo de NPC",
          "description": null,
          "customLabel": false,
          "userLabel": false,
          "playbook": null,
          "limited": false,
          "position": "left",
          "type": "ListMany",
          "condition": false,
          "sort": false,
          "options": {
            "0": {
              "label": "Espectador",
              "value": false
            },
            "1": {
              "label": "Fenômeno",
              "value": false
            },
            "2": {
              "label": "Lacaio",
              "value": false
            },
            "3": {
              "label": "Local",
              "value": false
            },
            "4": {
              "label": "Monstro",
              "value": false
            }
          }
        },
        "tipo": {
          "label": "Tipo",
          "description": null,
          "customLabel": false,
          "userLabel": false,
          "playbook": null,
          "limited": false,
          "position": "left",
          "type": "LongText",
          "value": ""
        },
        "motivation": {
          "label": "Motivação",
          "description": null,
          "customLabel": false,
          "userLabel": false,
          "playbook": null,
          "limited": false,
          "position": "left",
          "type": "LongText",
          "value": ""
        },
        "weakness": {
          "label": "Fraqueza",
          "description": null,
          "customLabel": false,
          "userLabel": false,
          "playbook": null,
          "limited": false,
          "position": "left",
          "type": "LongText",
          "value": ""
        }
      },
      "moveTypes": {
        "attacks": {
          "label": "Ataques e Poderes"
        }
      },
      "equipmentTypes": {
        "items": {
          "label": "Itens"
        }
      }
    }
  }
};

// Runs from pbtaSheetConfig, which PbtA fires on GM clients only. Once sheetConfigOverride is
// on, PbtA stores the config in its world setting so players load it too.
export const configSheet = async () => {

   // Assigned before the first await: PbtA builds the actor templates from
   // game.pbta.sheetConfig right after the hook returns.
   game.pbta.sheetConfig = foundry.utils.deepClone(MOTW_SHEET_CONFIG);

   await game.settings.set("pbta", "sheetConfigOverride", true);

   for (const [key, value] of Object.entries(PBTA_SETTINGS)) {
      if (game.settings.get("pbta", key) !== value) await game.settings.set("pbta", key, value);
   }

}
