import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnsplashApi } from '../unsplash.api.class';
import { ListPhotos, RandomPhoto, SinglePhoto } from '../photos';

interface PhotoInfoFromUnsplash {
  data: SinglePhoto[];
}

interface PhotoListFromUnsplash {
  data: ListPhotos[];
}

interface RandomPhotoFromUnsplash {
  data: RandomPhoto[];
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private unsplashApi: UnsplashApi) {}
  

  getRandomPhoto(query: string, orientation: string, count: number): Observable<any> {
    return this.unsplashApi.get(`/random?query=${query}&orientation=${orientation}&count=${count}&auto=format`);
  }

getSpecificPhoto(id: string): Observable<any> {
    return this.unsplashApi.get(`?id=${id}`);
  }

  getPhotoList(): Observable<any> {
    // page, per_page, order_by params
    return this.unsplashApi.get('');
  }
  
}