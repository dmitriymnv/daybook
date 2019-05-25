export class Observable<t> {
  // ... все еще не реализовано ...
}

declare global {
  interface Array<t> {
    toObservable(): Observable<t>;
  }
}

Array.prototype.toObservable = function() {
  // ...
};
