# Unreleased

- [Changed] Foundry VTT v14 only (verified on 14.368), and PbtA 1.2.2 or later. The module no longer loads on v13.
- [Changed] The "Monstro da Semana" adventure was migrated to the v14 data format. Its contents are unchanged: 2 scenes, 7 actors, 316 items, 1 journal entry, 38 folders.
- [Fixed] The MotW item tags (1-dano, área, brutal, …) were only offered to the GM: PbtA runs `pbtaSheetConfig` on GM clients only. Players now get them too.
- [Fixed] 60 English strings in `pt-br.json` replaced the Portuguese translation PbtA ships for the same keys (e.g. "Stats", "Advantage", the sheet configuration dialog). They were removed, so PbtA's own translation shows; the MotW-specific wording ("Cartilha", "Complicações (marque XP)", …) is kept. 7 keys PbtA no longer uses were dropped as well.
- [Changed] Releases are now built and published automatically: each version gets a GitHub release with `module.json` and `module.zip`. The manifest link is now `https://github.com/brunocalado/monstro-da-semana-pt-br/releases/latest/download/module.json`. The old link on `main` keeps working, because the `module.json` there points to the new one.
- Checked in a disposable Foundry 14.368 / PbtA 1.2.2 world: the adventure imports with no invalid documents, the character, NPC, item and journal sheets open, all 41 referenced images load, and nothing went to the error log.
