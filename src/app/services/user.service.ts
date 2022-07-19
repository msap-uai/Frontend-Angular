import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://argentina-programa-spring.herokuapp.com/';//firebase

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

//administra las URL publicas y privadas
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }
  
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }


/*



  getAllPosts(): Observable<Array<PostModel>> {
    return this.http.get<Array<PostModel>>(this.baseUrl + 'api/posts/');
  }
 
  createPost(postPayload: CreatePostPayload): Observable<any> {
    return this.http.post(this.baseUrl + 'api/posts/', postPayload);
  }
 
  getPost(id: number): Observable<PostModel> {
    return this.http.get<PostModel>(this.baseUrl + 'api/posts/' + id);
  }
 
  getAllPostsByUser(name: string): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.baseUrl + 'api/posts/by-user/' + name);
  }


  getAllSubreddits(): Observable<Array<SubredditModel>> {
      return this.http.get<Array<SubredditModel>>(this.baseUrl+'api/subreddit');
    }
  
    createSubreddit(subredditModel: SubredditModel): Observable<SubredditModel> {
      return this.http.post<SubredditModel>(this.baseUrl+'api/subreddit',
        subredditModel);
  }

*/
}
