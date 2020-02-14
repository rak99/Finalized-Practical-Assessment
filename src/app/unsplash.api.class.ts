import credentials from './config/config.json';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class UnsplashApi extends HttpClient {
    private accessKey = credentials["accessKey"];
    private secretKey = credentials["secretKey"];
    private baseUrl = 'https://api.unsplash.com/photos';
    private headers = new HttpHeaders();

    public constructor(handler: HttpHandler) {
        super(handler);

        console.log('We are creating new instance of UnsplashApi extending HttpClient, here is the defualt handler: ', handler);
    }

    public get(url: string, options?: object): Observable<any> {
        url = this.baseUrl + url;
        return super.get(url, { ...options, headers: { 'Authorization': `Client-ID ${this.accessKey}`, 'Accept-Version': 'v1'} });
    }



    exportBaseUnsplashRequest() {
        return;
    }

}