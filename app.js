'use strict'

{
    const quiz = [
    {
        question: '鬼滅の刃の主人公の名前は？',
        answers: [
            '炭治郎',
            '宗治郎',
            '桃治郎',
            '空治郎'
        ],
        conrrect:'炭治郎'
    },{
        question: '炭治郎の声優は誰？',
        answers: [
            '松岡禎丞',
            '下野紘',
            '花江夏樹',
            '櫻井孝宏'
        ],
        conrrect: '花江夏樹'

    },{
        question: 'アニメ鬼滅の刃の主題歌は？',
        answers: [
            '蒼蓮華',
            '紅蓮華',
            '緑蓮華',
            '紫蓮華'
        ],
        conrrect: '紅蓮華'

    },{
        question: '炭治郎が初めて倒した鬼は？',
        answers: [
            '塁',
            '手鬼',
            '響凱',
            '獪岳'
        ],
        conrrect: '手鬼'

    }
    ];
   const quizLength = quiz.length;
   let quizIndex = 0;
   let score = 0;


    const $button = document.getElementsByTagName('button');
    const buttonLength = $button.length;
     
    //クイズの問題文、選択肢を定義
    const setupQuiz = () => {
        document.getElementById('js-question').textContent = quiz[quizIndex].question;
        let buttonIndex = 0;
        
        while(buttonIndex < buttonLength){
            $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
            buttonIndex++;
        }
    }
    setupQuiz();
    


    const clickHandler = (e)=> {
        if(quiz[quizIndex].conrrect === e.target.textContent){
            window.alert('正解！');
            score++;
        }else {
            window.alert('不正解！');
        }

        quizIndex++;

        if(quizIndex < quizLength){
            setupQuiz();
        }else {
            window.alert('終了！あなたの正解数は'+ score + '/' + quizLength + 'です！')
        }
    };

    let handlerIndex = 0;
    while (handlerIndex < buttonLength) {
        $button[handlerIndex].addEventListener('click', (e)=> {
            clickHandler(e);
        });
        handlerIndex++;
    }
}
