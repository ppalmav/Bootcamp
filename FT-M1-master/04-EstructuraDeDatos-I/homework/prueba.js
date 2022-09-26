function Queue() {
    class queue{
      constructor(){
        this.Queue =[];
      }
      enqueue(arg){
        this.stack=this.stack.push(arg);
        return this.stack;
      }
      dequeue(){
        if(stack.length>0){
          this.stack=this.stack.shift();
          return this.stack;
        }
        else {
          return undefined;
        }
      }
      size(){
        return this.stack.length;
      }
    }
    return queue;
  }
pila= new Queue();

pila.size();
pila.enqueue();