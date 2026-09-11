import { Component } from "@angular/core";
import { experiences } from "../../data/portfolio.data";

@Component({
  selector: "app-experience",
  standalone: true,
  templateUrl: "./experience.component.html",
  styleUrl: "./experience.component.scss",
})

export class ExperienceComponent {
  experiences = experiences;
}
