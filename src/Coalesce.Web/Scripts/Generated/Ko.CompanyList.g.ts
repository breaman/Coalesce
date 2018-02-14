
/// <reference path="../coalesce.dependencies.d.ts" />

// Knockout List View Model for: Company
// Generated by IntelliTect.Coalesce

module ListViewModels {

    export namespace CompanyDataSources {
        export class Default extends Coalesce.DataSource<ViewModels.Company> { }
                
        export class DefaultSource extends Coalesce.DataSource<ViewModels.Company> {
        }
    }

    export class CompanyList extends Coalesce.BaseListViewModel<ViewModels.Company> {
        public readonly modelName: string = "Company";
        public readonly apiController: string = "/Company";
        public modelKeyName: string = "companyId";
        public itemClass: new () => ViewModels.Company = ViewModels.Company;

        public filter: {
            companyId?:string;
            name?:string;
            address1?:string;
            address2?:string;
            city?:string;
            state?:string;
            zipCode?:string;
            isDeleted?:string;
        } | null = null;
    
        /** 
            The namespace containing all possible values of this.dataSource.
        */
        public dataSources: typeof CompanyDataSources = CompanyDataSources;

        /**
            The data source on the server to use when retrieving objects.
            Valid values are in this.dataSources.
        */
        public dataSource: Coalesce.DataSource<ViewModels.Company> = new this.dataSources.Default();

        public static coalesceConfig = new Coalesce.ListViewModelConfiguration<CompanyList, ViewModels.Company>(Coalesce.GlobalConfiguration.listViewModel);
        public coalesceConfig: Coalesce.ListViewModelConfiguration<CompanyList, ViewModels.Company>
            = new Coalesce.ListViewModelConfiguration<CompanyList, ViewModels.Company>(CompanyList.coalesceConfig);


        protected createItem = (newItem?: any, parent?: any) => new ViewModels.Company(newItem, parent);

        constructor() {
            super();
        }
    }
}