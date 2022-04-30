const loanFoarm = document.querySelector('form');
const hisDiv = document.querySelector('.histy');
const resetButton = document.querySelector('.btFresh');


loanFoarm.addEventListener('submit', (juninho) =>{
    juninho.preventDefault();
    
    class Rate {
        
        amount = (Number(loanFoarm.loanInput.value));
        percentage = (parseFloat(loanFoarm.perIn.value) / 100);
        yearNum = (Number(loanFoarm.monIn.value));
        
        totalCalc = (1 + this.percentage);
        allCalc = Math.pow(this.totalCalc, this.yearNum);
        
        constructor () {
            
            this.amount;
            this.percentage;
            this.yearNum;
            this.allCalc;
            this.totalCalc;
            
            
            
            let totalAmount = (this.amount * this.allCalc).toLocaleString('en');
            let newAmount = this.amount.toLocaleString('en');
            
            if (totalAmount) {
                document.getElementById('result').textContent = `₦${totalAmount}`;
                document.getElementById('notice').textContent = `You're expected to pay the total sum of ${totalAmount} in ${this.yearNum} year(s)`;

                setTimeout(() => {
                    document.getElementById('displ1').textContent = `${newAmount}`;
                    document.getElementById('displ2').textContent = `${loanFoarm.perIn.value}%`;
                    document.getElementById('displ3').textContent = `${this.yearNum}`;
                    
                }, 1000);
                
            };
            
            if (isNaN(this.amount) || isNaN(this.percentage) || isNaN(this.yearNum)) {
                document.getElementById('result').textContent = '';
                
            };
            
        }
    }
    new Rate()
    
    resetButton.addEventListener('click', (jay) => {
        loanFoarm.reset();
    })
})


