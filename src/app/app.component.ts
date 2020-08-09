import { Component, OnInit } from '@angular/core';
import { PictureService } from './content.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rahulapp';
  spacedata;
  filterdata=[];
  loading = false;
  landsuccess=[];
  button1: number = 2006;
  buttonClicked: boolean = false;
  buttonClicked1: boolean = false;
  buttonClicked2: boolean = false;
  buttonClicked3: boolean = false;
  buttonClicked4: boolean = false;
  buttonClicked5: boolean = false;
  buttonClicked6: boolean = false;
  buttonClicked7: boolean = false;
  buttonClicked8: boolean = false;
  buttonClicked9: boolean = false;
  buttonClicked10: boolean = false;
  buttonClicked11: boolean = false;
  buttonClicked12: boolean = false;
  buttonClicked13: boolean = false;
  buttonClicked14: boolean = false;

  isTrue:boolean = false;
  isFalse:boolean = false;
  isTrueLand: boolean = false;
  isFalseLand: boolean = false;



  
  filterlandsuccess=[];

  constructor(private cn: PictureService) { }

  ngOnInit() {
    this.cn.getAll().subscribe(data => {
      this.spacedata = data;
      console.log( this.spacedata);

      for(let d of this.spacedata) {
        this.landsuccess.push(d.rocket.first_stage.cores);
      }
      console.log( this.landsuccess);

    });

    // for(const data of this.spacedata) {
    //   this.landsuccess.push(data.rocket.first_stage.cores);
    //  }


  }

  onLaunch(value) {
    this.loading = true;
    if(value) {
      this.isTrue = !this.isTrue;
    }
    if(!value) {
      this.isFalse = !this.isFalse;

    }
      
    this.filterdata = [];
    this.filterdata.push(this.spacedata.filter(data => data.launch_success === value));
    this.buttonClicked = true;
    this.filterdata = this.filterdata[0];
    this.loading = false;
    for(let d of this.filterdata) {
      this.filterlandsuccess = [];
      this.filterlandsuccess.push(d.rocket.first_stage.cores);
    }

  }

  onLand(value) {
    this.loading = true;
    this.buttonClicked = true;
    if(value) {
      this.isTrueLand = !this.isTrueLand;
    }
    if(!value) {
      this.isFalseLand = !this.isFalseLand;

    }

    this.filterdata = [];
    this.filterdata = this.spacedata.filter(data => data.rocket.first_stage.cores[0].land_success === value);
    this.buttonClicked = true;
   // this.filterdata = this.filterdata[0];
    this.loading = false;
    for(let d of this.filterdata) {
      this.filterlandsuccess = [];
      this.filterlandsuccess.push(d.rocket.first_stage.cores[0]);
    }
    // this.cn.getSuccesLand().subscribe(data => {
    //   this.spacedata = data;
    //   for(let d of this.spacedata) {
    //     this.landsuccess.push(d.rocket.first_stage.cores);
    //   }
    //   this.loading = false;
    // });
  }

  onYearLaunch(value) {
    this.loading = true;
      if(value === '2006') {
        this.buttonClicked = !this.buttonClicked;
        if(!this.buttonClicked) {
          this.filterdata.pop();
        }
    } else if (value==='2007') {
      this.buttonClicked1 = !this.buttonClicked1;
      if(!this.buttonClicked1) {
        this.filterdata.pop();
      }
    } else if (value==='2008') {
      this.buttonClicked2 = !this.buttonClicked2
      if(!this.buttonClicked2) {
        this.filterdata.pop();
      }
    } else if(value==='2009') {
      this.buttonClicked3 = !this.buttonClicked3
      if(!this.buttonClicked3) {
        this.filterdata.pop();
      }
    } else if(value === '2010') {
      this.buttonClicked4 = !this.buttonClicked4;
      if(!this.buttonClicked4) {
        this.filterdata.pop();
      }
    } else if(value === '2011') {
      this.buttonClicked5 = !this.buttonClicked5
      if(!this.buttonClicked5) {
        this.filterdata.pop();
      }
    } else if(value === '2012') {
      this.buttonClicked6 = !this.buttonClicked6;
      if(!this.buttonClicked6) {
        this.filterdata.pop();
      }
    }
    else if(value === '2013') {
      this.buttonClicked7 = !this.buttonClicked7;
      if(!this.buttonClicked7) {
        this.filterdata.pop();
      }
    }
    else if(value === '2014') {
      this.buttonClicked8 = !this.buttonClicked8;
      if(!this.buttonClicked8) {
        this.filterdata.pop();
      }
    }
    else if(value === '2015') {
      this.buttonClicked9 = !this.buttonClicked9;
      if(!this.buttonClicked9) {
        this.filterdata.pop();
      }
    }
    else if(value === '2016') {
      this.buttonClicked10 = !this.buttonClicked10;
      if(!this.buttonClicked10) {
        this.filterdata.pop();
      }
    }
    else if(value === '2017') {
      this.buttonClicked11 = !this.buttonClicked11
    }
    else if(value === '2018') {
      this.buttonClicked12 = !this.buttonClicked12;
      if(!this.buttonClicked12) {
        this.filterdata.pop();
      }
    }
    else if(value === '2019') {
      this.buttonClicked13 = !this.buttonClicked13;
      if(!this.buttonClicked13) {
        this.filterdata.pop();
      }
    }
    else if(value === '2020') {
      this.buttonClicked14 = !this.buttonClicked14;
      if(!this.buttonClicked14) {
        this.filterdata.pop();
      }
    }
    this.filterdata = [];
    this.filterdata.push(this.spacedata.filter(data => data.launch_year === value));
    // for (let i=0; i<this.filterdata.length; i++) {
    //   this.filterdata = this.filterdata[i];
    // }
       this.filterdata = this.filterdata[0];
      this.loading = false;
      for(let d of this.filterdata) {
        this.filterlandsuccess = [];
        this.filterlandsuccess.push(d.rocket.first_stage.cores);
      }
    
  }


}
