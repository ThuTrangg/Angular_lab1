import { Component, OnInit } from "@angular/core";
import { User } from "../User";
@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  user: User = {
    name: "Trang",
    price: 220,
    desc: "i love you"
  };
  onclick(a) {
    this.user.desc = !this.user.desc;
  }
  hendKeyup(b) {
    this.user.name = b.target.value;
  }
}
