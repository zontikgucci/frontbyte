document.addEventListener('scroll', () => {
	if (scrollY > 10) {
	  document.querySelector('.header').classList.add('header--scroll')
	  document.querySelector('.header__content').classList.add('header__content--scroll')
	} else {
	  document.querySelector('.header').classList.remove('header--scroll')
	  document.querySelector('.header__content').classList.remove('header__content--scroll')
	}
})

// lang__link--active
const langClick = document.querySelectorAll('.lang__link')
langClick.forEach(item => {
	item.addEventListener('click', () => {
		langClick.forEach(el => {
			el.classList.remove('lang__link--active')
		})

		item.classList.add('lang__link--active')
	})
})


// slider__button
const buttonClick = document.querySelectorAll('.slider__button')
buttonClick.forEach(item => {
	
	// динамическая ширина button
	item.style.width = `calc((100% - 9px * ${buttonClick.length}) / ${buttonClick.length})`
	
	// обработчик при клике на button
	item.addEventListener('click', () => {		
		buttonClick.forEach(el => {
			el.classList.remove('slider__button--active')
		})

		item.classList.add('slider__button--active')
	})
})

// const links = document.querySelectorAll('.menu__link')
// if (links.length > 0 ) {
// 	links.forEach(menulink => {
// 		menulink.addEventListener('click', onMenuLickClick)
// 	})

// 	function onMenuLickClick (e) {
// 		const menuLink = e.target
// 		const startIndexWordId = menuLink.getAttribute('href').indexOf('#') + 1
// 		const word = menuLink.getAttribute('href').slice(startIndexWordId)
// 		const headerHeight = document.querySelector('.header').offsetHeight

		
// 		if (word && document.getElementById(word)){
// 			const blockMenu = document.getElementById(word)			
// 			const scrollBlock = blockMenu.getBoundingClientRect().top + scrollY - headerHeight
			

// 			window.scrollTo({
// 				top: scrollBlock,
// 				behavior: 'smooth'
// 			})

// 			e.preventDefault()
// 		}
// 	}
// }

// const links = document.querySelectorAll('.menu__link');
// const header = document.querySelector('.header');
// const storedHeaderHeight = localStorage.getItem('headerHeight');
// const headerHeight = storedHeaderHeight ? parseFloat(storedHeaderHeight) : header.offsetHeight;

// if (links.length > 0) {
// 	links.forEach(menulink => {
// 		menulink.addEventListener('click', onMenuLinkClick);
// 	});

// 	function onMenuLinkClick(e) {
// 		e.preventDefault();

// 		const menuLink = e.target;
// 		const href = menuLink.getAttribute('href');

// 		if (href && href.startsWith('#')) {
// 			const word = href.substring(1);
// 			const blockMenu = document.getElementById(word);

// 			if (blockMenu) {
// 				const scrollBlock = blockMenu.getBoundingClientRect().top + window.scrollY - headerHeight;

// 				window.scrollTo({
// 				top: scrollBlock,
// 				behavior: 'smooth'
// 				});
// 			}
// 		}
// 	}
// }

// const links = document.querySelectorAll('.menu__link');
// const header = document.querySelector('.header');
// const storedHeaderHeight = localStorage.getItem('headerHeight');
// const headerHeight = storedHeaderHeight ? parseFloat(storedHeaderHeight) : header.getBoundingClientRect().height;

// if (links.length > 0) {
//   links.forEach(menulink => {
//     menulink.addEventListener('click', onMenuLinkClick);
//   });

//   function onMenuLinkClick(e) {
//     const menuLink = e.target;
//     const href = menuLink.getAttribute('href');

//     if (href && href.includes('#')) {
//       e.preventDefault();

//       const word = href.split('#')[1];
//       const blockMenu = document.getElementById(word);

//       if (blockMenu) {
//         const headerRect = header.getBoundingClientRect().height;
//         const scrollBlock = blockMenu.getBoundingClientRect().top + window.scrollY - headerRect;
//         window.scrollTo({
//           top: scrollBlock,
//           behavior: 'smooth'
//         });
//       }

//       window.location.href = href;
//     }
//   }
// }


// const links = document.querySelectorAll('.menu__link');
// const header = document.querySelector('.header');
// const storedHeaderHeight = localStorage.getItem('headerHeight');
// const headerHeight = storedHeaderHeight ? parseFloat(storedHeaderHeight) : header.getBoundingClientRect().height;

// if (links.length > 0) {
//   links.forEach(menulink => {
//     menulink.addEventListener('click', onMenuLinkClick);
//   });

//   function onMenuLinkClick(e) {
//     e.preventDefault();

//     const menuLink = e.target;
//     const href = menuLink.getAttribute('href');

//     if (href && href.includes('#')) {
//       const word = href.split('#')[1];
//       const blockMenu = document.getElementById(word);

//       if (blockMenu) {
//         const headerRect = header.getBoundingClientRect();
//         const scrollBlock = blockMenu.getBoundingClientRect().top + window.pageYOffset - headerRect.height;

//         window.scrollTo({
//           top: scrollBlock,
//           behavior: 'smooth'
//         });

//         // Прикрепляем обработчик события 'transitionend' на элемент прокрутки
//         // для перехода по ссылке только после завершения анимации прокрутки
//         blockMenu.addEventListener('transitionend', () => {
//           window.location.href = href;
//         });
//       }
//     }
//   }
// }

// const links = document.querySelectorAll('.menu__link');
// const header = document.querySelector('.header');
// const storedHeaderHeight = localStorage.getItem('headerHeight');
// const headerHeight = storedHeaderHeight ? parseFloat(storedHeaderHeight) : header.getBoundingClientRect().height;

// if (links.length > 0) {
//   links.forEach(menulink => {
//     menulink.addEventListener('click', onMenuLinkClick);
//   });

//   function onMenuLinkClick(e) {
//     e.preventDefault();

//     const menuLink = e.target;
//     const href = menuLink.getAttribute('href');

//     if (href && href.includes('#')) {
//       const word = href.split('#')[1];
//       const blockMenu = document.getElementById(word);

//       if (blockMenu) {
//         const headerRect = header.getBoundingClientRect();
//         const scrollBlock = blockMenu.getBoundingClientRect().top + window.pageYOffset - headerRect.height;

//         window.scrollTo({
//           top: scrollBlock,
//           behavior: 'smooth'
//         });

//         // Прикрепляем обработчик события 'transitionend' на элемент прокрутки
//         // для перехода по ссылке только после завершения анимации прокрутки
//         blockMenu.addEventListener('transitionend', () => {
//           const urlParams = new URLSearchParams(window.location.search);
//           const scrollTo = urlParams.get('scrollTo');
//           if (scrollTo) {
//             window.location.href = `index.html#${scrollTo}`;
//           }
//         });
//       }
//     }
//   }
// }


const links = document.querySelectorAll('.menu__link');
const header = document.querySelector('.header');
const storedHeaderHeight = localStorage.getItem('headerHeight');
const headerHeight = storedHeaderHeight ? parseFloat(storedHeaderHeight) : header.getBoundingClientRect().height;

if (links.length > 0) {
  links.forEach(menulink => {
    menulink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    e.preventDefault();

    const menuLink = e.target;
    const href = menuLink.getAttribute('href');

    if (href && href.includes('#')) {
      const word = href.split('#')[1];
      const blockMenu = document.getElementById(word);

      if (blockMenu) {
        const scrollBlock = blockMenu.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: scrollBlock,
          behavior: 'smooth'
        });

        // Устанавливаем флаг, что скролл в процессе
        let isScrolling = true;

        // Прикрепляем обработчик события 'scroll' на окно просмотра
        window.addEventListener('scroll', () => {
          if (isScrolling) {
            const scrolledBlockTop = blockMenu.getBoundingClientRect().top + window.pageYOffset;
            if (Math.abs(scrollBlock - scrolledBlockTop) < 1) {
              // Завершился скролл к целевому блоку
              isScrolling = false;

              // Выполняем переход по ссылке
              window.location.href = href;
            }
          }
        });
      }
    }
  }
}





