import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { arrowBackOutline } from 'ionicons/icons';
import BlogListing from '../blog/blog-db';
import { BlogPostDto } from '../blog/blog-dto';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  blogPosts: Array<BlogPostDto> = BlogListing;
  arrowBackOutline = arrowBackOutline;
  selectedBlog;
  constructor(
    public route: ActivatedRoute,
    public alertController: AlertController,
    public router: Router
  ) {}
  showError(msg: string) {
    this.alertController
      .create({
        header: 'Warning!',
        message: msg,
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              this.router.navigate(['']);
            },
          },
        ],
      })
      .then((res) => {
        res.present();
      });
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === 'null') {
      this.showError('You are not choosing an item from the list');
    } else {
      this.selectedBlog = this.blogPosts.find((issue) => {
        return issue.id === id;
      });
    }
  }
}
