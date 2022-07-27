import { Component, OnInit, Input, ViewChild, ElementRef, ContentChild } from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent implements OnInit {
  @Input("srvElement") element: { type: string; name: string; content: string }; //Any parent component can bind to this property now.
  @Input() name: string;
  @ViewChild("heading", { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {}

  ngOnInit(): void {}
}
