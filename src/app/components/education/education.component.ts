import { Component } from "@angular/core";
import { education } from "../../data/portfolio.data";

@Component({
  selector: "app-education",
  standalone: true,
  templateUrl: "./education.component.html",
  styleUrl: "./education.component.scss",
})

export class EducationComponent {
  education = education;
}
