## ABSTRACT

"Dilettante's Muse" is an innovative TypeScript-based web application that aims to introduce clueless art lovers to famous works of art from the Metropolitan Museum of Art (MET), and offers access to art for individuals who cannot physically visit the museum. The application leverages the Metropolitan Museum of Art API to fetch data about the art pieces. The MVP of "Dilettante's Muse" includes features such as displaying art pieces from the MET, allowing users to favorite and unfavorite pieces, and providing a view for their favorite selections. Additionally, the app incorporates React Router, enabling a multi-page experience for users to interact with and explore art data more effectively.

## Deployed Website

[Dilettante's Muse](https://producthunt.com)

## COLLABORATORS

- Caitlin Cradick - [Github](https://github.com/caitlincradick) | [LinkedIn](https://www.linkedin.com/in/caitlincradick/)
- Saki C [Github](https://github.com/sakisandrac) | [LinkedIn](https://www.linkedin.com/in/saki-c-a7306b259/)
- Andrea Sorensen [Github](https://github.com/andreasorensen) | [LinkedIn](https://www.linkedin.com/in/andrea-sorensen-/)
- Elise Jones [Github](https://github.com/Elise-Jones) | [LinkedIn](https://www.linkedin.com/in/elise-jones-964bb5264/)

## Learning Goals

- Showcase our ability to self-teach a new technology by independently learning typescript and implementing in our project
- Enhance our proficiency in building robust and efficient React applications.
- Utilize GitHub and project boards effectively, conduct daily standups, and refine project management and teamwork skills.
- Develop expertise in Cypress testing to ensure comprehensive and reliable testing of our applications.
- Refine our skills with Router to create seamless user experiences, facilitating effortless navigation throughout the pages.


## Challenges

- One challenge our Cypress testing encountered errors due to fetch request interception problems. We implemented aliases and waits to resolve the issue, but later faced test crashes and timeouts after modifying the fetch function in the App. The problem stemmed from our randomizer function selecting indices from a fixed array, causing Cypress to wait for non-existent fetch calls, leading to test failures. Our solution was to git rid off the aliases and waits.

- Initially, our getRandomID function was designed to return an array of three numbers. The goal was that when we fetch the data, it would ideally return three separate objects, and if any of them lacked an ID or an image, we would fetch one more to replace that specific object. However, during testing, we noticed that we were fetching more data than we had anticipated. The issue arose because if the fetch returned even just one object without an ID, it triggered another fetch for three new objects. After meticulously troubleshooting the problem, we determined that returning only one random number would be sufficient to resolve the issue.

## TECHNOLOGIES USED

<div align="center">  
    <a href="https://www.javascript.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" /></a>  
    <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" /></a>  
    <a href="https://www.w3schools.com/css/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" /></a>   
    <a href="https://nodejs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="50" /></a>  
    <a href="https://github.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" height="50" /></a>  
    <a href="https://react.dev/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="50" /></a>  
    <a href="https://docs.cypress.io/guides/overview/why-cypress" target="_blank"><img style="margin: 10px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoXfntUBC8eXPGA7V8dQp74I5Xofeze3tnRua5hKQkd0ofyH0cy5mJm3_Y-zPhHO2ty9k&usqp=CAU" alt="Cypress" height="50" /></a>  
    <a href="https://www.typescriptlang.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg" alt="TypeScript" height="50" /></a>  
</div>
