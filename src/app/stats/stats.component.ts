import { Component, OnInit } from '@angular/core';
import { PostService } from './stats/post.service';


@Component({

  selector: 'app-root',

  templateUrl: './stats.component.html',

  styleUrls: ['./stats.component.css']

})

export class StatsComponent implements OnInit {

  posts:any;


  constructor(private service:PostService) {}

  ngOnInit() {

      this.service.getPosts()

        .subscribe(response => {

          this.posts = response;

        });

  }

}
