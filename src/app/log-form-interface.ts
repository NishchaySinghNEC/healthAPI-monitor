export interface LogFormInterface {
    limit : number;
    requestMethod: string;
    responseStatus: string;
    range: {
        startDate: string;
        endDate: string;
    }
}
