import { NgModule, isDevMode } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "./components/home/home.component";
import { ProductsComponent } from "./components/products/products.component";
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
    declarations:[
        AppComponent,
        HomeComponent,
        ProductsComponent,
    ],
    exports:[
        BrowserModule,
    ],
    bootstrap:[
        AppComponent
    ],
    imports: [
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: !isDevMode(),
        // Register the ServiceWorker as soon as the application is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000'
      })
    ]
})

export class AppModule{

}