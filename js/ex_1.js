class ex_1 { 
    constructor(time_1, time_2){
        this.time_1 = time_1;
        this.time_2 = time_2;
    }
    start(){
        log(this.time_1);
    }
    stop(){
        log('stop')
    }
  }
  
  
    function test(){
      const test = new ex_1(20, 3);
      test.start();
    }
  