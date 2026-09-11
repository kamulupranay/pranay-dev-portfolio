import { Component } from "@angular/core";
import { skillGroups } from "../../data/portfolio.data";

@Component({
  selector: "app-skills",
  standalone: true,
  templateUrl: "./skills.component.html",
  styleUrl: "./skills.component.scss",
})
export class SkillsComponent {
  groups = skillGroups;
}
