"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[818,774],{87581:(e,t,a)=>{a.d(t,{Q:()=>d});var r=a(67154),n=a.n(r),s=a(67294),c=a.n(s),o=a(94184),l=a.n(o);const i="_pMNGOs2KBLWGpGmunYI";function d(e){return c().createElement("section",n()({},e,{className:l()(i,e.className)}))}},93140:(e,t,a)=>{a.d(t,{q:()=>N});var r=a(67154),n=a.n(r),s=a(6479),c=a.n(s),o=a(67294),l=a.n(o),i=a(94184),d=a.n(i),m=a(82716),p=a(28760),u=a(74516),f=a(85404),g=a(94613);const h="RSgScVFD1lR6ekFN1hC9",E="dkOx6BEJI1d0RStHWUm5",v="GVQFdUwCGkHZmyuz4emj",A="BeY8E5ONYVNnO_iOKyvA",b="bPM8ckhKJay0joUDdCMw",P="ge4yAlYYoeKvB29FiG1W",O="og4J6XJtHE8zrFOD3WYQ",y="SMUcY5tIlrmkS1O8tUji",k=["figureProps","imageProps","advertiserTypeProps","taglineProps","callToActionButtonProps","externalLinkIconProps"],S="110px";function N(e){let{figureProps:t,imageProps:a,advertiserTypeProps:r,taglineProps:s,callToActionButtonProps:o,externalLinkIconProps:i}=e,N=c()(e,k);return l().createElement("a",n()({target:"_blank"},N,{className:d()(h,N.className)}),l().createElement("figure",n()({className:E},t),l().createElement(m.Ee,n()({placeholderSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8LwkAAh0BGumlBj4AAAAASUVORK5CYII=",imageWidth:S,imageHeight:S,crop:!0},a,{className:d()(A,a.className)})),l().createElement("figcaption",{className:b},l().createElement(p.Dy,n()({variant:"balladBold",className:P},r)),l().createElement(g.S,n()({className:O},s)),o&&l().createElement("div",{className:y},l().createElement(f.K,o))),i&&l().createElement(u.T,n()({className:v,iconSize:16},i))))}},85404:(e,t,a)=>{a.d(t,{K:()=>g});var r=a(67154),n=a.n(r),s=a(6479),c=a.n(s),o=a(67294),l=a.n(o),i=a(94184),d=a.n(i),m=a(99450),p=a(28760);const u="G8b_VGQSxRwZSatAhUTd",f=["children","data-testid","className"];function g(e){let{children:t,"data-testid":a,className:r}=e,s=c()(e,f);return l().createElement("div",{className:d()(u,r),"data-testid":a},l().createElement(m.D,n()({},s,{buttonSize:s.buttonSize||m.D.sm}),l().createElement(p.Dy,{variant:"mestoBold"},t)))}},94613:(e,t,a)=>{a.d(t,{S:()=>m});var r=a(67154),n=a.n(r),s=a(67294),c=a.n(s),o=a(94184),l=a.n(o),i=a(28760);const d="eaiLXk0FzOrdfkM6O8jp";function m(e){return c().createElement(i.Dy,n()({},e,{variant:e.variant||"mesto",className:l()(d,e.className)}))}},18774:(e,t,a)=>{a.r(t),a.d(t,{PodcastSponsorsWrapper:()=>d,default:()=>m});var r=a(67154),n=a.n(r),s=a(67294),c=a.n(s),o=a(20657),l=a(13218);const i="Opi2dmbjxhZcr0do4cr9";function d({shelfHeaderProps:e,listProps:t}){return c().createElement(c().Fragment,null,c().createElement(l.r,n()({title:o.ag.get("episode.sponsored_by")},e)),c().createElement("aside",n()({className:i},t)))}const m=d},39818:(e,t,a)=>{a.r(t),a.d(t,{AllShowSponsorsWithData:()=>f,default:()=>g});var r=a(59713),n=a.n(r),s=a(67294),c=a.n(s),o=a(1486),l=a(27716),i=a(87581),d=a(93140),m=a(18774),p=a(65013);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}const f=({uri:e,showSponsorsData:t,fireTrackingEvent:a=p.I})=>{const r=(0,l.s4)(),f=(0,s.useCallback)((async a=>r.send((0,o.$)(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({uri:e,reason:"Show page See All",lineitem_id:t.map((e=>e.metadata.lineitemId))},a)))),[e,t,r]);return(0,s.useEffect)((function(){t.forEach((({trackingEvents:{viewed:e}={}})=>null==e?void 0:e.forEach(a))),f()}),[t,f,a]),c().createElement(i.Q,null,c().createElement(m.PodcastSponsorsWrapper,{shelfHeaderProps:{hasMoreElements:!1},listProps:{children:null==t?void 0:t.map(((e,a)=>c().createElement(d.q,{key:`${e.metadata.advertiser||e.metadata.creativeId||e.metadata.creative_id} ${a}`,href:e.clickthrough,onClick:function(){var r;null===(r=e.trackingEvents)||void 0===r||r.clicked.forEach((e=>fetch(e))),f({ui_navigate:t.map((({clickthrough:e},t)=>a===t?e:"")),navigate_to_external_uri:t.map(((e,t)=>a===t))})},"data-testid":"to do",imageProps:{src:e.display,alt:`${e.metadata.advertiser} - ${e.metadata.buttonMessage}`},advertiserTypeProps:{"data-testid":"to do",children:e.metadata.advertiser},taglineProps:{"data-testid":"to do",children:e.metadata.tagline},callToActionButtonProps:{"data-testid":"to do",children:e.metadata.buttonMessage}})))}}))},g=f},65013:(e,t,a)=>{a.d(t,{I:()=>r});const r=e=>fetch(e)}}]);
//# sourceMappingURL=818.js.map