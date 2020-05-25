import { Component, ViewChild, OnInit } from '@angular/core';
import{ActivatedRoute}from '@angular/router'


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  passedId=null;
  passedImg=null;
  passedDef=null
  openUrl(){ window.open('https://www.youtube.com/embed/kEU9q1LOcI0', '_system'); }
  constructor(private activatedRoute:ActivatedRoute) {}
  ngOnInit() {
    this.passedId=this.activatedRoute.snapshot.paramMap.get('myid');
    this.passedImg=this.activatedRoute.snapshot.paramMap.get('myimg');
    this.passedDef=this.activatedRoute.snapshot.paramMap.get('mydef');

  } 
}
