import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../../../sections/hero/hero.component';
import { AboutComponent } from '../../../sections/about/about.component';
import { SkillsComponent } from '../../../sections/skills/skills.component';
import { ProjectsComponent } from '../../../sections/projects/projects.component';
import { ContactComponent } from '../../../sections/contact/contact.component';

@Component({
  selector: 'app-container',
   imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {

}
