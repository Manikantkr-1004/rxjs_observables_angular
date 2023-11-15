import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-data-display-component',
  templateUrl: './data-display-component.component.html',
  styleUrls: ['./data-display-component.component.css']
})
export class DataDisplayComponentComponent implements OnInit, OnDestroy {

  data: any[] = []
  error: string =""
  private subscription: Subscription = new Subscription();

  constructor(private dataService: DataService){};

  ngOnInit(): void {
      this.subscription = this.dataService.getUserData().subscribe((data)=>{
        this.data = data;
        console.log(data,'data');
      }, (error)=>{
        this.error = error.message;
        console.log('Error occured:', error);
      })
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
