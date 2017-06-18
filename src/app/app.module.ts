import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ReqComponent } from './req/req.component';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'blank', component: AppComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ReqComponent,
    DefaultComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [DefaultComponent]
})
export class AppModule { }
