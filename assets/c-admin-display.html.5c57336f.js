import{_ as c,r as l,o as i,c as r,b as e,d as t,w as n,e as s,a as p}from"./app.6f19168f.js";const d={},_=e("h1",{id:"c-admin-display",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#c-admin-display","aria-hidden":"true"},"#"),s(" c-admin-display")],-1),h=s("Behaves the same as "),u=s("c-display"),y=s(", except any collection navigation properties will be rendered as links to an admin list page, and any models will be rendered as a link to an admin item page."),m=s("Links for collections are resolved from "),D={href:"https://router.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},v=s("vue-router"),f=s(" with a route name of "),g=e("code",null,"coalesce-admin-list",-1),b=s(", a "),k=e("code",null,"type",-1),C=s(" route param containing the name of the collection's type, and a query parameter "),x=e("code",null,"filter.<foreign key name>",-1),E=s(" with a value of the primary key of the owner of the collection. This route is expected to resolve to a "),q=s("c-admin-table-page"),w=s(", which is setup by default by the template outlined in "),F=s("Getting Started with Vue"),L=s("."),S=s("Links for single models are resolved from "),V={href:"https://router.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},A=s("vue-router"),N=s(" with a route name of "),R=e("code",null,"coalesce-admin-item",-1),B=s(", a "),j=e("code",null,"type",-1),T=s(" route param containing the name of the model's type, and a "),G=e("code",null,"id",-1),I=s(" route param containing the object's primary key. This route is expected to resolve to a "),P=s("c-admin-editor-page"),z=s(", which is setup by default by the template outlined in "),H=s("Getting Started with Vue"),J=s("."),K=p(`<h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-vue-html ext-vue-html line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;">&lt;!-- Renders regularly as text: --&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">c-admin-display</span><span style="color:#D4D4D4;"> :</span><span style="color:#9CDCFE;">model</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">person</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">for</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;firstName&quot;</span><span style="color:#D4D4D4;"> /</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">&lt;!-- Renders as a link to an item: --&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">c-admin-display</span><span style="color:#D4D4D4;"> :</span><span style="color:#9CDCFE;">model</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">person</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">for</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;company&quot;</span><span style="color:#D4D4D4;"> /</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">&lt;!-- Renders as a link to a list: --&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">c-admin-display</span><span style="color:#D4D4D4;"> :</span><span style="color:#9CDCFE;">model</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">person</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">for</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;casesAssigned&quot;</span><span style="color:#D4D4D4;"> /</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2>`,3),M=s("Same as "),O=s("c-display"),Q=s("."),U=e("h2",{id:"slots",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#slots","aria-hidden":"true"},"#"),s(" Slots")],-1),W=s("Same as "),X=s("c-display"),Y=s(".");function Z($,ss){const o=l("RouterLink"),a=l("ExternalLinkIcon");return i(),r("div",null,[_,e("p",null,[h,t(o,{to:"/stacks/vue/coalesce-vue-vuetify/components/c-display.html"},{default:n(()=>[u]),_:1}),y]),e("p",null,[m,e("a",D,[v,t(a)]),f,g,b,k,C,x,E,t(o,{to:"/stacks/vue/coalesce-vue-vuetify/components/c-admin-table-page.html"},{default:n(()=>[q]),_:1}),w,t(o,{to:"/stacks/vue/getting-started.html"},{default:n(()=>[F]),_:1}),L]),e("p",null,[S,e("a",V,[A,t(a)]),N,R,B,j,T,G,I,t(o,{to:"/stacks/vue/coalesce-vue-vuetify/components/c-admin-editor-page.html"},{default:n(()=>[P]),_:1}),z,t(o,{to:"/stacks/vue/getting-started.html"},{default:n(()=>[H]),_:1}),J]),K,e("p",null,[M,t(o,{to:"/stacks/vue/coalesce-vue-vuetify/components/c-display.html"},{default:n(()=>[O]),_:1}),Q]),U,e("p",null,[W,t(o,{to:"/stacks/vue/coalesce-vue-vuetify/components/c-display.html"},{default:n(()=>[X]),_:1}),Y])])}var ts=c(d,[["render",Z],["__file","c-admin-display.html.vue"]]);export{ts as default};
