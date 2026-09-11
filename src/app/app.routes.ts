import { Routes } from "@angular/router";
import { PortfolioComponent } from "./portfolio.component";

export const routes: Routes = [
  { path: "", component: PortfolioComponent },
  { path: "about", component: PortfolioComponent, data: { fragment: "about" } },
  {
    path: "skills",
    component: PortfolioComponent,
    data: { fragment: "skills" },
  },
  {
    path: "experience",
    component: PortfolioComponent,
    data: { fragment: "experience" },
  },
  {
    path: "projects",
    component: PortfolioComponent,
    data: { fragment: "projects" },
  },
  {
    path: "achievements",
    component: PortfolioComponent,
    data: { fragment: "achievements" },
  },
  {
    path: "education",
    component: PortfolioComponent,
    data: { fragment: "education" },
  },
  {
    path: "contact",
    component: PortfolioComponent,
    data: { fragment: "contact" },
  },
  { path: "**", redirectTo: "" },
];
