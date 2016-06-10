/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../Intellitect/intellitect.utilities.ts" />
/// <reference path="../Intellitect/intellitect.ko.utilities.ts" />
/// <reference path="./Ko.Person.ts" />

// Knockout List View Model for: Person
// Auto Generated Knockout List Bindings
// Copyright IntelliTect, 2016

var baseUrl = baseUrl || '';

module ListViewModels {
    export var areaUrl = areaUrl || ((true) ? baseUrl : baseUrl + '/');
    // Add an enum for all methods that are static and IQueryable
    export enum PersonDataSources {
            Default,
            BorCPeople,
        }
    export class PersonList {
        // Query string to limit the list of items.
        public queryString: string = "";
        // Object that is passed as the query parameters.
        public query: any = null;
        // The custom code to run in order to pull the initial datasource to use for the collection that should be returned
        public listDataSource: PersonDataSources = PersonDataSources.Default;
        // String the represents the child object to load 
        public includes: string = "";
        // List of items. This the main collection.
        public items: KnockoutObservableArray<ViewModels.Person> = ko.observableArray([]);
        // Load the list.
		public load: (callback?: any) => void;
        // Deletes an item.
		public deleteItem: (item: ViewModels.Person) => void;
        // True if the collection is loading.
		public isLoading: KnockoutObservable<boolean> = ko.observable(false);
        // Gets the count of items without getting all the items. Data put into count.
		public getCount: (callback?: any) => void;
        // The result of getCount() or the total on this page.
		public count: KnockoutObservable<number> = ko.observable(null);
        // Total count of items, even ones that are not on the page.
   		public totalCount: KnockoutObservable<number> = ko.observable(null);
        // Total page count
   		public pageCount: KnockoutObservable<number> = ko.observable(null);
        // Page number. This can be set to get a new page.
   		public page: KnockoutObservable<number> = ko.observable(1);
        // Number of items on a page.
   		public pageSize: KnockoutObservable<number> = ko.observable(10);
        // If a load failed, this is a message about why it failed.
   		public message: KnockoutObservable<string> = ko.observable(null);
        // Search criteria for the list. This can be exposed as a text box for searching.
   		public search: KnockoutObservable<string> = ko.observable("");
        // If there is another page, this is true.
        public nextPageEnabled: KnockoutComputed<boolean>
        // If there is a previous page, this is true.
        public previousPageEnabled: KnockoutComputed<boolean>;
        // Gets the next page.
        public nextPage: () => void;
        // Gets the previous page.
        public previousPage: () => void;

        // True once the data has been loaded.
		public isLoaded: KnockoutObservable<boolean> = ko.observable(false);

        // Valid values
        public personStatsValidValues: KnockoutObservableArray<any> = ko.observableArray([]);
        public loadPersonStatsValidValues: (callback: any) => void;
        public companyValidValues: KnockoutObservableArray<any> = ko.observableArray([]);
        public loadCompanyValidValues: (callback: any) => void;
            // Call server method (Add)
        // Adds two numbers.
        public add: (numberOne: number, numberTwo: number, callback?: any) => void;
        // Result of server method (Add)
        public addResult: KnockoutObservable<any> = ko.observable();
        // True while the server method (Add) is being called
        public addIsLoading: KnockoutObservable<boolean> = ko.observable(false);
        // Error message for server method (Add) if it fails.
        public addMessage: KnockoutObservable<string> = ko.observable(null);
        // True if the server method (Add) was successful.
        public addWasSuccessful: KnockoutObservable<boolean> = ko.observable(null);
        // Presents a series of input boxes to call the server method (Add)
        public addUi: (callback?: any) => void;
        // Presents a modal with input boxes to call the server method (Add)
        public addModal: (callback?: any) => void;
        // Variable for method arguments to allow for easy binding
        public addWithArgs: (args?: PersonList.AddArgs, callback?: any) => void;
        
        public addArgs = new PersonList.AddArgs(); 
        
        // Call server method (GetUser)
        // Returns the user name
        public getUser: (callback?: any) => void;
        // Result of server method (GetUser)
        public getUserResult: KnockoutObservable<any> = ko.observable();
        // True while the server method (GetUser) is being called
        public getUserIsLoading: KnockoutObservable<boolean> = ko.observable(false);
        // Error message for server method (GetUser) if it fails.
        public getUserMessage: KnockoutObservable<string> = ko.observable(null);
        // True if the server method (GetUser) was successful.
        public getUserWasSuccessful: KnockoutObservable<boolean> = ko.observable(null);
        // Presents a series of input boxes to call the server method (GetUser)
        public getUserUi: (callback?: any) => void;
        // Presents a modal with input boxes to call the server method (GetUser)
        public getUserModal: (callback?: any) => void;
        // Variable for method arguments to allow for easy binding
        
        // Call server method (GetUserPublic)
        // Returns the user name
        public getUserPublic: (callback?: any) => void;
        // Result of server method (GetUserPublic)
        public getUserPublicResult: KnockoutObservable<any> = ko.observable();
        // True while the server method (GetUserPublic) is being called
        public getUserPublicIsLoading: KnockoutObservable<boolean> = ko.observable(false);
        // Error message for server method (GetUserPublic) if it fails.
        public getUserPublicMessage: KnockoutObservable<string> = ko.observable(null);
        // True if the server method (GetUserPublic) was successful.
        public getUserPublicWasSuccessful: KnockoutObservable<boolean> = ko.observable(null);
        // Presents a series of input boxes to call the server method (GetUserPublic)
        public getUserPublicUi: (callback?: any) => void;
        // Presents a modal with input boxes to call the server method (GetUserPublic)
        public getUserPublicModal: (callback?: any) => void;
        // Variable for method arguments to allow for easy binding
        
        // Call server method (NamesStartingWith)
        // Gets all the first names starting with the characters.
        public namesStartingWith: (characters: String, callback?: any) => void;
        // Result of server method (NamesStartingWith)
        public namesStartingWithResult: KnockoutObservable<any> = ko.observable();
        // True while the server method (NamesStartingWith) is being called
        public namesStartingWithIsLoading: KnockoutObservable<boolean> = ko.observable(false);
        // Error message for server method (NamesStartingWith) if it fails.
        public namesStartingWithMessage: KnockoutObservable<string> = ko.observable(null);
        // True if the server method (NamesStartingWith) was successful.
        public namesStartingWithWasSuccessful: KnockoutObservable<boolean> = ko.observable(null);
        // Presents a series of input boxes to call the server method (NamesStartingWith)
        public namesStartingWithUi: (callback?: any) => void;
        // Presents a modal with input boxes to call the server method (NamesStartingWith)
        public namesStartingWithModal: (callback?: any) => void;
        // Variable for method arguments to allow for easy binding
        public namesStartingWithWithArgs: (args?: PersonList.NamesStartingWithArgs, callback?: any) => void;
        
        public namesStartingWithArgs = new PersonList.NamesStartingWithArgs(); 
        
        // Call server method (NamesStartingWithPublic)
        // Gets all the first names starting with the characters.
        public namesStartingWithPublic: (characters: String, callback?: any) => void;
        // Result of server method (NamesStartingWithPublic)
        public namesStartingWithPublicResult: KnockoutObservable<any> = ko.observable();
        // True while the server method (NamesStartingWithPublic) is being called
        public namesStartingWithPublicIsLoading: KnockoutObservable<boolean> = ko.observable(false);
        // Error message for server method (NamesStartingWithPublic) if it fails.
        public namesStartingWithPublicMessage: KnockoutObservable<string> = ko.observable(null);
        // True if the server method (NamesStartingWithPublic) was successful.
        public namesStartingWithPublicWasSuccessful: KnockoutObservable<boolean> = ko.observable(null);
        // Presents a series of input boxes to call the server method (NamesStartingWithPublic)
        public namesStartingWithPublicUi: (callback?: any) => void;
        // Presents a modal with input boxes to call the server method (NamesStartingWithPublic)
        public namesStartingWithPublicModal: (callback?: any) => void;
        // Variable for method arguments to allow for easy binding
        public namesStartingWithPublicWithArgs: (args?: PersonList.NamesStartingWithPublicArgs, callback?: any) => void;
        
        public namesStartingWithPublicArgs = new PersonList.NamesStartingWithPublicArgs(); 
        
        // Call server method (BorCPeople)
        // People whose last name starts with B or c
        public borCPeople: (callback?: any) => void;
        // Result of server method (BorCPeople)
        public borCPeopleResult: KnockoutObservable<any> = ko.observable();
        // True while the server method (BorCPeople) is being called
        public borCPeopleIsLoading: KnockoutObservable<boolean> = ko.observable(false);
        // Error message for server method (BorCPeople) if it fails.
        public borCPeopleMessage: KnockoutObservable<string> = ko.observable(null);
        // True if the server method (BorCPeople) was successful.
        public borCPeopleWasSuccessful: KnockoutObservable<boolean> = ko.observable(null);
        // Presents a series of input boxes to call the server method (BorCPeople)
        public borCPeopleUi: (callback?: any) => void;
        // Presents a modal with input boxes to call the server method (BorCPeople)
        public borCPeopleModal: (callback?: any) => void;
        // Variable for method arguments to allow for easy binding
        
        constructor() {
            var self = this; 
            var searchTimeout: number = 0;

            // Load the collection
            self.load = function(callback?: any) {
                intellitect.utilities.showBusy();
                if(self.query) {
                    self.queryString = $.param(self.query);
                }
                self.isLoading(true);
                $.ajax({ method: "GET",
                         url: areaUrl + "api/Person/List?includes=" + self.includes + "&page=" + self.page()
                                + "&pageSize=" + self.pageSize() + "&search=" + self.search()
                                + "&listDataSource=" + PersonDataSources[self.listDataSource] + "&" + self.queryString,
                        xhrFields: { withCredentials: true } })
                .done(function(data) {
                    if (data.WasSuccessful){
                        self.items.removeAll();
                        for (var i in data.List) {
                            var model = new ViewModels.Person(data.List[i]);
                            model.includes = self.includes;
                            model.onDelete(itemDeleted);
                            self.items.push(model);
                        }
                        self.count(data.List.length);
                        self.totalCount(data.TotalCount);
                        self.pageCount(data.PageCount);
                        self.page(data.Page);
                        self.message(data.Message)
                        self.isLoaded(true);
                        if ($.isFunction(callback)) callback(self);
                    }else{
                        self.message(data.Message);
                        self.isLoaded(false);
                    }
                })
                .fail(function() {
                    alert("Could not get list of Person items.");
                })
                .always(function() {
                    intellitect.utilities.hideBusy();
                    self.isLoading(false);
                });
            };

            // Paging
            self.nextPage = function() {
                if (self.nextPageEnabled()) {
                    self.page(self.page() + 1);
                    self.load();
                }
            }
            self.nextPageEnabled = ko.computed(function() {
                if (self.page() < self.pageCount()) return true;
                return false;
            })
            self.previousPage = function() {
                if (self.previousPageEnabled()) {
                    self.page(self.page() - 1);
                    self.load();
                }
            }
            self.previousPageEnabled = ko.computed(function() {
                if (self.page() > 1) return true;
                return false;
            })


            // Load the count
            self.getCount = function(callback?: any) {
                intellitect.utilities.showBusy();
                if (self.query) {
                    self.queryString = $.param(self.query);
                }
                $.ajax({ method: "GET",
                         url: areaUrl + "api/Person/count?" + "listDataSource=" + PersonDataSources[self.listDataSource] + "&" + self.queryString,
                         xhrFields: { withCredentials: true } })
                .done(function(data) {
                    self.count(data);
                    if ($.isFunction(callback)) callback();
                })
                .fail(function() {
                    alert("Could not get count of Person items.");
                })
                .always(function() {
                    intellitect.utilities.hideBusy();
                });
            };

            // Callback for when an item is deleted
            function itemDeleted(item) {
                self.items.remove(item);
            }

            // Deletes an item and removes it from the array.
            self.deleteItem = function(item: ViewModels.Person)
            {
                item.deleteItem();
            };

            self.pageSize.subscribe(function () {
                if (self.isLoaded()){
                    self.load();
                }
            });
            self.search.subscribe(function () {
                if (searchTimeout) {
                    clearTimeout(searchTimeout);
                }
                searchTimeout = setTimeout(function() {
                    searchTimeout = 0;
                    self.load();
                }, 300);
            });

    // Method Implementations

            self.add = function(numberOne: number, numberTwo: number, callback?: any, reload: Boolean = true){
                self.addIsLoading(true);
                $.ajax({ method: "POST",
                         url: areaUrl + "api/Person/Add",
                         data: {
                        numberOne: numberOne, 
                        numberTwo: numberTwo
                    },
                         xhrFields: { withCredentials: true } })
				.done(function(data) {
					if (data.WasSuccessful) {
						self.addMessage('');
						self.addWasSuccessful(true);
						self.addResult(data.Object);
                        if (reload) {
                          self.load(callback);
                        } else if ($.isFunction(callback)) {
                          callback(data);
                        }
					} else {
						self.addWasSuccessful(false);
						self.addMessage(data.Message);
					}
				})
				.fail(function() {
					alert("Could not call method add");
				})
				.always(function() {
                    self.addIsLoading(false);
				});
            }

            self.addUi = function(callback?: any) {
                var numberOne: number = parseFloat(prompt('Number One'));
                var numberTwo: number = parseFloat(prompt('Number Two'));
                self.add(numberOne, numberTwo, callback);
            }

            self.addModal = function(callback?: any) {
                $('#method-Add').modal();
                $('#method-Add').on('shown.bs.modal', function() {
                    $('#method-Add .btn-ok').click(function()
                    {
                        self.addWithArgs(null, callback);
                        $('#method-Add').modal('hide');
                    });
                });
            }
            
            self.addWithArgs = function(args?: PersonList.AddArgs, callback?: any) {
                if (!args) args = self.addArgs;
                self.add(args.numberOne(), args.numberTwo(), callback);
            }

            

            self.getUser = function(callback?: any, reload: Boolean = true){
                self.getUserIsLoading(true);
                $.ajax({ method: "POST",
                         url: areaUrl + "api/Person/GetUser",
                         data: {

                    },
                         xhrFields: { withCredentials: true } })
				.done(function(data) {
					if (data.WasSuccessful) {
						self.getUserMessage('');
						self.getUserWasSuccessful(true);
						self.getUserResult(data.Object);
                        if (reload) {
                          self.load(callback);
                        } else if ($.isFunction(callback)) {
                          callback(data);
                        }
					} else {
						self.getUserWasSuccessful(false);
						self.getUserMessage(data.Message);
					}
				})
				.fail(function() {
					alert("Could not call method getUser");
				})
				.always(function() {
                    self.getUserIsLoading(false);
				});
            }

            self.getUserUi = function(callback?: any) {
                self.getUser(callback);
            }

            self.getUserModal = function(callback?: any) {
                    self.getUserUi(callback);
            }
            

            

            self.getUserPublic = function(callback?: any, reload: Boolean = true){
                self.getUserPublicIsLoading(true);
                $.ajax({ method: "POST",
                         url: areaUrl + "api/Person/GetUserPublic",
                         data: {

                    },
                         xhrFields: { withCredentials: true } })
				.done(function(data) {
					if (data.WasSuccessful) {
						self.getUserPublicMessage('');
						self.getUserPublicWasSuccessful(true);
						self.getUserPublicResult(data.Object);
                        if (reload) {
                          self.load(callback);
                        } else if ($.isFunction(callback)) {
                          callback(data);
                        }
					} else {
						self.getUserPublicWasSuccessful(false);
						self.getUserPublicMessage(data.Message);
					}
				})
				.fail(function() {
					alert("Could not call method getUserPublic");
				})
				.always(function() {
                    self.getUserPublicIsLoading(false);
				});
            }

            self.getUserPublicUi = function(callback?: any) {
                self.getUserPublic(callback);
            }

            self.getUserPublicModal = function(callback?: any) {
                    self.getUserPublicUi(callback);
            }
            

            

            self.namesStartingWith = function(characters: String, callback?: any, reload: Boolean = true){
                self.namesStartingWithIsLoading(true);
                $.ajax({ method: "POST",
                         url: areaUrl + "api/Person/NamesStartingWith",
                         data: {
                        characters: characters
                    },
                         xhrFields: { withCredentials: true } })
				.done(function(data) {
					if (data.WasSuccessful) {
						self.namesStartingWithMessage('');
						self.namesStartingWithWasSuccessful(true);
						self.namesStartingWithResult(data.Object);
                        if (reload) {
                          self.load(callback);
                        } else if ($.isFunction(callback)) {
                          callback(data);
                        }
					} else {
						self.namesStartingWithWasSuccessful(false);
						self.namesStartingWithMessage(data.Message);
					}
				})
				.fail(function() {
					alert("Could not call method namesStartingWith");
				})
				.always(function() {
                    self.namesStartingWithIsLoading(false);
				});
            }

            self.namesStartingWithUi = function(callback?: any) {
                var characters: String = prompt('Characters');
                self.namesStartingWith(characters, callback);
            }

            self.namesStartingWithModal = function(callback?: any) {
                $('#method-NamesStartingWith').modal();
                $('#method-NamesStartingWith').on('shown.bs.modal', function() {
                    $('#method-NamesStartingWith .btn-ok').click(function()
                    {
                        self.namesStartingWithWithArgs(null, callback);
                        $('#method-NamesStartingWith').modal('hide');
                    });
                });
            }
            
            self.namesStartingWithWithArgs = function(args?: PersonList.NamesStartingWithArgs, callback?: any) {
                if (!args) args = self.namesStartingWithArgs;
                self.namesStartingWith(args.characters(), callback);
            }

            

            self.namesStartingWithPublic = function(characters: String, callback?: any, reload: Boolean = true){
                self.namesStartingWithPublicIsLoading(true);
                $.ajax({ method: "POST",
                         url: areaUrl + "api/Person/NamesStartingWithPublic",
                         data: {
                        characters: characters
                    },
                         xhrFields: { withCredentials: true } })
				.done(function(data) {
					if (data.WasSuccessful) {
						self.namesStartingWithPublicMessage('');
						self.namesStartingWithPublicWasSuccessful(true);
						self.namesStartingWithPublicResult(data.Object);
                        if (reload) {
                          self.load(callback);
                        } else if ($.isFunction(callback)) {
                          callback(data);
                        }
					} else {
						self.namesStartingWithPublicWasSuccessful(false);
						self.namesStartingWithPublicMessage(data.Message);
					}
				})
				.fail(function() {
					alert("Could not call method namesStartingWithPublic");
				})
				.always(function() {
                    self.namesStartingWithPublicIsLoading(false);
				});
            }

            self.namesStartingWithPublicUi = function(callback?: any) {
                var characters: String = prompt('Characters');
                self.namesStartingWithPublic(characters, callback);
            }

            self.namesStartingWithPublicModal = function(callback?: any) {
                $('#method-NamesStartingWithPublic').modal();
                $('#method-NamesStartingWithPublic').on('shown.bs.modal', function() {
                    $('#method-NamesStartingWithPublic .btn-ok').click(function()
                    {
                        self.namesStartingWithPublicWithArgs(null, callback);
                        $('#method-NamesStartingWithPublic').modal('hide');
                    });
                });
            }
            
            self.namesStartingWithPublicWithArgs = function(args?: PersonList.NamesStartingWithPublicArgs, callback?: any) {
                if (!args) args = self.namesStartingWithPublicArgs;
                self.namesStartingWithPublic(args.characters(), callback);
            }

            

            self.borCPeople = function(callback?: any, reload: Boolean = true){
                self.borCPeopleIsLoading(true);
                $.ajax({ method: "POST",
                         url: areaUrl + "api/Person/BorCPeople",
                         data: {

                    },
                         xhrFields: { withCredentials: true } })
				.done(function(data) {
					if (data.WasSuccessful) {
						self.borCPeopleMessage('');
						self.borCPeopleWasSuccessful(true);
						self.borCPeopleResult(data.Object);
                        if (reload) {
                          self.load(callback);
                        } else if ($.isFunction(callback)) {
                          callback(data);
                        }
					} else {
						self.borCPeopleWasSuccessful(false);
						self.borCPeopleMessage(data.Message);
					}
				})
				.fail(function() {
					alert("Could not call method borCPeople");
				})
				.always(function() {
                    self.borCPeopleIsLoading(false);
				});
            }

            self.borCPeopleUi = function(callback?: any) {
                self.borCPeople(callback);
            }

            self.borCPeopleModal = function(callback?: any) {
                    self.borCPeopleUi(callback);
            }
            

            
        }
    }

    export namespace PersonList {
        // Classes for use in method calls to support data binding for input for arguments
        export class AddArgs {
            public numberOne: KnockoutObservable<number> = ko.observable(null);
            public numberTwo: KnockoutObservable<number> = ko.observable(null);
        }
        export class NamesStartingWithArgs {
            public characters: KnockoutObservable<string> = ko.observable(null);
        }
        export class NamesStartingWithPublicArgs {
            public characters: KnockoutObservable<string> = ko.observable(null);
        }
    }
}