'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let allcookieshops = [];
let globalVar = document.getElementById('article');
    let table = document.createElement('table');
    article.appendChild(table);

function Shops (ShopName,min,max,avg) {
this.ShopName = ShopName;
 this.min = min ;
 this.max = max ;
 this.avg = avg ;
 this.customers=[];
 this.cookiesPerHoure=[];
 allcookieshops.push(this);
 this.total=0;
}


let Seattle = new Shops('Seattle',23,65,6.3);

let Tokyo = new Shops('Tokyo',3,24,1.2);

let Dubai = new Shops('Dubai',11,38,3.7);

let Paris = new Shops('Paris',20,38,2.3);

let Lima = new Shops('Lima',2,16,4.6);



Shops.prototype.customerPerHoure = function(){
    for(let i=0; i<hours.length;i++){
        let randomNum= Math.floor(Math.random() * (this.max - this.min + 1) ) + this.min;
        this.customers.push(randomNum)
        console.log(randomNum);
}
};


Shops.prototype.getcookiesNum = function(){
    for(let i =0 ;i<hours.length;i++){
           let cookieNumber = Math.floor(this.customers[i] * this.avg);
            this.cookiesPerHoure.push(cookieNumber);
            this.total=cookieNumber+this.total;
            console.log(cookieNumber);
        }
    };
       
 function HeaderRow() { 
    let trElement = document.createElement('tr');
    table.appendChild(trElement);
    let thElement = document.createElement('th');
    trElement.appendChild(thElement);

  
    for (let i = 0; i <hours.length; i++) {
      let thElement = document.createElement('th');
      trElement.appendChild(thElement);
      thElement.textContent = hours[i];

      
    }
    let totalTH = document.createElement('th');
    totalTH.textContent = 'Daily Location Total';
    trElement.appendChild(totalTH);
    
  };

  Shops.prototype.render = function(){
    let trElement = document.createElement('tr');
    table.appendChild(trElement);
    let thElement = document.createElement('th');
    trElement.appendChild(thElement);
    thElement.textContent = this.ShopName;
  
    for (let i = 0; i < hours.length; i++) {
        let cookieTD = document.createElement('td');
        cookieTD.textContent = this.cookiesPerHoure[i];
        trElement.appendChild(cookieTD);
      }
    
    let totalTD = document.createElement('th');
    totalTD.textContent = this.total;
    trElement.appendChild(totalTD);

}; 


function footerRow (){
  let trElement = document.createElement('tr');
  table.appendChild(trElement);
  let thElement = document.createElement('th');
  trElement.appendChild(thElement);
  thElement.textContent='Totals';

  for(let i= 0 ; i<hours.length;i++){
    let sum = 0 ;
    sum = Seattle.cookiesPerHoure[i] + Tokyo.cookiesPerHoure[i] +
    Paris.cookiesPerHoure[i]+ Dubai.cookiesPerHoure[i] + Lima.cookiesPerHoure[i];
  
     let td = document.createElement('td');
     trElement.appendChild(td);
     td.textContent = sum;
  
  }
};
HeaderRow();
 Seattle.customerPerHoure();
 Seattle.getcookiesNum();
 Seattle.render();


 Tokyo.customerPerHoure();
 Tokyo.getcookiesNum();
 Tokyo.render();

 Dubai.customerPerHoure();
 Dubai.getcookiesNum();
 Dubai.render();

 Paris.customerPerHoure();
 Paris.getcookiesNum();
 Paris.render();

 Lima.customerPerHoure();
 Lima.getcookiesNum();
 Lima.render();

 footerRow();
