export interface LogFormInterface {
    limit : number;
    requestMethod: string;
    appName: string,
    responseStatus: string;
    range: {
        startDate: string;
        endDate: string;
    }
}
