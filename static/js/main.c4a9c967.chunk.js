(this["webpackJsonpz-animedex"]=this["webpackJsonpz-animedex"]||[]).push([[0],{51:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(24),c=n.n(i),s=n(45),l=n(2),o=Object(a.createContext)({}),u=(n(51),n(21)),d=n(1);var m=function(e){var t=Object(l.f)(),n=Object(a.useRef)(null),r=Object(a.useRef)(null),i=function(){n.current.classList.contains("opacity-0")?n.current.classList.remove("transform","-translate-y-20","opacity-0","hidden"):n.current.classList.add("transform","-translate-y-20","opacity-0","hidden")},c=Object(a.useContext)(o),s=c.toggleSidebar,m=c.setToggleSidebar,h=function(){var t=window.pageYOffset;e.active?console.log(t):t>280?r.current.classList.replace("-translate-y-24","-translate-y-0"):t<280&&r.current.classList.replace("-translate-y-0","-translate-y-24")},j=function(e){e.preventDefault(),t.push("/search/".concat(e.target.search.value)),i()};return Object(a.useEffect)((function(){if(n.current.focus(),!e.active)return window.addEventListener("onload",h,{passive:!0}),window.addEventListener("scroll",h,{passive:!0}),function(){window.removeEventListener("onload",h),window.removeEventListener("scroll",h)};r.current.classList.contains("-translate-y-0")||r.current.classList.replace("-translate-y-24","-translate-y-0")}),[e.active,h]),Object(d.jsxs)("div",{ref:r,className:"fixed w-full header transition-all duration-700 ease-in-out transform z-20 -translate-y-24 overflow-hidden",children:[Object(d.jsxs)("div",{className:"main-header border-b-2 pl-4 border-lightblue pr-4 h-12 md:h-16 lg:h-20 w-full flex flex-wrap bg-secondary text-white header justify-items-center content-center",children:[Object(d.jsx)("div",{className:"menubar flex flex-wrap flex-1 justify-start content-center flex-1 md:hidden",children:Object(d.jsx)("svg",{className:"w-6 h-6 cursor-pointer",onClick:function(){m(!s)},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h7"})})}),Object(d.jsx)("div",{className:"brandname transition-all duration-700 ease-in-out flex-1 text-xl md:text-primSize lg:text-xxl font-body flex justify-center cursort-pointer",children:Object(d.jsxs)(u.b,{to:"/",children:[Object(d.jsx)("span",{children:"Z"}),Object(d.jsx)("span",{className:"text-orange",children:"-"}),Object(d.jsx)("span",{className:"text-lightblue",children:"AnimeIndex"})]})}),Object(d.jsx)("div",{className:"search flex flex-wrap flex-1 justify-end items-center gap-1",children:Object(d.jsxs)("form",{action:"",onSubmit:j,autoComplete:"off",className:"flex flex-wrap flex-1 justify-end items-center gap-1",children:[Object(d.jsx)("input",{className:"rounded w-2/4 hidden md:block p-1 text-black",type:"text",name:"search",placeholder:"Search for your favorite anime",minLength:"3"}),Object(d.jsx)("svg",{onClick:i,className:"w-6 h-6 cursor-pointer md:hidden",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]})})]}),Object(d.jsx)("div",{className:"search text-white bg-transparent",children:Object(d.jsx)("form",{action:"",onSubmit:j,autoComplete:"off",children:Object(d.jsx)("input",{ref:n,id:"searchInp",minLength:"3",className:"rounded bg-red-700 w-full md:block p-1 text-black transition-all duration-300 ease-in-out transform -translate-y-20 opacity-0 z-0 border-4 hidden",type:"text",name:"search",placeholder:"Search Anime or Manga"})})})]})},h=n(6),j=n(19),x=n(18),p=n(3),f=n.n(p),b=n(7),v="FETCH_TOPS_ANIME",g="FETCH_TOPS_MANGA",O="FETCH_ANIME_DETAILS",w="FETCH_SEASON_ANIME",y="FETCH_SEARCH",N="FETCH_ANIME_CHARACTERS",S=n(8),k=n.n(S);var L=function(e,t){return e?t?function(){var n=Object(b.a)(f.a.mark((function n(a){var r;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k()("/top/anime/".concat(e,"/").concat(t));case 2:r=n.sent,a({type:v,payload:r.data.top});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}():function(){var t=Object(b.a)(f.a.mark((function t(n){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k()("/top/anime/".concat(e,"/}"));case 2:a=t.sent,n({type:v,payload:a.data.top});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}():function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()("/top/anime");case 2:n=e.sent,t({type:v,payload:n.data.top});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};var T=function(e,t){return e?t?function(){var e=Object(b.a)(f.a.mark((function e(n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()("/season/".concat(t));case 2:a=e.sent,n({type:w,payload:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}():function(){var t=Object(b.a)(f.a.mark((function t(n){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k()("/season/".concat(e));case 2:a=t.sent,n({type:w,payload:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}():function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()("/season");case 2:n=e.sent,t({type:w,payload:n.data.anime});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};var M=function(e,t){return e?t?function(){var n=Object(b.a)(f.a.mark((function n(a){var r;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k()("/top/manga/".concat(e,"/").concat(t));case 2:r=n.sent,a({type:g,payload:r.data.top});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}():function(){var t=Object(b.a)(f.a.mark((function t(n){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k()("/top/manga/".concat(e,"/"));case 2:a=t.sent,n({type:g,payload:a.data.top});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}():function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()("/top/manga");case 2:n=e.sent,t({type:g,payload:n.data.top});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=n(100),A=n(98);var _=function(e){var t=e.category,n=e.animes,r=Object(a.useRef)(new Array),i=Object(a.useRef)(new Array);return Object(d.jsxs)("div",{className:"anime-container text-white z-10 w-full overflow-hidden pt-6",children:[Object(d.jsx)("h1",{className:" ease-in-out text-primSize sm:text-primSizeS md:text-primSizeM lg:text-primSizeL m-2",children:t&&t}),Object(d.jsx)(C.a,{className:"animes",spaceBetween:20,freeMode:!0,slidesPerView:3,direction:"horizontal",children:0!==n.length&&n.slice(0,15).map((function(e,t){return Object(d.jsxs)(A.a,{className:"anime relative transition-all duration-700 ease-in-out text-titleSize text-center max-w-xsm sm:max-w-sm md:max-w-md lg:max-w-lg bg-primary rounded-lg",children:[Object(d.jsx)("img",{ref:function(e){return r.current.push(e)},index:t,onMouseEnter:function(){return function(e){r.current[e].classList.replace("h-3/4","h-full")}(t)},onMouseLeave:function(){return function(e){r.current[e].classList.replace("h-full","h-3/4")}(t)},src:e.image_url,alt:e.title,className:"transition-all duration-700 ease-in-out rounded-lg w-full h-3/4"}),Object(d.jsxs)("div",{ref:function(e){return i.current.push(e)},index:t,onMouseEnter:function(){return function(e){r.current[e].classList.replace("h-3/4","h-0")}(t)},onMouseLeave:function(){return function(e){r.current[e].classList.replace("h-0","h-3/4")}(t)},className:"anime-info pl-2 pr-2 group mt-2 mb-2 text-titleSizeS md:text-titleSizeM lg:text-titleSizeL grid grid-flow-column justify-center content-start gap-y-1 w-full h-full z-0",children:[Object(d.jsx)("h1",{children:e.title}),Object(d.jsxs)("div",{className:"rating grid grid-flow-col justify-center items-center",children:[Object(d.jsx)("svg",{className:"w-4 h-4 text-lightblue",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"})}),Object(d.jsx)("h2",{children:e.score})]}),Object(d.jsxs)("h1",{children:["Rank: ",e.rank]}),Object(d.jsx)(u.b,{className:"transition-all duration-700 ease-in-out bg-lightblue pt-2 pb-2 opacity-0 rounded-md hover:bg-lightblue group-hover:opacity-100",to:"/anime/".concat(e.mal_id),children:"View"})]})]},e.mal_id)}))})]})};var z=Object(j.b)((function(e){return{animes:{topAnime:e.topAnime.items,animeSeason:e.animeSeason.items,topManga:e.topManga.items}}}),(function(e){return{actionCreators:Object(h.a)({},Object(x.b)({fetchTopAnime:L,fetchAnimeSeason:T,fetchTopManga:M},e))}}))((function(e){var t=e.animes,n=e.actionCreators;return Object(a.useEffect)((function(){n.fetchTopAnime(),n.fetchAnimeSeason(),n.fetchTopManga()}),[n]),Object(d.jsxs)("div",{className:"section-two w-full h-auto bg-secondary pt-6 pb-6",children:[Object(d.jsx)(_,{category:"Top Anime",animes:null===t||void 0===t?void 0:t.topAnime}),Object(d.jsx)(_,{category:"Season Now",animes:null===t||void 0===t?void 0:t.animeSeason})]})}));var E=function(){var e=Object(l.f)();return Object(d.jsxs)("form",{action:"",onSubmit:function(t){e.push("/search/".concat(t.target.search.value))},autoComplete:"off",className:"flex flex-wrap flex-1 justify-center items-center gap-1 text-white mb-10",children:[Object(d.jsx)("input",{className:"transition-all duration-700 ease-in-out rounded p-1.5 md:p-2 lg:p-3 text-black w-64 md:w-80 lg:w-96 border-1 border-lightblue focus:border-lightblue",type:"text",name:"search",minLength:"3",id:"searchId",placeholder:"Search for your favorite anime"}),Object(d.jsx)("svg",{className:"transition-all duration-5000 ease-in-out w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 cursor-pointer",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]})};var R=function(){var e=Object(a.useRef)(null),t=Object(a.useContext)(o),n=t.toggleSidebar,r=t.setToggleSidebar;return Object(a.useEffect)((function(){n?e.current.classList.remove("-translate-x-full"):e.current.classList.add("-translate-x-full")}),[n]),Object(d.jsxs)("div",{ref:e,className:"sidebar fixed bg-secondary border-r border-lightblue text-white grid content-center transition-all transform duration-700 ease-in-out w-3/6 h-screen z-10 -translate-x-full",children:[Object(d.jsx)("div",{className:"close-bar absolute top-4 right-3",children:Object(d.jsx)("svg",{onClick:function(){r(!n)},className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),Object(d.jsxs)("div",{className:"main text-center grid gap-y-4 ",children:[Object(d.jsx)("h1",{children:"Trending"}),Object(d.jsx)("h1",{children:"Season Now"}),Object(d.jsx)("h1",{children:"Genre"})]})]})};var D=function(){return Object(a.useEffect)((function(){document.title="Z-Animedex"})),Object(d.jsxs)("div",{className:"homepage font-body",children:[Object(d.jsx)(m,{active:!1}),Object(d.jsxs)("div",{className:"main m-auto bg-primary h-screen grid grid-flow-row place-content-center gap-y-4",children:[Object(d.jsxs)("div",{className:"transition-all duration-700 ease-in-out brandname flex-1 font-body text-white text-center text-xxl md:text-xxxl lg:text-xxxxl z-10",children:[Object(d.jsx)("span",{children:"Z"}),Object(d.jsx)("span",{className:"text-orange",children:"-"}),Object(d.jsx)("span",{className:"text-lightblue",children:"Animedex"})]}),Object(d.jsx)(E,{}),Object(d.jsxs)("div",{className:"scroll-down grid grid-flow-row place-items-center text-white pt-44 md:pt-32 lg:pt-28 animate-bounce",children:[Object(d.jsx)("h4",{children:"Scroll Down"}),Object(d.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 13l-7 7-7-7m14-8l-7 7-7-7"})})]}),Object(d.jsx)(R,{})]}),Object(d.jsx)(z,{})]})},B=n(99);var I=function(e){return function(){var t=Object(b.a)(f.a.mark((function t(n){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k()("/anime/".concat(e));case 2:a=t.sent,n({type:O,payload:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},H=n(43),F=n.n(H);var W=function(e){return function(){var t=Object(b.a)(f.a.mark((function t(n){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k()("/anime/".concat(e,"/characters_staff"));case 2:a=t.sent,n({type:N,payload:a.data.characters});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},q={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}};var P=Object(j.b)((function(e){return{previewed:{animeDetails:e.animeDetails.item,animeCharacters:e.animeCharacters.items}}}),(function(e){return{details:Object(h.a)({},Object(x.b)({fetchAnimeDetails:I,fetchAnimeCharacters:W},e))}}))((function(e){var t,n=e.details,r=e.previewed,i=Object(l.g)();Object(a.useEffect)((function(){n.fetchAnimeDetails(i.params.id),n.fetchAnimeCharacters(i.params.id),document.title=r.animeDetails.title+" - Z-Animedex"}),[n,i.params.id,document.title]);var c=r.animeDetails,s=r.animeCharacters;return Object(d.jsxs)("div",{className:"preview-main w-full bg-primary font-body",children:[Object(d.jsx)(m,{active:!0}),Object(d.jsx)(R,{}),Object(d.jsx)(B.a.div,{className:"preview pt-16 md:pt-20 lg:pt-24 pl-6 pr-6 text-white text-center text-titleSizeS md:text-titleSizeM lg:text-titleSizeL",variants:q,initial:"hidden",animate:"visible",exit:"exit",children:Object(d.jsxs)("div",{className:"full-details grid grid-flow-row md:grid-flow-col gap-2",children:[Object(d.jsxs)("div",{className:"img-info",children:[Object(d.jsx)("img",{className:"m-auto",src:c.image_url,alt:null===c||void 0===c?void 0:c.image_url}),Object(d.jsx)("h1",{className:"text-animeTitle mt-4 sm:text-animeTitleS md:text-animeTitleM lg:text-animeTitleL",children:null===r||void 0===r||null===(t=r.animeDetails)||void 0===t?void 0:t.title}),Object(d.jsxs)("h1",{children:["Genre:"," ",c.genres&&c.genres.map((function(e){return e.name})).join(", ").replace(/(.*),(.*)$/,"$1 &$2")]})]}),Object(d.jsxs)("div",{className:"main-details grid grid-flow-row gap-y-4",children:[Object(d.jsxs)("div",{className:"ratings bg-secondary md:h-24 lg:h-20 p-4 rounded-lg text-animeTitle sm:text-animeTitleS md:text-animeTitleM lg:text-animeTitleL grid grid-flow-cols grid-cols-2 md:grid-cols-4 place-items-center gap-4",children:[Object(d.jsxs)("h1",{children:["Score: ",c.score]}),Object(d.jsxs)("h1",{children:["Ranked: ",c.rank]}),Object(d.jsxs)("h1",{children:["Popularity: ",c.popularity]}),Object(d.jsxs)("h1",{children:["Status: ",c.status]})]}),Object(d.jsx)("h1",{children:"Trailer"}),c.trailer_url?Object(d.jsx)("div",{className:"trailer w-full h-60 md:h-72 grid justify-items-center",children:Object(d.jsx)(F.a,{width:"75%",height:"100%",url:c.trailer_url,controls:!0})}):"",Object(d.jsxs)("div",{className:"synopsis-main pl-6 pr-6",children:[Object(d.jsx)("h1",{className:"text-animeTitle m-4 sm:text-animeTitleS md:text-animeTitleM lg:text-animeTitleL",children:c.title}),Object(d.jsx)("h1",{children:c.synopsis})]}),Object(d.jsx)("h1",{className:"text-animeTitle m-4 sm:text-animeTitleS md:text-animeTitleM lg:text-animeTitleL",children:"Characters & Voice Actors"}),Object(d.jsx)("div",{className:"characters-main grid grid-flow-row w-full sm:grid-cols-2 gap-2 mb-12",children:s.length>=4?s.slice(0,4).map((function(e){var t,n;return Object(d.jsxs)("div",{className:"charac-container flex h-20 w-full bg-secondary",children:[Object(d.jsxs)("div",{className:"characters flex-1 flex justify-start items-center space-x-2",children:[Object(d.jsx)("img",{className:"h-full",src:e.image_url,alt:e.name}),Object(d.jsx)("h1",{className:"name",children:e.name})]}),Object(d.jsxs)("div",{className:"voice-actor flex-1 flex justify-end items-center space-x-2",children:[Object(d.jsx)("h1",{children:null===e||void 0===e||null===(t=e.voice_actors[0])||void 0===t?void 0:t.name}),Object(d.jsx)("img",{className:"h-full",src:null===e||void 0===e||null===(n=e.voice_actors[0])||void 0===n?void 0:n.image_url,alt:null===e||void 0===e?void 0:e.voice_actors})]})]},e.mal_id)})):s.map((function(e){var t,n;return Object(d.jsxs)("div",{className:"charac-container flex h-20 w-full bg-secondary",children:[Object(d.jsxs)("div",{className:"characters flex-1 flex justify-start items-center space-x-2",children:[Object(d.jsx)("img",{className:"h-full",src:e.image_url,alt:e.name}),Object(d.jsx)("h1",{className:"name",children:e.name})]}),Object(d.jsxs)("div",{className:"voice-actor flex-1 flex justify-end items-center space-x-2",children:[Object(d.jsx)("h1",{children:null===e||void 0===e||null===(t=e.voice_actors[0])||void 0===t?void 0:t.name}),Object(d.jsx)("img",{className:"h-full",src:null===e||void 0===e||null===(n=e.voice_actors[0])||void 0===n?void 0:n.image_url,alt:null===e||void 0===e?void 0:e.voice_actors})]})]},e.mal_id)}))})]})]})})]})})),Q=function(e){return function(){var t=Object(b.a)(f.a.mark((function t(n){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k()("/search/anime?q=".concat(e));case 2:a=t.sent,n({type:y,payload:a.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Z={hidden:{x:"100vw"},visible:{x:"0",transition:{type:"tween",duration:.4}},exit:{x:"100vw",transition:{type:"tween",duration:.4}}};var G=Object(j.b)((function(e){return{searchQuery:e.searchQuery.items}}),{fetchSearch:Q})((function(e){var t=e.searchQuery,n=e.fetchSearch,r=Object(a.useRef)([]),i=Object(a.useRef)([]),c=Object(l.f)(),s=Object(l.g)();return Object(a.useEffect)((function(){document.title="Search Results...",n(s.params.query)}),[n,s.params.query]),Object(d.jsxs)("div",{className:"search-main w-full h-auto bg-primary",children:[Object(d.jsx)(m,{active:!0}),Object(d.jsx)(R,{}),Object(d.jsx)("div",{className:"search-results h-full w-full pt-14 md:pt-20 lg:pt-24 pb-6"}),Object(d.jsxs)("h1",{className:"text-titleSizeS md:text-titleSizeM lg:text-titleSizeL text-center text-lightblue",children:["Search results of ",s.params.query,"..."]}),Object(d.jsx)("div",{className:"results-container w-11/12 h-full bg-secondary m-auto p-1 grid-flow-row grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-0.5 text-white text-center overflow-hidden",children:0!==t?t.map((function(e,t){return Object(d.jsx)(B.a.div,{className:"overflow-hidden",variants:Z,initial:"hidden",animate:"visible",exit:"exit",children:Object(d.jsxs)("div",{index:t,ref:function(e){return i.current[t]=e},className:"result-card w-full h-full grid place-items-center content-start p-1 rounded bg-primary rounded-xl overflow-hidden text-animeTitle sm:text-animeTitleS md:text-animeTitleM lg:text-animeTitleL",children:[Object(d.jsx)("img",{src:e.image_url,className:"w-full h-full rounded-xl"}),Object(d.jsx)("h1",{children:e.title}),Object(d.jsxs)("div",{index:t,onMouseLeave:function(){return function(e){r.current[e].classList.replace("opacity-80","opacity-0")}(t)},onMouseEnter:function(){return function(e){r.current[e].classList.replace("opacity-0","opacity-80")}(t)},onClick:function(){return c.push("/anime/".concat(e.mal_id))},ref:function(e){return r.current[t]=e},className:"info text-titleSize sm:text-titleSizeS md:text-titleSizeM lg:text-titleSizeL p-2 absolute w-full h-full bg-secondary rounded-xl transition-all duration-700 ease-in-out opacity-0",children:[Object(d.jsx)("h1",{children:e.title}),Object(d.jsxs)("h1",{className:"flex justify-center items-center",children:[Object(d.jsx)("svg",{className:"w-4 h-4 text-lightblue",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"})})," ",e.score]}),Object(d.jsx)("h1",{children:e.synopsis})]})]})},e.mal_id)})):Object(d.jsx)("h1",{children:"Cant Find Anything"})})]})}));var V=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(d.jsx)(o.Provider,{value:{toggleSidebar:n,setToggleSidebar:r},children:Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",component:D}),Object(d.jsx)(l.a,{exact:!0,path:"/search/:query",component:G}),Object(d.jsx)(l.a,{exact:!0,path:"/anime/:id",component:P})]})})})},$=(n(94),n(44)),J={items:[],item:{}},Y={items:[],item:{}},K={items:[],item:{}},U={items:[],item:{}},X={items:[],item:{}},ee={items:[]},te=Object(x.c)({topAnime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(h.a)(Object(h.a)({},e),{},{items:t.payload});default:return e}},topManga:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(h.a)(Object(h.a)({},e),{},{items:t.payload});default:return e}},animeDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(h.a)(Object(h.a)({},e),{},{item:t.payload});default:return e}},animeSeason:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(h.a)(Object(h.a)({},e),{},{items:t.payload});default:return e}},searchQuery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(h.a)(Object(h.a)({},e),{},{items:t.payload});default:return e}},animeCharacters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(h.a)(Object(h.a)({},e),{},{items:t.payload});default:return e}}}),ne=[$.a],ae=Object(x.d)(te,{},x.a.apply(void 0,ne));c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(u.a,{children:Object(d.jsx)(j.a,{store:ae,children:Object(d.jsx)(V,{})})})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.c4a9c967.chunk.js.map