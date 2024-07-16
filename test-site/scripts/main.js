const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-img.jpg") {
        myImage.setAttribute("src", "images/img.png");
    }
    else {
        myImage.setAttribute("src", "images/firefox-img.jpg");
      }
    };

    let myButton = document.querySelector("button");
    let myHeading = document.querySelector("h1");

    function setUserName() {
        const Username = prompt("Enter your name.");
        if (!Username){
            setUserName();
        }
        else{
        localStorage.setItem("name", Username);
        myHeading.textContent = `Mozilla is cool, ${Username}`;
        }

    }
    

    if (!localStorage.getItem("name")) {
        setUserName();
      } else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Mozilla is cool, ${storedName}`;
      }
      myButton.onclick = () => {
        setUserName();
      };
            