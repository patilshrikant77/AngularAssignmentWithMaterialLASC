import { Injectable } from '@angular/core';
import {Post} from '../Post';
import {Observable, of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  POSTS_DATA: Post[] = [
    {position: 0, title: 'Post One', category: 'Web Development', date_posted: new Date(), body: 'Body 1'},
    {position: 1, title: 'Post Two', category: 'Android Development', date_posted: new Date(), body: 'Body 2'},
    {position: 2, title: 'Post Three', category: 'IOS Development', date_posted: new Date(), body: 'Body 3'},
    {position: 3, title: 'Post Four', category: 'Android Development', date_posted: new Date(), body: 'Body 4'},
    {position: 4, title: 'Post Five', category: 'IOS Development', date_posted: new Date(), body: 'Body 5'},
    {position: 5, title: 'Post Six', category: 'Web Development', date_posted: new Date(), body: 'Body 6'},
  ];
  categories = [
    {value: 'Web-Development', viewValue: 'Web Development'},
    {value: 'Android-Development', viewValue: 'Android Development'},
    {value: 'IOS-Development', viewValue: 'IOS Development'}
  ];

  constructor() { }

  getPosts(): Observable<Post[]> {
    return of<Post[]>(this.POSTS_DATA);
  }

  getCategories() {
    return this.categories;
  }

  addPost(data) {
    this.POSTS_DATA.push(data);
  }

  deletePost(index) {
    this.POSTS_DATA = [...this.POSTS_DATA.slice(0, index), ...this.POSTS_DATA.slice(index + 1)];
  }

  dataLength() {
    return this.POSTS_DATA.length;
  }
}
