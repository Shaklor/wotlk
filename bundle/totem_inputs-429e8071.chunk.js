import{C as e,z as t,B as o,E as a}from"./preset_utils-cea776cb.chunk.js";import{I as s,eF as n,A as r,eE as l,eI as m,eH as i,eG as p,S as c}from"./detailed_results-dd5e5c02.chunk.js";function u(u,d){let g=new e(u,"totems-settings",{header:{title:"Totems"}}),S=s.newGroupContainer();S.classList.add("totem-dropdowns-container","icon-group");let f=document.createElement("div");if(f.classList.add("fire-elemental-input-container"),g.bodyElement.appendChild(S),g.bodyElement.appendChild(f),new t(S,d.player,{extraCssClasses:["earth-totem-picker"],numColumns:1,values:[{color:"#ffdfba",value:n.NoEarthTotem},{actionId:r.fromSpellId(58643),value:n.StrengthOfEarthTotem},{actionId:r.fromSpellId(58753),value:n.StoneskinTotem},{actionId:r.fromSpellId(8143),value:n.TremorTotem}],equals:(e,t)=>e==t,zeroValue:n.NoEarthTotem,changedEvent:e=>e.specOptionsChangeEmitter,getValue:e=>e.getSpecOptions().totems?.earth||n.NoEarthTotem,setValue:(e,t,o)=>{const a=t.getSpecOptions();a.totems||(a.totems=l.create()),a.totems.earth=o,t.setSpecOptions(e,a)}}),new t(S,d.player,{extraCssClasses:["water-totem-picker"],numColumns:1,values:[{color:"#bae1ff",value:m.NoWaterTotem},{actionId:r.fromSpellId(58774),value:m.ManaSpringTotem},{actionId:r.fromSpellId(58757),value:m.HealingStreamTotem}],equals:(e,t)=>e==t,zeroValue:m.NoWaterTotem,changedEvent:e=>e.specOptionsChangeEmitter,getValue:e=>e.getSpecOptions().totems?.water||m.NoWaterTotem,setValue:(e,t,o)=>{const a=t.getSpecOptions();a.totems||(a.totems=l.create()),a.totems.water=o,t.setSpecOptions(e,a)}}),new t(S,d.player,{extraCssClasses:["fire-totem-picker"],numColumns:1,values:[{color:"#ffb3ba",value:i.NoFireTotem},{actionId:r.fromSpellId(58734),value:i.MagmaTotem},{actionId:r.fromSpellId(58704),value:i.SearingTotem},{actionId:r.fromSpellId(57722),value:i.TotemOfWrath,showWhen:e=>e.getTalents().totemOfWrath},{actionId:r.fromSpellId(58656),value:i.FlametongueTotem}],equals:(e,t)=>e==t,zeroValue:i.NoFireTotem,changedEvent:e=>e.specOptionsChangeEmitter,getValue:e=>e.getSpecOptions().totems?.fire||i.NoFireTotem,setValue:(e,t,o)=>{const a=t.getSpecOptions();a.totems||(a.totems=l.create()),a.totems.fire=o,t.setSpecOptions(e,a)}}),new t(S,d.player,{extraCssClasses:["air-totem-picker"],numColumns:1,values:[{color:"#baffc9",value:p.NoAirTotem},{actionId:r.fromSpellId(8512),value:p.WindfuryTotem},{actionId:r.fromSpellId(3738),value:p.WrathOfAirTotem}],equals:(e,t)=>e==t,zeroValue:p.NoAirTotem,changedEvent:e=>e.specOptionsChangeEmitter,getValue:e=>e.getSpecOptions().totems?.air||p.NoAirTotem,setValue:(e,t,o)=>{const a=t.getSpecOptions();a.totems||(a.totems=l.create()),a.totems.air=o,t.setSpecOptions(e,a)}}),d.player.spec!=c.SpecEnhancementShaman){const e=o({getModObject:e=>e,getValue:e=>e.getSpecOptions().totems||l.create(),setValue:(e,t,o)=>{const a=t.getSpecOptions();a.totems=o,t.setSpecOptions(e,a)},changeEmitter:e=>e.specOptionsChangeEmitter},r.fromSpellId(2894),"useFireElemental");new a(f,d.player,e)}return g}export{u as T};
//# sourceMappingURL=totem_inputs-429e8071.chunk.js.map
