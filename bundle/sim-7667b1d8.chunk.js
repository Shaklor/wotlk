import{eW as e,S as t,e7 as a,L as s,D as l,b as o,eX as n,ap as i,E as r,cp as d,cq as p,cr as c,ct as m,cn as I,cs as u,a2 as h,ab as S,F as g,aG as f,br as T,w as R,B as v,aH as y,e0 as O,K as b,e2 as w}from"./detailed_results-dd5e5c02.chunk.js";import{a as A,d as P,c as E,e as D,f as L,Q as k,I as x,W as M,X as C,Y as H,Z as B,s as F,T as G,_ as J,$ as N,a0 as j,a1 as z,a2 as U,a3 as W,x as $}from"./preset_utils-cea776cb.chunk.js";import{s as _}from"./apl_utils-3b12f6d7.chunk.js";const q=A({fieldName:"startingRage",label:"Starting Rage",labelTooltip:"Initial rage at the start of each iteration."}),K={inputs:[P({fieldName:"maulRageThreshold",label:"Maul Rage Threshold",labelTooltip:"Queue Maul when Rage is above this value."}),P({fieldName:"lacerateTime",label:"Lacerate Refresh Leeway",labelTooltip:"Refresh Lacerate when remaining duration is less than this value (in seconds)."}),E({fieldName:"maintainDemoralizingRoar",label:"Maintain Demo Roar",labelTooltip:"Keep Demoralizing Roar active on the primary target. If a stronger debuff is active, will not cast."})]},Q={items:[{id:41678,enchant:67839,gems:[41339,45880]},{id:45517,gems:[40008]},{id:45245,enchant:44957,gems:[40008,40008]},{id:45496,enchant:3294,gems:[42702]},{id:45473,enchant:3832,gems:[40008,40008,40008]},{id:45611,enchant:3850,gems:[40008,0]},{id:46043,enchant:63770,gems:[40008,40008,0]},{id:46095,gems:[40008,40008,40008]},{id:45536,enchant:38373,gems:[40008,40008,40008]},{id:45232,enchant:55016,gems:[40008]},{id:45471,gems:[40091]},{id:45608,gems:[40008]},{id:45158},{id:46021},{id:45533,enchant:3870,gems:[40008,40008]},{},{id:45509}]},X={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{schedule:{schedule:"0s",innerAction:{castSpell:{spellId:{itemId:42641}}}}}},{action:{autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{cmp:{op:"OpEq",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:48568}}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:48568}}},rhs:{const:{val:"1.5s"}}}}]}},castSpell:{spellId:{spellId:48568}}}},{action:{condition:{auraShouldRefresh:{auraId:{spellId:48560},maxOverlap:{const:{val:"1.5s"}}}},castSpell:{spellId:{spellId:48560}}}},{action:{castSpell:{spellId:{spellId:48564}}}},{action:{condition:{and:{vals:[{gcdIsReady:{}},{not:{val:{spellIsReady:{spellId:{spellId:48564}}}}},{cmp:{op:"OpLt",lhs:{spellTimeToReady:{spellId:{spellId:48564}}},rhs:{const:{val:"1.0s"}}}}]}},wait:{duration:{spellTimeToReady:{spellId:{spellId:48564}}}}}},{action:{castSpell:{spellId:{spellId:16857}}}},{action:{condition:{and:{vals:[{gcdIsReady:{}},{not:{val:{spellIsReady:{spellId:{spellId:48564}}}}},{cmp:{op:"OpLt",lhs:{spellTimeToReady:{spellId:{spellId:48564}}},rhs:{const:{val:"1.5s"}}}}]}},wait:{duration:{spellTimeToReady:{spellId:{spellId:48564}}}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpLt",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:48568}}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:48568}}},rhs:{const:{val:"8s"}}}}]}},castSpell:{spellId:{spellId:48568}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"40"}}}},castSpell:{spellId:{spellId:48562}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"25"}}}},castSpell:{spellId:{spellId:48480,tag:1}}}},{action:{condition:{and:{vals:[{gcdIsReady:{}},{not:{val:{spellIsReady:{spellId:{spellId:16857}}}}},{cmp:{op:"OpLt",lhs:{spellTimeToReady:{spellId:{spellId:16857}}},rhs:{const:{val:"1.5s"}}}}]}},wait:{duration:{spellTimeToReady:{spellId:{spellId:16857}}}}}}]},V=D("P1 Boss Tanking",{items:[{id:40329,enchant:67839,gems:[41339,40008]},{id:40387},{id:40494,enchant:44957,gems:[40008]},{id:40252,enchant:3294},{id:40471,enchant:3832,gems:[42702,40088]},{id:40186,enchant:3850,gems:[40008,0]},{id:40472,enchant:63770,gems:[40008,0]},{id:43591,gems:[40008,40008,40008]},{id:44011,enchant:38373,gems:[40008,40008]},{id:40243,enchant:55016,gems:[40008]},{id:40370},{id:37784},{id:44253},{id:37220},{id:40280,enchant:2673},{},{id:38365}]}),Y=D("P2 Boss Tanking",Q),Z=e.create({maulRageThreshold:25,maintainDemoralizingRoar:!0,lacerateTime:8}),ee=L("APL Default",X),te=k("Simple Default",t.SpecFeralTankDruid,Z),ae={name:"Standard",data:a.create({talentsString:"-503232132322010353120300313511-20350001",glyphs:s.create({major1:l.GlyphOfMaul,major2:l.GlyphOfSurvivalInstincts,major3:l.GlyphOfFrenziedRegeneration,minor1:o.GlyphOfChallengingRoar,minor2:o.GlyphOfThorns,minor3:o.GlyphOfUnburdenedRebirth})})},se=n.create({innervateTarget:i.create(),startingRage:20}),le=r.create({battleElixir:d.GurusElixir,guardianElixir:p.GiftOfArthas,food:c.FoodBlackenedDragonfin,prepopPotion:m.IndestructiblePotion,defaultPotion:m.IndestructiblePotion,defaultConjured:I.ConjuredHealthstone,thermalSapper:!0,fillerExplosive:u.ExplosiveSaroniteBomb});class oe extends x{constructor(e,t){super(e,t,{cssClass:"feral-tank-druid-sim-ui",cssScheme:"druid",knownIssues:[],epStats:[h.StatStamina,h.StatStrength,h.StatAgility,h.StatAttackPower,h.StatExpertise,h.StatMeleeHit,h.StatMeleeCrit,h.StatMeleeHaste,h.StatArmor,h.StatBonusArmor,h.StatArmorPenetration,h.StatDefense,h.StatDodge,h.StatNatureResistance,h.StatShadowResistance,h.StatFrostResistance],epPseudoStats:[S.PseudoStatMainHandDps],epReferenceStat:h.StatAttackPower,displayStats:[h.StatHealth,h.StatArmor,h.StatBonusArmor,h.StatStamina,h.StatStrength,h.StatAgility,h.StatAttackPower,h.StatExpertise,h.StatMeleeHit,h.StatMeleeCrit,h.StatMeleeHaste,h.StatArmorPenetration,h.StatDefense,h.StatDodge,h.StatSpellHit,h.StatSpellCrit,h.StatNatureResistance,h.StatShadowResistance,h.StatFrostResistance],defaults:{gear:V.gear,epWeights:g.fromMap({[h.StatArmor]:3.5665,[h.StatBonusArmor]:.5187,[h.StatStamina]:7.3021,[h.StatStrength]:2.3786,[h.StatAgility]:4.4974,[h.StatAttackPower]:1,[h.StatExpertise]:2.6597,[h.StatMeleeHit]:2.9282,[h.StatMeleeCrit]:1.5143,[h.StatMeleeHaste]:2.0983,[h.StatArmorPenetration]:1.584,[h.StatDefense]:1.8171,[h.StatDodge]:2.0196,[h.StatHealth]:.4465},{[S.PseudoStatMainHandDps]:0}),consumes:le,rotation:Z,talents:ae.data,specOptions:se,raidBuffs:f.create({powerWordFortitude:T.TristateEffectImproved,shadowProtection:!0,giftOfTheWild:T.TristateEffectImproved,thorns:T.TristateEffectImproved,bloodlust:!0,strengthOfEarthTotem:T.TristateEffectImproved,battleShout:T.TristateEffectImproved,unleashedRage:!0,windfuryTotem:T.TristateEffectImproved,arcaneEmpowerment:!0,moonkinAura:T.TristateEffectImproved}),partyBuffs:R.create({heroicPresence:!0}),individualBuffs:v.create({blessingOfKings:!0,blessingOfMight:T.TristateEffectImproved,renewedHope:!0}),debuffs:y.create({savageCombat:!0,faerieFire:T.TristateEffectImproved,exposeArmor:!0,frostFever:T.TristateEffectImproved,masterPoisoner:!0,ebonPlaguebringer:!0,shadowMastery:!0})},playerIconInputs:[],rotationInputs:K,includeBuffDebuffInputs:[M,C,H,B,F],excludeBuffDebuffInputs:[],otherInputs:{inputs:[G,J,N,j,z,U,W,q,$]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[ae],rotations:[te,ee],gear:[V,Y]},autoRotation:e=>te.rotation.rotation,simpleRotation:(e,t,a)=>{let[s,l]=_(a);const o=O.fromJsonString('{"condition":{"and":{"vals":[{"cmp":{"op":"OpEq","lhs":{"auraNumStacks":{"sourceUnit":{"type":"CurrentTarget"},"auraId":{"spellId":48568}}},"rhs":{"const":{"val":"5"}}}},{"cmp":{"op":"OpLe","lhs":{"dotRemainingTime":{"spellId":{"spellId":48568}}},"rhs":{"const":{"val":"1.5s"}}}}]}},"castSpell":{"spellId":{"spellId":48568}}}'),n=O.fromJsonString('{"condition":{"auraShouldRefresh":{"auraId":{"spellId":48560},"maxOverlap":{"const":{"val":"1.5s"}}}},"castSpell":{"spellId":{"spellId":48560}}}'),i=O.fromJsonString('{"castSpell":{"spellId":{"spellId":48564}}}'),r=O.fromJsonString('{"condition":{"and":{"vals":[{"gcdIsReady":{}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":48564}}}}},{"cmp":{"op":"OpLt","lhs":{"spellTimeToReady":{"spellId":{"spellId":48564}}},"rhs":{"const":{"val":"1.0s"}}}}]}},"wait":{"duration":{"spellTimeToReady":{"spellId":{"spellId":48564}}}}}'),d=O.fromJsonString('{"castSpell":{"spellId":{"spellId":16857}}}'),p=O.fromJsonString('{"condition":{"and":{"vals":[{"gcdIsReady":{}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":48564}}}}},{"cmp":{"op":"OpLt","lhs":{"spellTimeToReady":{"spellId":{"spellId":48564}}},"rhs":{"const":{"val":"1.5s"}}}}]}},"wait":{"duration":{"spellTimeToReady":{"spellId":{"spellId":48564}}}}}'),c=O.fromJsonString(`{"condition":{"or":{"vals":[{"cmp":{"op":"OpLt","lhs":{"auraNumStacks":{"sourceUnit":{"type":"CurrentTarget"},"auraId":{"spellId":48568}}},"rhs":{"const":{"val":"5"}}}},{"cmp":{"op":"OpLe","lhs":{"dotRemainingTime":{"spellId":{"spellId":48568}}},"rhs":{"const":{"val":"${t.lacerateTime.toFixed(1)}s"}}}}]}},"castSpell":{"spellId":{"spellId":48568}}}`),m=O.fromJsonString(`{"condition":{"cmp":{"op":"OpGe","lhs":{"currentRage":{}},"rhs":{"const":{"val":"${(t.maulRageThreshold+15).toFixed(0)}"}}}},"castSpell":{"spellId":{"spellId":48562}}}`),I=O.fromJsonString(`{"condition":{"cmp":{"op":"OpGe","lhs":{"currentRage":{}},"rhs":{"const":{"val":"${t.maulRageThreshold.toFixed(0)}"}}}},"castSpell":{"spellId":{"spellId":48480,"tag":1}}}`),u=O.fromJsonString('{"condition":{"and":{"vals":[{"gcdIsReady":{}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":16857}}}}},{"cmp":{"op":"OpLt","lhs":{"spellTimeToReady":{"spellId":{"spellId":16857}}},"rhs":{"const":{"val":"1.5s"}}}}]}},"wait":{"duration":{"spellTimeToReady":{"spellId":{"spellId":16857}}}}}');return l.push(...[o,t.maintainDemoralizingRoar?n:null,i,r,d,p,c,m,I,u].filter((e=>e))),b.create({prepullActions:s,priorityList:l.map((e=>w.create({action:e})))})}})}}export{Z as D,oe as F,V as P,ae as S,se as a,le as b,Y as c};
//# sourceMappingURL=sim-7667b1d8.chunk.js.map
