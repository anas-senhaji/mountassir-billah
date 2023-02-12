import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { NavbarService } from "src/app/shared/navbar/navbar.service";
import { Register } from "src/app/state/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });
  loading$: Observable<boolean> | undefined;
  error$: Observable<string> | undefined;

  constructor(private fb: FormBuilder, private store: Store, public nav: NavbarService) { }

  ngOnInit() {
    this.nav.hide();
  }

  onSubmit() {
    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      this.registerForm.setErrors({ passwordsDontMatch: true });
      return;
    } else {
      const payload = {
        name: this.registerForm.value.name,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password
      };
      this.store.dispatch(new Register(payload));
    }
  }
}


