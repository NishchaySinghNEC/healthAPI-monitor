export interface LogInterface {
    id: string;
    sessionId: string;
    startDate: string;
    endDate: string;
    elapsedTime: number;
    requestMethod: string;
    requestUri: string;
    requestRemoteAddr: string;
    requestParams: string;
    responseStatus: number;
    responseMessage: string;
    responseDetails?: any;
    createdBy: string;
    createdDate: Date;
    stackTrace?: any;
    requestBody?: any;
}
