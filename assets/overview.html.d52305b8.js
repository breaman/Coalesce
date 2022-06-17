import{_ as a,r as n,o as l,c as r,b as t,d as o,w as i,e,a as h}from"./app.6f19168f.js";const c={},_=t("h1",{id:"knockout-overview",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#knockout-overview","aria-hidden":"true"},"#"),e(" Knockout Overview")],-1),u=e("The "),m={href:"http://knockoutjs.com/",target:"_blank",rel:"noopener noreferrer"},f=e("Knockout"),p=e(" stack for Coalesce offers the ability to build pages with the time-tested "),g={href:"http://knockoutjs.com/",target:"_blank",rel:"noopener noreferrer"},w=e("Knockout"),y=e(" JavaScript library using all of the features of the Coalesce generated APIs and "),v=e("ViewModels"),b=e(". It can be used for anything between adding simple interactive augmentations of MVC pages to building a full MPA-SPA hybrid application."),k={class:"table-of-contents"},x=e("Getting Started"),T=e("Generated Code"),C=e("TypeScript"),M=e("View Controllers"),V=e("Admin Views"),S=t("h2",{id:"getting-started",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#"),e(" Getting Started")],-1),E=e("Check out "),P=e("Getting Started with Knockout"),O=e(" if you haven't already to learn how to get a new Coalesce Knockout project up and running."),A=t("h2",{id:"generated-code",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#generated-code","aria-hidden":"true"},"#"),e(" Generated Code")],-1),K=t("p",null,"Below you will find a brief overview of each of the different pieces of code that Coalesce will generate for you when you choose the Knockout stack.",-1),L=t("h3",{id:"typescript",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#typescript","aria-hidden":"true"},"#"),e(" TypeScript")],-1),j=t("p",null,"Coalesce generates a number of different types of TypeScript classes to support your data through the generated API.",-1),G={id:"viewmodels",tabindex:"-1"},B=t("a",{class:"header-anchor",href:"#viewmodels","aria-hidden":"true"},"#",-1),D=e(),I=e("ViewModels"),N=e("One view model class is generated for each of your "),F=e("Entity Models"),H=e(" and "),R=e("Custom DTOs"),J=e(". These models contain fields for your model "),q=e("Properties"),z=e(", and functions and other members for your model "),Q=e("Methods"),U=e(". They also contain a number of standard fields & functions inherited from "),W=t("code",null,"BaseViewModel",-1),X=e(" which offer basic loading & saving functionality, as well as other handy utility members for use with Knockout."),Y=e("See "),Z=e("TypeScript ViewModels"),$=e(" for more details."),ee={id:"list-viewmodels",tabindex:"-1"},te=t("a",{class:"header-anchor",href:"#list-viewmodels","aria-hidden":"true"},"#",-1),oe=e(),se=e("List ViewModels"),ie=e("One ListViewModel is generated for each of your "),de=e("Entity Models"),ne=e(" and "),ae=e("Custom DTOs"),le=e(". These classes contain functionality for loading sets of objects from the server. They provide searching, paging, sorting, and filtering functionality."),re=e("See "),he=e("TypeScript ListViewModels"),ce=e(" for more details."),_e={id:"external-type-viewmodels",tabindex:"-1"},ue=t("a",{class:"header-anchor",href:"#external-type-viewmodels","aria-hidden":"true"},"#",-1),me=e(),fe=e("External Type ViewModels"),pe=e("Any non-primitive types which are not themselves a "),ge=e("Entity Models"),we=e(" or "),ye=e("Custom DTOs"),ve=e(" which are accessible through the aforementioned types, either through one of its "),be=e("Properties"),ke=e(", or return value from one of its "),xe=e("Methods"),Te=e(", will have a corresponding TypeScript ViewModel generated for it. These ViewModels only provide a "),Ce=t("code",null,"KnockoutObservable",-1),Me=e(" field for each property on the C# class."),Ve=e("See "),Se=e("TypeScript External ViewModels"),Ee=e(" for more details."),Pe=t("h3",{id:"view-controllers",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#view-controllers","aria-hidden":"true"},"#"),e(" View Controllers")],-1),Oe=e("For each of your "),Ae=e("Entity Models"),Ke=e(" and "),Le=e("Custom DTOs"),je=e(", a controller is created in the "),Ge=t("code",null,"/Controllers/Generated",-1),Be=e(" directory of your web project. These controllers provide routes for the generated admin views."),De=t("p",null,[e("As you add your own pages to your application, you should add additional partial classes in the "),t("code",null,"/Controllers"),e(" that extend these generated partial classes to expose those pages.")],-1),Ie=t("h3",{id:"admin-views",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#admin-views","aria-hidden":"true"},"#"),e(" Admin Views")],-1),Ne=e("For each of your "),Fe=e("Entity Models"),He=e(" and "),Re=e("Custom DTOs"),Je=e(", a number of views are generated to provide administrative-level access to your data."),qe=h('<h4 id="table" tabindex="-1"><a class="header-anchor" href="#table" aria-hidden="true">#</a> Table</h4><p>Provides a basic table view with sorting, searching, and paging of your data. Can be rendered in either read-only mode (routed as <code>/Table</code>), or editable mode (routed as <code>TableEdit</code>).</p><h4 id="cards" tabindex="-1"><a class="header-anchor" href="#cards" aria-hidden="true">#</a> Cards</h4><p>Provides a card-based view of your data with searching and paging.</p><h4 id="createedit" tabindex="-1"><a class="header-anchor" href="#createedit" aria-hidden="true">#</a> CreateEdit</h4><p>Provides an editor view which can be used to create new entities or edit existing ones.</p><h4 id="editorhtml" tabindex="-1"><a class="header-anchor" href="#editorhtml" aria-hidden="true">#</a> EditorHtml</h4><p>Provides a minimal amount of HTML to display an editor for the object type. This is used by the <code>showEditor</code> method on the generated TypeScript ViewModels.</p>',8);function ze(Qe,Ue){const d=n("ExternalLinkIcon"),s=n("RouterLink");return l(),r("div",null,[_,t("p",null,[u,t("a",m,[f,o(d)]),p,t("a",g,[w,o(d)]),y,o(s,{to:"/stacks/disambiguation/view-model.html"},{default:i(()=>[v]),_:1}),b]),t("nav",k,[t("ul",null,[t("li",null,[o(s,{to:"#getting-started"},{default:i(()=>[x]),_:1})]),t("li",null,[o(s,{to:"#generated-code"},{default:i(()=>[T]),_:1}),t("ul",null,[t("li",null,[o(s,{to:"#typescript"},{default:i(()=>[C]),_:1})]),t("li",null,[o(s,{to:"#view-controllers"},{default:i(()=>[M]),_:1})]),t("li",null,[o(s,{to:"#admin-views"},{default:i(()=>[V]),_:1})])])])])]),S,t("p",null,[E,o(s,{to:"/stacks/ko/getting-started.html"},{default:i(()=>[P]),_:1}),O]),A,K,L,j,t("h4",G,[B,D,o(s,{to:"/stacks/ko/client/view-model.html"},{default:i(()=>[I]),_:1})]),t("p",null,[N,o(s,{to:"/modeling/model-types/entities.html"},{default:i(()=>[F]),_:1}),H,o(s,{to:"/modeling/model-types/dtos.html"},{default:i(()=>[R]),_:1}),J,o(s,{to:"/modeling/model-components/properties.html"},{default:i(()=>[q]),_:1}),z,o(s,{to:"/modeling/model-components/methods.html"},{default:i(()=>[Q]),_:1}),U,W,X]),t("p",null,[Y,o(s,{to:"/stacks/ko/client/view-model.html"},{default:i(()=>[Z]),_:1}),$]),t("h4",ee,[te,oe,o(s,{to:"/stacks/ko/client/list-view-model.html"},{default:i(()=>[se]),_:1})]),t("p",null,[ie,o(s,{to:"/modeling/model-types/entities.html"},{default:i(()=>[de]),_:1}),ne,o(s,{to:"/modeling/model-types/dtos.html"},{default:i(()=>[ae]),_:1}),le]),t("p",null,[re,o(s,{to:"/stacks/ko/client/list-view-model.html"},{default:i(()=>[he]),_:1}),ce]),t("h4",_e,[ue,me,o(s,{to:"/stacks/ko/client/external-view-model.html"},{default:i(()=>[fe]),_:1})]),t("p",null,[pe,o(s,{to:"/modeling/model-types/entities.html"},{default:i(()=>[ge]),_:1}),we,o(s,{to:"/modeling/model-types/dtos.html"},{default:i(()=>[ye]),_:1}),ve,o(s,{to:"/modeling/model-components/properties.html"},{default:i(()=>[be]),_:1}),ke,o(s,{to:"/modeling/model-components/methods.html"},{default:i(()=>[xe]),_:1}),Te,Ce,Me]),t("p",null,[Ve,o(s,{to:"/stacks/ko/client/external-view-model.html"},{default:i(()=>[Se]),_:1}),Ee]),Pe,t("p",null,[Oe,o(s,{to:"/modeling/model-types/entities.html"},{default:i(()=>[Ae]),_:1}),Ke,o(s,{to:"/modeling/model-types/dtos.html"},{default:i(()=>[Le]),_:1}),je,Ge,Be]),De,Ie,t("p",null,[Ne,o(s,{to:"/modeling/model-types/entities.html"},{default:i(()=>[Fe]),_:1}),He,o(s,{to:"/modeling/model-types/dtos.html"},{default:i(()=>[Re]),_:1}),Je]),qe])}var Xe=a(c,[["render",ze],["__file","overview.html.vue"]]);export{Xe as default};
