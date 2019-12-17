import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {TokenStorageService} from '../../../../auth/token-storage.service';
import {UserService} from '../../../../services/user/user.service';
import {DataOrderListOfUser} from '../dataOrderListOfUser/dataOrderListOfUser';
import {OrderListOfUser} from '../dataOrderListOfUser/orderListOfUser';
import {Subscription} from 'rxjs';
import {CancelOrder} from './dataCancelOrder/cancelOrder';
import {DataCancelOrder} from './dataCancelOrder/dataCancelOrder';
import {ConfirmationDialogComponent} from '../../../shared/confirmation-dialog/confirmation-dialog.component';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-cancel-order',
  templateUrl: './cancel-order.component.html',
  styleUrls: ['./cancel-order.component.css']
})
export class CancelOrderComponent implements OnInit {


  constructor(public dialog: MatDialog,
              private activatedRoute: ActivatedRoute,
              private token: TokenStorageService,
              private router: Router,
              private userService: UserService) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      console.log('param id : ' + this.id);
    });
    this.userId = this.token.getUserId();
    this.tokenJWT = this.token.getToken();
  }

  id: number;
  userId: string;
  sub: Subscription;
  private tokenJWT: string;
  private info: any;
  message: string;
  order: OrderListOfUser;

  orderId: number;

  ngOnInit() {
    this.getOrderId();
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  getOrderId() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getOrderById(id).subscribe(result => {
      this.order = result;
      console.log('>>>>Data detail house: ' + JSON.stringify(this.order));
    }, error => {
      console.log(error);
    });
    // this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
    //   const id = paramMap.get('id');
    //   this.userService.getOrderById(id).subscribe(next => {
    //     console.log('>>>next:' + next);
    //     this.order = next;
    //     console.log('>>>next 2:' + this.order.data.id);
    //   }, error => {
    //     console.log(error);
    //   });
    // });
  }

  cancel() {
    console.log('param id to can cel: ' + this.id);
    this.userService.cancelOrder(10).subscribe(next => {
      this.message = 'Đã hủy';
    }, error => {
      this.message = 'Hủy không thành công';
    });

  }


  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: 'Do you confirm the deletion of this data?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        // DO SOMETHING
      }
    });
  }
}
