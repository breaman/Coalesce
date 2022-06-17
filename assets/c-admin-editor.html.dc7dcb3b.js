import{_ as d,r as n,o as i,c as r,b as o,d as s,w as a,e,a as c}from"./app.6f19168f.js";const p={},h=o("h1",{id:"c-admin-editor",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#c-admin-editor","aria-hidden":"true"},"#"),e(" c-admin-editor")],-1),_=e("An editor for a single "),m=e("ViewModel"),u=e(" instance. Provides a "),v=e("c-input"),f=e(" for each property of the model."),D=e("Does not automatically enable "),y=e("auto-save"),b=e(" - if desired, this must be enabled by the implementor of this component."),x=c(`<h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-vue-html ext-vue-html line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">c-admin-editor</span><span style="color:#D4D4D4;"> :</span><span style="color:#9CDCFE;">model</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">person</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#D4D4D4;"> /</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2>`,3),k=e("The "),w=e("ViewModel"),E=e(" to render an editor for.");function V(C,g){const t=n("RouterLink"),l=n("Prop");return i(),r("div",null,[h,o("p",null,[_,s(t,{to:"/stacks/vue/layers/viewmodels.html"},{default:a(()=>[m]),_:1}),u,s(t,{to:"/stacks/vue/coalesce-vue-vuetify/components/c-input.html"},{default:a(()=>[v]),_:1}),f]),o("p",null,[D,s(t,{to:"/stacks/vue/layers/viewmodels.html"},{default:a(()=>[y]),_:1}),b]),x,s(l,{def:"model: ViewModel | ListViewModel",lang:"ts"}),o("p",null,[k,s(t,{to:"/stacks/vue/layers/viewmodels.html"},{default:a(()=>[w]),_:1}),E])])}var N=d(p,[["render",V],["__file","c-admin-editor.html.vue"]]);export{N as default};
