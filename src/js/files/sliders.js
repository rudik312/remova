/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, {Autoplay, EffectFade, Pagination, Navigation} from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.main__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		let mainSlider = new Swiper('.main__slider', { // Указываем скласс нужного слайдера
			
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Autoplay, EffectFade, Pagination],
			// preventClicks: true,
			// preventClicksPropagation: true,
			// observer: true,
			// observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			// slideToClickedSlide: true,
			// autoHeight: true,
			speed: 3000,
			// normalizeSlideIndex: true,
			// InitialSlide: 4,
			
			// virtualTranslate : true,

			touchRatio: 0,
			// simulateTouch: false,
			loop: true,
			// preloadImages: false,
			// lazy: true,
			// Эффекты
			effect: 'fade',
			fadeEffect: {           // added
        crossFade: true,     // added(resolve the overlapping of the slides)
			},
			autoplay: {
				delay: 3000,
				// disableOnInteraction: false,
			},
			// slideShadows: true,

			// Пагинация
			
			pagination: {
				el: '.main__pagination',
				clickable: true,
				// renderBullet: (index, className) => {
				// 	let arr = new Array("Строительно - монтажные работы", "Отделочные работы", "Нагревание, вентиляция и кондиционирование", "Реконструкция и ремонт", "Эксперты в сфере строительства");

				// 	return `<span class='${className} main__pagination-custom'>Строительно - монтажные работы</span>`;
					
				// },
				renderBullet: function (index, className) {
					let title = ["Строительно - монтажные работы", "Отделочные работы", "Нагревание, вентиляция и кондиционирование", "Реконструкция и ремонт", "Эксперты в сфере строительства"];
					return `<span class='${className} main__pagination-custom'>` + title[index] + `</span>`;
					},
			},
		

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.swiper-button-next',
			// },

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
		
	}

	if (document.querySelector('.main-projects__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
			new Swiper('.main-projects__slider', { // Указываем скласс нужного слайдера
			
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Autoplay, Pagination],
			// preventClicks: true,
			// preventClicksPropagation: true,
			observer: true,
			observeParents: true,
			slidesPerView: 2.5,
			// centeredSlides: true,
			spaceBetween: 20,
			// slideToClickedSlide: true,
			// autoHeight: true,
			speed: 3000,
			grabCursor: true,
			// slidesPerGroup: 3,
			// normalizeSlideIndex: true,
			// InitialSlide: 1,
			
			// virtualTranslate : true,

			// touchRatio: 0,
			// simulateTouch: false,
			loop: true,
			// preloadImages: false,
			// lazy: true,
			// Эффекты
			effect: 'slide',
			// fadeEffect: {           // added
      //   // crossFade: true,     // added(resolve the overlapping of the slides)
			// },
			autoplay: {
				// delay: 3000,
				disableOnInteraction: false,
				// dynamicBullets: true,
				// dynamicMainBullets: 4,
			},
			// slideShadows: true,

			// Пагинация
			
			pagination: {
				el: '.main-projects__pagination',
				clickable: true,
				renderBullet: function (index, className) {                 //added
					return `<span class="${className} main-projects__bullet"></span>` //added
			}, 
				dynamicBullets: true,
				dynamicMainBullets: 1,
			},
		

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.swiper-button-next',
			// },

			// Брейкпоинты
			
			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 20,
					// autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
					// autoHeight: true,
				},
				1000: {
					slidesPerView: 2,
					spaceBetween: 20,
					// autoHeight: true,
				},
				1260: {
					slidesPerView: 2.5,
					spaceBetween: 20,
					// autoHeight: true,
				},
			},
			
			// События
			on: {

			}
		});
		
		// let bullets = document.querySelectorAll('.main-projects__bullet');
		
		// for (let i = 0; i < bullets.length; i++) {
		// 	const element = bullets[i];
		// 	console.log(element);

		// }
		
	}

	if (document.querySelector('.current-project__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
			new Swiper('.current-project__slider', { // Указываем скласс нужного слайдера
			
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			// preventClicks: true,
			// preventClicksPropagation: true,
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			// centeredSlides: true,
			spaceBetween: 20,
			slideToClickedSlide: true,
			// autoHeight: true,
			speed: 2000,
			
			// grabCursor: true,
			// slidesPerGroup: 3,
			// normalizeSlideIndex: true,
			// InitialSlide: 1,
			
			// virtualTranslate : true,

			touchRatio: 0,
			// simulateTouch: false,
			loop: true,
			preloadImages: false,
			// lazy: true,
			// Эффекты
			effect: 'slide',
			// fadeEffect: {           // added
      //   // crossFade: true,     // added(resolve the overlapping of the slides)
			// },
			autoplay: {
				// delay: 3000,
				disableOnInteraction: false,
				// dynamicBullets: true,
				// dynamicMainBullets: 4,
			},
			// slideShadows: true,

			// Пагинация
			
			pagination: {
				el: '.current-project__pagination',
				clickable: false,
			// 	renderBullet: function (index, className) {                 //added
			// 		return `<span class="${className} current-project__bullet"></span>` //added
			// }, 
				dynamicBullets: true,
				dynamicMainBullets: 1,
			},
		

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.swiper-button-next',
			// },

			// Брейкпоинты
			
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
					touchRatio: 1,
					// autoHeight: true,
				},

				480: {
					slidesPerView: 2,
					spaceBetween: 10,
					touchRatio: 1,
				},

				768: {
					slidesPerView: 2,
					spaceBetween: 10,
					touchRatio: 1,
					// autoHeight: true,
				},
				1000: {
					slidesPerView: 3,
					spaceBetween: 10,
					// autoHeight: true,
				},
				1260: {
					slidesPerView: 3,
					spaceBetween: 10,
					// autoHeight: true,
				},
			},
			
			// События
			on: {

			}
		});
		
		// let bullets = document.querySelectorAll('.main-projects__bullet');
		
		// for (let i = 0; i < bullets.length; i++) {
		// 	const element = bullets[i];
		// 	console.log(element);

		// }
		
	}
	if (document.querySelector('.project-inner__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
			new Swiper('.project-inner__slider', { // Указываем скласс нужного слайдера
			
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			// preventClicks: true,
			// preventClicksPropagation: true,
			// observer: true,
			// observeParents: true,
			slidesPerView: 1,
			centeredSlides: true,
			spaceBetween: 20,
			slideToClickedSlide: true,
			// autoHeight: true,
			speed: 1500,
			
			// grabCursor: true,
			// slidesPerGroup: 3,
			// normalizeSlideIndex: true,
			// InitialSlide: 1,
			
			// virtualTranslate : true,

			touchRatio: 0,
			// simulateTouch: false,
			loop: true,
			// preloadImages: false,
			// lazy: true,
			// Эффекты
			effect: 'slide',
			// fadeEffect: {           // added
      //   // crossFade: true,     // added(resolve the overlapping of the slides)
			// },
			autoplay: {
				// delay: 3000,
				// disableOnInteraction: false,
				// dynamicBullets: true,
				// dynamicMainBullets: 4,
			},
			// slideShadows: true,

			// Пагинация
			
			// pagination: {
			// 	el: '.current-project__pagination',
			// 	clickable: true,
			// // 	renderBullet: function (index, className) {                 //added
			// // 		return `<span class="${className} current-project__bullet"></span>` //added
			// // }, 
			// 	dynamicBullets: true,
			// 	dynamicMainBullets: 1,
			// },
		

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.project-inner-prev',
				nextEl: '.project-inner-next',
			},

			// Брейкпоинты
			
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
					// autoHeight: true,
				},
				768: {
					slidesPerView: 1,
					spaceBetween: 20,
					// autoHeight: true,
				},
				1000: {
					slidesPerView: 1,
					spaceBetween: 20,
					// autoHeight: true,
				},
				1260: {
					slidesPerView: 1,
					spaceBetween: 20,
					// autoHeight: true,
				},
			},
			
			// События
			on: {

			}
		});
		
		// let bullets = document.querySelectorAll('.main-projects__bullet');
		
		// for (let i = 0; i < bullets.length; i++) {
		// 	const element = bullets[i];
		// 	console.log(element);

		// }
		
	}


}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});