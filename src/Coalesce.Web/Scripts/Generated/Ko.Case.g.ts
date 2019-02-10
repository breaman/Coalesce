
/// <reference path="../coalesce.dependencies.d.ts" />

// Generated by IntelliTect.Coalesce

module ViewModels {
    
    export class Case extends Coalesce.BaseViewModel {
        public readonly modelName = "Case";
        public readonly primaryKeyName = "caseKey";
        public readonly modelDisplayName = "Case";
        public readonly apiController = "/Case";
        public readonly viewController = "/Case";
        
        /** Configuration for all instances of Case. Can be overidden on each instance via instance.coalesceConfig. */
        public static coalesceConfig: Coalesce.ViewModelConfiguration<Case>
            = new Coalesce.ViewModelConfiguration<Case>(Coalesce.GlobalConfiguration.viewModel);
        
        /** Configuration for the current Case instance. */
        public coalesceConfig: Coalesce.ViewModelConfiguration<this>
            = new Coalesce.ViewModelConfiguration<Case>(Case.coalesceConfig);
        
        /** The namespace containing all possible values of this.dataSource. */
        public dataSources: typeof ListViewModels.CaseDataSources = ListViewModels.CaseDataSources;
        
        
        
        /** The Primary key for the Case object */
        public caseKey: KnockoutObservable<number | null> = ko.observable(null);
        public title: KnockoutObservable<string | null> = ko.observable(null);
        public description: KnockoutObservable<string | null> = ko.observable(null);
        public openedAt: KnockoutObservable<moment.Moment | null> = ko.observable(moment());
        public assignedToId: KnockoutObservable<number | null> = ko.observable(null);
        public assignedTo: KnockoutObservable<ViewModels.Person | null> = ko.observable(null);
        public reportedById: KnockoutObservable<number | null> = ko.observable(null);
        public reportedBy: KnockoutObservable<ViewModels.Person | null> = ko.observable(null);
        public imageName: KnockoutObservable<string | null> = ko.observable(null);
        public attachmentName: KnockoutObservable<string | null> = ko.observable(null);
        public severity: KnockoutObservable<string | null> = ko.observable(null);
        public status: KnockoutObservable<number | null> = ko.observable(null);
        
        /** Text value for enumeration Status */
        public statusText: KnockoutComputed<string | null> = ko.pureComputed(() => {
            for(var i = 0; i < this.statusValues.length; i++){
                if (this.statusValues[i].id == this.status()){
                    return this.statusValues[i].value;
                }
            }
            return null;
        });
        public caseProducts: KnockoutObservableArray<ViewModels.CaseProduct> = ko.observableArray([]);
        public products: KnockoutObservableArray<ViewModels.Product> = ko.observableArray([]);
        public devTeamAssignedId: KnockoutObservable<number | null> = ko.observable(null);
        public devTeamAssigned: KnockoutObservable<ViewModels.DevTeam | null> = ko.observable(null);
        public duration: KnockoutObservable<any | null> = ko.observable(null);
        
        
        /** Display text for AssignedTo */
        public assignedToText: KnockoutComputed<string>;
        
        /** Display text for ReportedBy */
        public reportedByText: KnockoutComputed<string>;
        
        /** Display text for DevTeamAssigned */
        public devTeamAssignedText: KnockoutComputed<string>;
        
        
        /** File properties for Image */
        public imageUrl: KnockoutComputed<string> = ko.pureComputed(() => {
            return this.coalesceConfig.baseApiUrl() + this.apiController + '/Image?id=' + this.caseKey() + '&' + this.dataSource.getQueryString();
        });
        
        /** File properties for Attachment */
        public attachmentUrl: KnockoutComputed<string> = ko.pureComputed(() => {
            return this.coalesceConfig.baseApiUrl() + this.apiController + '/Attachment?id=' + this.caseKey() + '&' + this.dataSource.getQueryString();
        });
        
        /** File properties for PlainAttachment */
        public plainAttachmentUrl: KnockoutComputed<string> = ko.pureComputed(() => {
            return this.coalesceConfig.baseApiUrl() + this.apiController + '/PlainAttachment?id=' + this.caseKey() + '&' + this.dataSource.getQueryString();
        });
        
        
        
        /** Url for a table view of all members of collection CaseProducts for the current object. */
        public caseProductsListUrl: KnockoutComputed<string> = ko.computed(
            () => this.coalesceConfig.baseViewUrl() + '/CaseProduct/Table?filter.caseId=' + this.caseKey(),
            null, { deferEvaluation: true }
        );
        
        
        /** Pops up a stock editor for object assignedTo */
        public showAssignedToEditor: (callback?: any) => void;
        
        /** Pops up a stock editor for object reportedBy */
        public showReportedByEditor: (callback?: any) => void;
        
        
        /** Array of all possible names & values of enum status */
        public statusValues: Coalesce.EnumValue[] = [ 
            { id: 0, value: 'Open' },
            { id: 1, value: 'In Progress' },
            { id: 2, value: 'Resolved' },
            { id: 3, value: 'Closed No Solution' },
            { id: 4, value: 'Cancelled' },
        ];
        
        
        
        /** 
            Load the ViewModel object from the DTO.
            @param data: The incoming data object to load.
            @param force: Will override the check against isLoading that is done to prevent recursion. False is default.
            @param allowCollectionDeletes: Set true when entire collections are loaded. True is the default. 
            In some cases only a partial collection is returned, set to false to only add/update collections.
        */
        public loadFromDto = (data: any, force: boolean = false, allowCollectionDeletes: boolean = true): void => {
            if (!data || (!force && this.isLoading())) return;
            this.isLoading(true);
            // Set the ID 
            this.myId = data.caseKey;
            this.caseKey(data.caseKey);
            // Load the lists of other objects
            if (data.caseProducts != null) {
                // Merge the incoming array
                Coalesce.KnockoutUtilities.RebuildArray(this.caseProducts, data.caseProducts, 'caseProductId', CaseProduct, this, allowCollectionDeletes);
                // Add many-to-many collection
                let objs: any[] = [];
                $.each(data.caseProducts, (index, item) => {
                    if (item.product) {
                        objs.push(item.product);
                    }
                });
                Coalesce.KnockoutUtilities.RebuildArray(this.products, objs, 'productId', Product, this, allowCollectionDeletes);
            }
            if (!data.assignedTo) { 
                if (data.assignedToId != this.assignedToId()) {
                    this.assignedTo(null);
                }
            } else {
                if (!this.assignedTo()){
                    this.assignedTo(new Person(data.assignedTo, this));
                } else {
                    this.assignedTo()!.loadFromDto(data.assignedTo);
                }
                if (this.parent instanceof Person && this.parent !== this.assignedTo() && this.parent.personId() == this.assignedTo()!.personId())
                {
                    this.parent.loadFromDto(data.assignedTo, undefined, false);
                }
            }
            if (!data.reportedBy) { 
                if (data.reportedById != this.reportedById()) {
                    this.reportedBy(null);
                }
            } else {
                if (!this.reportedBy()){
                    this.reportedBy(new Person(data.reportedBy, this));
                } else {
                    this.reportedBy()!.loadFromDto(data.reportedBy);
                }
                if (this.parent instanceof Person && this.parent !== this.reportedBy() && this.parent.personId() == this.reportedBy()!.personId())
                {
                    this.parent.loadFromDto(data.reportedBy, undefined, false);
                }
            }
            if (!data.devTeamAssigned) { 
                this.devTeamAssigned(null);
            } else {
                if (!this.devTeamAssigned()){
                    this.devTeamAssigned(new DevTeam(data.devTeamAssigned, this));
                } else {
                    this.devTeamAssigned()!.loadFromDto(data.devTeamAssigned);
                }
            }
            
            // The rest of the objects are loaded now.
            this.title(data.title);
            this.description(data.description);
            if (data.openedAt == null) this.openedAt(null);
            else if (this.openedAt() == null || this.openedAt()!.valueOf() != new Date(data.openedAt).getTime()){
                this.openedAt(moment(new Date(data.openedAt)));
            }
            this.assignedToId(data.assignedToId);
            this.reportedById(data.reportedById);
            this.imageName(data.imageName);
            this.attachmentName(data.attachmentName);
            this.severity(data.severity);
            this.status(data.status);
            this.devTeamAssignedId(data.devTeamAssignedId);
            this.duration(data.duration);
            if (this.coalesceConfig.onLoadFromDto()){
                this.coalesceConfig.onLoadFromDto()(this as any);
            }
            this.isLoading(false);
            this.isDirty(false);
            if (this.coalesceConfig.validateOnLoadFromDto()) this.validate();
        };
        
        /** Saves this object into a data transfer object to send to the server. */
        public saveToDto = (): any => {
            var dto: any = {};
            dto.caseKey = this.caseKey();
            
            dto.title = this.title();
            dto.description = this.description();
            if (!this.openedAt()) dto.openedAt = null;
            else dto.openedAt = this.openedAt()!.format('YYYY-MM-DDTHH:mm:ssZZ');
            dto.assignedToId = this.assignedToId();
            if (!dto.assignedToId && this.assignedTo()) {
                dto.assignedToId = this.assignedTo()!.personId();
            }
            dto.reportedById = this.reportedById();
            if (!dto.reportedById && this.reportedBy()) {
                dto.reportedById = this.reportedBy()!.personId();
            }
            dto.attachmentName = this.attachmentName();
            dto.severity = this.severity();
            dto.status = this.status();
            dto.devTeamAssignedId = this.devTeamAssignedId();
            dto.duration = this.duration();
            
            return dto;
        }
        
        /** 
            Loads any child objects that have an ID set, but not the full object.
            This is useful when creating an object that has a parent object and the ID is set on the new child.
        */
        public loadChildren = (callback?: () => void): void => {
            var loadingCount = 0;
            // See if this.assignedTo needs to be loaded.
            if (this.assignedTo() == null && this.assignedToId() != null) {
                loadingCount++;
                var assignedToObj = new Person();
                assignedToObj.load(this.assignedToId(), () => {
                    loadingCount--;
                    this.assignedTo(assignedToObj);
                    if (loadingCount == 0 && typeof(callback) == "function") { callback(); }
                });
            }
            // See if this.reportedBy needs to be loaded.
            if (this.reportedBy() == null && this.reportedById() != null) {
                loadingCount++;
                var reportedByObj = new Person();
                reportedByObj.load(this.reportedById(), () => {
                    loadingCount--;
                    this.reportedBy(reportedByObj);
                    if (loadingCount == 0 && typeof(callback) == "function") { callback(); }
                });
            }
            if (loadingCount == 0 && typeof(callback) == "function") { callback(); }
        };
        
        public setupValidation(): void {
            if (this.errors !== null) return;
            this.errors = ko.validation.group([
                this.title.extend({ required: {params: true, message: "You must enter a title for the case."} }),
                this.openedAt.extend({ moment: { unix: true } }),
            ]);
            this.warnings = ko.validation.group([
            ]);
        }
        
        constructor(newItem?: object, parent?: Coalesce.BaseViewModel | ListViewModels.CaseList) {
            super(parent);
            this.baseInitialize();
            const self = this;
            
            this.assignedToText = ko.pureComputed(function() {
                if (self.assignedTo() && self.assignedTo()!.name()) {
                    return self.assignedTo()!.name()!.toString();
                } else {
                    return "None";
                }
            });
            this.reportedByText = ko.pureComputed(function() {
                if (self.reportedBy() && self.reportedBy()!.name()) {
                    return self.reportedBy()!.name()!.toString();
                } else {
                    return "None";
                }
            });
            this.devTeamAssignedText = ko.pureComputed(function() {
                if (self.devTeamAssigned() && self.devTeamAssigned()!.name()) {
                    return self.devTeamAssigned()!.name()!.toString();
                } else {
                    return "None";
                }
            });
            
            
            
            
            this.showAssignedToEditor = function(callback: any) {
                if (!self.assignedTo()) {
                    self.assignedTo(new Person());
                }
                self.assignedTo()!.showEditor(callback)
            };
            this.showReportedByEditor = function(callback: any) {
                if (!self.reportedBy()) {
                    self.reportedBy(new Person());
                }
                self.reportedBy()!.showEditor(callback)
            };
            
            self.title.subscribe(self.autoSave);
            self.description.subscribe(self.autoSave);
            self.openedAt.subscribe(self.autoSave);
            self.assignedToId.subscribe(self.autoSave);
            self.assignedTo.subscribe(self.autoSave);
            self.reportedById.subscribe(self.autoSave);
            self.reportedBy.subscribe(self.autoSave);
            self.attachmentName.subscribe(self.autoSave);
            self.severity.subscribe(self.autoSave);
            self.status.subscribe(self.autoSave);
            self.devTeamAssignedId.subscribe(self.autoSave);
            self.duration.subscribe(self.autoSave);
            
            self.products.subscribe<KnockoutArrayChange<Product>[]>(changes => {
                for (var i in changes) {
                    var change = changes[i];
                    self.autoSaveCollection(
                        change.status, 
                        this.caseProducts, 
                        CaseProduct, 
                        'caseId',
                        'productId',
                        change.value.productId()
                    );
                }
            }, null, "arrayChange");
            
            if (newItem) {
                self.loadFromDto(newItem, true);
            }
        }
    }
    
    export namespace Case {
        export enum StatusEnum {
            Open = 0,
            InProgress = 1,
            Resolved = 2,
            ClosedNoSolution = 3,
            Cancelled = 4,
        }
    }
}
