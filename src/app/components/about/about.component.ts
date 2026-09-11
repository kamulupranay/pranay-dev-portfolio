import { Component } from "@angular/core";
import { stats } from "../../data/portfolio.data";

@Component({
  selector: "app-about",
  standalone: true,
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.scss",
})

export class AboutComponent {
  stats = stats;
}
