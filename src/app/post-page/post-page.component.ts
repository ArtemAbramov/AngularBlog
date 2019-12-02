import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../shared/posts.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs';
import {Post} from '../shared/interfaces';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  post$: Observable<Post>

  constructor(
    private postService: PostsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.post$ = this.route.params
      .pipe(switchMap((params: Params) => {
        return this.postService.getById(params['id'])
      }))
  }

}
