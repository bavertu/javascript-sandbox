const clearBtn = document.querySelector('#clear');

function onClear() {
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');

    // itemList.innerHTML = '';
    // items.forEach((item) => item.remove());
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
}

// JavaScript Event Listener
// clearBtn.onclick = function () {
//     alert('Clear Items');
// };

// clearBtn.onclick = function () {
//     console.log('Clear Items');
// };

// addEventListener()
// clearBtn.addEventListener('click', () => alert('Clear Items'));

clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// setTimeout (() => clearBtn.click(), 5000);
