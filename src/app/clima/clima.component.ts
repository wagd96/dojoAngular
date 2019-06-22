import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  private resultado = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  consultar(ciudad){
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad.value}&APPID=bf8fe02fb5288ea367500fa2eab2fd09`)
    .subscribe(
      result =>{
        this.resultado = result;
      },
      error=>{
        console.log("Error")
      }
    )
  }

}
