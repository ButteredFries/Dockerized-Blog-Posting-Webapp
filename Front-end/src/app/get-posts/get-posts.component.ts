import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs';

import { Post } from '../post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgClass } from '@angular/common';

import { DynamicChildLoaderDirective } from '../load-child.directive';
import { PostComponent } from '../post/post.component';

@Component({
    selector: 'app-get-posts',
    templateUrl: './get-posts.component.html',
    styleUrls: ['./get-posts.component.css']
})
export class GetPostsComponent implements OnInit {
    selectedId = 0;

    constructor(private http: HttpClient, private route: ActivatedRoute) {
        this.http = http;
    }

    @ViewChild("dynamicChildLoader", { read: ViewContainerRef }) dynamicChild!: DynamicChildLoaderDirective;

    ngOnInit() {
        this.http.post<any>("http://0.0.0.0:8080/api/v1/post/get", null)
            .subscribe({
                next: data => {
                    console.log(data);
                    
                    var self = this;
                    data.forEach(function (currPost: Post) {
                        
                        self.loadDynamicPostComponent(self, currPost);
                    });
                    
                },
                error: error => {
                    console.log(error);
                }
            });
    }

    private loadDynamicPostComponent(self: any, post: Post) {
        const componentRef = self.dynamicChild.createComponent(PostComponent);
        componentRef.instance.data = {
            author: post.author,
            title: post.title,
            content: post.content,
            id: Object.values(post._id)[0],
        }
    }
}