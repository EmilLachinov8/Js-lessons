var searchParams = new URLSearchParams(window.location.search);
var userName = searchParams.get('username');
	if (searchParams.has('username') && userName !== '') {

fetch('https://api.github.com/users/'+userName)
	.then(res => res.json())
	.then(json => {
		if (json.message == "Not Found") {
			var div = document.createElement('div');
			document.body.appendChild(div);
			div.innerText = "Информация о пользователе не доступна";
		} else {

			var h1 = document.createElement('h1');
			document.body.appendChild(h1);
			h1.innerHTML = json.name;

			var div = document.createElement('div');
			document.body.appendChild(div);
			div.innerHTML = json.bio;

			var a = document.createElement('a');
			document.body.appendChild(a);
		  a.innerHTML = 'API';
			a.href = json.url;

			var img = document.createElement('img');
			document.body.appendChild(img);
			img.src = json.avatar_url;
		}
}
