export interface LogFormInterface {
    logLimit : number;
    requestMethod: string;
    responseStatus: string;
    range: {
        start: string;
        end: string;
    }
}
