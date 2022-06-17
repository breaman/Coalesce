import{_ as c,r as l,o as r,c as p,b as e,d as s,w as a,e as t,a as i}from"./app.6f19168f.js";const h={},u=e("h1",{id:"c-datetime-picker",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#c-datetime-picker","aria-hidden":"true"},"#"),t(" c-datetime-picker")],-1),_=t("A general, all-purpose date/time input component that can be used either with "),m=t("models"),D=t(" and "),y=t("metadata"),f=t(" or as a standalone component using only "),b=e("code",null,"v-model",-1),v=t("."),g={class:"table-of-contents"},C=t("Examples"),k=t("Props"),w=t("Slots"),x=i(`<h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-vue-html ext-vue-html line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">c-datetime-picker</span><span style="color:#D4D4D4;"> :</span><span style="color:#9CDCFE;">model</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">person</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">for</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;birthDate&quot;</span><span style="color:#D4D4D4;"> /</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">c-datetime-picker</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">v-model</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">standaloneDate</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#D4D4D4;"> /</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">c-datetime-picker</span><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">v-model</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">standaloneTime</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">date-kind</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;time&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">date-format</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;h:mm a&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">/</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2>`,3),E=e("p",null,"A metadata specifier for the value being bound. One of:",-1),q=e("ul",null,[e("li",null,[t("A string with the name of the value belonging to "),e("code",null,"model"),t(".")]),e("li",null,"A direct reference to a metadata object."),e("li",null,"A string in dot-notation that starts with a type name.")],-1),F=e("p",null,[t("An object owning the value that was specified by the "),e("code",null,"for"),t(" prop. If provided, the input will be bound to the corresponding property on the "),e("code",null,"model"),t(" object.")],-1),A=e("p",null,[t("If binding the component with "),e("code",null,"v-model"),t(", accepts the "),e("code",null,"value"),t(" part of "),e("code",null,"v-model"),t(".")],-1),I=e("p",null,[t("Whether the date is only a date, only a time, or contains significant date "),e("code",null,"and"),t(" time information.")],-1),T=t("If the component was bound with metadata using the "),N=e("code",null,"for",-1),P=t(" prop, this will default to the kind specified by "),S=t("[DateType]"),K=t("."),V=i("<p>The format of the date that will be rendered in the component&#39;s text field, and the format that will be attempted first when parsing user input in the text field.</p><p>Defaults to:</p><ul><li><code>M/d/yyyy h:mm a</code> if <code>dateKind == &#39;datetime&#39;</code>,</li><li><code>M/d/yyyy</code> if <code>dateKind == &#39;date&#39;</code>, or</li><li><code>h:mm a</code> if <code>dateKind == &#39;time&#39;</code>.</li></ul>",3),j={class:"custom-container warning"},L=e("p",{class:"custom-container-title"},"WARNING",-1),R=e("p",null,[t("When parsing a user's text input into the text field, c-datetime-picker will first attempt to parse it with the format specified by "),e("code",null,"dateFormat"),t(", or the default as described above if not explicitly specified.")],-1),W=t("If this fails, the date will be parsed with the "),B={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date",target:"_blank",rel:"noopener noreferrer"},M=t("Date constructor"),G=t(", but only if the "),O=e("code",null,"dateKind",-1),z=t(" is "),J=e("code",null,"datetime",-1),U=t(" or "),H=e("code",null,"date",-1),Q=t(". This works fairly well on all modern browsers, but can still occasionally have issues. c-datetime-picker tries its best to filter out bad parses from the Date constructor, like dates with a year earlier than 1000."),X=e("p",null,"True if the component should be read-only.",-1),Y=e("p",null,"True if the component should be disabled.",-1),Z=e("h2",{id:"slots",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#slots","aria-hidden":"true"},"#"),t(" Slots")],-1);function $(ee,te){const n=l("RouterLink"),o=l("Prop"),d=l("ExternalLinkIcon");return r(),p("div",null,[u,e("p",null,[_,s(n,{to:"/stacks/vue/layers/models.html"},{default:a(()=>[m]),_:1}),D,s(n,{to:"/stacks/vue/layers/metadata.html"},{default:a(()=>[y]),_:1}),f,b,v]),e("nav",g,[e("ul",null,[e("li",null,[s(n,{to:"#examples"},{default:a(()=>[C]),_:1})]),e("li",null,[s(n,{to:"#props"},{default:a(()=>[k]),_:1})]),e("li",null,[s(n,{to:"#slots"},{default:a(()=>[w]),_:1})])])]),x,s(o,{def:"for?: string | DateProperty | DateValue",lang:"ts"}),E,q,s(o,{def:"model?: Model | DataSource",lang:"ts"}),F,s(o,{def:"value?: Date",lang:"ts"}),A,s(o,{def:"dateKind?: 'date' | 'time' | 'datetime' = 'datetime'",lang:"ts"}),I,e("p",null,[T,N,P,s(n,{to:"/modeling/model-components/attributes/date-type.html"},{default:a(()=>[S]),_:1}),K]),s(o,{def:"dateFormat?: string",lang:"ts"}),V,e("div",j,[L,R,e("p",null,[W,e("a",B,[M,s(d)]),G,O,z,J,U,H,Q])]),s(o,{def:"readonly?: boolean",lang:"ts"}),X,s(o,{def:"disabled?: boolean",lang:"ts"}),Y,Z])}var oe=c(h,[["render",$],["__file","c-datetime-picker.html.vue"]]);export{oe as default};
