import { type } from 'os';
import { TestScheduler } from 'rxjs/Rx';
import { CombineLatestSubscriber } from 'rxjs/operator/combineLatest';
import { Component,OnInit } from '@angular/core';
import {BitcoinService} from './bitcoin.service';
@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'], 
  providers: [BitcoinService] 
})
export class AppComponent implements OnInit  
{
   name = 'Angular';
   bitcoindata:any[];
   exchangerates:any[];
   Rand:any = "";
   Dollar:Number;
   
 
   
   ngOnInit()
   {
     this.bitcoinservice.getBitcoinData().subscribe((data) => this.bitcoindata = data);
     //this.bitcoinservice.getExchangeRates().subscribe((data) => this.exchangerates = data);
  //  this.Rand = Object.keys(this.bitcoindata).map((key)=>{return this.bitcoindata["id"]});
     
   }





   constructor(private bitcoinservice:BitcoinService){}
}
