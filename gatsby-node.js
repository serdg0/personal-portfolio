exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {

    const projects = [
        {
            name: 'TimeLogger',
            url: 'https://clock-cms.herokuapp.com/',
            repo: 'https://github.com/serdg0/timelogger',
            build: ['Javascript', 'Ruby', 'npm', 'React', 'Redux', 'Ruby on Rails', 'Heroku'],
            description: 'TimeLogger was my final project in the curriculum. Its fed by an API made in Ruby on Rails. I took the chance to use libraries like lodash and react-router.',
            imgName: 'timelogger.png',
        },
        {
            name: 'Bookstore CMS',
            url: 'https://bookstore-reactredux.herokuapp.com/',
            repo: 'https://github.com/serdg0/bookstore',
            build: ['Javascript', 'npm', 'React', 'Redux', 'Heroku'],
            description: 'In this project, I had the chance to learn Redux for the first time. Also, the UI is based on a given design.',
            imgName: 'bookstore.png',
        },
        {
            name: 'Calculator',
            url: 'https://react-calculator-serdg.herokuapp.com/',
            repo: 'https://github.com/serdg0/React-Calculator',
            build: ['Javascript', 'npm', 'React', 'Heroku'],
            description: 'A calculator built using React components.',
            imgName: 'calculator.png',
        },
        {
            name: 'Battleship',
            url: 'https://serdg0.github.io/battleship/',
            repo: 'https://github.com/serdg0/battleship',
            build: ['Javascript', 'Webpack', 'Pair Programming'],
            description: "A browser-based battleship game built with Javascript, applying it's best practices.",
            imgName: 'battleship.png',
        },
        {
            name: 'Tic Tac Toe',
            url: 'https://eapenzacharias.github.io/TicTacToe-JS/',
            repo: 'https://github.com/eapenzacharias/TicTacToe-JS',
            build: ['Javascript', 'Webpack', 'Pair Programming'],
            description: 'A browser-based tic-tac-toe game.',
            imgName: 'tictactoe.png',
        },
        {
            name: 'Socialbook',
            url: 'https://socialbook2019.herokuapp.com/',
            repo: 'https://github.com/MephistoDevelop/SocialBook',
            build: ['Ruby', 'Ruby on Rails', 'Pair Programming', 'Heroku'],
            description: 'A social platform based on Facebook, built with Ruby on Rails. Remember to confirm your email!',
            imgName: 'socialbook.png',
        },
        {
            name: 'Newsweek Design',
            url: 'https://serdg0.github.io/Newsweek-design/',
            repo: 'https://github.com/serdg0/Newsweek-design',
            build: ['HTML', 'CSS', 'Bootstrap'],
            description: 'A project based on the official Newsweek layout design and built using Bootstrap.',
            imgName: 'newsweek.png',
        },
    ]

    projects.forEach(project => {
        const node = {
            name: project.name,
            url: project.url,
            repo: project.repo,
            build: project.build,
            description: project.description,
            imgName: project.imgName,
            id: createNodeId(`Project-${project.name}`),
            internal: {
                type: 'Project',
                contentDigest: createContentDigest(project),
            },
        }
        actions.createNode(node)
    })
}
