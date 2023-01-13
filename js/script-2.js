const $portrait = document.querySelector('#portrait');
const $portraitPhoto = document.querySelector('.portrait_photo');
const $portraitPhotoBox = document.querySelector('.portrait_photo .box');
const $portrait_full = document.querySelector('.portrait_full');




const $portraitPhotoBox01 = document.querySelector('.portrait_photo .box_01');
const $portraitPhotoBox02 = document.querySelector('.portrait_photo .box_02');
const $portraitPhotoBox03 = document.querySelector('.portrait_photo .box_03');
const $portraitPhotoBox04 = document.querySelector('.portrait_photo .box_04');
const $portraitPhotoBox05 = document.querySelector('.portrait_photo .box_05');
const $portraitPhotoBox06 = document.querySelector('.portrait_photo .box_06');
const $portraitPhotoBox07 = document.querySelector('.portrait_photo .box_07');
const $portraitPhotoBox08 = document.querySelector('.portrait_photo .box_08');
const $portraitPhotoBox09 = document.querySelector('.portrait_photo .box_09');
const $portraitPhotoBox10 = document.querySelector('.portrait_photo .box_10');
const $portraitPhotoBox11 = document.querySelector('.portrait_photo .box_11');
const $portraitPhotoBox12 = document.querySelector('.portrait_photo .box_12');
const $portraitPhotoBox13 = document.querySelector('.portrait_photo .box_13');
const $portraitPhotoBox14 = document.querySelector('.portrait_photo .box_14');
const $portraitPhotoBox15 = document.querySelector('.portrait_photo .box_15');
const $portraitPhotoBox16 = document.querySelector('.portrait_photo .box_16');
const $portraitPhotoBox17 = document.querySelector('.portrait_photo .box_17');
const $portraitPhotoBox18 = document.querySelector('.portrait_photo .box_18');
const $portraitPhotoBox19 = document.querySelector('.portrait_photo .box_19');
const $portraitPhotoBox20 = document.querySelector('.portrait_photo .box_20');



const $portraitFull01 = document.querySelector('.portrait_box_01_full');
const $portraitFull02 = document.querySelector('.portrait_box_02_full');
const $portraitFull03 = document.querySelector('.portrait_box_03_full');
const $portraitFull04 = document.querySelector('.portrait_box_04_full');
const $portraitFull05 = document.querySelector('.portrait_box_05_full');
const $portraitFull06 = document.querySelector('.portrait_box_06_full');
const $portraitFull07 = document.querySelector('.portrait_box_07_full');
const $portraitFull08 = document.querySelector('.portrait_box_08_full');
const $portraitFull09 = document.querySelector('.portrait_box_09_full');
const $portraitFull10 = document.querySelector('.portrait_box_10_full');
const $portraitFull11 = document.querySelector('.portrait_box_11_full');
const $portraitFull12 = document.querySelector('.portrait_box_12_full');
const $portraitFull13 = document.querySelector('.portrait_box_13_full');
const $portraitFull14 = document.querySelector('.portrait_box_14_full');
const $portraitFull15 = document.querySelector('.portrait_box_15_full');
const $portraitFull16 = document.querySelector('.portrait_box_16_full');
const $portraitFull17 = document.querySelector('.portrait_box_17_full');
const $portraitFull18 = document.querySelector('.portrait_box_18_full');
const $portraitFull19 = document.querySelector('.portrait_box_19_full');
const $portraitFull20 = document.querySelector('.portrait_box_20_full');


$portrait.addEventListener('click', () => {
    $portraitPhoto.classList.add('active');
});


document.querySelector('.portrait_photo .logo').addEventListener('click', () => {
    $portraitPhoto.classList.remove('active');
});


$portraitPhotoBox01.addEventListener('click', () => {
    $portraitFull01.classList.toggle('active');
});

$portraitPhotoBox02.addEventListener('click', () => {
    $portraitFull02.classList.toggle('active');
});

$portraitPhotoBox03.addEventListener('click', () => {
    $portraitFull03.classList.toggle('active');
});

$portraitPhotoBox04.addEventListener('click', () => {
    $portraitFull04.classList.toggle('active');
});

$portraitPhotoBox05.addEventListener('click', () => {
    $portraitFull05.classList.toggle('active');
});

$portraitPhotoBox06.addEventListener('click', () => {
    $portraitFull06.classList.toggle('active');
});

$portraitPhotoBox07.addEventListener('click', () => {
    $portraitFull07.classList.toggle('active');
});

$portraitPhotoBox08.addEventListener('click', () => {
    $portraitFull08.classList.toggle('active');
});

$portraitPhotoBox09.addEventListener('click', () => {
    $portraitFull09.classList.toggle('active');
});

$portraitPhotoBox10.addEventListener('click', () => {
    $portraitFull10.classList.toggle('active');
});

$portraitPhotoBox11.addEventListener('click', () => {
    $portraitFull11.classList.toggle('active');
});

$portraitPhotoBox12.addEventListener('click', () => {
    $portraitFull12.classList.toggle('active');
});

$portraitPhotoBox13.addEventListener('click', () => {
    $portraitFull13.classList.toggle('active');
});

$portraitPhotoBox14.addEventListener('click', () => {
    $portraitFull14.classList.toggle('active');
});
$portraitPhotoBox15.addEventListener('click', () => {
    $portraitFull15.classList.toggle('active');
});
$portraitPhotoBox16.addEventListener('click', () => {
    $portraitFull16.classList.toggle('active');
});
$portraitPhotoBox17.addEventListener('click', () => {
    $portraitFull17.classList.toggle('active');
});
$portraitPhotoBox18.addEventListener('click', () => {
    $portraitFull18.classList.toggle('active');
});
$portraitPhotoBox19.addEventListener('click', () => {
    $portraitFull19.classList.toggle('active');
});
$portraitPhotoBox20.addEventListener('click', () => {
    $portraitFull20.classList.toggle('active');
});



document.querySelector('.portrait_box_01_full span').onclick = () =>{
    $portraitFull01.classList.remove('active');
};
document.querySelector('.portrait_box_02_full span').onclick = () =>{
    $portraitFull02.classList.remove('active');
};
document.querySelector('.portrait_box_03_full span').onclick = () =>{
    $portraitFull03.classList.remove('active');
};
document.querySelector('.portrait_box_04_full span').onclick = () =>{
    $portraitFull04.classList.remove('active');
};
document.querySelector('.portrait_box_05_full span').onclick = () =>{
    $portraitFull05.classList.remove('active');
};
document.querySelector('.portrait_box_06_full span').onclick = () =>{
    $portraitFull06.classList.remove('active');
};
document.querySelector('.portrait_box_07_full span').onclick = () =>{
    $portraitFull07.classList.remove('active');
};
document.querySelector('.portrait_box_08_full span').onclick = () =>{
    $portraitFull08.classList.remove('active');
};
document.querySelector('.portrait_box_09_full span').onclick = () =>{
    $portraitFull09.classList.remove('active');
};
document.querySelector('.portrait_box_10_full span').onclick = () =>{
    $portraitFull10.classList.remove('active');
};
document.querySelector('.portrait_box_11_full span').onclick = () =>{
    $portraitFull11.classList.remove('active');
};
document.querySelector('.portrait_box_12_full span').onclick = () =>{
    $portraitFull12.classList.remove('active');
};
document.querySelector('.portrait_box_13_full span').onclick = () =>{
    $portraitFull13.classList.remove('active');
};
document.querySelector('.portrait_box_14_full span').onclick = () =>{
    $portraitFull14.classList.remove('active');
};
document.querySelector('.portrait_box_15_full span').onclick = () =>{
    $portraitFull15.classList.remove('active');
};
document.querySelector('.portrait_box_16_full span').onclick = () =>{
    $portraitFull16.classList.remove('active');
};
document.querySelector('.portrait_box_17_full span').onclick = () =>{
    $portraitFull17.classList.remove('active');
};
document.querySelector('.portrait_box_18_full span').onclick = () =>{
    $portraitFull18.classList.remove('active');
};
document.querySelector('.portrait_box_19_full span').onclick = () =>{
    $portraitFull19.classList.remove('active');
};
document.querySelector('.portrait_box_20_full span').onclick = () =>{
    $portraitFull20.classList.remove('active');
};


// contact ------

const $contact = document.querySelector('#contact');
const $contactContainer = document.querySelector('.contact_container');

$contact.addEventListener('click', () => {
    $contactContainer.classList.add('active');
});

document.querySelector('.contact_container .logo').addEventListener('click', () => {
    $contactContainer.classList.remove('active');
});