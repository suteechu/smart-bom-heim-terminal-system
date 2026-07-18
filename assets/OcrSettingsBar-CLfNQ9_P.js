import{j as e}from"./index-fNSfKyrK.js";import{c as s}from"./createLucideIcon-DNdMSjeL.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=s("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=s("SquareCheckBig",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=s("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);function x({settings:a,setSettings:t}){const l=r=>{t(c=>({...c,scale:parseFloat(r.target.value)}))},o=()=>{t(r=>({...r,storeImages:!r.storeImages}))};return e.jsxs("div",{className:"bg-[#0b0e11] p-4 rounded border border-[#2b3139]",children:[e.jsxs("p",{className:"text-[10px] text-gray-500 mb-3 font-bold flex items-center gap-2",children:[e.jsx(n,{size:14})," OCR ENGINE SETTINGS"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"ocr-scale",className:"block text-xs text-gray-400 mb-1",children:["Render Scale: ",e.jsxs("span",{className:"font-bold text-white",children:[a.scale.toFixed(1),"x"]})]}),e.jsx("input",{id:"ocr-scale",type:"range",min:"1.0",max:"4.0",step:"0.1",value:a.scale,onChange:l,className:"w-full h-1 bg-[#2b3139] rounded-lg appearance-none cursor-pointer range-sm"})]}),e.jsxs("button",{onClick:o,className:`flex items-center gap-2 px-3 py-1.5 rounded text-xs transition-colors border ${a.storeImages?"bg-green-500/20 text-green-400 border-green-500":"bg-transparent text-gray-500 border-[#2b3139]"}`,children:[a.storeImages?e.jsx(i,{size:14}):e.jsx(d,{size:14})," Store Processed Images for Review"]})]})]})}const p=Object.freeze(Object.defineProperty({__proto__:null,OcrSettingsBar:x},Symbol.toStringTag,{value:"Module"}));export{x as O,i as S,d as a,p as b};
