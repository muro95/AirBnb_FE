import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Comment} from '../../interface/comment/comment';
import {IAddComment} from '../../components/home-detail/addComment';
import {DataComment} from '../../interface/comment/dataComment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }

  public getAllCommentByHome(id: number): Observable<Comment> {
    return this.http.get<Comment>('http://localhost:8080/api/comments/' + id);
  }

  public createComment(comment: IAddComment, houseId: number): Observable<DataComment> {
    return this.http.post<DataComment>('http://localhost:8080/api/me/' + houseId + '/comments', comment);
  }

}
