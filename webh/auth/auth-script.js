button1.onclick = function() {
    alert('Вы действительно хотите закрыть страницу?')
}

button2.onclick = async function() {
    const user_login = document.getElementById("input_1");
    const user_password = document.getElementById("input_2");
    let req = await fetch("/login", {
        method: 'POST',
        headers:  {
        'Content-Type':'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            login: user_login,
            password: user_password,
        })
    })
    if (req.status == '200'){
        let token = await req.json();
        console.log(token);
        localStorage.setItem(token['id'],log)
        alert('Вход выполнен');
        const resp = await (await fetch('/table')).text();
        body.innerHTML = resp;
      }
      else{
        alert("Ошибка данных");
      }
}