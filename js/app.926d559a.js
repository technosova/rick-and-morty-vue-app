(function(){"use strict";var a={4180:function(a,t,e){var n=e(5130),r=e(6768);const c={id:"app"},s=(0,r.Lk)("h1",null,"Rick and Morty Characters",-1);function u(a,t,e,n,u,o){const l=(0,r.g2)("CharacterList");return(0,r.uX)(),(0,r.CE)("div",c,[s,(0,r.bF)(l)])}var o=e(4232);const l=a=>((0,r.Qi)("data-v-a7602aa8"),a=a(),(0,r.jt)(),a),i={class:"filters"},v=l((()=>(0,r.Lk)("option",{value:""},"All",-1))),p=l((()=>(0,r.Lk)("option",{value:"alive"},"Alive",-1))),d=l((()=>(0,r.Lk)("option",{value:"dead"},"Dead",-1))),f=l((()=>(0,r.Lk)("option",{value:"unknown"},"Unknown",-1))),h=[v,p,d,f],g={class:"character-list"},k={class:"pagination"},b=["disabled"],m=["onClick"],y=["disabled"];function C(a,t,e,c,s,u){const l=(0,r.g2)("CharacterCard");return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.Lk)("div",i,[(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>c.filters.name=a),placeholder:"Filter by name",class:"filter-input"},null,512),[[n.Jo,c.filters.name]]),(0,r.bo)((0,r.Lk)("select",{"onUpdate:modelValue":t[1]||(t[1]=a=>c.filters.status=a),class:"filter-select"},h,512),[[n.u1,c.filters.status]]),(0,r.Lk)("button",{onClick:t[2]||(t[2]=(...a)=>c.applyFilters&&c.applyFilters(...a)),class:"apply-button"},"Apply")]),(0,r.Lk)("div",g,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(c.characters,(a=>((0,r.uX)(),(0,r.Wv)(l,{key:a.id,character:a},null,8,["character"])))),128))]),(0,r.Lk)("div",k,[(0,r.Lk)("button",{onClick:t[3]||(t[3]=(...a)=>c.prevPage&&c.prevPage(...a)),disabled:1===c.currentPage,class:"pagination-button"},"Prev",8,b),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(c.visiblePages,(a=>((0,r.uX)(),(0,r.CE)("button",{key:a,onClick:t=>c.goToPage(a),class:(0,o.C4)(["pagination-button",{active:c.currentPage===a}])},(0,o.v_)(a),11,m)))),128)),(0,r.Lk)("button",{onClick:t[4]||(t[4]=(...a)=>c.nextPage&&c.nextPage(...a)),disabled:c.currentPage===c.totalPages,class:"pagination-button"},"Next",8,y)])])}e(4114);var L=e(144),P=e(4373);const _={class:"character-card"},w=["src"],O={class:"character-details"};function j(a,t,e,n,c,s){return(0,r.uX)(),(0,r.CE)("div",_,[(0,r.Lk)("img",{src:e.character.image,alt:"character image",class:"character-image"},null,8,w),(0,r.Lk)("div",O,[(0,r.Lk)("h2",null,(0,o.v_)(e.character.name),1),(0,r.Lk)("p",null,[(0,r.eW)("Status: "),(0,r.Lk)("span",{class:(0,o.C4)(s.statusClass)},(0,o.v_)(e.character.status),3),(0,r.eW)(" - "+(0,o.v_)(e.character.species),1)]),(0,r.Lk)("p",null,"Last known location: "+(0,o.v_)(e.character.location.name),1),(0,r.Lk)("p",null,"First seen in: "+(0,o.v_)(e.character.origin.name),1)])])}var E={props:{character:Object},computed:{statusClass(){return{"status-alive":"Alive"===this.character.status,"status-dead":"Dead"===this.character.status,"status-unknown":"unknown"===this.character.status}}}},x=e(1241);const F=(0,x.A)(E,[["render",j],["__scopeId","data-v-161120e4"]]);var A=F,X={components:{CharacterCard:A},setup(){const a=(0,L.KR)([]),t=(0,L.KR)(1),e=(0,L.KR)(1),n=(0,L.Kh)({name:"",status:""}),c=async(r=1)=>{try{const c=await P.A.get("https://rickandmortyapi.com/api/character",{params:{page:r,name:n.name,status:n.status}});a.value=c.data.results,t.value=r,e.value=c.data.info.pages}catch(c){console.error("Error fetching characters:",c)}},s=()=>{c()},u=()=>{t.value<e.value&&c(t.value+1)},o=()=>{t.value>1&&c(t.value-1)},l=a=>{"..."!==a&&c(a)},i=(0,r.EW)((()=>{const a=[];if(e.value<=7)for(let t=1;t<=e.value;t++)a.push(t);else t.value<=4?a.push(1,2,3,4,5,"...",e.value):t.value>=e.value-3?a.push(1,"...",e.value-4,e.value-3,e.value-2,e.value-1,e.value):a.push(1,"...",t.value-1,t.value,t.value+1,"...",e.value);return a}));return(0,r.sV)((()=>{c()})),{characters:a,currentPage:t,totalPages:e,filters:n,fetchCharacters:c,applyFilters:s,nextPage:u,prevPage:o,goToPage:l,visiblePages:i}}};const K=(0,x.A)(X,[["render",C],["__scopeId","data-v-a7602aa8"]]);var S=K,T={components:{CharacterList:S}};const I=(0,x.A)(T,[["render",u]]);var M=I;(0,n.Ef)(M).mount("#app")}},t={};function e(n){var r=t[n];if(void 0!==r)return r.exports;var c=t[n]={exports:{}};return a[n].call(c.exports,c,c.exports,e),c.exports}e.m=a,function(){var a=[];e.O=function(t,n,r,c){if(!n){var s=1/0;for(i=0;i<a.length;i++){n=a[i][0],r=a[i][1],c=a[i][2];for(var u=!0,o=0;o<n.length;o++)(!1&c||s>=c)&&Object.keys(e.O).every((function(a){return e.O[a](n[o])}))?n.splice(o--,1):(u=!1,c<s&&(s=c));if(u){a.splice(i--,1);var l=r();void 0!==l&&(t=l)}}return t}c=c||0;for(var i=a.length;i>0&&a[i-1][2]>c;i--)a[i]=a[i-1];a[i]=[n,r,c]}}(),function(){e.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return e.d(t,{a:t}),t}}(),function(){e.d=function(a,t){for(var n in t)e.o(t,n)&&!e.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:t[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){e.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){var a={524:0};e.O.j=function(t){return 0===a[t]};var t=function(t,n){var r,c,s=n[0],u=n[1],o=n[2],l=0;if(s.some((function(t){return 0!==a[t]}))){for(r in u)e.o(u,r)&&(e.m[r]=u[r]);if(o)var i=o(e)}for(t&&t(n);l<s.length;l++)c=s[l],e.o(a,c)&&a[c]&&a[c][0](),a[c]=0;return e.O(i)},n=self["webpackChunkrick_and_morty_app"]=self["webpackChunkrick_and_morty_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=e.O(void 0,[504],(function(){return e(4180)}));n=e.O(n)})();
//# sourceMappingURL=app.926d559a.js.map