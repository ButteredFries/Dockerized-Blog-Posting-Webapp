import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Front-end';
  activeLinkIndex = 0;

  links: any[];
  
  constructor(private router:Router) {
    this.links = [
      {
        label: 'Get Posts',
        link: '/get-posts',
        index: 0
      }, {
        label: 'Send Post',
        link: '/send-post',
        index: 1
      }, {
        label: 'Delete Post',
        link: '/delete-post',
        index: 2
      },
    ];
  }
  ngOnInit(): void {
      this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.links.indexOf(this.links.find(tab => tab.link === '.' + this.router.url));
      });
  }
}
