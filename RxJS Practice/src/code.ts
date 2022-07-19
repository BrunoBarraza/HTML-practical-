import { Observable } from "rxjs";
// import { fromEvent } from "rxjs";
// import { Subject } from "rxjs";
// import { BehaviorSubject } from "rxjs";
// import { ReplaySubject } from "rxjs";
// import { AsyncSubject } from "rxjs";
// import { merge } from "rxjs";
import { map } from 'rxjs/operators';
// import { pluck } from 'rxjs/operators';
// import { from } from "rxjs";

// // Producer. Cold Observable since it does not emits values outside of the observable.
// // Can be changed to Warm using .share(); at the end of the var.
// var observable = Observable.create((observer: any) => {
//     try {
//         observer.next('Hey guys!')
//         observer.next('How are you?')
//         setInterval(() => {
//             observer.next('I am good')
//         }, 2000)
//         // observer.complete()
//         // observer.next('This will not send')
//     } catch(err) {
//         observer.error(err)
//     }
// });

// // Observer, subscription. It includes callbacks as next, error, complete.
// var observer = observable.subscribe(
//     (x: any) => addItem(x),
//     (error: any) => addItem(error),
//     () => addItem('Completed'),
// );

// var observer2 = observable.subscribe(
//    (x: any) => addItem(x),
// );

// // Child Subscriptions. Cancels both at the same time.
// observer.add(observer2)

// // Cancel a subscription after a specified amount of time.
// setTimeout(() => {
//     observer.unsubscribe();
// }, 6001);

// setTimeout(() => {
//     var observer2 = observable.subscribe(
//         (x: any) => addItem('Subscriber 2: ' + x)
//     )
// }, 1000);

// // Hot Observable.
// var observable = fromEvent(document, 'mousemove')

// setTimeout(() => {
//     var subscription = observable.subscribe(
//         (x:any) => addItem(x)
//     )
// }, 2000);

// // Subject. Is an observer that also emits values, observable and observer.
// var subject = new Subject()

// subject.subscribe(
//     data => addItem('Observer 1: '+data),
//     err => addItem(err),
//     () => addItem('Observer 1 Completed')
// )

// subject.next('The first thing has been sent')

// var observer2 = subject.subscribe(
//     data => addItem('Observer 2: '+data)
// )

// subject.next('The second thing has been sent')
// subject.next('A third thing has been sent')

// observer2.unsubscribe();
// subject.next('A final thing has been sent')

// // Behavior Subject. Only dispatches the last emmited value.
// var subject = new BehaviorSubject('First')

// subject.subscribe(
//     data => addItem('Observer 1: '+data),
//     err => addItem(err),
//     () => addItem('Observer 1 Completed')
// )

// subject.next('The first thing has been sent')
// subject.next('...Observer 2 is about to subscribe...')

// var observer2 = subject.subscribe(
//     data => addItem('Observer 2: '+data)
// )

// subject.next('The second thing has been sent')
// subject.next('A third thing has been sent')

// observer2.unsubscribe();
// subject.next('A final thing has been sent')

// // Replay Subject.
// var subject = new ReplaySubject(2)

// subject.subscribe(
//     data => addItem('Observer 1: '+data),
//     err => addItem(err),
//     () => addItem('Observer 1 Completed')
// )

// subject.next('The first thing has been sent')
// subject.next('Another thing has been sent')
// subject.next('...Observer 2 is about to subscribe...')

// var observer2 = subject.subscribe(
//     data => addItem('Observer 2: '+data)
// )

// subject.next('The second thing has been sent')
// subject.next('A third thing has been sent')

// observer2.unsubscribe();
// subject.next('A final thing has been sent')

// // Replay Subject can put a time on the second argument.
// var subject = new ReplaySubject(3, 500)

// subject.subscribe(
//     data => addItem('Observer 1: '+data),
//     err => addItem(err),
//     () => addItem('Observer 1 Completed')
// )

// var i = 1;
// var int = setInterval(() => subject.next(i++), 100);

// setTimeout(() => {
//     var observer2 = subject.subscribe(
//         data => addItem('Observer 2: '+data)
//     )
// }, 500);

// // Async Subject. Only the very last value will be sent to the Observers, it needs to have subject.complete().
// var subject = new AsyncSubject()

// subject.subscribe(
//     data => addItem('Observer 1: '+data),
//     () => addItem('Observer 1 Completed')
// )

// var i = 1;
// var int = setInterval(() => subject.next(i++), 100);

// setTimeout(() => {
//     var observer2 = subject.subscribe(
//         data => addItem('Observer 2: '+data)
//     )
//     subject.complete()
// }, 500);

// // Merge. Merges two Observables into one.
// var observable = Observable.create((observer:any) => {
//     observer.next('Hey guys!')
// })

// var observable2 = Observable.create((observer:any) => {
//     observer.next('How is it going?')
// })

// var newObs = merge(observable, observable2)

// newObs.subscribe((x:any) => addItem(x))

// // Operators: map.
// Observable.create((observer:any) => {
//     observer.next('Hey guys!')
// })
//     .map((val:any) => val.toUpperCase())
//     .subscribe((x:any) => addItem(x))

// // Operators: pluck. ? DEPRICATED
// from([
//     { first: 'Gary', last: 'Simon', age: '34'},
//     { first: 'Jane', last: 'Simon', age: '34'},
//     { first: 'Jhon', last: 'Simon', age: '34'}
// ])
//     .pluck('first')
//     .subscribe((x:any) => addItem(x))


function addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}