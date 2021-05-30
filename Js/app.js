'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
 
const Seattle = {
    min:23,
    max:65,
    avg:6.3,
    total : null,
    customers:[],
    cookiesPerHoure:[],
    shopName:'Seattle',
    customerPerHour:function(){
    let customers =0;
    for(let i=0; i<hours.length;i++){
   let customers= Math.floor(Math.random() * (this.max - this.min + 1) ) + this.min;
    this.customers.push(customers)
    }
    console.log(this.customers);
    },
    render:function(){
    let h2element = document.createElement('h2');
    article.appendChild(h2element);
    h2element.textContent='Seattle';

    let ulElement = document.createElement('ul');
    article.appendChild(ulElement);
    for (let i =0;i<hours.length;i++){
    let liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent=`${hours[i]} : ${this.cookiesPerHoure[i]} cookies`;
    }
    let liElement=document.createElement('li')
        ulElement.appendChild(liElement);
        liElement.textContent=`Total : ${this.total} Cookies`;
    },

    getcookiesNum:function(){
    let cookiesPerHoure =0;
    for(let i=0;i<hours.length;i++){
    cookiesPerHoure = Math.floor(this.customers[i] * this.avg);
     this.cookiesPerHoure.push(cookiesPerHoure);
     this.total=cookiesPerHoure+this.total;
    }
    console.log(this.cookiesPerHoure);
    }
}
Seattle.customerPerHour();
Seattle.getcookiesNum();
Seattle.render();

const Tokyo = {
    min:3,
    max:24,
    avg:1.2,
    total : 0,
    customers:[],
    cookiesPerHoure:[],
    shopName:'Tokyo',
    customerPerHour:function(){
        let customers =0;
        for(let i=0; i<hours.length;i++){
       let customers= Math.floor(Math.random() * (this.max - this.min + 1) ) + this.min;
        this.customers.push(customers)
    }
    console.log(this.customers);
    },
    render:function(){
    let h2element = document.createElement('h2');
    article.appendChild(h2element);
    h2element.textContent='Tokyo';

    let ulElement = document.createElement('ul');
    article.appendChild(ulElement);
    for (let i =0;i<hours.length;i++){
    let liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent=`${hours[i]} : ${this.cookiesPerHoure[i]} cookies`;
    }
    let liElement=document.createElement('li')
        ulElement.appendChild(liElement);
        liElement.textContent=`Total : ${this.total} Cookies`;
    },

    getcookiesNum:function(){
    let cookiesPerHoure =0;
    for(let i=0;i<hours.length;i++){
    cookiesPerHoure = Math.floor(this.customers[i] * this.avg);
     this.cookiesPerHoure.push(cookiesPerHoure);
     this.total=cookiesPerHoure+this.total;
    }
    console.log(this.cookiesPerHoure);
    }
}
Tokyo.customerPerHour();
Tokyo.getcookiesNum();
Tokyo.render();
 
const Dubai = {
    min:11,
    max:38,
    avg:3.7,
    total : null,
    customers:[],
    cookiesPerHoure:[],
    shopName:'Dubai',
    customerPerHour:function(){
    let customers =0;
    for(let i=0; i<hours.length;i++){
   let customers= Math.floor(Math.random() * (this.max - this.min + 1) ) + this.min;
    this.customers.push(customers)
    }
    console.log(this.customers);
    },
    render:function(){
    let h2element = document.createElement('h2');
    article.appendChild(h2element);
    h2element.textContent='Dubai';

    let ulElement = document.createElement('ul');
    article.appendChild(ulElement);
    for (let i =0;i<hours.length;i++){
    let liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent=`${hours[i]} : ${this.cookiesPerHoure[i]} cookies`;
    }
    let liElement=document.createElement('li')
        ulElement.appendChild(liElement);
        liElement.textContent=`Total : ${this.total} Cookies`;
    },

    getcookiesNum:function(){
    let cookiesPerHoure =0;
    for(let i=0;i<hours.length;i++){
    cookiesPerHoure = Math.floor(this.customers[i] * this.avg);
     this.cookiesPerHoure.push(cookiesPerHoure);
     this.total=cookiesPerHoure+this.total;
    }
    console.log(this.cookiesPerHoure);
    }
}
Dubai.customerPerHour();
Dubai.getcookiesNum();
Dubai.render();
 
const Paris = {
    min:20,
    max:38,
    avg:2.3,
    total : null,
    customers:[],
    cookiesPerHoure:[],
    shopName:'Paris',
    customerPerHour:function(){
    let customers =0;
    for(let i=0; i<hours.length;i++){
   let customers= Math.floor(Math.random() * (this.max - this.min + 1) ) + this.min;
    this.customers.push(customers)
    }
    console.log(this.customers);
    },
    render:function(){
    let h2element = document.createElement('h2');
    article.appendChild(h2element);
    h2element.textContent='Paris';

    let ulElement = document.createElement('ul');
    article.appendChild(ulElement);
    for (let i =0;i<hours.length;i++){
    let liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent=`${hours[i]} : ${this.cookiesPerHoure[i]} cookies`;
    }
    let liElement=document.createElement('li')
        ulElement.appendChild(liElement);
        liElement.textContent=`Total : ${this.total} Cookies`;
    },

    getcookiesNum:function(){
    let cookiesPerHoure =0;
    for(let i=0;i<hours.length;i++){
    cookiesPerHoure = Math.floor(this.customers[i] * this.avg);
     this.cookiesPerHoure.push(cookiesPerHoure);
     this.total=cookiesPerHoure+this.total;
    }
    console.log(this.cookiesPerHoure);
    }
}
Paris.customerPerHour();
Paris.getcookiesNum();
Paris.render();

 
const Lima = {
    min:2,
    max:16,
    avg:4.6,
    total : null,
    customers:[],
    cookiesPerHoure:[],
    shopName:'Lima',
    customerPerHour:function(){
    let customers =0;
    for(let i=0; i<hours.length;i++){
   let customers= Math.floor(Math.random() * (this.max - this.min + 1) ) + this.min;
    this.customers.push(customers)
    }
    console.log(this.customers);
    },
    render:function(){
    let h2element = document.createElement('h2');
    article.appendChild(h2element);
    h2element.textContent='Lime';

    let ulElement = document.createElement('ul');
    article.appendChild(ulElement);
    for (let i =0;i<hours.length;i++){
    let liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent=`${hours[i]} : ${this.cookiesPerHoure[i]} cookies`;
    }
    let liElement=document.createElement('li')
        ulElement.appendChild(liElement);
        liElement.textContent=`Total : ${this.total} Cookies`;
    },

    getcookiesNum:function(){
    let cookiesPerHoure =0;
    for(let i=0;i<hours.length;i++){
    cookiesPerHoure = Math.floor(this.customers[i] * this.avg);
     this.cookiesPerHoure.push(cookiesPerHoure);
     this.total=cookiesPerHoure+this.total;
    }
    console.log(this.cookiesPerHoure);
    }
}
Lima.customerPerHour();
Lima.getcookiesNum();
Lima.render();