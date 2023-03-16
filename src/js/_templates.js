/* eslint-disable import/extensions */
/* eslint-disable spaced-comment */
/* eslint-disable import/no-relative-packages */

// * stepper
import { stepperFunction } from "./templates/stepper";
stepperFunction()

// * Реализация бургер-меню
import { burger } from './templates/burger';

burger();

// * Реализация модального окна
import GraphModal from 'graph-modal';
const modal = new GraphModal('modal');

if (document.querySelector('.modal-thank')) {
    const btnThank = document.querySelector('.modal-thank')

    btnThank.addEventListener('click', () => {
        const modal = new GraphModal('modal').open('modal-thank');
    });

    //btnThank.click();
}

// * Подключение inputmask
import Inputmask from "inputmask";
let inputs = document.querySelectorAll('input[type="tel"]')
let im = new Inputmask('+7 (999) 999-99-99')
im.mask(inputs)

// * Подключение marquee
import { handleMarquee } from "./templates/marquee";
handleMarquee();
