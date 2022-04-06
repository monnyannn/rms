
// Calculate scores
    document.getElementById('exam').addEventListener('keyup', () =>{
        var test = document.querySelector('#test').value;
        var exam = document.querySelector('#exam').value; 
        var total;
        total = +test + +exam;
        document.getElementById('total').value = total;

        if (total > 70) {
            document.getElementById('grade').value = 'A'
        } else if (total > 60) {
            document.getElementById('grade').value = 'B'
        } else if (total > 50) {
            document.getElementById('grade').value = 'C'
        } else if (total > 40) {
            document.getElementById('grade').value = 'D'
        } else {
            document.getElementById('grade').value = 'F'
        }
        
    })
   