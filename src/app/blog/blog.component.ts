import { Component, OnInit } from '@angular/core';
import { arrowBackOutline } from 'ionicons/icons';
import BlogListing from './blog-db';
import { BlogPostDto } from './blog-dto';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  blogPosts: Array<BlogPostDto> = BlogListing;
  arrowBackOutline = arrowBackOutline;

  constructor() { }

  ngOnInit() {}

}
