

json = [
  {
    "name": "Muralla China",
    "description": "",
    "image": "https://i.imgur.com/0gWZk2y.jpg",
    "image2": "",
    "image3": "",
    "link_sitio": "https://www.britannica.com/topic/Great-Wall-of-China",
    "link_ubicacion": "https://maps.app.goo.gl/QuNohwKMHDL2t5VP9"
  },
  {
    "name": "Machu Picchu",
    "description": "Descubre la ciudadela inca escondida en los Andes peruanos.",
    "image": "https://i.imgur.com/Z1YdR0X.jpg",
    "image2": "https://i.imgur.com/B2XkLmb.jpg",
    "image3": "https://i.imgur.com/2z5Yk3B.jpg",
    "link_sitio": "https://es.wikipedia.org/wiki/Machu_Picchu",
    "link_ubicacion": "https://maps.app.goo.gl/HPvYxWgCPDuv6P9d9"
  }
]




const showInfo = () => {
  let y = 0;
  const webButton = document.querySelector("#web-button");
  const emailButton = document.querySelector("#email-button");
  const locationButton = document.querySelector("#location-button");
  const text = document.querySelector("#text");
  const information = document.querySelector("#information");


  webButton.setAttribute("visible", true);
  setTimeout(() => {
    emailButton.setAttribute("visible", true);
  }, 200);
  setTimeout(() => {
    locationButton.setAttribute("visible", true);
  }, 400);

  let currentTab = '';
  text.setAttribute("value", "Muralla China");

  webButton.addEventListener('click', function (evt) {
    information.setAttribute("value", "AR, VR solutions and consu\nltations for your business");
    information.setAttribute("visible", !information.getAttribute("visible"))

    console.log("es esto",info)
  });
  emailButton.addEventListener('click', function (evt) {
    window.open("https://www.britannica.com/topic/Great-Wall-of-China", "_blank");
  });
  locationButton.addEventListener('click', function (evt) {
    window.open("https://maps.app.goo.gl/QuNohwKMHDL2t5VP9", "_blank");
    currentTab = 'location';
  });

}

const showPortfolio = (done) => {
  const portfolio = document.querySelector("#portfolio-panel");
  const portfolioLeftButton = document.querySelector("#portfolio-left-button");
  const portfolioRightButton = document.querySelector("#portfolio-right-button");
  const paintandquestPreviewButton = document.querySelector("#paintandquest-preview-button");
  
  let y = 0;
  let currentItem = 0;

  portfolio.setAttribute("visible", true);

  const showPortfolioItem = (item) => {
    for (let i = 0; i <= 2; i++) {
      document.querySelector("#portfolio-item" + i).setAttribute("visible", i === item);
    }
  }
  const id = setInterval(() => {
    y += 0.008;
    if (y >= 0.6) {
      clearInterval(id);
      portfolioLeftButton.setAttribute("visible", true);
      portfolioRightButton.setAttribute("visible", true);
      portfolioLeftButton.addEventListener('click', () => {
        currentItem = (currentItem + 1) % 3;
        showPortfolioItem(currentItem);
      });
      portfolioRightButton.addEventListener('click', () => {
        currentItem = (currentItem - 1 + 3) % 3;
        showPortfolioItem(currentItem);
      });

      paintandquestPreviewButton.addEventListener('click', () => {
        paintandquestPreviewButton.setAttribute("visible", false);
        const testVideo = document.createElement("video");
        const canplayWebm = testVideo.canPlayType('video/webm; codecs="vp8, vorbis"');
        if (canplayWebm == "") {
          document.querySelector("#paintandquest-video-link").setAttribute("src", "#paintandquest-video-mp4");
          document.querySelector("#paintandquest-video-mp4").play();
        } else {
          document.querySelector("#paintandquest-video-link").setAttribute("src", "#paintandquest-video-webm");
          document.querySelector("#paintandquest-video-webm").play();
        }
      });

      setTimeout(() => {
        done();
      }, 500);
    }
    portfolio.setAttribute("position","0 0 " + y);
  }, 10);
}

const showAvatar = (onDone) => {
  const avatar = document.querySelector("#avatar");
  let z = -0.3;
  const id = setInterval(() => {
    z += 0.008;
    if (z >= 0.3) {
      clearInterval(id);
      onDone();
    }
    avatar.setAttribute("position", "0 -0.25 " + z);
  }, 10);
}

AFRAME.registerComponent('mytarget', {
  init: function () {
    this.el.addEventListener('targetFound', event => {
      const targetIndex = this.el.getAttribute('mindar-image-target').targetIndex;
      console.log(`Target found: ${targetIndex}`);

      if (targetIndex === 0) {
        // Lógica para el primer objetivo (Muralla China)
        console.log("hola mundo");
        showAvatar(() => {
          setTimeout(() => {
            showPortfolio(() => {
              setTimeout(() => {
                showInfo();
              }, 100);
            });
          }, 300);
        });
      } else if (targetIndex === 1) {
        console.log("Target found: Machu Picchu");
        showAvatar(() => {
          setTimeout(() => {
            showPortfolio(() => {
              setTimeout(() => {
                showInfo();
              }, 100);
            });
          }, 300);
        });
      }
    });

    this.el.addEventListener('targetLost', event => {
      const targetIndex = this.el.getAttribute('mindar-image-target').targetIndex;
      console.log(`Target lost: ${targetIndex}`);
    });
  }
})