const quiz = [
    {
        question:'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
        answers: [
            'スーパーファミコン',
            'プレイステーション２',
            'ニンテンドースイッチ',
            'ニンテンドーDS'
        ],
        correct: 'ニンテンドーDS'
    }, {
        question:'糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
        answers: [
            'MOTHER2',
            'スーパーマリオブラザーズ3',
            'スーパードンキーコング',
            '星のカービィ'
        ],
        correct: 'MOTHER2'
    }, {
        question:'ファイナルファンタジーIVの主人公の名前は？',
        answers: [
            'フリオニール',
            'クラウド',
            'ディーダ',
            'セシル'
        ],
        correct: 'セシル'
    }
];

const quizlength = quiz.length; 
let quizindex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonlength = $button.length;

//定数の文字列をHTMLに反映させる
const setupQuiz = () =>{
    document.getElementById('js-questoin').textContent = quiz[quizindex].question;
    
    
        let butttonindex = 0;
        let buttonlength = $button.length;
        while(butttonindex < buttonlength){
            $button[butttonindex].textContent = quiz[quizindex].answers[butttonindex];
            butttonindex++;
        }
}

    setupQuiz();

    const clickHandler = (e) =>{
       
            if ( quiz[quizindex].correct === e.target.textContent) {
                window.alert('正解！');
                score++;
            } else {
                window.alert('不正解！');
            }

        quizindex++;
        


        if( quizindex < quizlength){
            //問題数がまだあればこちらを実行
            setupQuiz();
        }　else   {
            //問題数がもうなければこちらを実行
            window.alert('終了！あなたの正解数は' + score + '/' + quizlength + 'です！');
        }

    };

    let handlerindex = 0;
    
   while (handlerindex < buttonlength) {
    $button [handlerindex].addEventListener('click',(e) =>{
        clickHandler(e);
    });
      
    handlerindex++;
   }
