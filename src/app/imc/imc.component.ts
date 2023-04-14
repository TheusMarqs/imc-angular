import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Options } from '@popperjs/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent {
  resultado: string = '';
  genero: string = '';
  peso: number = 0;
  altura: number = 0;
  alturaFinal: number = 0;
  msg: string = '';


  calcularImc() {
    const alturaFinal = this.altura *= this.altura;
    const resultado_conta = (this.peso / alturaFinal) * 10000;

    if (this.genero == 'h') {
      if (resultado_conta < 20) {
        this.msg = "Abaixo do normal";
      } else if (resultado_conta < 25) {
        this.msg = "Normal";
      } else if (resultado_conta < 30) {
        this.msg = "Obesidade leve";
      } else if (resultado_conta < 40) {
        this.msg = "Obesidade moderada";
      } else {
        this.msg = "Obesidade mórbida";
      }
    }
    else {
      if (resultado_conta < 19) {
        this.msg = "Abaixo do normal";
      } else if (resultado_conta < 24) {
        this.msg = "Normal";
      } else if (resultado_conta < 29) {
        this.msg = "Obesidade leve";
      } else if (resultado_conta < 39) {
        this.msg = "Obesidade moderada";
      } else {
        this.msg = "Obesidade mórbida";
      }
    }

    this.resultado = this.msg + resultado_conta;
  }




}
