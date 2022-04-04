import { Component, Input } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() account: { name: string; status: string };
  @input() id: number;
  accounts: { name: string; status: string }[];

  constructor(private acctSer: AccountService) {}

  onSetTo(status: string) {id: this.id, newStatus: status}
}
