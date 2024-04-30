document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById('popupModal');

    if (localStorage.getItem('currency') !== null) {
        console.log('True');
        return modal.style.display = "none";
    }
    modal.style.display = "block";

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
});


// function Currency() {
//     const curr = {USD: '$', PKR: '₨', LKR: 'රු', PHP: '₱', BRL: 'R$', EURO: '€', AED: 'د.إ'};
//     const currText = document.getElementsByClassName('pop-curr');

//     for (let currencyCode in curr) {
//         for (let i = 0; i < currText.length; i++) {
//             if (currText[i].innerText === currencyCode) {
//                 console.log(currencyCode + ': ' + curr[currencyCode]); // Log the currency symbol for the matching currency code
//                 break;
//             }
//         }
//     }
// }

const curr = {USD: '$', PKR: '₨', LKR: 'රු', PHP: '₱', BRL: 'R$', EURO: '€', AED: 'د.إ'};

function USD () {
    const currText = document.getElementById('usd').innerText;
    const data = {
        curr: currText,
        sym: curr[currText],
    };

    localStorage.setItem('currency', JSON.stringify(data));

    var modal = document.getElementById('popupModal');
    modal.style.display = "none";
    location.reload();
};

function PKR () {
    const currText = document.getElementById('pkr').innerText;
    const data = {
        curr: currText,
        sym: curr[currText],
    };

    localStorage.setItem('currency', JSON.stringify(data));

    var modal = document.getElementById('popupModal');
    modal.style.display = "none";
    location.reload();
};

function LKR () {
    const currText = document.getElementById('lkr').innerText;
    const data = {
        curr: currText,
        sym: curr[currText],
    };

    localStorage.setItem('currency', JSON.stringify(data));

    var modal = document.getElementById('popupModal');
    modal.style.display = "none";
    location.reload();
};

function PHP () {
    const currText = document.getElementById('php').innerText;
    const data = {
        curr: currText,
        sym: curr[currText],
    };

    localStorage.setItem('currency', JSON.stringify(data));

    var modal = document.getElementById('popupModal');
    modal.style.display = "none";
    location.reload();
};

function BRL () {
    const currText = document.getElementById('brl').innerText;
    const data = {
        curr: currText,
        sym: curr[currText],
    };

    localStorage.setItem('currency', JSON.stringify(data));

    var modal = document.getElementById('popupModal');
    modal.style.display = "none";
    location.reload();
};

function EURO () {
    const currText = document.getElementById('euro').innerText;
    const data = {
        curr: currText,
        sym: curr[currText],
    };

    localStorage.setItem('currency', JSON.stringify(data));

    var modal = document.getElementById('popupModal');
    modal.style.display = "none";
    location.reload();
};

function AED () {
    const currText = document.getElementById('aed').innerText;
    const data = {
        curr: currText,
        sym: curr[currText],
    };

    localStorage.setItem('currency', JSON.stringify(data));

    var modal = document.getElementById('popupModal');
    modal.style.display = "none";
    location.reload();
};