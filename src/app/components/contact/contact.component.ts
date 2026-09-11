import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { portfolioConfig } from "../../data/portfolio.data";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.scss",
})

export class ContactComponent {
  config = portfolioConfig;
  submitted = false;
  private fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    name: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    subject: ["", [Validators.required]],
    message: ["", [Validators.required, Validators.minLength(20)]],
  });
  
  submit() {
    this.submitted = false;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const body = encodeURIComponent(
      `Name: ${v.name}\nEmail: ${v.email}\n\n${v.message}`,
    );
    window.location.href = `mailto:${this.config.email}?subject=${encodeURIComponent(v.subject)}&body=${body}`;
    this.submitted = true;
  }
}
