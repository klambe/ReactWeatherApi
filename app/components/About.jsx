var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>Welcome to the about page! This is a weather app built using react and follows the complete react guide on Udemy</p>

            <p>Below are links to some useful information:</p>

            <ul>
                <li>
                    <a href="https://github.com/klambe/ReactWeatherApi">Project Github Repo</a>
                </li>

                <li>
                    <a href="https://whispering-everglades-75762.herokuapp.com">Heroku Page Link</a>
                </li>

            </ul>
        </div>
    )
};

module.exports = About;
