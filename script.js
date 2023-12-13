// Copyright Year Auto-Update
copyright = document.querySelector("#copyright");
copyright.appendChild(document.createTextNode(new Date().getFullYear()));


const the_animation = document.querySelectorAll("#animation")

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entries,target.classList.add('scoll-animations')
        } else {
            entry.target.classList.remove('scroll-animation')
        }
    })
},

{ threshold: 0.5
};
//
for (let i=0; i<the_animation.length; i++) {
    const elements = the_animation[i];

    observer.observe(elements);
}