import {Component, OnInit} from '@angular/core';
import {OrderListOfUser} from './dataOrderListOfUser/orderListOfUser';
import {UserService} from '../../../services/user/user.service';
import {TokenStorageService} from '../../../auth/token-storage.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs';
import {DataOrderListOfUser} from './dataOrderListOfUser/dataOrderListOfUser';

@Component({
  selector: 'app-list-order-of-user',
  templateUrl: './list-order-of-user.component.html',
  styleUrls: ['./list-order-of-user.component.css']
})
export class ListOrderOfUserComponent implements OnInit {
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
    this.userService.getListOrderOfUser().subscribe(result => {
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
