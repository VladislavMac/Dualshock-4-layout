const navLi     = document.querySelector('.allNavA');
const menuIcon  = document.querySelector('.menu-icon');

navLi.style.maxHeight = '0px';
navLi.style.display = 'none'

menuIcon.onclick = function clickMenu(){
    
    if( navLi.style.maxHeight == '0px' ){
        navLi.style.maxHeight = '130px';
        if( navLi.style.maxHeight = '130px' ){
            navLi.style.display = 'inline-table'
        }
    }else{
        navLi.style.maxHeight = '0px'
        navLi.style.display = 'none'
    }

}