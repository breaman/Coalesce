import{_ as i,r as s,o as c,c as h,b as e,d as a,w as n,e as t,a as l}from"./app.6f19168f.js";const p={},u=e("h1",{id:"metadata-layer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#metadata-layer","aria-hidden":"true"},"#"),t(" Metadata Layer")],-1),m=e("p",null,[t("The metadata layer, generated as "),e("code",null,"metadata.g.ts"),t(", contains a minimal set of metadata to represent your data model on the front-end. Because Vue applications are typically statically compiled, it is necessary for the frontend code to have a representation of your data model as an analog to the "),e("code",null,"ReflectionRepository"),t(" available at runtime to Knockout apps that utilize "),e("code",null,".cshtml"),t(" files.")],-1),_={class:"table-of-contents"},f=t("Concepts"),y=t("Metadata"),v=t("Type"),b=t("Value"),g=t("Property"),x=t("Domain"),T=e("h2",{id:"concepts",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#concepts","aria-hidden":"true"},"#"),t(" Concepts")],-1),k=t("The following is a non-exhaustive list of the general concepts used by the metadata layer. The "),C={href:"https://github.com/IntelliTect/Coalesce/blob/dev/src/coalesce-vue/src/metadata.ts",target:"_blank",rel:"noopener noreferrer"},w=t("source code of coalesce-vue"),V=t(" provides the most exhaustive set of documentation about the metadata layer:"),N=e("h3",{id:"metadata",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#metadata","aria-hidden":"true"},"#"),t(" Metadata")],-1),E=e("p",null,[t("All objects in the metadata layer that represent any kind of metadata have, at the very least, a "),e("code",null,"name"),t(", the name of the metadata element in code (type names, property names, parameter names, etc). and a "),e("code",null,"displayName"),t(", the human-readable form of the name that is suitable for presentation when needed. Names follow the casing convention of their corresponding language elements - types are PascalCased, while other things like properties, methods, and parameters are camelCased.")],-1),P=e("h3",{id:"type",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#type","aria-hidden":"true"},"#"),t(" Type")],-1),R=t("All custom types exposed by your application's data model will have a Type metadata object generated. This includes both C# classes, and C# enums. Class types include "),j=e("code",null,"model",-1),D=t(" (for "),L=t("Entity Models"),A=t(" and "),B=t("Custom DTOs"),I=t(") and "),M=e("code",null,"object",-1),K=t(" (for "),S=t("External Types"),z=t(")."),F=e("h3",{id:"value",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#value","aria-hidden":"true"},"#"),t(" Value")],-1),J=e("p",null,"In the metadata layer, a Value is the usage of a type. This could be any type - strings, numbers, enums, classes, or even void. Values can be found in the collection of an object's properties, a method's parameters or return value, or as a data source's parameters.",-1),O=e("p",null,"All values have the following properties:",-1),q=l("<p>Type could be a language primitive like <code>string</code> or <code>number</code>, a non-primitive JavaScript type (<code>date</code>, <code>file</code>), or in the case of a custom Type, the type kind of that type (<code>model</code>, <code>enum</code>, <code>object</code>). For custom types, an additional property <code>typeDef</code> will refer to the Type metadata for that type.</p>",1),G=l('<p>Role represents what purpose the value serves in a relational model. Either <code>value</code> (the default - no relational role), <code>primaryKey</code>, <code>foreignKey</code>, <code>referenceNavigation</code>, or <code>collectionNavigation</code>.</p><h3 id="property" tabindex="-1"><a class="header-anchor" href="#property" aria-hidden="true">#</a> Property</h3><p>A Property is a more refined Value that contains a number of additional fields based on the <code>role</code> of the property. k</p><h3 id="domain" tabindex="-1"><a class="header-anchor" href="#domain" aria-hidden="true">#</a> Domain</h3><p>The type of the default export of the generated metadata. Serves as a single root from which all other metadata can be accessed. Contains fields <code>types</code>, <code>enums</code>, and <code>services</code> as organizing structures for the different kinds of custom types.</p>',5);function H(Q,U){const o=s("RouterLink"),r=s("ExternalLinkIcon"),d=s("Prop");return c(),h("div",null,[u,m,e("nav",_,[e("ul",null,[e("li",null,[a(o,{to:"#concepts"},{default:n(()=>[f]),_:1}),e("ul",null,[e("li",null,[a(o,{to:"#metadata"},{default:n(()=>[y]),_:1})]),e("li",null,[a(o,{to:"#type"},{default:n(()=>[v]),_:1})]),e("li",null,[a(o,{to:"#value"},{default:n(()=>[b]),_:1})]),e("li",null,[a(o,{to:"#property"},{default:n(()=>[g]),_:1})]),e("li",null,[a(o,{to:"#domain"},{default:n(()=>[x]),_:1})])])])])]),T,e("p",null,[k,e("a",C,[w,a(r)]),V]),N,E,P,e("p",null,[R,j,D,a(o,{to:"/modeling/model-types/entities.html"},{default:n(()=>[L]),_:1}),A,a(o,{to:"/modeling/model-types/dtos.html"},{default:n(()=>[B]),_:1}),I,M,K,a(o,{to:"/modeling/model-types/external-types.html"},{default:n(()=>[S]),_:1}),z]),F,J,O,a(d,{def:"type: TypeDiscriminator",lang:"ts"}),q,a(d,{def:"role: ValueRole",lang:"ts"}),G])}var X=i(p,[["render",H],["__file","metadata.html.vue"]]);export{X as default};
