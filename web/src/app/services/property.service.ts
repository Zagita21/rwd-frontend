import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PropertyObserverService} from "./observers/property-observer.service";

@Injectable()
export class PropertyService {
    public propertyMap: Map<string, string> = new Map<string, string>();
    public properties: any;
    public loaded: boolean = false;

    public static MELD_HOMEPAGE: string = "meld-homepage";

    constructor(private httpClient: HttpClient, public propertyObserver: PropertyObserverService) {
        if (location.hostname.indexOf("smartclaimz") > -1) {
            this.httpClient.get<Map<string, string>>("assets/config/propertiesmainnet.json").subscribe(data => {
                for (const key in data) {
                    if (data.hasOwnProperty(key)) {
                        this.propertyMap.set(key, data[key]);
                    }
                }
                this.loaded = true;
                this.propertyObserver.setPropertyMap(this.propertyMap);
            });
        } else {
            this.httpClient.get<Map<string, string>>("assets/config/properties.json").subscribe(data => {
                for (const key in data) {
                    if (data.hasOwnProperty(key)) {
                        this.propertyMap.set(key, data[key]);
                    }
                }
                this.loaded = true;
                this.propertyObserver.setPropertyMap(this.propertyMap);
            });
        }
    }

    public getProperty(key: string) {
        if (this.propertyMap.has(key)) {
            return this.propertyMap.get(key);
        }
        return null;
    }
}