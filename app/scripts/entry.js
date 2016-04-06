// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

import Backbone from 'backbone';
import $ from 'jquery';

const tShirts = [
  {
    id: 1,
    imageUrlFront: "http://fillmurray.com/250/250",
    imageUrlBack: "http://placecage.com/250/250",
    title: "Save my Trees",
    price: 19

  },
  {
    id: 2,
    imageUrlFront: "http://fillmurray.com/250/250",
    imageUrlBack: "http://placecage.com/250/250",
    title: "Nature Lover",
    price: 19

  },
  {
    id: 3,
    imageUrlFront: "http://fillmurray.com/250/250",
    imageUrlBack: "http://placecage.com/250/250",
    title: "Forrest Walk",
    price: 19

  }
]


 const shirtsView = Backbone.View.extend({     //backbone comes with views and models. views is setting us up to create html, extend adds the html functionality
 		initialize: function(main,span,text ){
 			this.main = main;
 			this.span = span;
 			this.text = text;
// 			this.url = url;
// 			this.linkName = linkName;
 		},

 		template: function(){
 			 return `<div class=maindiv>
 			 			<div class="main"> </div>
	  						<div class="menu">
						   		<span class="menu-tabs"> one </span>
						  		<span class="menu-tabs"> two </span>
						  		<span class="menu-tabs"> three </span>
						   		<span class="menu-tabs"> four </span>
						   		<span class="menu-tabs"> five </span>
				   			</div>
  		 				<section class="title"> cat shirt </section>
  		 			</div>`

// 			return `<a href="${this.url}">$(this.linkName)</a>`
 		},
 		tagName: 'span',    ///its all a div it creates a span
 		render: function(){
 			this.el.innerHTML = this.template();
 			$('body').append(this.el)
// 			this.el.innerHTML = this.template();
// 			$('body').append(this.el)
 		}
	});


///var viewInPage = new basicView('http://google.com');
   var pinkShirt = new shirtsView();
   var blueShirt = new shirtsView();
   var yellowShirt = new shirtsView();
// var googleLink = new basicView('http://google.com', 'google');
// var tiyLink = new basicView('http://tiy.com', 'tiy');

// googleLink.render();
// tiyLink.render();
 pinkShirt.render();
 blueShirt.render();
 yellowShirt.render();


//console.log(new basicView()); //backbone view is a div 