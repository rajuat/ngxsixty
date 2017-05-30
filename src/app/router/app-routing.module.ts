import { ContactComponent } from './../contact/contact.component';
import { ScheduleComponent } from './../schedule/schedule.component';
import { DietComponent } from './../diet/diet.component';
import { WhyUsComponent } from './../why-us/why-us.component';
import { AboutUsComponent } from './../about-us/about-us.component';
import { Routes, RouterModule } from "@angular/router"
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'about', component: AboutUsComponent },
    { path: 'why', component: WhyUsComponent },
    { path: 'diet', component: DietComponent },
    { path: 'schedule', component: ScheduleComponent },
    { path: 'contact', component: ContactComponent }    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}