<div id="top"></div>


<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">Pokedex</h3>

  <p align="center">
A jQuery based Pokedex that displays the photo, types, stats, description, and evolutionary stages of any requested Pokemon. 
    <br />
    <br />
    <a href="https://mhur0724.github.io/pokedex">View Demo</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
<p align="center">
<img width="602" alt="pokedex-image" src="https://user-images.githubusercontent.com/86213479/149596345-c7ec0614-ef71-498f-9e72-f59e4ca4444b.png"></p>

This is a jQuery based Pokedex I made to focus on making a project that interacts with an API. I didn't focus too much on the styling of this since I wanted to demonstrate my ability to use jQuery and JavaScript so it is not responsive and only maintains one size.

The pokedex will provide information (description, stats, and evolution forms) of the specific pokemon requested. It takes either the name or the Id of the pokemon (i.e "Bulbasaur" or "1"). If the pokemon does not exist or if the API cannot find the appropriate pokemon it will alert the user with an error.

From this project I was better able to understand how to use Fetch API, axios, and jQuery. Additionally, I learned how to use a debugger as I was just using console.log to try and debug my code, but that quickly became very confusing.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

* jQuery
* Axios
* Async / Await
* Try / Catch
* Dynamically changing stat bars
* CSS
* [PokeApi](https://pokeapi.co/)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/mhur0724/event-tracker.git
   ```
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## How to Use

For the most part entering any name should work, but some pokemon have an inconsistent naming structure so it's best to use the pokemon's offical ID. For example, the Pokemon "Zacian" has an ID of 888 but a labeled name of "Zacian-hero". Entering just "Zacian" will return with an error while entering "Zacian-hero" or 888 will return the correct pokemon.

<div align="center">
<img width="599" alt="zacian-hero" src="https://user-images.githubusercontent.com/86213479/149596347-a500f984-66de-41f6-aaf6-10fedba88049.png">
</div>

<br>
You can also cycle through the pokemon by clicking the arrow keys on the pokedex or using the arrow keys on your keyboard. 

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Matthew Hur - [LinkedIn](https://www.linkedin.com/in/matthewhur/) - mhur0724@gmail.com

Portfolio Link: [https://mhur0724.github.io/portfolio/](https://mhur0724.github.io/portfolio/)

<p align="right">(<a href="#top">back to top</a>)</p>








<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
