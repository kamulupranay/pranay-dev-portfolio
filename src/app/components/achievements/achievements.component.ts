import { Component } from "@angular/core";
import { achievements } from "../../data/portfolio.data";

@Component({
  selector: "app-achievements",
  standalone: true,
  templateUrl: "./achievements.component.html",
  styleUrl: "./achievements.component.scss",
})

export class AchievementsComponent {
  items = achievements;
}
