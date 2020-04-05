class View {
    constructor(a, b) {
        this.calc = JSON.parse(localStorage.getItem(`calc ${a}`)) || '';
        this.display = JSON.parse(localStorage.getItem(`display ${a}`)) || '0';

        this.app = this.getElement('.app');
        this.calculator = this.createElement('div', 'calculator');
        this.div = this.createElement('div');
        this.divCalc = this.createElement('div', 'calc');
        this.divCalc.id = a;
        this.divDisplay = this.createElement('div', 'display');
        this.divDisplay.id = b;
        this.divDisplay.textContent = '0';
        this.divButton = this.createElement('div', 'button');
        this.table = this.createElement('table', 'table');
        this.tbody = this.createElement('tbody');

        this.trOne = this.createElement('tr');

        this.tdClear = this.createElement('td', 'clear');
        this.tdClear.colSpan = '3';
        this.allclearButton = this.createElement('button', 'operator');
        this.allclearButton.textContent = 'AC';
        this.allclearButton.value = 'AC';

        this.tdDivclasse = this.createElement('td', 'divclasse');
        this.divideButton = this.createElement('button', 'operator');
        this.divideButton.textContent = '/';
        this.divideButton.value = '/';
        
        this.tdClear.append(this.allclearButton);
        this.tdDivclasse.append(this.divideButton);
        this.trOne.append(this.tdClear, this.tdDivclasse)

        this.trTwo = this.createElement('tr');

        this.tdSeven = this.createElement('td', 'seven');
        this.sevenButton = this.createElement('button', 'operator');
        this.sevenButton.textContent = '7';
        this.sevenButton.value = '7';
        
        this.tdEight = this.createElement('td', 'eight');
        this.eightButton = this.createElement('button', 'operator');
        this.eightButton.textContent = '8';
        this.eightButton.value = '8';

        this.tdNine = this.createElement('td', 'nine');
        this.nineButton = this.createElement('button', 'operator');
        this.nineButton.textContent = '9';
        this.nineButton.value = '9';

        this.tdMultiphy = this.createElement('td', 'multiply');
        this.multiphyButton = this.createElement('button', 'operator');
        this.multiphyButton.textContent = '*';
        this.multiphyButton.value = '*';

        this.tdSeven.append(this.sevenButton);
        this.tdEight.append(this.eightButton);
        this.tdNine.append(this.nineButton);
        this.tdMultiphy.append(this.multiphyButton);
        this.trTwo.append(this.tdSeven, this.tdEight, this.tdNine, this.tdMultiphy);

        this.trThree = this.createElement('tr');

        this.tdFour = this.createElement('td', 'four');
        this.fourButton = this.createElement('button', 'operator');
        this.fourButton.textContent = '4';
        this.fourButton.value = '4';
        
        this.tdFive = this.createElement('td', 'five');
        this.fiveButton = this.createElement('button', 'operator');
        this.fiveButton.textContent = '5';
        this.fiveButton.value = '5';
                
        this.tdSix = this.createElement('td', 'six');
        this.sixButton = this.createElement('button', 'operator');
        this.sixButton.textContent = '6';
        this.sixButton.value = '6';

        this.tdSubtract = this.createElement('td', 'subtract');
        this.subtractButton = this.createElement('button', 'operator');
        this.subtractButton.textContent = '-';
        this.subtractButton.value = '-';
        
        this.tdFour.append(this.fourButton);
        this.tdFive.append(this.fiveButton);
        this.tdSix.append(this.sixButton);
        this.tdSubtract.append(this.subtractButton);
        this.trThree.append(this.tdFour, this.tdFive, this.tdSix, this.tdSubtract);

        this.trFour = this.createElement('tr');

        this.tdOne = this.createElement('td', 'one');
        this.oneButton = this.createElement('button', 'operator');
        this.oneButton.textContent = '1';
        this.oneButton.value = '1';

        this.tdTwo = this.createElement('td', 'two');
        this.twoButton = this.createElement('button', 'operator');
        this.twoButton.textContent = '2';
        this.twoButton.value = '2';

        this.tdThree = this.createElement('td', 'three');
        this.threeButton = this.createElement('button', 'operator');
        this.threeButton.textContent = '3';
        this.threeButton.value = '3';

        this.tdAdd = this.createElement('td', 'add');
        this.addButton = this.createElement('button', 'operator');
        this.addButton.textContent = '+';
        this.addButton.value = '+';

        this.tdOne.append(this.oneButton);
        this.tdTwo.append(this.twoButton);
        this.tdThree.append(this.threeButton);
        this.tdAdd.append(this.addButton);
        this.trFour.append(this.tdOne, this.tdTwo, this.tdThree, this.tdAdd);

        this.trFive = this.createElement('tr');

        this.tdZero = this.createElement('td', 'zero');
        this.tdZero.colSpan = '3';
        this.zeroButton = this.createElement('button', 'operator');
        this.zeroButton.textContent = '0';
        this.zeroButton.value = '0';

        this.tdEqual = this.createElement('td', 'equals');
        this.equalButton = this.createElement('button', 'operation');
        this.equalButton.textContent = '=';
        this.equalButton.value = '=';

        this.tdZero.append(this.zeroButton);
        this.tdEqual.append(this.equalButton);
        this.trFive.append(this.tdZero, this.tdEqual);

        this.tbody.append(this.trOne, this.trTwo, this.trThree, this.trFour, this.trFive);
        this.table.append(this.tbody);
        this.divButton.append(this.table);
        this.div.append(this.divCalc, this.divDisplay);
        this.calculator.append(this.div, this.divButton);
        this.app.append(this.calculator)
    }

    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)
        return element
    }

    getElement(selector) {
        const element = document.querySelector(selector)
        return element
    }

    displayCalculator(){
        document.getElementById(this.divCalc.id).innerText = `${this.calc}`;
        document.getElementById(this.divDisplay.id).innerText = `${this.display}` || '0';
    }

    refeshCalculator(id, event, result){
        if(event != undefined) {
            let value = event.target.value;
            switch (value) {
                case "=":
                    this.display = result;
                    localStorage.setItem(`calc ${id}`, JSON.stringify(this.calc))
                    localStorage.setItem(`display ${id}`, JSON.stringify(this.display))
                    break;
                case "+":
                    this.calc += "+";
                    this.display = "+";
                    localStorage.setItem(`calc ${id}`, JSON.stringify(this.calc))
                    localStorage.setItem(`display ${id}`, JSON.stringify(this.display))
                    break;
                case "-":
                    this.calc += "-";
                    this.display = "-";
                    localStorage.setItem(`calc ${id}`, JSON.stringify(this.calc))
                    localStorage.setItem(`display ${id}`, JSON.stringify(this.display))
                    break;
                case "*":
                    this.calc += "*";
                    this.display = "*";
                    localStorage.setItem(`calc ${id}`, JSON.stringify(this.calc))
                    localStorage.setItem(`display ${id}`, JSON.stringify(this.display))
                    break;
                case "/":
                    this.calc += "/";
                    this.display = "/";
                    localStorage.setItem(`calc ${id}`, JSON.stringify(this.calc))
                    localStorage.setItem(`display ${id}`, JSON.stringify(this.display))
                    break;
                case "AC":
                    this.calc = '';
                    this.display = '';
                    localStorage.setItem(`calc ${id}`, JSON.stringify(this.calc))
                    localStorage.setItem(`display ${id}`, JSON.stringify(this.display))
                    break;
                default:
                    this.calc += value;
                    this.display += value;
                    localStorage.setItem(`calc ${id}`, JSON.stringify(this.calc))
                    localStorage.setItem(`display ${id}`, JSON.stringify(this.display))
                    break;
            }
        }
        this.displayCalculator()
    }

}