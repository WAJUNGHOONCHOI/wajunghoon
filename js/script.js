// nav -----------------------------------

const $works  = document.querySelector('.works');
const $info  = document.querySelector('.info');
const $worksNav = document.querySelector('.works-nav');
const $infoNav = document.querySelector('.info-nav');


$works.addEventListener('click', () => {
    $worksNav.classList.toggle('active');
    $infoNav.classList.remove('active');
});


$info.addEventListener('click', () => {
    $infoNav.classList.toggle('active');
    $worksNav.classList.remove('active');
});




// design -----------------------------------


const $design = document.querySelector('#design');
const $designPhoto = document.querySelector('.design_photo');
const $designPhotoBox = document.querySelector('.design_photo .box');
const $design_full = document.querySelector('.design_full');




const $designPhotoBox01 = document.querySelector('.design_photo .box_01');
const $designPhotoBox02 = document.querySelector('.design_photo .box_02');
const $designPhotoBox03 = document.querySelector('.design_photo .box_03');
const $designPhotoBox04 = document.querySelector('.design_photo .box_04');
const $designPhotoBox05 = document.querySelector('.design_photo .box_05');
const $designPhotoBox06 = document.querySelector('.design_photo .box_06');
const $designPhotoBox07 = document.querySelector('.design_photo .box_07');
const $designPhotoBox08 = document.querySelector('.design_photo .box_08');
const $designPhotoBox09 = document.querySelector('.design_photo .box_09');
const $designPhotoBox10 = document.querySelector('.design_photo .box_10');
const $designPhotoBox11 = document.querySelector('.design_photo .box_11');
const $designPhotoBox12 = document.querySelector('.design_photo .box_12');
const $designPhotoBox13 = document.querySelector('.design_photo .box_13');
const $designPhotoBox14 = document.querySelector('.design_photo .box_14');



const $designFull01 = document.querySelector('.design_box_01_full');
const $designFull02 = document.querySelector('.design_box_02_full');
const $designFull03 = document.querySelector('.design_box_03_full');
const $designFull04 = document.querySelector('.design_box_04_full');
const $designFull05 = document.querySelector('.design_box_05_full');
const $designFull06 = document.querySelector('.design_box_06_full');
const $designFull07 = document.querySelector('.design_box_07_full');
const $designFull08 = document.querySelector('.design_box_08_full');
const $designFull09 = document.querySelector('.design_box_09_full');
const $designFull10 = document.querySelector('.design_box_10_full');
const $designFull11 = document.querySelector('.design_box_11_full');
const $designFull12 = document.querySelector('.design_box_12_full');
const $designFull13 = document.querySelector('.design_box_13_full');
const $designFull14 = document.querySelector('.design_box_14_full');



$design.addEventListener('click', () => {
    $designPhoto.classList.add('active');
    $faq_container.classList.remove('active');
    $aboutWrap.classList.remove('active');
    $contact_container.classList.remove('active');
});


$designPhotoBox01.addEventListener('click', () => {
    $designFull01.classList.toggle('active');
});

$designPhotoBox02.addEventListener('click', () => {
    $designFull02.classList.toggle('active');
});

$designPhotoBox03.addEventListener('click', () => {
    $designFull03.classList.toggle('active');
});

$designPhotoBox04.addEventListener('click', () => {
    $designFull04.classList.toggle('active');
});

$designPhotoBox05.addEventListener('click', () => {
    $designFull05.classList.toggle('active');
});

$designPhotoBox06.addEventListener('click', () => {
    $designFull06.classList.toggle('active');
});

$designPhotoBox07.addEventListener('click', () => {
    $designFull07.classList.toggle('active');
});

$designPhotoBox08.addEventListener('click', () => {
    $designFull08.classList.toggle('active');
});

$designPhotoBox09.addEventListener('click', () => {
    $designFull09.classList.toggle('active');
});

$designPhotoBox10.addEventListener('click', () => {
    $designFull10.classList.toggle('active');
});

$designPhotoBox11.addEventListener('click', () => {
    $designFull11.classList.toggle('active');
});

$designPhotoBox12.addEventListener('click', () => {
    $designFull12.classList.toggle('active');
});

$designPhotoBox13.addEventListener('click', () => {
    $designFull13.classList.toggle('active');
});

$designPhotoBox14.addEventListener('click', () => {
    $designFull14.classList.toggle('active');
});

document.querySelector('.design_box_01_full span').onclick = () =>{
    $designFull01.classList.remove('active');
};
document.querySelector('.design_box_02_full span').onclick = () =>{
    $designFull02.classList.remove('active');
};
document.querySelector('.design_box_03_full span').onclick = () =>{
    $designFull03.classList.remove('active');
};
document.querySelector('.design_box_04_full span').onclick = () =>{
    $designFull04.classList.remove('active');
};
document.querySelector('.design_box_05_full span').onclick = () =>{
    $designFull05.classList.remove('active');
};
document.querySelector('.design_box_06_full span').onclick = () =>{
    $designFull06.classList.remove('active');
};
document.querySelector('.design_box_07_full span').onclick = () =>{
    $designFull07.classList.remove('active');
};
document.querySelector('.design_box_08_full span').onclick = () =>{
    $designFull08.classList.remove('active');
};
document.querySelector('.design_box_09_full span').onclick = () =>{
    $designFull09.classList.remove('active');
};
document.querySelector('.design_box_10_full span').onclick = () =>{
    $designFull10.classList.remove('active');
};
document.querySelector('.design_box_11_full span').onclick = () =>{
    $designFull11.classList.remove('active');
};
document.querySelector('.design_box_12_full span').onclick = () =>{
    $designFull12.classList.remove('active');
};
document.querySelector('.design_box_13_full span').onclick = () =>{
    $designFull13.classList.remove('active');
};
document.querySelector('.design_box_14_full span').onclick = () =>{
    $designFull14.classList.remove('active');
};










// about -----------------------------------

const $about = document.querySelector('#about');
const $aboutWrap = document.querySelector('.about_wrap');
const $aboutImage = document.querySelector('.about_image img');
const $aboutFullImage = document.querySelector('.about_full_image')
const $aboutFullImageSpan = document.querySelector('.about_full_image span')


$about.addEventListener('click', () => {
    $aboutWrap.classList.toggle('active');
    $designPhoto.classList.remove('active');
    $faq_container.classList.remove('active');
    $contact_container.classList.remove('active');
});


$aboutImage.addEventListener('click', () => {
    $aboutFullImage.classList.toggle('active');
});

document.querySelector('.about_full_image span').onclick = () =>{
    $aboutFullImage.classList.remove('active');
};














// faqs -----------------------------------

const $faqs = document.querySelector('#faqs');
const $faq_container = document.querySelector('.faq_container');


$faqs.addEventListener('click', () => {
    $faq_container.classList.add('active');
    $aboutWrap.classList.remove('active');
    $designPhoto.classList.remove('active');
    $contact_container.classList.remove('active');
});



const $faqQ01 = document.querySelector('.faq_q01');
const $faqIn01 = document.querySelector('.faq_in01');

const $faqQ02 = document.querySelector('.faq_q02');
const $faqIn02 = document.querySelector('.faq_in02');

const $faqQ03 = document.querySelector('.faq_q03');
const $faqIn03 = document.querySelector('.faq_in03');

const $faqQ04 = document.querySelector('.faq_q04');
const $faqIn04 = document.querySelector('.faq_in04');

const $faqQ05 = document.querySelector('.faq_q05');
const $faqIn05 = document.querySelector('.faq_in05');

const $faqQ06 = document.querySelector('.faq_q06');
const $faqIn06 = document.querySelector('.faq_in06');

const $faqQ07 = document.querySelector('.faq_q07');
const $faqIn07 = document.querySelector('.faq_in07');

const $faqQ08 = document.querySelector('.faq_q08');
const $faqIn08 = document.querySelector('.faq_in08');


$faqQ01.addEventListener('click', () => {
    $faqIn01.classList.add('active');
});
$faqIn01.addEventListener('click', () => {
    $faqIn01.classList.remove('active');
});

$faqQ02.addEventListener('click', () => {
    $faqIn02.classList.add('active');
});
$faqIn02.addEventListener('click', () => {
    $faqIn02.classList.remove('active');
});

$faqQ03.addEventListener('click', () => {
    $faqIn03.classList.add('active');
});
$faqIn03.addEventListener('click', () => {
    $faqIn03.classList.remove('active');
});

$faqQ04.addEventListener('click', () => {
    $faqIn04.classList.add('active');
});
$faqIn04.addEventListener('click', () => {
    $faqIn04.classList.remove('active');
});

$faqQ05.addEventListener('click', () => {
    $faqIn05.classList.add('active');
});
$faqIn05.addEventListener('click', () => {
    $faqIn05.classList.remove('active');
});

$faqQ06.addEventListener('click', () => {
    $faqIn06.classList.add('active');
});
$faqIn06.addEventListener('click', () => {
    $faqIn06.classList.remove('active');
});

$faqQ07.addEventListener('click', () => {
    $faqIn07.classList.add('active');
});
$faqIn07.addEventListener('click', () => {
    $faqIn07.classList.remove('active');
});

$faqQ08.addEventListener('click', () => {
    $faqIn08.classList.add('active');
});
$faqIn08.addEventListener('click', () => {
    $faqIn08.classList.remove('active');
});








// contact -----------------------------------

const $contact = document.querySelector('#contact');
const $contact_container = document.querySelector('.contact_container');

$contact.addEventListener('click', ()=> {
    $contact_container.classList.add('active');
    $faq_container.classList.remove('active');
    $aboutWrap.classList.remove('active');
    $designPhoto.classList.remove('active');
});



















































