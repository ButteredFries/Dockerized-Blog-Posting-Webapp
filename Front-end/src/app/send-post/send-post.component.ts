import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-get-posts',
    templateUrl: './send-post.component.html',
    styleUrls: ['./send-post.component.css']
})
export class SendPostComponent implements OnInit {

    constructor(private http: HttpClient) {
        this.http = http;
    }

    ngOnInit() {}

    sendPost(data: any) {
        const body = { title: data.Title, author: data.Author, content: data.Content, tags:data.Tags.split(",") }
        this.http.post<any>("http://0.0.0.0:8080/api/v1/post/send", body)
            .subscribe({
                next: data => {
                    console.log(data);
                },
                error: error => {
                    console.log(error);
                }
            });
    }
}