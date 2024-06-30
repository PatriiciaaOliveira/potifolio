document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Load projects dynamically
    const projects = [
        {
            title: 'Sistema de Doações de Alimentos',
            description: 'Sistema para registrar e gerenciar doações de alimentos.',
            link: 'patriiciaaoliveira.github.io/Extensao/'
        },
        {
            title: 'Trabalho pim',
            description: 'Sistema para conclusão do semestre.',
            link: 'patriiciaaoliveira.github.io/Projeto-Pim5/'
        },
        {
            title: 'Apresentção',
            description: 'Sistema para minha irma .',
            link: 'patriiciaaoliveira.github.io/projeto-bia/'
        },
        {
            title: 'Calculadora',
            description: 'calculadora .',
            link: 'patriiciaaoliveira.github.io/projeto01/'
        },
    ];

    const projectsList = document.getElementById('projectsList');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">Ver Projeto</a>
        `;
        projectsList.appendChild(projectDiv);
    });
});
