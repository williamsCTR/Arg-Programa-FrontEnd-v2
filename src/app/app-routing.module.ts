import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditeducacionComponent } from "./components/educacion/editeducacion/editeducacion.component";
import { NeweducacionComponent } from "./components/educacion/neweducacion/neweducacion.component";
import { EditExperienciaComponent } from "./components/experiencia/edit-experiencia/edit-experiencia.component";
import { NewExperienciaComponent } from "./components/experiencia/new-experiencia/new-experiencia.component";
import { EditSkillComponent } from "./components/h-ys/edit-skill/edit-skill.component";
import { NewSkillComponent } from "./components/h-ys/new-skill/new-skill.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";

const router: Routes = [
    {path:"", component:HomeComponent},
    {path:"login", component:LoginComponent},
    {path:"nuevaexp", component:NewExperienciaComponent},
    {path:"editexp/:id", component: EditExperienciaComponent},
    {path:"nuevaedu", component:NeweducacionComponent},
    {path:"editedu/:id", component: EditeducacionComponent},
    {path:"newskill",component: NewSkillComponent},
    {path:"editskill/:id",component: EditSkillComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
})
export class AppRoutingModule { }