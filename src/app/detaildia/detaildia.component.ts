import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detaildia',
  templateUrl: './detaildia.component.html',
  styleUrls: ['./detaildia.component.css']
})
export class DetaildiaComponent implements OnInit {

  value =
  `Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not ` +
  `a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord ` +
  `of the Sith, so powerful and so wise he could use the Force to influence the `;

  constructor() { }

  ngOnInit(): void {
  }

}
