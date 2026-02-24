class Game {
    questions = [];
    currentIndex = 0;
    score = 0;

    constructor (questions) {
        this.questions = questions;
    }

    start() {
        const altDivs = document.querySelectorAll('.alternative');
        altDivs.forEach((altDiv, i) => {
            altDiv.addEventListener('click', () => {
                this.checkAnswer(this.currentQuestion().alternatives[i]);
    
                this.stepQuestion();
    
                this.showQuestion();
            });
        });

        this.showQuestion();

        this.displayScore();
    }
    
    showQuestion() {
        const titleDiv = document.querySelector('#title');
        titleDiv.textContent = this.currentQuestion().title;
    
        const altDivs = document.querySelectorAll('.alternative');
        altDivs.forEach((altDiv, i) => {
            altDiv.textContent = this.currentQuestion().alternatives[i];
        });
    }

    currentQuestion() {
        return this.questions[this.currentIndex];
    }

    checkAnswer(userResponse) {
        const resultDiv = document.querySelector('#result');
        const currQuestion = this.currentQuestion();

        if (currQuestion.alternatives[currQuestion.correctIndex] == userResponse) {
            resultDiv.textContent = 'Helyes válasz!';
            this.score++;
            this.displayScore();
        } else {
            resultDiv.textContent = 'Rossz válasz, helyes: '
                + currQuestion.alternatives[currQuestion.correctIndex];
        }
    }

    stepQuestion() {
        this.currentIndex++;

        if (this.currentIndex == this.questions.length) {
            this.currentIndex = 0;
        }
    }

    displayScore() {
        const scoreDiv = document.querySelector('#score');
        scoreDiv.textContent = 'Pontszám: ' + this.score;
    }
}

const questions = [
    {
        title: 'Milyen fejlesztői gyakorlat garantálja a legtöbb hibát?',
        alternatives: [
            'Egy LLM segítségül hívása, mert „úgyis jobban tudja”.',
            'A tesztelés teljes mellőzése.',
            'Egy try-catch, ami minden hibát elkap, és kiírja, hogy „valami elromlott”.',
            'Egy kódsor módosítása, amire az előző fejlesztő kommentben figyelmeztetett, hogy soha ne módosítsuk.'
        ],
        correctIndex: 1
    },
    {
        title: 'Miért hívják a Python nyelvet épp Pythonnak?',
        alternatives: [
            'Mert a kódsorok úgy tekerednek, mint egy kígyó.',
            'Mert gyorsan tanulható, de mégis képes megkínozni a fejlesztőt, ha nem figyel.',
            'Mert ha egy Python fejlesztő három napig nem alszik, elkezd sziszegni.',
            'Mert megalkotója a fejlesztése közben a "Monty Python\'s Flying Circus" forgatókönyveit olvasta.'
        ],
        correctIndex: 3
    },
    {
        title: 'Miért szeretjük a Git-et?',
        alternatives: [
            'Mert lehetőséget ad arra, hogy minden fejlesztőt egyesével hibáztathassunk, ha a projekt nem készül el időben.',
            'Mert megőrzi az összes hibát, amit már sikeresen elfelejtettünk.',
            'Mert minden commit után úgy érezzük, hogy valami nagyot alkottunk.',
            'A fentiek mindegyike miatt.'
        ],
        correctIndex: 3
    },
    {
        title: 'Mit jelez egy HTTP 418-as hiba?',
        alternatives: [
            'A szerver egy teáskanna, ezért nem képes kávét főzni.',
            'A szerver nem hajlandó válaszolni, mert éppen pihenőt tart.',
            'A szerver egy későbbi időpontban kíván válaszolni a kérésre.',
            'A szerver számára a kérés túl bonyolult.'
        ],
        correctIndex: 0
    },
];

const game = new Game(questions);
game.start();
