
const max = (maximo) => {
    var num = maximo[0];
      for(i=0; i <= maximo.length-1; i++){
        if(maximo[i]> num)
         num = maximo[i];
      }
       return num;
  }




describe('find max', function() {
    it('simpleOne', function() {
        var maximo = [5,1,4,7,1,2];
        var num = maximo[0];
        expect(answer).toEqual(7);
    });
});

describe('find max', function() {
    it('simpleOne', function() {
        var maximo = [3, 4, 12, 1, 8];
        var num = maximo[0];
        expect(answer).toEqual(12);
    });
});

describe('find max', function() {
    it('simpleOne', function() {
        var maximo = [-1, 6, 3, 2.2, -10, -4];
        var num = maximo[0];
        expect(answer).toEqual(6);
    });
});