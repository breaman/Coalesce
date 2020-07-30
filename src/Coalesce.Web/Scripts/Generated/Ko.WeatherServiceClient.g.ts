
/// <reference path="../coalesce.dependencies.d.ts" />

// Generated by IntelliTect.Coalesce

module Services {
    export class WeatherServiceClient {
        
        public readonly apiController: string = "/WeatherService";
        
        /** Configuration for all instances of WeatherServiceClient. Can be overidden on each instance via instance.coalesceConfig. */
        public static coalesceConfig = new Coalesce.ServiceClientConfiguration<WeatherServiceClient>(Coalesce.GlobalConfiguration.serviceClient);
        
        /** Configuration for this WeatherServiceClient instance. */
        public coalesceConfig: Coalesce.ServiceClientConfiguration<WeatherServiceClient>
            = new Coalesce.ServiceClientConfiguration<WeatherServiceClient>(WeatherServiceClient.coalesceConfig);
        
        
        /** Methods and properties for invoking server method GetWeather. */
        public readonly getWeather = new WeatherServiceClient.GetWeather(this);
        public static GetWeather = class GetWeather extends Coalesce.ClientMethod<WeatherServiceClient, ViewModels.WeatherData> {
            public readonly name = 'GetWeather';
            public readonly verb = 'POST';
            
            /** Calls server method (GetWeather) with the given arguments */
            public invoke = (location: ViewModels.Location | null, dateTime: moment.Moment | null, conditions: number | null, callback?: (result: ViewModels.WeatherData) => void): JQueryPromise<any> => {
                return this.invokeWithData({ location: location ? location.saveToDto() : null, dateTime: dateTime ? dateTime.format() : null, conditions: conditions }, callback);
            };
            
            /** Object that can be easily bound to fields to allow data entry for the method's parameters */
            public args = new GetWeather.Args(); 
            public static Args = class Args {
                public location: KnockoutObservable<ViewModels.Location | null> = ko.observable(null);
                public dateTime: KnockoutObservable<moment.Moment | null> = ko.observable(null);
                public conditions: KnockoutObservable<number | null> = ko.observable(null);
            };
            
            /** Calls server method (GetWeather) with an instance of GetWeather.Args, or the value of this.args if not specified. */
            public invokeWithArgs = (args = this.args, callback?: (result: ViewModels.WeatherData) => void): JQueryPromise<any> => {
                return this.invoke(args.location(), args.dateTime(), args.conditions(), callback);
            }
            
            /** Invokes the method after displaying a browser-native prompt for each argument. */
            public invokeWithPrompts = (callback?: (result: ViewModels.WeatherData) => void): JQueryPromise<any> | undefined => {
                var $promptVal: string | null = null;
                $promptVal = prompt('Date Time');
                if ($promptVal === null) return;
                var dateTime: moment.Moment = moment($promptVal);
                $promptVal = prompt('Conditions');
                if ($promptVal === null) return;
                var conditions: number = parseInt($promptVal);
                var location: null = null;
                return this.invoke(location, dateTime, conditions, callback);
            };
            
            protected loadResponse = (data: Coalesce.ItemResult, callback?: (result: ViewModels.WeatherData) => void) => {
                if (!this.result()) {
                    this.result(new ViewModels.WeatherData(data.object));
                } else {
                    this.result().loadFromDto(data.object);
                }
                if (typeof(callback) == 'function')
                    callback(this.result());
            };
        };
    }
}
