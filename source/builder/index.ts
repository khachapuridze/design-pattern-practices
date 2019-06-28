import {IBuild,IRequesBuilder} from "./interface";

export class Request implements IBuild{
    public url: string;
    public method: string;
    public payload: {};
    constructor() {
        this.url = "";
        this.method = "";
        this.payload = {};
    }
}

export class RequestBuilder  implements IRequesBuilder {
    request: Request;
    constructor() {
        this.request = new Request();
    }

    public forUrl(url: string) {
        this.request.url = url;
        return this;
    }

    public useMethod(method: string) {
        this.request.method = method;
        return this;
    }

    public payload(payload: object) {
        this.request.payload = payload;
        return this;
    }

    public build() {
        return this.request;
    }

}
