const Manager = require('../library/manager');
const Engineer = require('../library/engineer');
const Intern = require('../library/intern');

function generateManagerCard(employee) {
  return `
    <div class="card">
      <h3>${employee.getName()}</h3>
      <p>Manager</p>
      <ul>
        <li>Employee ID: ${employee.getId()}</li>
        <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
        <li>Office Number: ${employee.getOfficeNumber()}</li>
      </ul>
    </div>
  `;
}

function generateEngineerCard(employee) {
  return `
    <div class="card">
      <h3>${employee.name}</h3>
      <p>Engineer</p>
      <ul>
        <li>Employee ID: ${employee.id}</li>
        <li>Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
        <li>GitHub: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></li>
      </ul>
    </div>
  `;
}

function generateInternCard(employee) {
  return `
    <div class="card">
      <h3>${employee.name}</h3>
      <p>Intern</p>
      <ul>
        <li>Employee ID: ${employee.id}</li>
        <li>Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
        <li>School: ${employee.school}</li>
      </ul>
    </div>
  `;
}

function generateCards(employees) {
  const cards = employees.map((employee) => {
    if (employee instanceof Manager) {
      return generateManagerCard(employee);
    } else if (employee instanceof Engineer) {
      return generateEngineerCard(employee);
    } else if (employee instanceof Intern) {
      return generateInternCard(employee);
    }
  });

  return cards.join('');
}

function generateHTML(teamMembers) {
  const cards = generateCards(teamMembers);

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Overview</title>
        <link rel="stylesheet" href="../src/style.css">
      </head>
      <body>
        <header>
          <h1>Team Overview</h1>
        </header>
        <main>
          ${cards}
        </main>
      </body>
    </html>
  `;

  return html;
}

module.exports = generateHTML;