import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetPostsComponent } from './get-posts/get-posts.component';
import { SendPostComponent } from './send-post/send-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { PostComponent } from './post/post.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'get-posts', component: GetPostsComponent },
  { path: 'send-post', component: SendPostComponent },
  { path: 'delete-post', component: DeletePostComponent },
  { path: 'post', component: PostComponent },
  { path: '*', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
