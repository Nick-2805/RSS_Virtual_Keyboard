
import './style.css'
const letterObj = {
	ru: {
			ArrDown:  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],
			ArrUp: ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],
		},
	eng: {
		ArrDown: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace','Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del','CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", "Enter", "Shift", 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', "Alt", '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],
		ArrUp: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace','Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del','CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', "Alt", '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],
	}
}
const engArrDown = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'], ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'], ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", "Enter"], ["Shift", 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift'], ['Ctrl', 'Win', 'Alt', ' ', "Alt", '&#9668;', '&#9660;', '&#9658;', 'Ctrl']]
const keyArr = [['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'], ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'], ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'], ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'], ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']]
let flagHight = false;
let flagLang = false
let arr = []
let text;

window.addEventListener('load', () => {
	//arr = getArr()
	createRowBtns(engArrDown)
	const keyboard = document.querySelector('.keyboard'),
		btns = document.querySelectorAll('.btn-key'),
			CTRL = document.querySelector('.Ctrl '),
				ALT = document.querySelector('.ALT '),
					spans = document.querySelectorAll('span'),
						textar = document.querySelector('.textarea')
	
						console.log(textar.textContent)

/***************************************************************************** */
	const listener_keyboards = function(event){
		
		
		console.log(event.target.lastChild)
		spans.forEach(span => {
			let el = span.parentNode
				//	console.log(span.textContent)
			const AltR = document.querySelector('.AltRight'),
						CtrR = document.querySelector('.ControlRight'),
							AltL = document.querySelector('.AltLeft'),
								CtrL = document.querySelector('.ControlLeft'),
									CapsLock = document.querySelector('.CapsLock'),
										Shift = document.querySelector('.Shift')

									
			const deleteID = () => {
				AltR.removeAttribute('id')
				CtrR.removeAttribute('id')
				AltL.removeAttribute('id')
				CtrL.removeAttribute('id')
			}
			const addActive = (el) => {
				
				if(span.parentNode.id == "active"){	
					span.parentNode.removeAttribute('id')
				} else {
					span.parentNode.setAttribute('id', 'active') 
				}
			}
		


				/*mousedown*/ 
		el.addEventListener('mousedown', (event)=> {

			//  add #active to pressed btn
			addActive()
		/************************************************ */
				if(el.firstChild.innerHTML == 'Enter') {
				textar.textContent +=' \n';
				} else if(el.firstChild.innerHTML == 'Del'){
					textar.textContent = ''
				}else if (el.firstChild.innerHTML == 'Tab') {
				textar.textContent += '    ';
				} else if (el.firstChild.innerHTML == 'Alt' ||  el.firstChild.innerHTML == 'Ctrl' || el.firstChild.innerHTML == 'Win' || el.firstChild.innerHTML == 'Shift' || el.firstChild.innerHTML == 'CapsLock') {
				let text = textar.textContent;
				textar.textContent = text;
				} else if (el.firstChild.innerHTML == 'Backspace') {
				textar.textContent = backspace(textar.textContent);
				} else {
				textar.textContent += el.firstChild.innerHTML;
				}
		/************************************************ */

			// add funcional for virtual CapsLock 
			if(el.classList.contains('CapsLock')){
				if(CapsLock.id == 'active') {
					flagHight == true
					changeHight()
				}else {
					flagHight == false
					changeHight()
				}
			}
			// add funcional for virtual Shift
			if(el.classList.contains('Shift')){
				if(Shift.id == 'active'){
					//flagHight == true
					changeHight()
				}
			}
					//mouseup		
			const listener_for_span = function (event) {
				//console.log('ccc')
				if(!el.classList.contains('ControlLeft') 
					&& !el.classList.contains('AltLeft')
						&&  !el.classList.contains('ControlRight') 
							&& !el.classList.contains('AltRight')
								&&!el.classList.contains('CapsLock')){
									el.removeAttribute('id');
									//addActive()
				}
				
				if(el.classList.contains('Shift')){
					if(Shift.id != 'active'){
						changeHight()
					}
				}
				// 3 change lang
				if(AltR.id == 'active' && CtrR.id == 'active'
					|| AltL.id == 'active' && CtrL.id == 'active') {
						changeLang() 
						deleteID()
				}

				el.removeEventListener('mouseup', listener_for_span, false);
								
			};

			el.addEventListener('mouseup', listener_for_span, false);//вызов обработчика

			})
		})
		
		const stop_moueUp = function (event) {
				btns.forEach(btn => {
					if(!btn.classList.contains('ControlLeft') 
							&& !btn.classList.contains('AltLeft')
								&&  !btn.classList.contains('ControlRight') 
									&& !btn.classList.contains('AltRight')
										&&!btn.classList.contains('CapsLock')){
											btn.removeAttribute('id');
						}
			})		
			//keyboard.removeEventListener('mouseup', stop_moueUp, false)
		}
		keyboard.addEventListener('mouseup', stop_moueUp, false)

		keyboard.removeEventListener('mousedown', listener_keyboards, false);
	}
	keyboard.addEventListener('mousedown', listener_keyboards, false);//вызов обработчика

	
	//events to unite physical and virtual keyboard
	const event_for_keyboard = (event) => {
		event.preventDefault() 

		//Ctrl + Alt
		if(event.altKey && event.ctrlKey){
			changeLang()
			//deleteID()
		} 

		//CapsLock
		if(event.code == 'CapsLock') {
			changeHight()
			document.removeEventListener('keydown', event_for_keyboard, false)
		}

		//ShiftKey
		if(event.shiftKey) {
			changeHight()
			//delete changeHight()
			document.removeEventListener('keydown', event_for_keyboard, false)
		}
		/************************** */
		btns.forEach(btn => {		


			if(btn.classList.contains(`${event.code}`)){

				if(btn.id == 'active' ){  // if el has id
				btn.removeAttribute('id', 'active') // delete  id

				}else {
					btn.setAttribute('id', 'active')
				}
				// 			/************************************************ */
				if(btn.firstChild.innerHTML == 'Enter') {
				textar.textContent +=' \n';
				}else if(btn.firstChild.innerHTML == 'Del'){
					textar.textContent = '';
				} else if (btn.firstChild.innerHTML == 'Tab') {
				textar.textContent += '    ';
				} else if (btn.firstChild.innerHTML == 'Alt' ||  btn.firstChild.innerHTML == 'Ctrl' || btn.firstChild.innerHTML == 'Win' || btn.firstChild.innerHTML == 'Shift' || btn.firstChild.innerHTML == 'CapsLock') {
				let text = textar.textContent;
				textar.textContent = text;
				} else if (btn.firstChild.innerHTML == 'Backspace') {
				textar.textContent = backspace(textar.textContent);
				} else {
				textar.textContent += btn.firstChild.innerHTML;

				}
		/************************************************ */
				
				document.onkeyup = function(){
					
					if(btn.id == 'active' && event.code != 'CapsLock'){
						btn.removeAttribute('id', 'active')//delete all id except el`s name 'CapsLock'
					}
					//ShiftKey
					if(event.shiftKey) {
						changeHight()
						document.addEventListener('keydown', event_for_keyboard, false)
					}
					if(event.code == 'CapsLock') {
						//changeHight()
						document.addEventListener('keydown', event_for_keyboard, false)
					}
					btns.forEach(btn => {
						
						if(event.code != 'CapsLock')	btn.removeAttribute('id', 'active')
						}
					)
				}
			}
		})
		
		/******************************* */
		//document.removeEventListener('keydown', event_for_keyboard, false)
	}
	document.addEventListener('keydown', event_for_keyboard, false)

/*************************** */
function backspace(text) {
	console.log(text)
	let arr = text.toString().split('');
	arr.pop();
	return arr.join('');
}


/***************************** */	
})

/****************************************************** */

// if 'CapsLock', change hight
function changeHight() {
	if(flagLang == false) { // eng
		if(flagHight == false) { // lower
			arr = letterObj.eng.ArrUp	
			flagHight = true									// arr = [].concat.apply([], letterObj.eng.ArrDown);
		} else { // upper
			arr = letterObj.eng.ArrDown
			flagHight = false
		} 
		chengeSymbol(arr)
	}
	else	if(flagLang == true) { // rus
		if(flagHight == false) { // lower
			arr = letterObj.ru.ArrUp	
			flagHight = true										// arr = [].concat.apply([], letterObj.eng.ArrDown);
		} else { // upper
			arr = letterObj.ru.ArrDown
			flagHight = false
		} 
		chengeSymbol(arr)
	}
} // норм

//if shift + alt, change lang
function changeLang() {
	if(flagHight == false) { // lower
		if(flagLang == false) { // eng
			arr = letterObj.ru.ArrDown
			flagLang = true
		} else { // ru
			arr = letterObj.eng.ArrDown
			flagLang = false
		} 
		chengeSymbol(arr)
	}
	if(flagHight == true) { //upper
		if(flagLang == false) { // eng
			arr = letterObj.eng.ArrUp
			flagLang = true
		} else { // ru
			arr = letterObj.ru.ArrUp
			flagLang = false
		} 
		chengeSymbol(arr)
	}
	//return arr
} // норм

/*Chenge Symbol on keyboard*/
function chengeSymbol() {
	//let newArr = arr.join(' ,').split(',')
	const btnSpan = document.querySelectorAll('span')
	for(let j = 0; j < btnSpan.length; j++) {
		btnSpan[j].innerHTML = arr[j]
	}
}//норм

/*Create block */

function createBlock() {
	const block = document.createElement('div')
	block.classList.add('container')
	document.querySelector('body').append(block)
	
	const title = document.createElement('div')
	title.classList.add('title')
	title.innerHTML = 'RSS keyboard'
	block.appendChild(title)
	
	const textAr =document.createElement('textarea')
	textAr.classList.add('textarea')
	textAr.setAttribute('id', 'area')

	//textAr.value = ''
	block.appendChild(textAr)
	
	

	
const infoWrap =  document.createElement('div')
	infoWrap.classList.add('wrapper__info')
	block.appendChild(infoWrap)
	
	const textLang =  document.createElement('div')
	textLang.classList.add('text__lang')
	textLang.innerHTML = 'Change Language: Ctrl + Alt'
	infoWrap.appendChild(textLang)

	const textMade =  document.createElement('div')
	textMade.classList.add('text__made')
	textMade.innerHTML = 'Made for: Windows'
	infoWrap.appendChild(textMade)

	const board = document.createElement('div')
	board.classList.add('keyboard')
	return block.appendChild(board)
}// норм

/*Create 5 blocks with cards */
function createRowBtns(arr = engArrDown) {

	let btn;
	let board = createBlock()
	for(let j = 0; j <= 4; j++) {
		let row_btns = document.createElement('div')
		row_btns.classList.add('row')
		
		for (let i = 0; i < arr[j].length; i++) {
			btn = document.createElement('div');

			// add classes
			if(arr[j][i] == ' '){
				btn.classList.add('btn-key', 'xxl')
			} else if(arr[j][i].length > 4 && arr[j][i].split('').includes('&') == false){
				btn.classList.add('btn-key', 'xl')
			} else {
				btn.classList.add('btn-key')
			}

			//add class 2
			if(arr[j][i].length > 2 && arr[j][i] != 'Space') {
				if (arr[j][i].split('').includes('&')){
					// btn.setAttribute('id', 'arrow')
					btn.classList.add('arrow')
				}else	{
					// btn.setAttribute('id', `${arr[j][i]}`)
					btn.classList.add(`${arr[j][i]}`)
				}
				btn.classList.add('bgd')
			}
			//add key
			// btn.setAttribute('id', `${keyArr[j][i]}`)
			btn.classList.add(`${keyArr[j][i]}`)
			
			
			// add innerHTML to span
			let span = document.createElement('span');
			span.innerHTML = `${arr[j][i]}`
			
			btn.appendChild(span)
			row_btns.appendChild(btn)
			//return btn
		}
		board.appendChild(row_btns)
	}
	return board
}//норм