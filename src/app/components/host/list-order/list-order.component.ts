import { Component, OnInit } from '@angular/core';
import {OrderListOfUser} from '../../user/list-order-of-user/dataOrderListOfUser/orderListOfUser';
import {DataOrderListOfUser} from '../../user/list-order-of-user/dataOrderListOfUser/dataOrderListOfUser';
import {UserService} from '../../../services/user/user.service';
import {ActivatedRoute} from '@angular/router';
import {TokenStorageService} from '../../../auth/token-storage.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {
  private info: any;
// pagination setting
  pageActual = 1;
  order: OrderListOfUser;
  orderItem: DataOrderListOfUser;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private token: TokenStorageService) {
  }

  ngOnInit() {
    this.getOrderList();
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  private getOrderList() {
    this.userService.getListOrderForHost().subscribe(result => {
      this.order = result;
      console.log('>>>>order list:' + JSON.stringify(this.order));
    });
  }

  cancel() {
    console.log(this.orderItem.id);
    this.userService.cancelOrder(this.orderItem.id).subscribe(next => {
      console.log('Đã hủy');
    }, error => {
      console.log('Hủy không thành công');
    });
  }


}
