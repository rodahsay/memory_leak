import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss'],
})
export class Component2Component implements OnInit {
  test1: string | undefined;
  test2: string | undefined;
  test3: string | undefined;
  test4: string | undefined;
  test5: string | undefined = "123";
  test6: string | undefined = "123";
  test7: string | undefined = "123";
  test8: string | undefined = "123";
  test9: string | undefined = "123";
  test10: string | undefined = "123";

  constructor() { }

  ngOnInit() {}

}