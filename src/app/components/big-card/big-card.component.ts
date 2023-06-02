import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string = " " // A IMAGEM ESTA SENDO ADD NO HOME...HTML
  @Input()
  cardTitle:string = " "
  @Input()
  cardParagrafo:string = " "
  @Input()
  cardDate:string = " "

  constructor() { }

  ngOnInit(): void {
  }

}
