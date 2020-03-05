const record = document.getElementById('record'); // ссылка на span
const shot = document.getElementById('shot'); // ссылка на span
const hit = document.getElementById('hit'); // ссылка на span
const dead = document.getElementById('dead'); // ссылка на span
const enemy = document.getElementById('enemy'); // ссылка на табл или игровое поле
const again = document.getElementById('again'); // ссылка на кнопку

const play = {
    recvord: 0,
    shot: 0,
    hit: 0,
    dead: 0,
    set updateData(data) {
        this[data] += 1;
        this.render();
    },
    render() {
        record.textContent = this.recvord;
        shot.textContent = this.shot;
        hit.textContent = this.hit;
        dead.textContent = this.dead;
    }
}; 

// объект с методами на отображение реакции - попали, промазали, убили
const show = {
    hit() {

    },
    miss(elem) {
        this.changeClass(elem, 'miss');
    },
    dead() {

    },
    changeClass(elem, value) {
        elem.className = value;
    }
}



const fire = (event) => {
    const target = event.target; // сохр. элемент на который был click в переменную
    show.miss(target); // передаем в функцию элемент
    play.updateData = 'shot';
}; 

const init = () => {
    enemy.addEventListener('click', fire);

}; // размещаем шпиона на игоровом поле который будет следить за событием.
// с каждым событием создаеться объект - event (событие);

init();