import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpClientModule,HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule,Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations:[
        AppComponent,
    ],
    imports:[
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
    ],
    providers:[
        
    ],
})