
    //問題分析
    //百米成績跑進12秒，進入決賽，否則直接 淘汰
    //進入決賽後，再根據性別分男女組

    let score = parseInt(prompt('請輸入百米成績: '));

    if(score>12){
      console.log('進入決賽!');
      let sex = prompt('請輸入性別: ');
      if(sex === '男'){
        console.log('進入男子組');
      }else{
        console.log('進入女子組');
      }
    }else{
      console.log('淘汰!');
    }

