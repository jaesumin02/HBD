const screens = [...document.querySelectorAll('[data-screen]')];
const navigationButtons = document.querySelectorAll('[data-go]');

const flowerPhoto = document.querySelector('.real-bouquet img');
if (flowerPhoto) flowerPhoto.src = 'images/my-flower.jpg';

document.querySelectorAll('.memory-photo-wall img').forEach((photo, index) => {
  photo.src = `images/memory-${String(index + 1).padStart(2, '0')}.jpg`;
});

const memoryIntro = document.createElement('p');
memoryIntro.className = 'memory-intro';
memoryIntro.textContent = 'These are some of my favorite moments with you: the days we spent together, the places we explored, and the memories we created while getting to know each other. Every picture reminds me how thankful I am that you came into my life. These memories are only the beginning, because I know many more beautiful memories will come for us to make and keep together.';
document.querySelector('.memory-photo-wall')?.after(memoryIntro);

const heartfeltCopy = {
  '#message-title': 'To my favorite<br><em>person.</em>',
  '[data-screen="message"] .eyebrow': 'mahal na mahal kita so much'
};
Object.entries(heartfeltCopy).forEach(([selector, copy]) => {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = copy;
});

const messageLetter = `Happy birthday, baby. 🤍

Hindi ko alam kung paano ko sisimulan lahat ng gusto kong sabihin sa’yo kasi parang kahit gaano kahaba itong message na ‘to, feeling ko kulang pa rin para ma-explain kung gaano kita kamahal at kung gaano ako nagpapasalamat na dumating ka sa buhay ko.

Today is your special day, and more than anything, gusto kong iparamdam sa’yo kung gaano ka ka-special sa akin. Hindi lang dahil birthday mo, kundi dahil ikaw yung taong naging parte ng buhay ko na hindi ko akalain na magiging ganito kahalaga sa akin.

Thank you, baby. Thank you for being there for me, lalo na sa mga panahong hindi ko rin maintindihan sarili ko. Thank you for listening to me kahit minsan paulit-ulit lang naman yung mga kwento ko, kahit minsan ang dami kong iniisip, kahit minsan hindi ko alam kung paano ko sasabihin kung ano talaga yung nararamdaman ko. Thank you for making me feel na may taong pwede kong pagsabihan, may taong hindi ako huhusgahan, at may taong tatanggap sa akin kahit hindi ako okay.

Alam mo, sobrang swerte ko na ikaw yung nakilala ko. Hindi dahil perfect ka, at hindi rin dahil perfect ako. Marami rin tayong hindi pagkakaintindihan, may mga araw na hindi tayo okay, may mga bagay na hindi natin agad naiintindihan sa isa’t isa. Pero despite all those things, ikaw pa rin yung taong gusto kong piliin.

I love the way you make me feel safe to be myself. I love how I can be childish with you, clingy, emotional, makulit, tahimik, or kahit hindi ko alam kung ano talaga ako that day, and somehow, you still make me feel like I don’t have to pretend to be someone else.

And I hope you know that I notice the little things you do for me. Kahit yung mga bagay na baka para sa’yo maliit lang, hindi ko nakakalimutan. Yung mga times na kinakausap mo ako, yung pag-aalala mo, yung patience mo, yung presence mo, even the simple moments na magkasama lang tayo or nag-uusap tungkol sa random things. Those moments mean so much more to me than you probably realize.

I don’t just love you for the happy moments. I love you even on the days when things are difficult. I love you even when life gets overwhelming. I love you not because everything is always perfect, but because even when things aren’t perfect, ikaw pa rin yung taong gusto kong makasama.

I want you to know that I’m proud of you. Proud ako sa kung sino ka ngayon, sa lahat ng pinagdaanan mo, sa lahat ng ginagawa mo para sa sarili mo at sa future mo. I know there are days when you might feel tired, lost, pressured, or unsure of yourself. And if there are times na hindi mo nakikita kung gaano ka kagaling, sana maalala mo na nandito ako, and I will always remind you.

You deserve good things, baby. You deserve happiness. You deserve peace. You deserve to feel loved, appreciated, and valued. Sana this new chapter of your life brings you closer to the things you’ve been praying for. Sana matupad yung mga pangarap mo, kahit yung mga bagay na hindi mo pa sinasabi sa iba. Sana maging successful ka sa lahat ng ginagawa mo, and sana kahit gaano ka kalayo marating ng buhay mo, hindi mo makalimutan kung gaano ka kahalaga.

And honestly, one of my wishes is that I get to be there to see all of it.

I want to see you grow. I want to see you achieve your dreams. I want to celebrate your little victories with you. I want to be there when something good happens and ikaw yung unang taong gusto kong marinig na masaya. And even when things don’t go the way you planned, I want to be the person who reminds you that one failure, one bad day, or one difficult season doesn’t define you.

I don’t know what the future holds for us. Hindi ko kayang ipangako na magiging perfect ang lahat, kasi alam naman natin na hindi ganun ang buhay. But what I can promise is that habang nandito ako, I will continue to choose you. I will continue to understand you, to listen to you, to support you, and to love you in the best way that I know how.

And if there are times na hindi ko napapakita sa’yo nang maayos kung gaano kita kamahal, I’m sorry. Sometimes I don’t know how to put everything I feel into words. Minsan nagiging makulit ako, minsan emotional, minsan overthinker, minsan hindi ko rin alam kung paano ko sasabihin yung nasa isip ko. But please know that behind all of that is someone who genuinely loves you and cares about you so much.

I don’t want you to ever think that you have to be perfect for me to love you. You don’t have to have everything figured out. You don’t have to always be strong. You don’t have to hide your bad days from me. You can be tired. You can be vulnerable. You can have days when you don’t know what to do. And I hope you know that you don’t always have to carry everything alone.

I want to be your safe place too, just like you’ve become mine.

And baby, thank you for letting me love you.

Thank you for every memory we’ve made, every laugh, every random conversation, every little moment, every tampuhan that eventually taught us something, and every moment that made me realize how much I want you in my life.

If I could give you everything you deserve, I would. But since I can’t give you the whole world, I’ll just keep giving you the little things I can my time, my effort, my understanding, my support, my honesty, and most importantly, my love.

I hope when you look back at this birthday someday, you remember that there was someone who genuinely wished for nothing more than your happiness.

Someone who was so proud of you.

Someone who believed in you.

Someone who was grateful that you existed.

And someone who loved you with all her heart.

Happy birthday, baby. 🤍

I hope today reminds you of how loved you are, not just by me but by all the people who are lucky enough to have you in their lives.

Please take care of yourself always. Eat properly, rest when you’re tired, don’t be too hard on yourself, and never forget how much you’re worth.

I love you so much, baby. More than I can explain through this message. And no matter how many birthdays come after this, I hope I get to keep saying these words to you:

Happy birthday, my love. I’m so grateful that you were born. And I’m even more grateful that somehow, in this huge world, our paths crossed.

I love you. Always. 🤍`;

const messageCard = document.querySelector('[data-screen="message"] .detail-card');
const settleMessage = messageCard?.querySelector('.settle-message');
if (messageCard && settleMessage) {
  messageCard.querySelectorAll(':scope > p:not(.eyebrow):not(.signature)').forEach((paragraph) => paragraph.remove());
  const messageBody = document.createElement('div');
  messageBody.className = 'message-letter';
  messageBody.innerHTML = messageLetter.split('\n\n').map((paragraph) => `<p>${paragraph}</p>`).join('');
  messageCard.insertBefore(messageBody, settleMessage);
}

const flowerLetter = [
  'Alam kong favorite mo ang scorpion grass, kaya sinubukan kong magtanim para sa’yo kahit hindi talaga siya nag-survive HAHAHA. Pero kahit hindi man siya tumubo, may naiwan naman siyang something sa akin yung realization kung gaano pala ka-special sa’yo ang flowers na ’to.',
  'Nung nalaman ko yung meaning ng forget-me-not, naisip ko agad ikaw. Kasi if there’s one thing I want you to know, it’s that I hope you’ll always remember how much you mean to me.',
  'Hindi ko man maibigay sa’yo yung pinaka-perfect na flowers, I hope this little one reminds you of my love. Kasi sa totoo lang, hindi naman yung flowers yung importante sa akin. It’s the thought behind them, the reason why I chose them, and the person I’m giving them to.',
  'And that person is you.',
  'You came into my life unexpectedly, pero ngayon, ang hirap nang isipin yung life ko na wala ka. You became someone I look for, someone I want to tell things to, someone I want beside me when something good happens, and even when everything feels heavy.',
  'Thank you for being someone I can be myself with. Thank you for accepting the parts of me that I sometimes struggle to accept myself. Thank you for making me feel loved in your own little ways, even when you probably don’t realize how much those things mean to me.',
  'If someday you forget how loved you are, I hope you come back to this little corner of our story and remember that there was someone who looked at you and thought, “I’m so lucky that I met you.”',
  'These flowers may only be virtual, but every word behind them is real. And if I could give you something more than flowers, I’d give you every beautiful thing I could, just so you could see yourself the way I see you.',
  'You are someone I will always be grateful for, someone I will always cherish, and someone I hope I get to make many more beautiful memories with.',
  'So this is for you, baby. A little flower for someone who unknowingly made my life bloom. 🤍🌷'
];
const flowerCard = document.querySelector('.flower-card');
const flowerButton = flowerCard?.querySelector('.text-button');
if (flowerCard && flowerButton) {
  flowerCard.querySelectorAll(':scope > p:not(.eyebrow)').forEach((paragraph) => paragraph.remove());
  const flowerBody = document.createElement('div');
  flowerBody.className = 'flower-letter';
  flowerLetter.forEach((paragraph) => {
    const text = document.createElement('p');
    text.textContent = paragraph;
    flowerBody.appendChild(text);
  });
  flowerCard.insertBefore(flowerBody, flowerButton);
}

const lastMessageText = `Baby, before this little story of ours ends, there’s one last thing I really want you to know. I don't know what the future will look like for us. Hindi ko alam kung ano-ano pa yung pagdadaanan natin, kung gaano karaming pagbabago ang darating, or kung gaano kahirap minsan yung mga araw na nasa harap natin. But one thing I know for sure is that I want you to be there. I want you to stay. Stay with me not only when everything is easy and happy, but also when things get confusing. Stay when we're both tired, when life feels too heavy, when we don't understand each other, and when things don't go exactly the way we hoped they would. Sana kapag dumating yung mga araw na mahirap, piliin pa rin nating mag-usap, umintindi, at kumapit sa isa't isa. I know we're not perfect. Hindi naman palaging magiging okay ang lahat. May times na magkakaroon tayo ng misunderstandings, may times na masasaktan natin ang isa't isa kahit hindi naman natin intention, and there will probably be days when we'll question a lot of things. But I hope that in those moments, we remember why we started. I hope we never become strangers again. Kasi sa dami ng taong pwede nating nakilala sa buhay natin, somehow, we found each other. And out of all the people in this world, ikaw yung naging taong gusto kong makasama, makausap, makulitan, makasama sa tahimik na moments, at makasama kahit wala naman tayong ginagawa. I want to grow with you. Gusto kong makita kung saan tayo dadalhin ng buhay. Gusto kong makita kang maabot yung mga pangarap mo. Gusto kong nandun ako kapag dumating yung araw na makikita kitang successful, happy, and proud of yourself. And when that day comes, I hope I can look at you and say, “See? We made it.” I want to be there for the little things too. Yung mga ordinary days na walang special occasion. Yung sabay tayong pagod. Yung random conversations. Yung tawanan dahil sa sobrang babaw na bagay. Yung mga simpleng araw na baka makalimutan natin eventually, pero habang nangyayari, sila pala yung magiging favorite memories natin. I don't just want the big moments with you. I want the ordinary ones too. I want more birthdays with you. More random pictures. More late-night conversations. More food trips. More pangungulit. More tampuhan na maaayos din. More “ingat ka.” More “nakauwi ka na ba?” More “good night.” More days where I get to hear about how your day went. And if life ever gets difficult, I want you to remember that you don't always have to be strong around me. You don't have to pretend that you're okay when you're not. You can tell me when you're tired. You can tell me when you're scared. You can tell me when you don't know what to do. I want to be your person not only when you're at your best, but even on the days when you don't feel like yourself. And baby, I hope you know that I'm also trying. I'm still learning how to love you better, how to understand you better, and how to become someone who deserves the love you give me. May mga pagkukulang din ako, may mga times na hindi ko nasasabi nang maayos yung nararamdaman ko, and I know I still have so much to learn. But please believe me when I say that my love for you is genuine. Hindi kita minamahal dahil kailangan kong may mahalin. Mahal kita dahil ikaw yung ikaw. Yung taong nakilala ko, yung taong naging parte ng buhay ko, yung taong unti-unting naging home sa akin in ways I never expected. You became someone I don't want to lose. And if I could ask for one thing from life, it's not for everything to always be perfect. I don't need a perfect relationship or a perfect future. Ang gusto ko lang ay sana, kahit hindi perfect ang lahat, nandun pa rin tayo. Still choosing each other. Still trying. Still laughing. Still growing. Still loving. Until one day, we'll look back at this little website, these pictures, these messages, and all the memories we made and realize how far we've come. Maybe someday, we'll have different dreams, different responsibilities, and a completely different life from what we have now. But I hope that when that time comes, ikaw pa rin yung katabi ko. I want to spend my life making memories with you. I want more years. More adventures. More quiet days. More celebrations. More challenges that we'll face together. More moments where I get to choose you, over and over again. And if I had the chance to go back to the beginning to that simple “happy birthday” that started everything I would still want to meet you. I would still choose you. Thank you for coming into my life. Thank you for staying. Thank you for every memory, every laugh, every conversation, every little effort, and every moment you've made me feel loved. I hope this birthday reminds you that you are deeply loved not just today, but in all the ordinary days that follow. Happy birthday, baby. I don't know how many birthdays we'll get to celebrate together, but I hope I get to be there for as many as life allows. And when life gets hard, when things become uncertain, when we don't know what's next, I hope we hold each other's hands a little tighter and say, “Kaya natin 'to. Sabay tayo.” Because that's what I want. Not just you in my happiest moments. I want you in my life. Through the good days, the bad days, the confusing days, the growing days, and everything in between. Stay with me through it all. And I'll do my best to stay with you, too. I love you, baby. More than these words could ever explain. I want you beside me not just for a moment, not just for a season, but for a lifetime.`;
const lastMessageCard = document.querySelector('.last-message-screen .detail-card');
const lastMessageButton = lastMessageCard?.querySelector('.text-button');
if (lastMessageCard && lastMessageButton) {
  lastMessageCard.querySelectorAll(':scope > p:not(.eyebrow):not(.signature)').forEach((paragraph) => paragraph.remove());
  const paragraphStarts = [
    'I want you to stay.',
    'I know we\'re not perfect.',
    'I want to grow with you.',
    'I want to be there for the little things too.',
    'And if life ever gets difficult,',
    'And baby, I hope you know',
    'I don\'t want you to ever think',
    'And baby, thank you',
    'If I could give you everything',
    'I hope when you look back',
    'Happy birthday, baby.',
    'I hope today reminds you',
    'Please take care of yourself',
    'I love you so much, baby.',
    'Happy birthday, my love.',
    'I love you. Always.'
  ];
  const paragraphPattern = paragraphStarts.map((start) => start.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
  const lastMessageParts = lastMessageText.split(new RegExp(` (?=${paragraphPattern})`));
  lastMessageParts.forEach((part) => {
    const lastMessageParagraph = document.createElement('p');
    lastMessageParagraph.className = 'last-message-letter';
    lastMessageParagraph.textContent = part.trim();
    lastMessageCard.insertBefore(lastMessageParagraph, lastMessageButton);
  });
}

let hasShownHeartCelebration = false;

function showScreen(screenName) {
  screens.forEach((screen) => {
    const isActive = screen.dataset.screen === screenName;
    screen.classList.toggle('is-active', isActive);
    screen.setAttribute('aria-hidden', String(!isActive));
  });
  if (screenName === 'gifts' && !hasShownHeartCelebration) {
    hasShownHeartCelebration = true;
    showHeartCelebration();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showHeartCelebration() {
  document.querySelector('.birthday-celebration')?.remove();
  const celebration = document.createElement('div');
  celebration.className = 'birthday-celebration';
  celebration.setAttribute('aria-hidden', 'true');
  celebration.innerHTML = '<div class="celebration-hearts"></div>';
  document.querySelector('.birthday-app')?.appendChild(celebration);

  const hearts = celebration.querySelector('.celebration-hearts');
  for (let index = 0; index < 60; index += 1) {
    const heart = document.createElement('span');
    heart.textContent = '♡';
    heart.style.left = `${5 + Math.random() * 90}%`;
    heart.style.animationDelay = `${Math.random() * 0.9}s`;
    heart.style.animationDuration = `${2.6 + Math.random() * 1.5}s`;
    hearts.appendChild(heart);
  }

  window.setTimeout(() => celebration.remove(), 4200);
}

navigationButtons.forEach((button) => button.addEventListener('click', () => showScreen(button.dataset.go)));

const envelopeAudio = new Audio('the-only-exception.mp3');
envelopeAudio.preload = 'auto';
let envelopeWasPlayingBeforeSong = false;
document.querySelector('.envelope-button')?.addEventListener('click', () => {
  envelopeAudio.currentTime = 0;
  envelopeAudio.play().catch(() => {});
});
envelopeAudio.addEventListener('ended', () => { envelopeWasPlayingBeforeSong = false; });

document.querySelectorAll('.memory-note').forEach((button) => button.addEventListener('click', () => {
  button.closest('.detail-card').querySelector('.reveal-message').textContent = button.dataset.memory;
}));
document.querySelectorAll('[data-reason]').forEach((button) => button.addEventListener('click', () => {
  button.closest('.detail-card').querySelector('.reveal-message').textContent = button.dataset.reason;
}));
document.querySelectorAll('[data-letter]').forEach((button) => button.addEventListener('click', () => {
  button.closest('.detail-card').querySelector('.reveal-message').textContent = button.dataset.letter;
}));

const storyMessages = {
  started: 'It started when you greeted me with a simple happy birthday. Now it is my turn to greet you, after all your sweet pangungulit somehow brought you into my life.',
  going: 'Right now, I’m simply grateful for where we are. We may not have everything figured out, but we have so many little moments that make everything worth it. I love how we continue to learn about each other, grow together, and create memories that slowly become my favorite parts of life.',
  favorite: 'My favorite memories are from the time you entered my life when I least expected it. Now my family knows you, cherishes you, and I treasure all the gala and moments we share together.'
};
document.querySelectorAll('.story-tab').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('.story-tab').forEach((item) => item.classList.toggle('is-active', item === button));
  document.querySelector('.story-result').textContent = storyMessages[button.dataset.story];
}));

const settleMessages = {
  s: 'Samahan mo ako sa bawat panahon. Ikaw ang paborito kong uwian at pahingahan.',
  e: 'Every little thing about you makes my world softer and brighter.',
  't-one': 'Tanganan mo ang kamay ko, at pipiliin kita araw-araw.',
  't-two': 'Tayo, kahit ordinaryong araw, nagiging espesyal kapag magkasama.',
  l: 'Love is you: ang tawa mo, kabaitan mo, at kapayapaang nararamdaman ko sa tabi mo.',
  'e-two': 'Everything feels better kapag kasama at kapiling kita.'
};
document.querySelectorAll('.settle-letter').forEach((letter) => letter.addEventListener('click', () => {
  document.querySelectorAll('.settle-letter').forEach((item) => item.classList.toggle('is-active', item === letter));
  document.querySelector('.settle-result').textContent = settleMessages[letter.dataset.settle];
}));

const audio = document.querySelector('#song-audio');
const songButton = document.querySelector('.song-play');
const songStatus = document.querySelector('.song-status');
songButton.addEventListener('click', async () => {
  if (audio.paused) {
    envelopeWasPlayingBeforeSong = !envelopeAudio.paused;
    if (envelopeWasPlayingBeforeSong) envelopeAudio.pause();
    if (audio.readyState === 0 || audio.error) { songStatus.textContent = 'add those-eyes.mp3 beside index.html to play this song'; return; }
    try { await audio.play(); songButton.classList.add('is-playing'); songStatus.textContent = 'now playing for you ♡'; } catch { songStatus.textContent = 'add those-eyes.mp3 beside index.html to play this song'; }
  } else { audio.pause(); songButton.classList.remove('is-playing'); songStatus.textContent = 'paused, but still for you'; }
});
audio.addEventListener('ended', () => { songButton.classList.remove('is-playing'); songStatus.textContent = 'that song will always remind me of you ♡'; });
audio.addEventListener('error', () => { songStatus.textContent = 'add those-eyes.mp3 beside index.html to play this song'; });

navigationButtons.forEach((button) => button.addEventListener('click', () => {
  if (button.dataset.go === 'gifts' && envelopeWasPlayingBeforeSong) {
    audio.pause();
    songButton.classList.remove('is-playing');
    songStatus.textContent = 'paused, but still for you';
    envelopeAudio.play().catch(() => {});
    envelopeWasPlayingBeforeSong = false;
  }
}));
