import { Component } from "@angular/core";
import { services } from "../../data/portfolio.data";

@Component({
  selector: "app-services",
  standalone: true,
  templateUrl: "./services.component.html",
  styleUrl: "./services.component.scss",
})

export class ServicesComponent {
  services = services;
}
