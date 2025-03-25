    var nav = document.querySelector("nav")
    window.addEventListener("scroll", ()=> {
        if (document.documentElement.scrollTop > 20 ) {
            nav.classList.add("sticky");
        }else {
            nav.classList.remove("sticky");
        }
    })

    function toggle() {
            var navbar = document.getElementById("navbar-links");
            navbar.classList.toggle("show");
        }

    let section = document.querySelectorAll('section');
    let navlink = document.querySelectorAll('header nav a');
    
    window.onscroll = () => {
        section.forEach(sec =>  {
            let top = window.scrollY;
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height ) {
                navlink.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            };
        });
    };

        document.addEventListener("DOMContentLoaded", function() {
        const homeSection = document.getElementById("home");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    homeSection.classList.add("show");
                    homeSection.classList.remove("hide");
                } else {
                    homeSection.classList.remove("show");
                    homeSection.classList.add("hide"); 
                }
            });
        }, { threshold: 0.2 }); 

        observer.observe(homeSection);
    });


    document.addEventListener("DOMContentLoaded", function () {
            const skills = document.querySelectorAll(".skill");

            skills.forEach((skill, index) => {
                setTimeout(() => {
                    skill.classList.add("visible");
                }, index * 300); 
            });

            document.querySelectorAll(".progress").forEach(bar => {
                setTimeout(() => {
                    bar.classList.add("animate");
                    bar.querySelector("span").style.opacity = "1"; 
                }, 1500);
            });
        });

        document.addEventListener("DOMContentLoaded", function () {
        const cards = document.querySelectorAll(".card");
        const section = document.getElementById("about");

        function handleScroll() {
            const rect = section.getBoundingClientRect();
            const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

            if (isInViewport) {
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add("visible");
                        card.classList.remove("reset");
                    }, index * 300);
                });
            } else {
                cards.forEach(card => {
                    card.classList.add("reset"); 
                    card.classList.remove("visible");
                });
            }
        }

        handleScroll();

        window.addEventListener("scroll", handleScroll);
    });

    document.addEventListener("DOMContentLoaded", function () {
        const projects = document.querySelectorAll(".project-card");
        const projectSection = document.getElementById("project");

        function handleProjectScroll() {
            const rect = projectSection.getBoundingClientRect();
            const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

            if (isInViewport) {
                projects.forEach((project, index) => {
                    setTimeout(() => {
                        project.classList.add("visible");
                        project.classList.remove("reset");
                    }, index * 300);
                });
            } else {
                projects.forEach(project => {
                    project.classList.add("reset"); 
                    project.classList.remove("visible");
                });
            }
        }

        handleProjectScroll();

        window.addEventListener("scroll", handleProjectScroll);
    });

    document.addEventListener("scroll", function() {
    let contactSection = document.querySelector("#contact");
    let rect = contactSection.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
        contactSection.classList.add("visible");
    } else {
        contactSection.classList.remove("visible");
    }
});