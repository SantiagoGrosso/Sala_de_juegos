import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}
  async login(email: string, password: string, event: Event) {
    event.preventDefault(); // Evita la recarga de la página al enviar el formulario
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      console.log('Autenticación exitosa:', result.user);
      if (result.user) {
        // Usuario autenticado correctamente, redirigir a la página de inicio
        this.router.navigate(['/home']);
      }
    } catch (error) {
      // Ocurrió un error durante la autenticación
      console.error('ERROR! ESA CUENTA NO EXISTE', error);
      Swal.fire({
        icon: 'error',
        title: 'Login Error',
        text: 'ERROR! ESA CUENTA NO EXISTE',
        heightAuto: false
      });
    }
  }
  
  fillFields(email: string, password: string) {
    // Obtener referencias a los campos de entrada
    const emailInput = document.querySelector('.login-username') as HTMLInputElement;
    const passwordInput = document.querySelector('.login-password') as HTMLInputElement;

    // Establecer los valores de los campos de entrada
    if (emailInput && passwordInput) {
      emailInput.value = email;
      passwordInput.value = password;
    }
  }
  
}