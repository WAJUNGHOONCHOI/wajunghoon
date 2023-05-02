const $idPet = document.querySelector('#idpet');
const $idPetPhoto = document.querySelector('.id_pet_photo');
const $portrait = document.querySelector('#portrait');
const $portraitPhoto = document.querySelector('.portrait_photo');
const $food = document.querySelector('#food');
const $foodPhotoWrap = document.querySelector('.food_photo')
const $snap = document.querySelector('#snap');
const $snapPhoto = document.querySelector('.snap_photo');
const $parisSnap = document.querySelector('#parissnap');
const $parisSnapPhoto = document.querySelector('.paris_snap_photo');
const $maruAbout = document.querySelector('#about_maru');
const $maruWrap = document.querySelector('.maru_wrap');
const $about = document.querySelector('#about');
const $aboutWrap = document.querySelector('.about_wrap');
const $contact = document.querySelector('#contact');
const $contactContainer = document.querySelector('.contact_container');


const $burger = document.querySelector('#burger');
const $burgernav = document.querySelector('#burgernav');
const $bHome = document.querySelector('#b_home');
const $bIdpet = document.querySelector('#b_idpet')
const $bPortrait = document.querySelector('#b_portrait')
const $bFood = document.querySelector('#b_food')
const $bPersonal = document.querySelector('#b_personal_work')
const $bArtWork = document.querySelector('#b_art_work')
const $bSnap = document.querySelector('#b_snap')
const $bParisSnap = document.querySelector('#b_parissnap')
const $bAboutMaru = document.querySelector('#b_about_maru')
const $bAbout = document.querySelector('#b_about')
const $bContact = document.querySelector('#b_contact')


$burger.addEventListener('click', () => {
    // $menubar.classList.remove('fa-bars');
    $burger.classList.toggle('fa-times');
    $burgernav.classList.toggle('active');
});


$bHome.addEventListener('click', () => {
    $burger.classList.remove('active');
    $burgernav.classList.remove('active');
    $burger.classList.remove('fa-times');
    $idPetPhoto.classList.remove('active');
    $portraitPhoto.classList.remove('active'); 
    $foodPhotoWrap.classList.remove('active'); 
    $snapPhoto.classList.remove('active'); 
    $parisSnapPhoto.classList.remove('active'); 
    $maruWrap.classList.remove('active'); 
    $aboutWrap.classList.remove('active'); 
    $contactContainer.classList.remove('active');
});
$bIdpet.addEventListener('click', () => {
    $burger.classList.add('active'); 
    $burgernav.classList.remove('active');
    $burger.classList.remove('fa-times');
    $idPetPhoto.classList.add('active');
    $portraitPhoto.classList.remove('active'); 
    $foodPhotoWrap.classList.remove('active'); 
    $snapPhoto.classList.remove('active'); 
    $parisSnapPhoto.classList.remove('active'); 
    $maruWrap.classList.remove('active'); 
    $aboutWrap.classList.remove('active'); 
    $contactContainer.classList.remove('active');
});
$bPortrait.addEventListener('click', () => {
    $burger.classList.add('active'); 
    $burgernav.classList.remove('active');
    $burger.classList.remove('fa-times');
    $idPetPhoto.classList.remove('active');
    $portraitPhoto.classList.add('active'); 
    $foodPhotoWrap.classList.remove('active'); 
    $snapPhoto.classList.remove('active'); 
    $parisSnapPhoto.classList.remove('active'); 
    $maruWrap.classList.remove('active'); 
    $aboutWrap.classList.remove('active'); 
    $contactContainer.classList.remove('active');
});
$bFood.addEventListener('click', () => {
    $burger.classList.add('active'); 
    $burgernav.classList.remove('active');
    $burger.classList.remove('fa-times');
    $idPetPhoto.classList.remove('active');
    $portraitPhoto.classList.remove('active'); 
    $foodPhotoWrap.classList.add('active'); 
    $snapPhoto.classList.remove('active'); 
    $parisSnapPhoto.classList.remove('active'); 
    $maruWrap.classList.remove('active'); 
    $aboutWrap.classList.remove('active'); 
    $contactContainer.classList.remove('active');
});
$bPersonal.addEventListener('click', () => {});
$bArtWork.addEventListener('click', () => {});
$bSnap.addEventListener('click', () => {
    $burger.classList.add('active'); 
    $burgernav.classList.remove('active');
    $burger.classList.remove('fa-times');
    $idPetPhoto.classList.remove('active');
    $portraitPhoto.classList.remove('active'); 
    $foodPhotoWrap.classList.remove('active'); 
    $snapPhoto.classList.add('active'); 
    $parisSnapPhoto.classList.remove('active'); 
    $maruWrap.classList.remove('active'); 
    $aboutWrap.classList.remove('active'); 
    $contactContainer.classList.remove('active');
});
$bParisSnap.addEventListener('click', () => {
    $burger.classList.add('active'); 
    $burgernav.classList.remove('active');
    $burger.classList.remove('fa-times');
    $idPetPhoto.classList.remove('active');
    $portraitPhoto.classList.remove('active'); 
    $foodPhotoWrap.classList.remove('active'); 
    $snapPhoto.classList.remove('active'); 
    $parisSnapPhoto.classList.add('active'); 
    $maruWrap.classList.remove('active'); 
    $aboutWrap.classList.remove('active'); 
    $contactContainer.classList.remove('active');
});
$bAboutMaru.addEventListener('click', () => {
    $burger.classList.add('active'); 
    $burgernav.classList.remove('active');
    $burger.classList.remove('fa-times');
    $idPetPhoto.classList.remove('active');
    $portraitPhoto.classList.remove('active'); 
    $foodPhotoWrap.classList.remove('active'); 
    $snapPhoto.classList.remove('active'); 
    $parisSnapPhoto.classList.remove('active'); 
    $maruWrap.classList.add('active'); 
    $aboutWrap.classList.remove('active'); 
    $contactContainer.classList.remove('active');
});
$bAbout.addEventListener('click', () => {
    $burger.classList.add('active'); 
    $burgernav.classList.remove('active');
    $burger.classList.remove('fa-times');
    $idPetPhoto.classList.remove('active');
    $portraitPhoto.classList.remove('active'); 
    $foodPhotoWrap.classList.remove('active'); 
    $snapPhoto.classList.remove('active'); 
    $parisSnapPhoto.classList.remove('active'); 
    $maruWrap.classList.remove('active'); 
    $aboutWrap.classList.add('active'); 
    $contactContainer.classList.remove('active');
});
$bContact.addEventListener('click', () => {
    $burger.classList.add('active'); 
    $burgernav.classList.remove('active');
    $burger.classList.remove('fa-times');
    $idPetPhoto.classList.remove('active');
    $portraitPhoto.classList.remove('active'); 
    $foodPhotoWrap.classList.remove('active'); 
    $snapPhoto.classList.remove('active'); 
    $parisSnapPhoto.classList.remove('active'); 
    $maruWrap.classList.remove('active'); 
    $aboutWrap.classList.remove('active'); 
    $contactContainer.classList.add('active');
});












