// ----------------------------------
// Versão: 1.5
// ----------------------------------

/*

Hooks.once('pbtaSheetConfig', () => {
  // Disable the sheet config form.
  game.settings.set('pbta', 'sheetConfigOverride', true);

  // Replace the game.pbta.sheetConfig with your own version.
  // get with: console.log(game.pbta.sheetConfig)
  game.pbta.sheetConfig = {
    "rollFormula": "2d6",
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
        "attrTop": {
          "armour": {
            "label": "Armadura",
            "description": "Reduzem o dano sofrido segundo a classificação.",
            "customLabel": false,
            "userLabel": false,
            "type": "Clock",
            "value": 0,
            "max": 3,
            "steps": [
              false,
              false,
              false
            ]
          },
          "harm": {
            "label": "Ferimento",
            "description": "Quando você chegar em 4 de dano, marque Instável.",
            "customLabel": false,
            "userLabel": false,
            "type": "Clock",
            "value": 0,
            "max": 7,
            "steps": [
              false,
              false,
              false,
              false,
              false,
              false,
              false
            ]
          },
          "unstable": {
            "label": "Instável",
            "description": "(Lesões instáveis pioraram com o tempo)",
            "customLabel": false,
            "userLabel": false,
            "type": "Checkbox",
            "checkboxLabel": "Lesões instáveis",
            "value": false
          },
          "luck": {
            "label": "Sorte",
            "description": "Marque para mudar a rolagem para 12 ou evitar todo o dano.",
            "customLabel": false,
            "userLabel": false,
            "type": "Clock",
            "value": 0,
            "max": 7,
            "steps": [
              false,
              false,
              false,
              false,
              false,
              false,
              false
            ]
          }
        },        
        "attrLeft": {          
          "reservas": {
            "type": "ListMany",
            "label": "Reservas",
            "description": "Cada ponto pode ser gasto para obter um efeito específico.",            
            "options": [
              "[Text]|3",
              "[Text]|3"
            ]            
          },
          "xp": {
            "label": "Experiência",
            "description": "Quando rolar falha ou um movimento disser, marque Xp.",
            "customLabel": false,
            "userLabel": false,
            "type": "Xp",
            "value": 0,
            "max": 5,
            "steps": [
              false,
              false,
              false,
              false,
              false
            ]
          }
        },
        "moveTypes": {
          "basic": {
            "label": "Básicos",
            "moves": []
          },
          "class": {
            "label": "Arquétipo",
            "moves": []
          },
          "relationships": {
            "label": "Relacionamentos",
            "moves": []
          }
        },
        "equipmentTypes": {
          "gear": {
            "label": "Equipamento",
            "moves": []
          },
          "weapon": {
            "label": "Armas",
            "moves": []
          },
          "transport": {
            "label": "Transporte",
            "moves": []
          },
          "armour": {
            "label": "Armadura",
            "moves": []
          }
        }
      },
      "npc": {
        "attrTop": {
          "harm": {
            "label": "Ferimentos",
            "description": null,
            "customLabel": false,
            "userLabel": false,
            "type": "Resource",
            "value": 0,
            "max": 0
          },
          "armour": {
            "label": "Armadura",
            "description": null,
            "customLabel": false,
            "userLabel": false,
            "type": "Number",
            "value": 0
          }
        },
        "attrLeft": {
          "type": {
            "label": "Tipo de NPC",
            "description": null,
            "customLabel": false,
            "userLabel": false,
            "type": "ListMany",
            "condition": false,
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
            "type": "LongText",
            "value": ""
          },
          "motivation": {
            "label": "Motivação",
            "description": null,
            "customLabel": false,
            "userLabel": false,
            "type": "LongText",
            "value": ""
          },
          "weakness": {
            "label": "Fraqueza",
            "description": null,
            "customLabel": false,
            "userLabel": false,
            "type": "LongText",
            "value": ""
          }
        },
        "moveTypes": {
          "attacks": {
            "label": "Ataques e Poderes",
            "moves": []
          }
        },
        "equipmentTypes": {
          "items": {
            "label": "Itens",
            "moves": []
          }
        }
      }
    }
  };
  
})

*/