import { Component } from "@angular/core";
import { portfolioConfig } from "../../data/portfolio.data";

@Component({
  selector: "app-footer",
  standalone: true,
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.scss",
})

export class FooterComponent {
  config = portfolioConfig;
  year = 2026;
}
