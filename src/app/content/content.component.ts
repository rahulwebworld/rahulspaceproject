import { Component, OnInit } from '@angular/core';
import { PictureService } from '../content.service';


@Component({
  selector: 'app-content',
  template: `<div></div>`
})
export class ContentComponent implements OnInit {

   title: string;
   heading: string;


  constructor(private cn: PictureService) { }

  ngOnInit() {

    // this.cn.getAll().subscribe(data => {
    //   console.log(data);
    // });

  }

}
