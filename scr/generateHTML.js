const Employee = require("../lib/Employee");

const htmlHeader = `<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Team Profile Generator</title>

    <script
        src="https://kit.fontawesome.com/238febc896.js"
        crossorigin="anonymous"
    ></script>
    <link rel="stylesheet" href="../dist/style.css" />
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main>`;

const htmlFooter = `   </main>
</body>
</html>
`;
function generateHTML(data) {
    let employeCard = [];
    let role;
    employeCard.push(htmlHeader);
    data.forEach((employee) => {
        role = employee.getRole();

        let card = `<article class="card">
        <div class="card-top">
            <h5>${employee.name}</h5>
            <div class="flex">
            ${(() => {
                if (role === "Manager") {
                    return `<i class="fa-solid fa-user"></i>`;
                } else if (role === "Engineer") {
                    return `<i class="fa-solid fa-person"></i>`;
                } else if (role === "Intern") {
                    return `<i class="fa-sharp fa-solid fa-graduation-cap"></i>`;
                }
            })()}
                <p>${role}</p>
            </div>
        </div>
        <ul>
            <li>ID:&nbsp;${employee.getId()}</li>
            <li>Email:&nbsp;
                <a
                    href="mailto:${employee.getEmail()}?subject=Mail from Our Site"
                    >${employee.getEmail()}</a
                >
            </li>
            <li>
        
             ${(() => {
                 if (role === "Manager") {
                     return ` Office number: ${employee.officeNumber}`;
                 } else if (role === "Engineer") {
                     return ` Github <a href="https://github.com/${employee.gitHub}" target="_blank">
                         ${employee.gitHub}
                     </a>`;
                 } else if (role === "Intern") {
                     return ` School:  
                         ${employee.school}`;
                 }
             })()}
            
            </li>
        </ul>
    </article>`;
        employeCard.push(card);
    });

    employeCard.push(htmlFooter);

    // console.log(employeCard);

    return employeCard.join("");
}
module.exports = generateHTML;
