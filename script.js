const navLi     = document.querySelector('.allNavA');
const menuIcon  = document.querySelector('.menu-icon');

navLi.style.maxHeight = '0px';

menuIcon.onclick = function clickMenu(){

    if( navLi.style.maxHeight == '0px' ){
        navLi.style.maxHeight = '130px';
    }else{
        navLi.style.maxHeight = '0px'
    }

}