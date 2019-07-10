import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {interval} from "rxjs/Observable/interval";
import 'rxjs/add/operator/skipUntil';

var observable1 = Observable.create((data: any) => {
    var i = 1;
    setInterval(() => {
        data.next(i++)
    }, 1000)
})

var observable2 = new Subject;

setTimeout(() =>{
    observable2.next('Hey!') 
}, 3000)

var newObs = observable1.skipUntil(observable2);

newObs.subscribe((x:any) => addItem(x)) ;

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

// pluck
// import {from} from "rxjs/Observable/from";
// import 'rxjs/add/operator/pluck';


//     from([
//         {first: 'Gary', last: 'Simon', age:'34'},
//         {first: 'Gary1', last: 'Simon1', age:'341'},
//         {first: 'Gary2', last: 'Simon2', age:'342'}
//     ]).pluck('first').subscribe((x:any) => addItem(x))

// function addItem(val:any) {
//     var node = document.createElement("li");
//     var textnode = document.createTextNode(val);
//     node.appendChild(textnode);
//     document.getElementById("output").appendChild(node);
// }


//toUpperCase
// import {Observable} from "rxjs/Observable";
// import 'rxjs/add/operator/map';


// Observable.create((observer:any) => {
//     observer.next('Hey guys!')
// })
// .map((val:any) => val.toUpperCase())
// .subscribe((x:any) => addItem(x))    ;


// function addItem(val:any) {
//     var node = document.createElement("li");
//     var textnode = document.createTextNode(val);
//     node.appendChild(textnode);
//     document.getElementById("output").appendChild(node);
// }



// map operator
// import {Observable} from "rxjs/Observable";
// import {merge} from 'rxjs/observable/merge';


// var observable = Observable.create((observer:any) => {
//     observer.next('Hey guys!')
// });

// var observable2 = Observable.create((observer:any) => {
//     observer.next('How is it going?')
// });

// var newObs = merge(observable, observable2);

// newObs.subscribe((x:any) => addItem(x))

// function addItem(val:any) {
//     var node = document.createElement("li");
//     var textnode = document.createTextNode(val);
//     node.appendChild(textnode);
//     document.getElementById("output").appendChild(node);
// }





//AsyncSubject
// import {AsyncSubject} from "rxjs/AsyncSubject";

// var subject = new AsyncSubject();

// subject.subscribe(
//     data => addItem('Observer 1: ' +data),
//     () => addItem('Observer 1 Completed')
// )

// var i =1;

// var int = setInterval(()=>subject.next(i++), 100);

// setTimeout(() => {
//     var observer2 = subject.subscribe(
//         data => addItem('Observer 2:' + data)
//     )
//     subject.complete();
// }, 500);

// function addItem(val:any) {
//     var node = document.createElement("li");
//     var textnode = document.createTextNode(val);
//     node.appendChild(textnode);
//     document.getElementById("output").appendChild(node);
// }


// com emite por 200 milsegundos cada um dos ultimos 30
// import {ReplaySubject} from "rxjs/ReplaySubject";

// var subject = new ReplaySubject(30, 200);

// subject.subscribe(
//     data => addItem('Observer 1: ' +data),
//     err => addItem(err),
//     () => addItem('Observer 1 Completed')
// )

// var i =1;

// var int = setInterval(()=>subject.next(i++), 100);

// setTimeout(() => {
//     var observer2 = subject.subscribe(
//         data => addItem('Observer 2:' + data)
//     )
// }, 500);

// function addItem(val:any) {
//     var node = document.createElement("li");
//     var textnode = document.createTextNode(val);
//     node.appendChild(textnode);
//     document.getElementById("output").appendChild(node);
// }



//ReplaySubject 
// import {ReplaySubject} from "rxjs/ReplaySubject";

// var subject = new ReplaySubject(2);

// subject.subscribe(
//     data => addItem('Observer 1: ' +data),
//     err => addItem(err),
//     () => addItem('Observer 1 Completed')
// )

// subject.next('The first thing has been sent');
// subject.next('Another thing has been sent');
// subject.next('...Observer 2 is about to subscribe ');


// var observer2 = subject.subscribe(
//     data => addItem('Observer 2:' + data)
// )

// subject.next('The second thing has been sent');
// subject.next('A third thing has been sent');

// observer2.unsubscribe();

// subject.next('A final thing has been sent');

// function addItem(val:any) {
//     var node = document.createElement("li");
//     var textnode = document.createTextNode(val);
//     node.appendChild(textnode);
//     document.getElementById("output").appendChild(node);
// }



//BehaviorSubject
// import {BehaviorSubject} from "rxjs/BehaviorSubject";

// var subject = new BehaviorSubject('First');

// subject.subscribe(
//     data => addItem('Observer 1: ' +data),
//     err => addItem(err),
//     () => addItem('Observer 1 Completed')
// )

// subject.next('The first thing has been sent');

// subject.next('...Observer 2 is about to subscribe ');


// var observer2 = subject.subscribe(
//     data => addItem('Observer 2:' + data)
// )

// subject.next('The second thing has been sent');
// subject.next('A third thing has been sent');

// observer2.unsubscribe();

// subject.next('A final thing has been sent');

// function addItem(val:any) {
//     var node = document.createElement("li");
//     var textnode = document.createTextNode(val);
//     node.appendChild(textnode);
//     document.getElementById("output").appendChild(node);
// }




// subject
// import {Subject} from "rxjs/Subject";

// var subject = new Subject();

// subject.subscribe(
//     data => addItem('Observer 1: ' +data),
//     err => addItem(err),
//     () => addItem('Observer 1 Completed')
// )

// subject.next('The first thing has been sent');

// subject.next('Trololo');


// var observer2 = subject.subscribe(
//     data => addItem('Observer 2:' + data)
// )

// subject.next('The second thing has been sent');
// subject.next('A third thing has been sent');

// observer2.unsubscribe();

// subject.next('A final thing has been sent');

// function addItem(val:any) {
//     var node = document.createElement("li");
//     var textnode = document.createTextNode(val);
//     node.appendChild(textnode);
//     document.getElementById("output").appendChild(node);
// }



/// Observable normal 

// import {Observable}  from "rxjs/Observable";
// import {fromEvent} from 'rxjs/Observable/fromEvent';


// var observable = fromEvent(document, 'mousemove');

// setTimeout(() => {
//     var subscription = observable.subscribe(
//         (x:any) => addItem(x)
//     )
// }, 2000);
// import 'rxjs/add/operator/share';

// var observable = Observable.create((observer:any) => {
//     try {
//     observer.next('Hey guys!')
//     observer.next('How are you');
//     setInterval(() => {
//         observer.next('i am good');
//     }, 2000)
//     // observer.complete()
//     // observer.next('This will not send')
//     } catch (err) { 
//         observer.error(err);
//     }
// }).share();

// var observer = observable.subscribe(
//     (x:any) => addItem(x),
//     (error:any) => addItem(error),
//     () => addItem('Completed')
// );

// // var observer2 = observable.subscribe(
// //     (x:any) => addItem(x)
// // );

// // observer.add(observer2);

// setTimeout(() =>{
//     // observer.unsubscribe();
//     var observer2 = observable.subscribe(
//         (x:any) => addItem('subscriber 2:' + x)
//     );
// }, 1000)

// function addItem(val:any) {
//     var node = document.createElement("li");
//     var textnode = document.createTextNode(val);
//     node.appendChild(textnode);
//     document.getElementById("output").appendChild(node);
// }