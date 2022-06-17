import{_ as d,r as i,o as c,c as h,b as t,d as s,w as a,e,a as l}from"./app.6f19168f.js";const p={},u=t("h1",{id:"viewmodel-layer",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#viewmodel-layer","aria-hidden":"true"},"#"),e(" ViewModel Layer")],-1),_=e("The ViewModel layer, generated as "),m=t("code",null,"viewmodels.g.ts",-1),f=e(", exports for each "),y=e("Entity Models"),g=e(" and "),v=e("Custom DTOs"),b=e(" in your data model both a ViewModel class representing a single instance of the type, and a ListViewModel class that is used to interact with the list functionality in Coalesce. Additionally, each "),w=e("Service"),D=e(" also has a ViewModel class generated."),$=t("p",null,"These classes provide a wide array of functionality that is useful when interacting with your data model through a user interface. The generated ViewModels are the primary way that Coalesce is used when developing a Vue application.",-1),M={class:"table-of-contents"},C=e("ViewModels"),P=e("Model Data Properties"),A=e("Other Data Properties & Functions"),k=e("API Callers & Parameters"),V=e("Auto-save & Dirty Flags"),x=e("Rules/Validation"),S=e("Generated Members"),T=e("ListViewModels"),I=e("Data Properties"),E=e("Parameters & API Callers"),j=e("Auto-Load"),F=e("Generated Members"),L=e("Service ViewModels"),R=e("Generated Members"),G=t("h2",{id:"viewmodels",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#viewmodels","aria-hidden":"true"},"#"),e(" ViewModels")],-1),N=t("p",null,[e("The following members can be found on the generated ViewModels, exported from "),t("code",null,"viewmodels.g.ts"),e(" as "),t("code",null,"<TypeName>ViewModel"),e(".")],-1),O=t("h3",{id:"model-data-properties",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#model-data-properties","aria-hidden":"true"},"#"),e(" Model Data Properties")],-1),q=e("Each ViewModel class implements the corresponding interface from the "),U=e("Model Layer"),z=e(", meaning that the ViewModel has a data property for each "),B=e("Property"),W=e(" on the model. Object-typed properties will be typed as the corresponding generated ViewModel."),X=e("Changing the value of a property will automatically flag that property as dirty. See "),K=e("Auto-save & Dirty Flags"),Y=e(" below for information on how property dirty flags are used."),J=l('<p>There are a few special behaviors when assigning to different kinds of data properties on View Models as well:</p><h4 id="model-object-properties" tabindex="-1"><a class="header-anchor" href="#model-object-properties" aria-hidden="true">#</a> Model Object Properties</h4><ul><li>If the object being assigned to the property is not a ViewModel instance, a new instance will be created automatically and used instead of the incoming object.</li><li>If the model property is a reference navigation, the corresponding foreign key property will automatically be set to the primary key of that object. If the incoming value was null, the foreign key will be set to null.</li><li>If deep auto-saves are enabled on the instance being assigned to, auto-save will be spread to the incoming object, and to all other objects reachable from that object.</li></ul><h4 id="model-collection-properties" tabindex="-1"><a class="header-anchor" href="#model-collection-properties" aria-hidden="true">#</a> Model Collection Properties</h4><ul><li>When assigning an entire array, any items in the array that are not a ViewModel instance will have an instance created for them.</li><li>The same rule goes for pushing items into the existing array for a model collection - a new ViewModel instance will be created and be used instead of the object(s) being pushed.</li></ul><h4 id="foreign-key-properties" tabindex="-1"><a class="header-anchor" href="#foreign-key-properties" aria-hidden="true">#</a> Foreign Key Properties</h4><p>If the corresponding navigation property contains an object, and that object&#39;s primary key doesn&#39;t match the new foreign key value being assigned, the navigation property will be set to null.</p><h3 id="other-data-properties-functions" tabindex="-1"><a class="header-anchor" href="#other-data-properties-functions" aria-hidden="true">#</a> Other Data Properties &amp; Functions</h3>',8),H=e("The metadata object from the "),Q=e("Metadata Layer"),Z=e(" layer for the type represented by the ViewModel."),ee=t("p",null,"An immutable number that is unique among all ViewModel instances, regardless of type.",-1),te=t("p",null,[e("Useful for uniquely identifying instances with "),t("code",null,':key="vm.$stableId"'),e(" in a Vue component, especially for instances that lack a primary key.")],-1),se=t("p",null,"A getter/setter property that wraps the primary key of the model. Used to interact with the primary key of any ViewModel in a polymorphic way.",-1),oe=t("p",null,"Returns a string representation of the object, or one of its properties if specified, suitable for display.",-1),ae=t("p",null,"Creates a new instance of an item for the specified child model collection, adds it to that collection, and returns the item.",-1),ne=t("h3",{id:"api-callers-parameters",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#api-callers-parameters","aria-hidden":"true"},"#"),e(" API Callers & Parameters")],-1),le=e("An "),ie=e("API Caller"),re=e(" for the "),de=t("code",null,"/get",-1),ce=e(" endpoint. Accepts an optional "),he=t("code",null,"id",-1),pe=e(" argument - if not provided, the ViewModel's "),ue=t("code",null,"$primaryKey",-1),_e=e(" is used instead. Uses the instance's "),me=t("code",null,"$params",-1),fe=e(" object for the "),ye=e("Standard Parameters"),ge=e("."),ve=e("An "),be=e("API Caller"),we=e(" for the "),De=t("code",null,"/save",-1),$e=e(" endpoint. Uses the instance's "),Me=t("code",null,"$params",-1),Ce=e(" object for the "),Pe=e("Standard Parameters"),Ae=e("."),ke=e("This caller is used for both manually-triggered saves in custom code and for auto-saves. If the "),Ve=e("Rules/Validation"),xe=e(" report any errors when the caller is invoked, an error will be thrown."),Se=t("p",null,"When a save creates a new record and a new primary key is returned from the server, any entities attached to the current ViewModel via a collection navigation property will have their foreign keys set to the new primary key. This behavior, combined with the usage of deep auto-saves, allows for complex object graphs to be constructed even before any model in the graph has been created.",-1),Te=t("p",null,[e("Saving behavior can be further customized with "),t("code",null,"$loadResponseFromSaves"),e(" and "),t("code",null,"$saveMode"),e(", listed below.")],-1),Ie=t("p",null,[e("Default "),t("code",null,"true"),e(" - controls if a ViewModel will be loaded with the data from the model returned by the "),t("code",null,"/save"),e(" endpoint when saved with the "),t("code",null,"$save"),e(" API caller. There is seldom any reason to disable this.")],-1),Ee=t("p",null,"Configures which properties of the model are sent to the server during a save.",-1),je={style:{"margin-left":"20px"}},Fe=t("p",null,[t("code",null,'"surgical"'),e(" (default)")],-1),Le=t("p",null,"By default, only dirty properties (and always the primary key) are sent to the server when performing a save.",-1),Re=t("p",null,"This improves the handling of concurrent changes being made by multiple users against different fields of the same entity at the same time - specifically, it prevents a user with a stale value of some field X from overwriting a more recent value of X in the database when the user is only making changes to some other property Y and has no intention of changing X.",-1),Ge=e("Save mode "),Ne=t("code",null,'"surgical"',-1),Oe=e(" doesn't help when multiple users are editing field X at the same time - if such a scenario is applicable to your application, you must implement "),qe={href:"https://docs.microsoft.com/en-us/ef/core/saving/concurrency",target:"_blank",rel:"noopener noreferrer"},Ue=e("more advanced handling of concurrency conflicts"),ze=e("."),Be={class:"custom-container warning"},We=t("p",{class:"custom-container-title"},"WARNING",-1),Xe=t("p",null,[e("Surgical saves require DTOs on the server that are capable of determining which of their properties have been set by the model binder, as surgical saves are sent from the client by entirely omitting properties from the "),t("code",null,"x-www-form-urlencoded"),e(" body that is sent to the server.")],-1),Ke=e("The "),Ye=e("Generated C# DTOs"),Je=e(" implement the necessary logic for this; however, any "),He=e("Custom DTOs"),Qe=e(" must have this logic manually written by you, the developer. Either implement the same pattern that can be seen in the "),Ze=e("Generated C# DTOs"),et=e(", or do not use surgical saves with Custom DTOs."),tt=t("p",null,[t("code",null,'"whole"')],-1),st=t("p",null,"All serializable properties of the object are sent back to the server with every save.",-1),ot=e("An "),at=e("API Caller"),nt=e(" for the "),lt=t("code",null,"/delete",-1),it=e(" endpoint. Uses the instance's "),rt=t("code",null,"$params",-1),dt=e(" object for the "),ct=e("Standard Parameters"),ht=e("."),pt=t("p",null,"If the object was loaded as a child of a collection, it will be removed from that collection upon being deleted. Note that ViewModels currently only support tracking of a single parent collection, so if an object is programmatically added to additional collections, it will only be removed from one of them upon delete.",-1),ut=e("An object containing the "),_t=e("Standard Parameters"),mt=e(" to be used for the "),ft=t("code",null,"$load",-1),yt=e(", "),gt=t("code",null,"$save",-1),vt=e(", and "),bt=t("code",null,"$delete",-1),wt=e(" API callers."),Dt=e("Getter/setter wrapper around "),$t=t("code",null,"$params.dataSource",-1),Mt=e(". Takes an instance of a "),Ct=e("Data Source"),Pt=e(" class "),At=e("generated in the Model Layer"),kt=e("."),Vt=e("Getter/setter wrapper around "),xt=t("code",null,"$params.includes",-1),St=e(". See "),Tt=e("Includes String"),It=e(" for more information."),Et=t("h3",{id:"auto-save-dirty-flags",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#auto-save-dirty-flags","aria-hidden":"true"},"#"),e(" Auto-save & Dirty Flags")],-1),jt=e("Starts auto-saving of the instance when its savable data properties become dirty. Saves are performed with the "),Ft=t("code",null,"$save",-1),Lt=e(),Rt=e("API Caller"),Gt=e(" (documented above) and will not be performed if the ViewModel has any validation errors - see "),Nt=e("Rules/Validation"),Ot=e(" below."),qt=l(`<p>Requires a reference to a Vue instance in order to manage lifetime (auto-save hooks will be destroyed when the Vue component provided is destroyed). Options are as follows:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{ </span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">/** Time, in milliseconds, to debounce saves for.  */</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">wait</span><span style="color:#D4D4D4;">?: </span><span style="color:#9CDCFE;">number</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">/** If true, auto-saving will also be enabled for all view models that are</span></span>
<span class="line"><span style="color:#6A9955;">        reachable from the navigation properties &amp; collections of the current view model. */</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">deep</span><span style="color:#D4D4D4;">?: </span><span style="color:#9CDCFE;">boolean</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">/** A function that will be called before autosaving that can return false to prevent a save. </span></span>
<span class="line"><span style="color:#6A9955;">        Only allowed if not using deep auto-saves.</span></span>
<span class="line"><span style="color:#6A9955;">    */</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">predicate</span><span style="color:#D4D4D4;">?: (</span><span style="color:#9CDCFE;">viewModel</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">TThis</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">boolean</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Ut=t("p",null,[e("Turns off auto-saving of the instance. Does not recursively disable auto-saves on related instances if "),t("code",null,"deep"),e(" was used when auto-save was enabled.")],-1),zt=t("p",null,"Returns true if the given property is flagged as dirty.",-1),Bt=t("p",null,"Manually set the dirty flag of the given property to the desired state. This seldom needs to be done explicitly, as mutating a property will automatically flag it as dirty.",-1),Wt=t("p",null,[e("If "),t("code",null,"dirty"),e(" is true and "),t("code",null,"triggerAutosave"),e(" is false, auto-save (if enabled) will not be immediately triggered for this specific flag change. Note that a future change to any other property's dirty flag will still trigger a save of all dirty properties.")],-1),Xt=t("p",null,"Getter/setter that summarizes the model's property-level dirty flags. Returns true if any properties are dirty.",-1),Kt=t("p",null,"When set to false, all property dirty flags are cleared. When set to true, all properties are marked as dirty.",-1),Yt=t("p",null,"Loads data from the provided model into the current ViewModel, and then clears all dirty flags.",-1),Jt=t("p",null,"Data is loaded recursively into all related ViewModel instances, preserving existing instances whose primary keys match the incoming data.",-1),Ht=t("p",null,[e("If auto-save is enabled, only non-dirty properties are updated. This prevents user input that is pending a save from being overwritten by the response from an auto-save "),t("code",null,"/save"),e(" request.")],-1),Qt=t("p",null,[e("Same as "),t("code",null,"$loadCleanData"),e(", but does not clear any existing dirty flags, nor does it clear any dirty flags that will be set while mutating the data properties of any ViewModel instance that gets loaded.")],-1),Zt=t("p",null,[e("Create a new instance of the ViewModel, loading the given initial data with "),t("code",null,"$loadDirtyData()"),e(" if provided.")],-1),es=t("h3",{id:"rules-validation",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#rules-validation","aria-hidden":"true"},"#"),e(" Rules/Validation")],-1),ts=t("p",null,[e("Add a custom validation rule to the ViewModel for the specified property. "),t("code",null,"identifier"),e(" should be a short, unique slug that describes the rule; it is not displayed in the UI, but is used if you wish to later remove the rule with "),t("code",null,"$removeRule()"),e(".")],-1),ss=t("p",null,[e("The function you provide should take a single argument that contains the current value of the property, and should either return "),t("code",null,"true"),e(" to indicate that the validation rule has succeeded, or a string that will be displayed as an error message to the user.")],-1),os=t("p",null,[e("Any failing validation rules on a ViewModel will prevent that ViewModel's "),t("code",null,"$save"),e(" caller from being invoked.")],-1),as=t("p",null,"Remove a validation rule from the ViewModel for the specified property and rule identifier.",-1),ns=e("This can be used to remove either a rule that was provided by the generated "),ls=e("Metadata Layer"),is=e(", or a custom rule that was added by "),rs=t("code",null,"$addRule",-1),ds=e(". Reference your generated metadata file "),cs=t("code",null,"metadata.g.ts",-1),hs=e(" to see any generated rules and the identifiers they use."),ps=t("p",null,[e("Returns an array of active rule functions for the specified property, or "),t("code",null,"undefined"),e(" if the property has no active validation rules.")],-1),us=e("Returns a "),_s={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator",target:"_blank",rel:"noopener noreferrer"},ms=e("generator"),fs=e(" that provides all error messages for either a specific property (if provided) or the entire model (if no prop argument is provided)."),ys=t("div",{class:"custom-container tip"},[t("p",{class:"custom-container-title"},"TIP"),t("p",null,[e("You can obtain an array from a generator with "),t("code",null,"Array.from(vm.$getErrors())"),e(" or "),t("code",null,"[...vm.$getErrors()]")])],-1),gs=t("p",null,"Indicates if any properties have validation errors.",-1),vs=t("h3",{id:"generated-members",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#generated-members","aria-hidden":"true"},"#"),e(" Generated Members")],-1),bs=t("h4",{id:"method-callers",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#method-callers","aria-hidden":"true"},"#"),e(" Method Callers")],-1),ws=e("For each of the instance "),Ds=e("Methods"),$s=e(" of the type, an "),Ms=e("API Caller"),Cs=e(" will be generated."),Ps=t("h4",{id:"addto-functions",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#addto-functions","aria-hidden":"true"},"#"),e(),t("code",null,"addTo*()"),e(" Functions")],-1),As=e("For each "),ks=e("collection navigation property"),Vs=e(", a method is generated that will create a new instance of the ViewModel for the collected type, add it to the collection, and then return the new object."),xs=t("h4",{id:"many-to-many-helper-collections",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#many-to-many-helper-collections","aria-hidden":"true"},"#"),e(" Many-to-many helper collections")],-1),Ss=e("For each "),Ts=e("collection navigation property"),Is=e(" annotated with "),Es=e("[ManyToMany]"),js=e(", a getter-only property is generated that returns a collection of the object on the far side of the many-to-many relationship. Nulls are filtered from this collection."),Fs=t("h2",{id:"listviewmodels",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#listviewmodels","aria-hidden":"true"},"#"),e(" ListViewModels")],-1),Ls=t("p",null,[e("The following members can be found on the generated ListViewModels, exported from "),t("code",null,"viewmodels.g.ts"),e(" as "),t("code",null,"*TypeName*ListViewModel"),e(".")],-1),Rs=t("h3",{id:"data-properties",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#data-properties","aria-hidden":"true"},"#"),e(" Data Properties")],-1),Gs=e("Collection holding the results of the last successful invocation of the "),Ns=t("code",null,"$load",-1),Os=e(),qs=e("API Caller"),Us=e("."),zs=t("h3",{id:"parameters-api-callers",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#parameters-api-callers","aria-hidden":"true"},"#"),e(" Parameters & API Callers")],-1),Bs=e("An object containing the "),Ws=e("Standard Parameters"),Xs=e(" to be used for the "),Ks=t("code",null,"$load",-1),Ys=e(" and "),Js=t("code",null,"$count",-1),Hs=e(" API callers."),Qs=e("Getter/setter wrapper around "),Zs=t("code",null,"$params.dataSource",-1),eo=e(". Takes an instance of a "),to=e("Data Source"),so=e(" class "),oo=e("generated in the Model Layer"),ao=e("."),no=e("Getter/setter wrapper around "),lo=t("code",null,"$params.includes",-1),io=e(". See "),ro=e("Includes String"),co=e(" for more information."),ho=e("An "),po=e("API Caller"),uo=e(" for the "),_o=t("code",null,"/list",-1),mo=e(" endpoint. Uses the instance's "),fo=t("code",null,"$params",-1),yo=e(" object for the "),go=e("Standard Parameters"),vo=e("."),bo=t("p",null,[e("Results are available in the "),t("code",null,"$items"),e(" property. The "),t("code",null,"result"),e(" property of the "),t("code",null,"$load"),e(" API Caller contains the raw results and is not recommended for use in general development - "),t("code",null,"$items"),e(" should always be preferred.")],-1),wo=e("An "),Do=e("API Caller"),$o=e(" for the "),Mo=t("code",null,"/count",-1),Co=e(" endpoint. Uses the instance's "),Po=t("code",null,"$params",-1),Ao=e(" object for the "),ko=e("Standard Parameters"),Vo=e("."),xo=t("p",null,[e("The result is available in "),t("code",null,"$count.result"),e(" - this API Caller does not interact with other properties on the ListViewModel like "),t("code",null,"$pageSize"),e(" or "),t("code",null,"$pageCount"),e(".")],-1),So=t("p",null,[e("Properties which indicate if "),t("code",null,"$page"),e(" can be decremented or incremented, respectively. "),t("code",null,"$pageCount"),e(" and "),t("code",null,"$page"),e(" are used to make this determination.")],-1),To=t("p",null,[e("Methods that will decrement or increment "),t("code",null,"$page"),e(", respectively. Each does nothing if there is no previous or next page as returned by "),t("code",null,"$hasPreviousPage"),e(" and "),t("code",null,"$hasNextPage"),e(".")],-1),Io=t("p",null,[e("Getter/setter wrapper for "),t("code",null,"$params.page"),e(". Controls the page that will be requested on the next invocation of "),t("code",null,"$load"),e(".")],-1),Eo=t("p",null,[e("Getter/setter wrapper for "),t("code",null,"$params.pageSize"),e(". Controls the page that will be requested on the next invocation of "),t("code",null,"$load"),e(".")],-1),jo=t("p",null,[e("Shorthand for "),t("code",null,"$load.pageCount"),e(" - returns the page count reported by the last successful invocation of "),t("code",null,"$load"),e(".")],-1),Fo=t("h3",{id:"auto-load",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#auto-load","aria-hidden":"true"},"#"),e(" Auto-Load")],-1),Lo=e("Starts auto-loading of the list as changes to its parameters occur. Loads are performed with the "),Ro=t("code",null,"$load",-1),Go=e(),No=e("API Caller"),Oo=e("."),qo=l(`<p>Requires a reference to a Vue instance in order to manage lifetime (auto-load hooks will be destroyed when the Vue component provided is destroyed). Options are as follows:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{ </span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">/** Time, in milliseconds, to debounce loads for.  */</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">wait</span><span style="color:#D4D4D4;">?: </span><span style="color:#9CDCFE;">number</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">/** Additional options to pass to the third parameter of lodash&#39;s \`debounce\` function. */</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">debounce</span><span style="color:#D4D4D4;">?: </span><span style="color:#9CDCFE;">DebounceSettings</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">/** A function that will be called before loading that can return false to prevent a load. */</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">predicate</span><span style="color:#D4D4D4;">?: (</span><span style="color:#9CDCFE;">viewModel</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">TThis</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">boolean</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Uo=t("p",null,"Manually turns off auto-loading of the instance.",-1),zo=t("h3",{id:"generated-members-1",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#generated-members-1","aria-hidden":"true"},"#"),e(" Generated Members")],-1),Bo=t("h4",{id:"method-callers-1",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#method-callers-1","aria-hidden":"true"},"#"),e(" Method Callers")],-1),Wo=e("For each of the static "),Xo=e("Methods"),Ko=e(" on the type, an "),Yo=e("API Caller"),Jo=e(" will be created."),Ho=l('<h2 id="service-viewmodels" tabindex="-1"><a class="header-anchor" href="#service-viewmodels" aria-hidden="true">#</a> Service ViewModels</h2><p>The following members can be found on the generated Service ViewModels, exported from <code>viewmodels.g.ts</code> as <code>&lt;ServiceName&gt;ViewModel</code>.</p><h3 id="generated-members-2" tabindex="-1"><a class="header-anchor" href="#generated-members-2" aria-hidden="true">#</a> Generated Members</h3><h4 id="method-callers-2" tabindex="-1"><a class="header-anchor" href="#method-callers-2" aria-hidden="true">#</a> Method Callers</h4>',4),Qo=e("For each method of the "),Zo=e("Service"),ea=e(", an "),ta=e("API Caller"),sa=e(" will be created.");function oa(aa,na){const o=i("RouterLink"),n=i("Prop"),r=i("ExternalLinkIcon");return c(),h("div",null,[u,t("p",null,[_,m,f,s(o,{to:"/modeling/model-types/entities.html"},{default:a(()=>[y]),_:1}),g,s(o,{to:"/modeling/model-types/dtos.html"},{default:a(()=>[v]),_:1}),b,s(o,{to:"/modeling/model-types/services.html"},{default:a(()=>[w]),_:1}),D]),$,t("nav",M,[t("ul",null,[t("li",null,[s(o,{to:"#viewmodels"},{default:a(()=>[C]),_:1}),t("ul",null,[t("li",null,[s(o,{to:"#model-data-properties"},{default:a(()=>[P]),_:1})]),t("li",null,[s(o,{to:"#other-data-properties-functions"},{default:a(()=>[A]),_:1})]),t("li",null,[s(o,{to:"#api-callers-parameters"},{default:a(()=>[k]),_:1})]),t("li",null,[s(o,{to:"#auto-save-dirty-flags"},{default:a(()=>[V]),_:1})]),t("li",null,[s(o,{to:"#rules-validation"},{default:a(()=>[x]),_:1})]),t("li",null,[s(o,{to:"#generated-members"},{default:a(()=>[S]),_:1})])])]),t("li",null,[s(o,{to:"#listviewmodels"},{default:a(()=>[T]),_:1}),t("ul",null,[t("li",null,[s(o,{to:"#data-properties"},{default:a(()=>[I]),_:1})]),t("li",null,[s(o,{to:"#parameters-api-callers"},{default:a(()=>[E]),_:1})]),t("li",null,[s(o,{to:"#auto-load"},{default:a(()=>[j]),_:1})]),t("li",null,[s(o,{to:"#generated-members-1"},{default:a(()=>[F]),_:1})])])]),t("li",null,[s(o,{to:"#service-viewmodels"},{default:a(()=>[L]),_:1}),t("ul",null,[t("li",null,[s(o,{to:"#generated-members-2"},{default:a(()=>[R]),_:1})])])])])]),G,N,O,t("p",null,[q,s(o,{to:"/stacks/vue/layers/models.html"},{default:a(()=>[U]),_:1}),z,s(o,{to:"/modeling/model-components/properties.html"},{default:a(()=>[B]),_:1}),W]),t("p",null,[X,s(o,{to:"/stacks/vue/layers/viewmodels.html"},{default:a(()=>[K]),_:1}),Y]),J,s(n,{def:"readonly $metadata: ModelType",lang:"ts"}),t("p",null,[H,s(o,{to:"/stacks/vue/layers/metadata.html"},{default:a(()=>[Q]),_:1}),Z]),s(n,{def:"readonly $stableId: number",lang:"ts"}),ee,te,s(n,{def:"$primaryKey: string | number",lang:"ts"}),se,s(n,{def:"$display(prop?: string | Property): string",lang:"ts"}),oe,s(n,{def:"$addChild(prop: string | ModelCollectionNavigationProperty)",lang:"ts"}),ae,ne,s(n,{def:"$load: ItemApiState",lang:"ts",idPrefix:"member-item"}),t("p",null,[le,s(o,{to:"/stacks/vue/layers/api-clients.html#api-callers"},{default:a(()=>[ie]),_:1}),re,de,ce,he,pe,ue,_e,me,fe,s(o,{to:"/modeling/model-components/data-sources.html#standard-parameters"},{default:a(()=>[ye]),_:1}),ge]),s(n,{def:"$save: ItemApiState",lang:"ts"}),t("p",null,[ve,s(o,{to:"/stacks/vue/layers/api-clients.html#api-callers"},{default:a(()=>[be]),_:1}),we,De,$e,Me,Ce,s(o,{to:"/modeling/model-components/data-sources.html#standard-parameters"},{default:a(()=>[Pe]),_:1}),Ae]),t("p",null,[ke,s(o,{to:"/stacks/vue/layers/viewmodels.html#rules-validation"},{default:a(()=>[Ve]),_:1}),xe]),Se,Te,s(n,{def:"$loadResponseFromSaves: boolean",lang:"ts"}),Ie,s(n,{def:"$saveMode: 'surgical' | 'whole'",lang:"ts"}),Ee,t("div",je,[Fe,Le,Re,t("p",null,[Ge,Ne,Oe,t("a",qe,[Ue,s(r)]),ze]),t("div",Be,[We,Xe,t("p",null,[Ke,s(o,{to:"/stacks/agnostic/dtos.html"},{default:a(()=>[Ye]),_:1}),Je,s(o,{to:"/modeling/model-types/dtos.html"},{default:a(()=>[He]),_:1}),Qe,s(o,{to:"/stacks/agnostic/dtos.html"},{default:a(()=>[Ze]),_:1}),et])]),tt,st]),s(n,{def:"$delete: ItemApiState",lang:"ts"}),t("p",null,[ot,s(o,{to:"/stacks/vue/layers/api-clients.html#api-callers"},{default:a(()=>[at]),_:1}),nt,lt,it,rt,dt,s(o,{to:"/modeling/model-components/data-sources.html#standard-parameters"},{default:a(()=>[ct]),_:1}),ht]),pt,s(n,{def:"$params: DataSourceParameters",lang:"ts",idPrefix:"member-item"}),t("p",null,[ut,s(o,{to:"/modeling/model-components/data-sources.html#standard-parameters"},{default:a(()=>[_t]),_:1}),mt,ft,yt,gt,vt,bt,wt]),s(n,{def:"$dataSource: DataSource",lang:"ts",idPrefix:"member-item"}),t("p",null,[Dt,$t,Mt,s(o,{to:"/modeling/model-components/data-sources.html"},{default:a(()=>[Ct]),_:1}),Pt,s(o,{to:"/stacks/vue/layers/models.html"},{default:a(()=>[At]),_:1}),kt]),s(n,{def:"$includes: string | null",lang:"ts",idPrefix:"member-item"}),t("p",null,[Vt,xt,St,s(o,{to:"/concepts/includes.html"},{default:a(()=>[Tt]),_:1}),It]),Et,s(n,{def:"$startAutosave(vue: Vue, options: AutoSaveOptions<this> = {})",lang:"ts"}),t("p",null,[jt,Ft,Lt,s(o,{to:"/stacks/vue/layers/api-clients.html#api-callers"},{default:a(()=>[Rt]),_:1}),Gt,s(o,{to:"/stacks/vue/layers/viewmodels.html#rules-validation"},{default:a(()=>[Nt]),_:1}),Ot]),qt,s(n,{def:"$stopAutosave(): void",lang:"ts"}),Ut,s(n,{def:"$getPropDirty(propName: string): boolean",lang:"ts"}),zt,s(n,{def:"$setPropDirty(propName: string, dirty: boolean = true, triggerAutosave = true)",lang:"ts"}),Bt,Wt,s(n,{def:"$isDirty: boolean",lang:"ts"}),Xt,Kt,s(n,{def:"$loadCleanData(source: {} | TModel)",lang:"ts"}),Yt,Jt,Ht,s(n,{def:"$loadDirtyData(source: {} | TModel)",lang:"ts"}),Qt,s(n,{def:"constructor(initialDirtyData?: {} | TModel | null)",lang:"ts"}),Zt,es,s(n,{def:"$addRule(prop: string | Property, identifier: string, rule: (val: any) => true | string)",lang:"ts"}),ts,ss,os,s(n,{def:"$removeRule(prop: string | Property, identifier: string)",lang:"ts"}),as,t("p",null,[ns,s(o,{to:"/stacks/vue/layers/metadata.html"},{default:a(()=>[ls]),_:1}),is,rs,ds,cs,hs]),s(n,{def:"$getRules(prop: string | Property): ((val: any) => string | true)[]",lang:"ts"}),ps,s(n,{def:"$getErrors(prop?: string | Property): Generator<string>",lang:"ts"}),t("p",null,[us,t("a",_s,[ms,s(r)]),fs]),ys,s(n,{def:"readonly $hasError: boolean",lang:"ts"}),gs,vs,bs,t("p",null,[ws,s(o,{to:"/modeling/model-components/methods.html"},{default:a(()=>[Ds]),_:1}),$s,s(o,{to:"/stacks/vue/layers/api-clients.html#api-callers"},{default:a(()=>[Ms]),_:1}),Cs]),Ps,t("p",null,[As,s(o,{to:"/modeling/model-components/properties.html"},{default:a(()=>[ks]),_:1}),Vs]),xs,t("p",null,[Ss,s(o,{to:"/modeling/model-components/properties.html"},{default:a(()=>[Ts]),_:1}),Is,s(o,{to:"/modeling/model-components/attributes/many-to-many.html"},{default:a(()=>[Es]),_:1}),js]),Fs,Ls,Rs,s(n,{def:"readonly $items: T[]",lang:"ts"}),t("p",null,[Gs,Ns,Os,s(o,{to:"/stacks/vue/layers/api-clients.html#api-callers"},{default:a(()=>[qs]),_:1}),Us]),zs,s(n,{def:"$params: ListParameters",lang:"ts",idPrefix:"member-list"}),t("p",null,[Bs,s(o,{to:"/modeling/model-components/data-sources.html#standard-parameters"},{default:a(()=>[Ws]),_:1}),Xs,Ks,Ys,Js,Hs]),s(n,{def:"$dataSource: DataSource",lang:"ts",idPrefix:"member-list"}),t("p",null,[Qs,Zs,eo,s(o,{to:"/modeling/model-components/data-sources.html"},{default:a(()=>[to]),_:1}),so,s(o,{to:"/stacks/vue/layers/models.html"},{default:a(()=>[oo]),_:1}),ao]),s(n,{def:"$includes: string | null",lang:"ts",idPrefix:"member-list"}),t("p",null,[no,lo,io,s(o,{to:"/concepts/includes.html"},{default:a(()=>[ro]),_:1}),co]),s(n,{def:"$load: ListApiState",lang:"ts",idPrefix:"member-list"}),t("p",null,[ho,s(o,{to:"/stacks/vue/layers/api-clients.html#api-callers"},{default:a(()=>[po]),_:1}),uo,_o,mo,fo,yo,s(o,{to:"/modeling/model-components/data-sources.html#standard-parameters"},{default:a(()=>[go]),_:1}),vo]),bo,s(n,{def:"$count: ItemApiState",lang:"ts"}),t("p",null,[wo,s(o,{to:"/stacks/vue/layers/api-clients.html#api-callers"},{default:a(()=>[Do]),_:1}),$o,Mo,Co,Po,Ao,s(o,{to:"/modeling/model-components/data-sources.html#standard-parameters"},{default:a(()=>[ko]),_:1}),Vo]),xo,s(n,{def:`readonly $hasPreviousPage: boolean 
readonly $hasNextPage: boolean`,lang:"ts"}),So,s(n,{def:`$previousPage(): void 
$nextPage(): void`,lang:"ts"}),To,s(n,{def:"$page: number",lang:"ts"}),Io,s(n,{def:"$pageSize: number",lang:"ts"}),Eo,s(n,{def:"readonly $pageCount: number",lang:"ts"}),jo,Fo,s(n,{def:"$startAutoLoad(vue: Vue, options: AutoLoadOptions<this> = {})",lang:"ts"}),t("p",null,[Lo,Ro,Go,s(o,{to:"/stacks/vue/layers/api-clients.html#api-callers"},{default:a(()=>[No]),_:1}),Oo]),qo,s(n,{def:"$stopAutoLoad()",lang:"ts"}),Uo,zo,Bo,t("p",null,[Wo,s(o,{to:"/modeling/model-components/methods.html"},{default:a(()=>[Xo]),_:1}),Ko,s(o,{to:"/stacks/vue/layers/api-clients.html#api-callers"},{default:a(()=>[Yo]),_:1}),Jo]),Ho,t("p",null,[Qo,s(o,{to:"/modeling/model-types/services.html"},{default:a(()=>[Zo]),_:1}),ea,s(o,{to:"/stacks/vue/layers/api-clients.html#api-callers"},{default:a(()=>[ta]),_:1}),sa])])}var ia=d(p,[["render",oa],["__file","viewmodels.html.vue"]]);export{ia as default};
