import{_ as r,r as t,o as c,c as D,b as n,d as a,w as o,e as s,a as p}from"./app.6f19168f.js";const i={},d=n("h1",{id:"entity-models",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#entity-models","aria-hidden":"true"},"#"),s(" Entity Models")],-1),y=s("Models are the core business objects of your application - they serve as the fundamental representation of data in your application. The design of your models is very important. In "),u={href:"https://docs.microsoft.com/en-us/ef/core/",target:"_blank",rel:"noopener noreferrer"},C=s("Entity Framework Core"),h=s(" (EF), data models are just Plain Old CLR Objects (POCOs)."),m={class:"table-of-contents"},v=s("Building a Data Model"),_=s("Properties"),b=s("Attributes"),E=s("Methods"),f=s("Customizing CRUD Operations"),g=s("Data Sources"),F=s("Behaviors"),B=s("Standalone (non-EF) Entities"),S=n("h2",{id:"building-a-data-model",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#building-a-data-model","aria-hidden":"true"},"#"),s(" Building a Data Model")],-1),A=s("To start building your data model that Coalesce will generate code for, follow the best practices for "),x={href:"https://docs.microsoft.com/en-us/ef/core/",target:"_blank",rel:"noopener noreferrer"},w=s("EF Core"),k=s(". Guidance on this topic is available in abundance in the "),T={href:"https://docs.microsoft.com/en-us/ef/core/",target:"_blank",rel:"noopener noreferrer"},I=s("Entity Framework Core documentation"),R=s("."),O=n("p",null,[s("Don't worry about querying or saving data when you're just getting started - Coalesce will provide a lot of that functionality for you, and it is very easy to customize what Coalesce offers later. To get started, just build your POCOs and "),n("code",null,"DbContext"),s(" classes. Annotate your "),n("code",null,"DbContext"),s(" class with "),n("code",null,"[Coalesce]"),s(" so that Coalesce will discover it and generate code based off of your context for you.")],-1),P=n("p",null,"Before you start building, you are highly encouraged to read the sections below. The linked pages explain in greater detail what Coalesce will build for you for each part of your data model.",-1),M=n("h3",{id:"properties",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),s(" Properties")],-1),z=s("Read "),j=s("Properties"),L=s(" for an outline of the different types of properties that you may place on your models and the code that Coalesce will generate for each of them."),q=n("h3",{id:"attributes",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#attributes","aria-hidden":"true"},"#"),s(" Attributes")],-1),N=n("p",null,[s("Coalesce provides a number of C# attributes that can be used to decorate your model classes and their properties in order to customize behavior, appearance, security, and more. Coalesce also supports a number of annotations from "),n("code",null,"System.ComponentModel.DataAnnotations"),s(".")],-1),V=s("Read "),Q=s("Attributes"),G=s(" to learn more."),K=n("h3",{id:"methods",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),s(" Methods")],-1),U=s("You can place both static and interface methods on your model classes. Any public methods annotated with "),Y=s("[Coalesce]"),H=s(" will have a generated API endpoint and corresponding generated TypeScript members for calling this API endpoint. Read "),J=s("Methods"),W=s(" to learn more."),X=p('<h2 id="customizing-crud-operations" tabindex="-1"><a class="header-anchor" href="#customizing-crud-operations" aria-hidden="true">#</a> Customizing CRUD Operations</h2><p>Once you&#39;ve got a solid data model in place, its time to start customizing the way that Coalesce will <em>read</em> your data, as well as the way that it will handle your data when processing <em>creates</em>, <em>updates</em>, and <em>deletes</em>.</p><h3 id="data-sources" tabindex="-1"><a class="header-anchor" href="#data-sources" aria-hidden="true">#</a> Data Sources</h3>',3),Z=s("The method by which you can control what data the users of your application can access through Coalesce's generated APIs is by creating custom data sources. These are classes that allow complete control over the way that data is retrieved from your database and provided to clients. Read "),$=s("Data Sources"),ss=s(" to learn more."),ns=n("h3",{id:"behaviors",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#behaviors","aria-hidden":"true"},"#"),s(" Behaviors")],-1),as=s("Behaviors in Coalesce are to mutating data as data sources are to reading data. Defining a behaviors class for a model allows complete control over the way that Coalesce will create, update, and delete your application's data in response to requests made through its generated API. Read "),es=s("Behaviors"),os=s(" to learn more."),ls=n("h2",{id:"standalone-non-ef-entities",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#standalone-non-ef-entities","aria-hidden":"true"},"#"),s(" Standalone (non-EF) Entities")],-1),ts=n("p",null,[s("In Coalesce, Standalone Entities are entity types that are not based on Entity Framework. These types are discovered by Coalesce by annotating them with "),n("code",null,"[Coalesce, StandaloneEntity]"),s(".")],-1),ps=s("For these types, you must define at least one custom "),rs=s("Data Source"),cs=s(", and optionally a "),Ds=s("Behaviors"),is=s(" class as well. If no behaviors are defined, the type is implicitly read-only, equivalent to turning off create/edit/delete via the "),ds=s("Security Attributes"),ys=s("."),us=p(`<p>To define data sources and behaviors for Standalone Entities, it is recommended you inherit from <code>StandardDataSource&lt;T&gt;</code> and <code>StandardBehaviors&lt;T&gt;</code>, respectively. For example:</p><div class="language-c# ext-c# line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">[</span><span style="color:#4EC9B0;">Coalesce</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">StandaloneEntity</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#569CD6;">public</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">class</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">StandaloneExample</span></span>
<span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">public</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">int</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">Id</span><span style="color:#D4D4D4;"> { </span><span style="color:#569CD6;">get</span><span style="color:#D4D4D4;">; </span><span style="color:#569CD6;">set</span><span style="color:#D4D4D4;">; }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    [</span><span style="color:#4EC9B0;">Search</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">SearchMethod</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">SearchAttribute</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">SearchMethods</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">Contains</span><span style="color:#D4D4D4;">), </span><span style="color:#4EC9B0;">ListText</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">public</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">string</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">Name</span><span style="color:#D4D4D4;"> { </span><span style="color:#569CD6;">get</span><span style="color:#D4D4D4;">; </span><span style="color:#569CD6;">set</span><span style="color:#D4D4D4;">; } = </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    [</span><span style="color:#4EC9B0;">DefaultOrderBy</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">public</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">DateTimeOffset</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">Date</span><span style="color:#D4D4D4;"> { </span><span style="color:#569CD6;">get</span><span style="color:#D4D4D4;">; </span><span style="color:#569CD6;">set</span><span style="color:#D4D4D4;">; }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">private</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">static</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">int</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">nextId</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">private</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">static</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">ConcurrentDictionary</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#569CD6;">int</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">StandaloneExample</span><span style="color:#D4D4D4;">&gt; </span><span style="color:#9CDCFE;">backingStore</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">new</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">ConcurrentDictionary</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#569CD6;">int</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">StandaloneExample</span><span style="color:#D4D4D4;">&gt;();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">public</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">class</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">DefaultSource</span><span style="color:#D4D4D4;"> : </span><span style="color:#4EC9B0;">StandardDataSource</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">StandaloneExample</span><span style="color:#D4D4D4;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">public</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">DefaultSource</span><span style="color:#D4D4D4;">(</span><span style="color:#4EC9B0;">CrudContext</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">context</span><span style="color:#D4D4D4;">) : </span><span style="color:#569CD6;">base</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">context</span><span style="color:#D4D4D4;">) { }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">public</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">override</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Task</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">IQueryable</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">StandaloneExample</span><span style="color:#D4D4D4;">&gt;&gt; </span><span style="color:#DCDCAA;">GetQueryAsync</span><span style="color:#D4D4D4;">(</span><span style="color:#4EC9B0;">IDataSourceParameters</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">parameters</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">            =&gt; </span><span style="color:#9CDCFE;">Task</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">FromResult</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">backingStore</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">Values</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">AsQueryable</span><span style="color:#D4D4D4;">());</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">public</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">class</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Behaviors</span><span style="color:#D4D4D4;"> : </span><span style="color:#4EC9B0;">StandardBehaviors</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">StandaloneExample</span><span style="color:#D4D4D4;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">public</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">Behaviors</span><span style="color:#D4D4D4;">(</span><span style="color:#4EC9B0;">CrudContext</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">context</span><span style="color:#D4D4D4;">) : </span><span style="color:#569CD6;">base</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">context</span><span style="color:#D4D4D4;">) { }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">public</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">override</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Task</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">ExecuteDeleteAsync</span><span style="color:#D4D4D4;">(</span><span style="color:#4EC9B0;">StandaloneExample</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#9CDCFE;">backingStore</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">TryRemove</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">Id</span><span style="color:#D4D4D4;">, </span><span style="color:#569CD6;">out</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">_</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">Task</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">CompletedTask</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">public</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">override</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Task</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">ExecuteSaveAsync</span><span style="color:#D4D4D4;">(</span><span style="color:#4EC9B0;">SaveKind</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">kind</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">StandaloneExample</span><span style="color:#D4D4D4;">? </span><span style="color:#9CDCFE;">oldItem</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">StandaloneExample</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">kind</span><span style="color:#D4D4D4;"> == </span><span style="color:#9CDCFE;">SaveKind</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">Create</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">            {</span></span>
<span class="line"><span style="color:#D4D4D4;">                </span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">Id</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">Interlocked</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">Increment</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">ref</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">nextId</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">                </span><span style="color:#9CDCFE;">backingStore</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">TryAdd</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">Id</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#C586C0;">else</span></span>
<span class="line"><span style="color:#D4D4D4;">            {</span></span>
<span class="line"><span style="color:#D4D4D4;">                </span><span style="color:#9CDCFE;">backingStore</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">TryRemove</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">Id</span><span style="color:#D4D4D4;">, </span><span style="color:#569CD6;">out</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">_</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">                </span><span style="color:#9CDCFE;">backingStore</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">TryAdd</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">Id</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">Task</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">CompletedTask</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">        }</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The above example is admittedly contrived, as it is unlikely that you would be using an in-memory collection as a data persistence mechanism. A more likely real-world scenario would be to inject an interface to some other data store. Data Source and Behavior classes are instantiated using your application&#39;s service provider, so any registered service can be injected.</p>`,3);function Cs(hs,ms){const l=t("ExternalLinkIcon"),e=t("RouterLink");return c(),D("div",null,[d,n("p",null,[y,n("a",u,[C,a(l)]),h]),n("nav",m,[n("ul",null,[n("li",null,[a(e,{to:"#building-a-data-model"},{default:o(()=>[v]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#properties"},{default:o(()=>[_]),_:1})]),n("li",null,[a(e,{to:"#attributes"},{default:o(()=>[b]),_:1})]),n("li",null,[a(e,{to:"#methods"},{default:o(()=>[E]),_:1})])])]),n("li",null,[a(e,{to:"#customizing-crud-operations"},{default:o(()=>[f]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#data-sources"},{default:o(()=>[g]),_:1})]),n("li",null,[a(e,{to:"#behaviors"},{default:o(()=>[F]),_:1})])])]),n("li",null,[a(e,{to:"#standalone-non-ef-entities"},{default:o(()=>[B]),_:1})])])]),S,n("p",null,[A,n("a",x,[w,a(l)]),k,n("a",T,[I,a(l)]),R]),O,P,M,n("p",null,[z,a(e,{to:"/modeling/model-components/properties.html"},{default:o(()=>[j]),_:1}),L]),q,N,n("p",null,[V,a(e,{to:"/modeling/model-components/attributes.html"},{default:o(()=>[Q]),_:1}),G]),K,n("p",null,[U,a(e,{to:"/modeling/model-components/attributes/coalesce.html"},{default:o(()=>[Y]),_:1}),H,a(e,{to:"/modeling/model-components/methods.html"},{default:o(()=>[J]),_:1}),W]),X,n("p",null,[Z,a(e,{to:"/modeling/model-components/data-sources.html"},{default:o(()=>[$]),_:1}),ss]),ns,n("p",null,[as,a(e,{to:"/modeling/model-components/behaviors.html"},{default:o(()=>[es]),_:1}),os]),ls,ts,n("p",null,[ps,a(e,{to:"/modeling/model-components/data-sources.html"},{default:o(()=>[rs]),_:1}),cs,a(e,{to:"/modeling/model-components/behaviors.html"},{default:o(()=>[Ds]),_:1}),is,a(e,{to:"/modeling/model-components/attributes/security-attribute.html"},{default:o(()=>[ds]),_:1}),ys]),us])}var _s=r(i,[["render",Cs],["__file","entities.html.vue"]]);export{_s as default};
