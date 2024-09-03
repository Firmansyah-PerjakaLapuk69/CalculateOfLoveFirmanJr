let padilAndinCount = 0;
let fikriCount = 0;
let akbarCount = 0;
let teduhCount = 0;

document.getElementById('love-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name1 = document.getElementById('name1').value.trim().toLowerCase();
    const name2 = document.getElementById('name2').value.trim().toLowerCase();
    
    if (name1 && name2) {
        let message;

        // Kondisi khusus untuk nama Padil dan Andin
        if ((name1 === 'padil' && name2 === 'andin') || (name1 === 'andin' && name2 === 'padil')) {
            padilAndinCount++;
            
            if (padilAndinCount === 1) {
                message = 'Padil & Andin = Kalian tidak mungkin akan bersatu 😄';
            } else if (padilAndinCount === 2) {
                message = 'Padil & Andin = Ada harapan untuk kalian berdua! 😍';
            } else if (padilAndinCount === 3) {
                message = 'Padil & Andin = Udah ah gue males';
            } else if (padilAndinCount === 4) {
                message = ''; // Tidak ada output
                location.reload(); // Refresh halaman setelah kondisi padilAndinCount === 4
            }
        } 
        // Kondisi khusus untuk nama Fikri
        else if (name1 === 'fikri' || name2 === 'fikri') {
            fikriCount++;
            
            if (fikriCount === 1) {
                message = 'Kamu pasti lebih mencintai tobrut.';
            } else if (fikriCount === 2) {
                message = 'tes 2';
            } else if (fikriCount === 3) {
                message = 'tes 3';
            }
        }
        // Kondisi khusus untuk nama Akbar
        else if (name1 === 'akbar' || name2 === 'akbar') {
            akbarCount++;
            
            if (akbarCount === 1) {
                message = 'Kamu sudah tua, jangan main perhitungan cinta.';
            } else if (akbarCount === 2) {
                message = 'tes 2';
            } else if (akbarCount === 3) {
                message = 'tes 3';
            }
        }
        // Kondisi khusus untuk nama Teduh
        else if (name1 === 'teduh' || name2 === 'teduh') {
            teduhCount++;
            
            if (teduhCount === 1) {
                message = 'Kamu sudah tua, jangan main perhitungan cinta.';
            } else if (teduhCount === 2) {
                message = '';
            } else if (teduhCount === 3) {
                message = 'tes 3';
            }
        }
        // Kondisi khusus untuk nama Panji dan Tasya
        else if ((name1 === 'panji' && name2 === 'tasya') || (name1 === 'tasya' && name2 === 'panji')) {
            message = 'Panji & Tasya = Kalian ditakdirkan bersatu😘';
        } 
        else {
            const lovePercentage = Math.floor(Math.random() * 100) + 1;
            
            if (lovePercentage === 100) {
                message = `${name1} & ${name2} = ${lovePercentage}% saling mencintai!`;
            } else if (lovePercentage > 70) {
                message = `${name1} & ${name2} = ${lovePercentage}% saling jatuh cinta!`;
            } else if (lovePercentage > 40) {
                message = `${name1} & ${name2} = ${lovePercentage}% semangat agar dia jatuh cinta!`;
            } else {
                message = `${name1} & ${name2} = ${lovePercentage}% dia tidak mungkin jatuh cinta, seharusnya kamu sadar diri.`;
            }
        }

        if (padilAndinCount !== 4) { // Pastikan tidak ada output jika padilAndinCount === 4
            document.querySelector('.result').textContent = message;
        } else {
            document.querySelector('.result').textContent = '';
        }
    } else {
        document.querySelector('.result').textContent = 'Please enter both names.';
    }
});
