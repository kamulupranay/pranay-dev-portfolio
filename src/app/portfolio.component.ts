import { Component, AfterViewInit, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroComponent } from "./components/hero/hero.component";
import { AboutComponent } from "./components/about/about.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { AchievementsComponent } from "./components/achievements/achievements.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ServicesComponent } from "./components/services/services.component";
import { EducationComponent } from "./components/education/education.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: "app-portfolio",
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    AchievementsComponent,
    ProjectsComponent,
    ServicesComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `<app-navbar />
    <main>
      <app-hero /><app-about /><app-skills /><app-experience /><app-achievements /><app-projects /><app-services /><app-education /><app-contact />
    </main>
    <app-footer />`,
  styleUrl: "./app.component.scss",
})

export class PortfolioComponent implements AfterViewInit {
  private route = inject(ActivatedRoute);
  ngAfterViewInit() {
    const fragment = this.route.snapshot.data["fragment"] as string | undefined;
    if (fragment) {
      setTimeout(
        () =>
          document
            .getElementById(fragment)
            ?.scrollIntoView({ behavior: "smooth", block: "start" }),
        100,
      );
    }
  }
}
