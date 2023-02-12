import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NavbarService } from 'src/app/shared/navbar/navbar.service';
import { Login } from 'src/app/state/user';
import { selectUserError, selectUserLoading } from '../../state/user/user.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    remember: [false]
  });
  loading$: Observable<boolean> | undefined;
  error$: Observable<any> | undefined;

  constructor(private fb: FormBuilder, private store: Store, public nav : NavbarService) { }

  ngOnInit() {
    this.nav.hide();
    this.loading$ = this.store.select(selectUserLoading);
    this.error$ = this.store.select(selectUserError);
  }

  onSubmit() {
    this.store.dispatch(new Login(this.loginForm.value));
  }

}
