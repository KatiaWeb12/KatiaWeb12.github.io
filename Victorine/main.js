let popup = document.querySelector('.popup');
let popup2 = document.querySelector('.popup2');
let griditem = document.querySelectorAll('.grid-item');
let p = document.querySelector('.k');
let l = document.querySelector('.l');
let p1 = document.querySelector('.k2');
let p12 = document.querySelector('.k3');
let img = document.querySelectorAll('.image');
let close = document.querySelector('.close');
let close2 = document.querySelector('.close2');
let button = document.querySelector('.blue');
let pink = document.querySelector('.pink');
let red = document.querySelector('.red');
let t = 0;
let name;
let ansew = 0;
let popupcont = document.querySelector('.popup-cont');
let popupcont2 = document.querySelector('.popup-cont2');
let imgSrc = ['1 вопрос.jpeg', '2 вопрос.jpg', '3 вопрос.jpg', '4 вопрос.jpg', '5 вопрос.png', '6 вопрос.jpg', '7 вопрос.jpg', '8 вопрос.jpg', '9 вопрос.png', '9 вопрос.png', '9 вопрос.png','10 вопрос.jpg', '9 вопрос.png', '9 вопрос.png', '9 вопрос.png', '9 вопрос.png', '11 вопрос.jpg', '12 вопрос.jpg', '13 вопрос.jpg', '14 вопрос.jpg', '9 вопрос.png', '15 вопрос.jpg','16 вопрос.jpg', '9 вопрос.png', '17 вопрос.jpg', '17 вопрос.jpg', '17 вопрос.jpg', '17 вопрос.jpg', '17 вопрос.jpg', '17 вопрос.jpg', '17 вопрос.jpg', '17 вопрос.jpg', '18 вопрос.jpg', '19 вопрос.jpg', '20 вопрос.jpg', '21 вопрос.jpg', '22 вопрос.jpg', '23 вопрос.jpg', '24 вопрос.jpg', '25 вопрос.jpg', '26 вопрос.jpg', '27 вопрос.jpg', '28 вопрос.jpg', '29 вопрос.jpg', '30 вопрос.jpg', '31 вопрос.jpg', '32 вопрос.jpg', '33 вопрос.jpg', '9 вопрос.png', '9 вопрос.png', '9 вопрос.png', '34 вопрос.jpg', '35 вопрос.jpg', '36 вопрос.jpg', '9 вопрос.png', '9 вопрос.png'] ;
let p2 = ['Какой мультфильм изображён на картинке?', 'Какой мультфильм изображён на картинке?', 'Какой мультфильм изображён на картинке?', 'Какой мультфильм изображён на картинке?', 'Какой мультфильм изображён на картинке?', 'Какой мультфильм изображён на картинке?', 'Какой мультфильм изображён на картинке?', 'Какой мультфильм изображён на картинке?', 'Правда ли, что рисунки персонажей во время финала мультфильма "Ледниковый период" были сделаны детьми аниматоров?', 'Работы какого знаменитого советского художника и иллюстратора послужили источником вдохновения для художников-аниматоров мультфильма "Иван царевич и серый волк"?', 'Сколько лет исполняется в 2020 году доброму летнему мультику «Каникулы в Простоквашино»?', 'Кто должен был изначально озвучивать этого персонажа, чью кандидатуру в итоге пришлось отклонить?','Порядка скольки аниматоров потрудились над сценой, где Эльза возводит свой замок в мультфильме "Холодное сердце"?', 'Правда ли то, что «Моана» — это одновременно и имя главной героини мультфльма "Моана", и слово, на многих полинезийских языках означающее «океан»?', 'Каких премий был удостоен мультфильм "Храбрая сердцем"?', 'Какая героиня является первой диснеевской принцессой?', 'Какой персонаж изображён на картинке?', 'Какой персонаж изображён на картинке?', 'Какой персонаж изображён на картинке?', 'Какой персонаж является лучшим другом Рапунцель в мультфильме "Рапунцель. Новая история"?', 'Какая диснеевская принцесса владела зимним волшебством?', 'Какой персонаж изображён на картинке?', 'Какой персонаж изображён на картинке?', 'Какой персонаж из мультфильма "Три богатыря" интересуется наукой?', 'Кого слепили Анна с Эльзой, когда играли поздней ночью? И кто ожил спустя года, чтоб не растаять никогда?', 'Он — любитель чистоты. Умывался ль утром ты? Если — нет, тогда приказ даст мочалкам он тотчас, грозный строгий командир умывальник …', 'Любит есть он бутерброд не как все, наоборот, он в тельняшке, как моряк. Звать кота, скажите, как?', 'Этот сказочный герой с хвостиком, усатый, в шляпе у него перо, сам весь полосатый, ходит он на двух ногах, в ярко-красных сапогах.', 'Она Буратино учила писать, и ключ золотой помогала искать. Та девочка-кукла с большими глазами, как неба лазурного высь, волосами, на милом лице — аккуратненький нос. Как имя её? Отвечай на вопрос.', 'В Простоквашино живёт, cлужбу там свою несёт. Почта-дом стоит у речки. Почтальон в ней — дядя …', 'Взяв для подкрепления баночку варенья, отправляется в полёт человечек-вертолёт.', 'Отвечайте на вопрос: кто в корзине Машу нёс, кто садился на пенёк и хотел съесть пирожок? Сказочку ты знаешь ведь? Кто же это был?', 'Назовите полное имя почтальона из мультфильма «Трое из Простаквашино»','Меткий стрелок по голубям из рогаток и подруга крыс из мультфильма о приключениях Чебурашки и его друзей.', 'Как звали мать Рапунцель из мультфильма "Рапунцель. Запутанная история"', 'Королевой какого государства стала Эльза в конце первой части "Холодного Сердца"?', 'Как звали посыльного коня из мультфильма "Три богатыря"?','Какие питомцы помогали Моане спасти океан?', 'Какая фраза чаще всего звучит в мультфильмах про кота Леапольда?', 'Сколько лет было Рапунцель, когда она покинула башню?', 'Чем закончилась история про русалочку Ариэль?', 'Сколько сестёр было у Золушки?', 'Какая посуда разговоривала в замке Бель?', 'В каких городах побывали герои из третей части мультфильма "Иван-Царевич и серый волк"?', 'Как звали жену Елисея из мультфильма "Три богатыря"?', 'Сколько учеников классе Симки и Нолика из мультика "Фиксики"?', 'Кто был главным злодеем в мультфильме "Большой секрет"?', 'Как назывался остров-родина Моаны?', 'Сколько лет исполнилось компании "Disney" в 2020 году?', 'Какая студия является создателем мультфильма "Новое Простоквашино"?', 'Какая студия является самой популярной?', 'В мультфильме "Новое простоквашино" зрители заметили некое противоречие со старой версией. Какую ошибку допустили создатели?', 'Верно ли высказывание "Мультфильмы "Холодное сердце", "Моана" и "Рапунцель. Запутанная история" созданы одной студией"?', 'После выпуска полнометражного мультфильма "Рапунцель. Новая история" была выпущена короткометражка. Как она называлась?', 'Как мы привыкли называть мультфильм "Frozen"?', 'Как переводится на русский название мультфильма "Miraculous?"'];
let smile = 'улыбка.png';
let smile2 = 'грусть.png';
let input = document.querySelector('input');
let p3 = ['Новое Простоквашино', 'Моана', 'Русалочка', 'Ледниковый период', 'Три богатыря', 'Иван-царевич и серый волк', 'Смурфики', 'Какой мультфильм изображён на картинке?', 'Да', 'Работы Ивана Библина', '40 лет', ' Владимир Высоцкий','Около 50', 'Да', '«Оскар», «Золотой глобус», «Лучший анимационный фильм»', 'Белоснежка', 'Алиса в стране чудес', 'Вера Павловна', 'Игрек', 'Касандра', 'Эльза', 'Герда', 'Олаф', 'Василиса', 'Олаф', 'Мойдодыр', 'Матроскин', 'Кот в сапогах', 'Мальвина', 'Печкин', 'Карлсон', 'Мишка', 'Игорь Иванович Печкин','Старуха Шепокляк', 'Готель', 'Эрендел', 'Юлий','Петух и Поросёнок', 'Ребята, давайте жить дружно!', '18 лет', 'Урсула погибла, а к Ариэль вернулся голос.', '2', 'Вся посуда', 'В Милане, Париже, Риме', 'Василиса', '5', 'Фаер', 'Мотунуи', 'почти 100 лет', 'Союзмультфильм', 'Союзмультфильм', 'В первых частях этого мультфильма было сказано, что Папу Дядя Фёдора зовут Дмитрий, а в следующей части его дочь назвали Верой Павловной.', 'да', 'Счастлива навсегда', 'Холодное сердце', 'Леди Баг и Супер кот'];
window.onclick = function(e){
	if(e.target.classList.contains('popup')){
		e.target.style.display = 'none';
	}
}
griditem.forEach( function(e, i){
	if(i%9 !== 0){
		e.classList.add('open');
	}
});

let open = document.querySelectorAll('.open');
open.forEach( function(e, i){
	e.addEventListener('click', function grid(){
		button.style.display = 'inline-block';
		e.style.background = 'black';
		popup.style.display = 'flex'; 
		input.style.display = 'none';
		p1.style.display = 'none';
		p12.style.display = 'none';
		red.style.display = 'none';
		p.textContent = p2[i];
		img[0].src = imgSrc[i];
		if(e.style.background == 'black'){
		e.removeEventListener('click', grid, false);
	}
	button.addEventListener('click', function(){
		button.style.display = 'none';
		// p.textContent = p3[i];
		p.style.display = 'none';
		button.style.justifyContent= 'center';
		input.style.display = 'flex';
		input.style.justifyContent= 'center';
		input.style.alignItems = 'center';
		red.style.display = 'flex';
		red.style.justifyContent= 'center';
		red.style.alignItems = 'center';
		// ansew = prompt('','Введите вариант ответа');
		// if(ansew==p3[i]){
		// 	alert('Верно');
		// 	е+= +e.firstChild.textContent;
		// }
		// else{
		// 	alert('Неправильно');
		// 	ansew = '';
		// 	console.log(ansew);
		// 	е-= +e.firstChild.textContent;
		// }
	});
	red.addEventListener('click', function push2(){
		// input.addEventListener('change', function push(){
		
// });
		if(input.value.toLowerCase()==p3[i].toLowerCase()){
			p1.style.display = 'inline-block';
			t+= +e.firstElementChild.textContent;
			console.log(t);
			p1.style.marginTop = '20px';
			p12.style.display = 'none';
			img[0].src = smile;
			input.value = '';
			// input.removeEventListener('change', push, false);
			red.removeEventListener('click', push2, false);
			localStorage.setItem(`${name}`, `${t}`);
		}
		else{
			p1.style.display = 'none';
			p12.style.display = 'inline-block';
			p12.style.marginTop = '20px';
			img[0].src = smile2;
			t-= +e.firstElementChild.textContent;
			console.log(t);
			input.value = '';
			// input.removeEventListener('change', push, false);
			red.removeEventListener('click', push2, false);
			// alert('Неправильно');
			// ansew = '';
			// console.log(ansew);
			// е-= +e.firstChild.textContent;
			localStorage.setItem(`${name}`, `${t}`);
		}
		p.textContent = p3[i];
		p.style.display = 'flex';
		input.style.display = 'none';
		p.style.justifyContent= 'center';
		p.style.alignItems = 'center';
		p.style.marginTop = '5%';
		red.style.display = 'none';
	});
});

});
close.addEventListener('click', function(){
		popup.style.display = 'none';
	});
close2.addEventListener('click', function(){
		popup2.style.display = 'none';
	});
// localStorage.setItem('Artur', 500);// метод, задающий пару ключ значения в локальном хранилище
// localStorage.setItem('Alisa', 100);
// localStorage.removeItem('Alisa');// метод, удаляющий пару ключ значения из локального хранилища
// // localStorage.clear('Alisa');// очищает хранилище
// // localStorage.length;// выдаёт кол-во элементов в хранилище
// // console.log(localStorage.length);
window.addEventListener('DOMContentLoaded', function(){
	name = prompt('Напиши своё имя', 'Пользователь');
	localStorage.setItem(`${name}`, `${t}`);
})
pink.addEventListener('click', function(){
	let r = name + '! Ваш результат: ' + t;
	popup2.style.display = 'inline-block';
	l.textContent = r;
})
if(localStorage.length > 10){
	localStorage.clear();
}
