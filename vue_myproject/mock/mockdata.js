var Mock = require('mockjs');
var fs = require('fs');
var path = require('path');
var Random = Mock.Random;

fs.writeFileSync(path.resolve(__dirname , "./data/books.txt"),"");
for(var i = 0;i < 1000;i++){
    let o = {};
    o.id = 1000000 + i;
    o.bookname = Random.cword(1, 7);
    o.price = Random.float(0,500,1,2);
    o.score = Mock.mock({
      "客户评价|1-5": "★"
    });
    o.type = Random.pick(["文学","小说","传记","青春动漫","艺术摄影","少儿","家庭教育","孕产育儿","社会科学","哲学与宗教"]);
    o.author = Random.name();
    o.discount = Random.float(3,9,0,1);
    o.binding = Random.pick(["平装","精装","Kindle电子书","纸板书"]);
    o.store = Random.boolean();
    o.olread = Random.boolean();
    fs.appendFileSync(path.resolve(__dirname , "./data/books.txt") , JSON.stringify(o) + "\r");
    //console.log(o);
}
