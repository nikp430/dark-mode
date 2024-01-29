
// selectors ---> // for selecting elements

const themeToggleBtn = document.querySelector('.theme-toggle');


// state ---> // data that could be use globally and possibly changed or mutated

const theme = localStorage.getItem('theme');


//on mount ---> // something that happens on the page when it first loaded

theme && document.body.classList.add(theme); // line of code runs on browser when is first loaded


// handlers --->  // way to better organize our functions

// handleThemeToggle handles the toggling of theme:
 
handleThemeToggle = () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme');
    }
};

// events --->  //  replace the Callback arrow function for "handleThemeToggle" handler function
themeToggleBtn.addEventListener('click', handleThemeToggle);



{

    // const themeBtn = document.querySelector('.theme-toggle');

    // const theme = localStorage.getItem('theme'); // one argument; takes the name of key we want to get


    // && operator will only allow what's going on the right to run if
    // and only if what's written on the left side is ==> TRUE <==
    
    // theme && document.body.classList.add(theme);

    // toggle dark mode class on body element
    
    // themeBtn.addEventListener('click', () => {
    //     document.body.classList.toggle('dark-mode');  // class to toggle on and off

        // create an if statement for to check whether the body contains the dark mode
        // we don't want to see (key, value pair) when not using dark mode

        // if (document.body.classList.contains('dark-mode')) {

            //  need to tell website to save settings for dark-mode and revert back to default background
        // use browser local storage (key and value pair); located in developer's tool on application tab
            // localStorage.setItem('theme', 'dark-mode');  // two arguments [both need to be string] (key, value)
        // } else {
            // remove key and value pair when website isn't in dark mode
            // localStorage.removeItem('theme');  // takes only one argument ( needs to be a string) (the name of key we want to remove)
    //     }
    // });


    // localStorage
    //     => option + cmd + j to open console; 
    //     => find >>; then after look for application(7th item);
    //     => select localStorage, inside is the website
    //     => key and value pair

}
