import{fI as e,e7 as t,L as a,D as s,b as i,fJ as n,ap as r,E as d,ct as o,co as c,cr as l,aG as h,br as m,B as f,w as p,aH as u,A as g,aq as S,a2 as O,F as y,K as T}from"./detailed_results-dd5e5c02.chunk.js";import{e as P,m as I,I as b,T as w}from"./preset_utils-cea776cb.chunk.js";const v={items:[{id:44007,enchant:3819,gems:[41401,40017]},{id:40071},{id:39719,enchant:3809,gems:[39998]},{id:40723,enchant:3859},{id:44002,enchant:3832,gems:[39998,40026]},{id:44008,enchant:2332,gems:[39998,0]},{id:40460,enchant:3246,gems:[40017,0]},{id:40561,enchant:3601,gems:[39998]},{id:40379,enchant:3719,gems:[39998,40017]},{id:40558,enchant:3606},{id:40719},{id:40375},{id:37111},{id:40432},{id:40395,enchant:3834},{id:39766},{id:40342}]},G={items:[{id:46184,enchant:3819,gems:[41401,39998]},{id:45243,gems:[39998]},{id:46187,enchant:3809,gems:[39998]},{id:45618,enchant:3831,gems:[39998]},{id:45519,enchant:3832,gems:[40017,39998,40026]},{id:45446,enchant:2332,gems:[39998,0]},{id:46183,enchant:3246,gems:[39998,0]},{id:45616,gems:[39998,39998,39998]},{id:46185,enchant:3719,gems:[40026,39998]},{id:45135,enchant:3606,gems:[39998,40017]},{id:45495,gems:[40017]},{id:45946,gems:[40017]},{id:45703},{id:45535},{id:46017,enchant:3834},{id:45271},{id:40342}]},E=P("PreRaid",{items:[{id:37149,enchant:3819,gems:[41401,40051]},{id:42339,gems:[40026]},{id:37673,enchant:3809,gems:[39998]},{id:41610,enchant:3831},{id:42102,enchant:3832},{id:37361,enchant:2332,gems:[0]},{id:42113,enchant:3246,gems:[0]},{id:37643,enchant:3601,gems:[39998]},{id:37791,enchant:3719},{id:44202,enchant:3232,gems:[39998]},{id:37694},{id:37192},{id:37111},{id:37657},{id:37169,enchant:3834},{id:40699},{id:33508}]}),F=P("P1 Preset",v),W=P("P2 Preset",G),j=e.create({}),k={name:"Celestial Focus",data:t.create({talentsString:"05320031103--230023312131502331050313051",glyphs:a.create({major1:s.GlyphOfWildGrowth,major2:s.GlyphOfSwiftmend,major3:s.GlyphOfNourish,minor2:i.GlyphOfUnburdenedRebirth,minor3:i.GlyphOfTheWild,minor1:i.GlyphOfDash})})},C={name:"Thicc Resto",data:t.create({talentsString:"05320001--230023312331502531053313051",glyphs:a.create({major1:s.GlyphOfWildGrowth,major2:s.GlyphOfSwiftmend,major3:s.GlyphOfNourish,minor2:i.GlyphOfUnburdenedRebirth,minor3:i.GlyphOfTheWild,minor1:i.GlyphOfDash})})},R=n.create({innervateTarget:r.create()}),M=d.create({defaultPotion:o.RunicManaPotion,flask:c.FlaskOfTheFrostWyrm,food:l.FoodFishFeast}),B=h.create({arcaneBrilliance:!0,bloodlust:!0,divineSpirit:!0,giftOfTheWild:m.TristateEffectImproved,icyTalons:!0,moonkinAura:m.TristateEffectImproved,leaderOfThePack:m.TristateEffectImproved,powerWordFortitude:m.TristateEffectImproved,sanctifiedRetribution:!0,strengthOfEarthTotem:m.TristateEffectImproved,trueshotAura:!0,wrathOfAirTotem:!0}),x=f.create({blessingOfKings:!0,blessingOfMight:m.TristateEffectImproved,blessingOfWisdom:m.TristateEffectImproved,vampiricTouch:!0}),D=p.create({heroicPresence:!1}),A=u.create({bloodFrenzy:!0,ebonPlaguebringer:!0,faerieFire:m.TristateEffectImproved,heartOfTheCrusader:!0,judgementOfWisdom:!0,shadowMastery:!0,sunderArmor:!0,totemOfWrath:!0}),H={distanceFromTarget:18},N=I({fieldName:"innervateTarget",id:g.fromSpellId(29166),extraCssClasses:["within-raid-sim-hide"],getValue:e=>e.getSpecOptions().innervateTarget?.type==S.Player,setValue:(e,t,a)=>{const s=t.getSpecOptions();s.innervateTarget=r.create({type:a?S.Player:S.Unknown,index:0}),t.setSpecOptions(e,s)}}),U={inputs:[]};class K extends b{constructor(e,t){super(e,t,{cssClass:"restoration-druid-sim-ui",cssScheme:"druid",knownIssues:[],epStats:[O.StatIntellect,O.StatSpirit,O.StatSpellPower,O.StatSpellCrit,O.StatSpellHaste,O.StatMP5],epReferenceStat:O.StatSpellPower,displayStats:[O.StatHealth,O.StatMana,O.StatStamina,O.StatIntellect,O.StatSpirit,O.StatSpellPower,O.StatSpellCrit,O.StatSpellHaste,O.StatMP5],defaults:{gear:F.gear,epWeights:y.fromMap({[O.StatIntellect]:.38,[O.StatSpirit]:.34,[O.StatSpellPower]:1,[O.StatSpellCrit]:.69,[O.StatSpellHaste]:.77,[O.StatMP5]:0}),consumes:M,rotation:j,talents:k.data,specOptions:R,raidBuffs:B,partyBuffs:D,individualBuffs:x,debuffs:A,other:H},playerIconInputs:[N],rotationInputs:U,includeBuffDebuffInputs:[],excludeBuffDebuffInputs:[],otherInputs:{inputs:[w]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[k,C],gear:[E,F,W]},autoRotation:e=>T.create()})}}export{k as C,j as D,F as P,K as R,R as a,M as b,W as c};
//# sourceMappingURL=sim-e9b1a4ed.chunk.js.map
