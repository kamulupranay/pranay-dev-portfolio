import { Component, HostListener, signal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { portfolioConfig } from "../../data/portfolio.data";
import { ThemeService } from "../../services/theme.service";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
})

export class NavbarComponent {
  config = portfolioConfig;
  open = signal(false);
  active = signal("home");
  links = [
    ["home", "Home"],
    ["about", "About"],
    ["skills", "Skills"],
    ["experience", "Experience"],
    ["projects", "Projects"],
    ["achievements", "Achievements"],
    ["education", "Education"],
    ["contact", "Contact"],
  ];
  constructor(public theme: ThemeService) {}
  close(id: string) {
    this.open.set(false);
    this.active.set(id);
  }
  @HostListener("window:scroll") onScroll() {
    const ids = this.links.map((x) => x[0]);
    let current = "home";
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el && window.scrollY + 140 >= el.offsetTop) current = id;
    }
    this.active.set(current);
  }
}
