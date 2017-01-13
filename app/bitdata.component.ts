import { router } from './app.router';
import { Component, NgZone, OnInit } from '@angular/core';
import {BitcoinService} from './bitcoin.service';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'bitdata',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'], 
  providers: [BitcoinService] 
})


export class BitDataComponent implements OnInit  
{
   name = 'Angular';
   bitcoindata:any[];
   Rand:number;
   Dollar:number;
   zone:NgZone
   
 
   
   ngOnInit()
   {

        this.hello();

     let newobs = Observable.interval(1000*60*5).map(x => x*1);    
     let newsub = newobs.subscribe((x)=>{
         
          this.hello();
          console.log(x);
     });

     
   }


        hello()
        {
                  this.bitcoinservice.getExchangeRates().subscribe(
       (data) => {
          this.Rand = data.rates.ZAR;
          this.Dollar = data.rates.USD;

        //console.log(data.rates.USD);
      });


     this.bitcoinservice.getBitcoinData().subscribe((data) => {
      this.bitcoindata = data;      
     
     for(let dat of this.bitcoindata)
     {
       dat.price_usd = Math.round((this.Rand/this.Dollar)*dat.price_usd*100)/100;
     }  
    });
     
        }


   constructor(private bitcoinservice:BitcoinService){}
}
