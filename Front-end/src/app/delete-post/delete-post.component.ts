import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-delete-posts',
    templateUrl: './delete-post.component.html',
    styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {

    constructor(private http: HttpClient) {
        this.http = http;
    }

    ngOnInit() {}

    sendDelete(data: any) {
        const body = { _id: data.ID }
        
        console.log(body);

        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            body: body,
        }
        
        this.http.delete<any>("http://0.0.0.0:8080/api/v1/post/delete", options)
            .subscribe({
                next: data => {
                    console.log(data);
                    document.getElementById("code")!.textContent = "Success!";
                    
                },
                error: error => {
                    console.log(error);
                    document.getElementById("code")!.textContent = "Failure: " + error.name;
                }
            });
    }
}