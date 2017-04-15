import {
    ConnectionBackend,
    Headers,
    Http,
    Request,
    RequestOptions,
    RequestOptionsArgs,
    Response
} from '@angular/http';

import 'rxjs';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class AppHttpService extends Http {

    private requestCount = 0;
    public isLoading$ = new BehaviorSubject<boolean>(false);

    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }
    /**
     * Performs any type of http request.
     * @param url
     * @param options
     * @returns {Observable<Response>}
     */
    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options);
    }

    /**
       * Performs a request with `get` http method.
       * @param url
       * @param options
       * @returns {Observable<>}
       */
    get(url: string, options?: RequestOptionsArgs): Observable<any> {
        this.requestInterceptor();

        return super.get(url, this.requestOptions(options))
            .finally(() => {
                this.onFinally();
            });
    }

    /**
     * Performs a request with `post` http method.
     * @param url
     * @param body
     * @param options
     * @returns {Observable<>}
     */
    post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        this.requestInterceptor();
        return super.post(url, body, this.requestOptions(options))
            .finally(() => {
                this.onFinally();
            });
    }

    /**
     * Performs a request with `put` http method.
     * @param url
     * @param body
     * @param options
     * @returns {Observable<>}
     */
    put(url: string, body: string, options?: RequestOptionsArgs): Observable<any> {
        this.requestInterceptor();
        return super.put(url, body, this.requestOptions(options))
            .finally(() => {
                this.onFinally();
            });
    }

    /**
     * Performs a request with `delete` http method.
     * @param url
     * @param options
     * @returns {Observable<>}
     */
    delete(url: string, options?: RequestOptionsArgs): Observable<any> {
        this.requestInterceptor();
        return super.delete(url, options)
            .finally(() => {
                this.onFinally();
            });
    }


    /**
     * Request options.
     * @param options
     * @returns {RequestOptionsArgs}
     */
    private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        return options;
    }

    /**
     * Request interceptor.
     */
    private requestInterceptor(): void {
        this.requestCount++;
        this.isLoading$.next(true);
    }

    /**
     * Response interceptor.
     */
    private responseInterceptor(): void {
        this.requestCount--;
        this.isLoading$.next(this.requestCount !== 0);
    }

    /**
     * onFinally
     */
    private onFinally(): void {
        this.responseInterceptor();
    }

}