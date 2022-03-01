const cards = document.getElementById('cards');
const searchbar = document.getElementById('searchbar');
const nocards = document.getElementById('nocards');
const whySpringTab = document.getElementById('whySpringTab');
const learnTab = document.getElementById('learnTab');
const projectsTab = document.getElementById('projectsTab');
const communityTab = document.getElementById('communityTab');

const cardsArr = [{
        img: 'https://spring.io/images/projects/spring-boot-7f2e24fb962501672cc91ccd285ed2ba.svg',
        title: 'Spring Boot',
        text: 'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.'
    },
    {
        img: 'https://spring.io/images/projects/spring-framework-640ad1b04f7efa89e0f0f7353e6b5e02.svg?v=2',
        title: 'Spring Framework',
        text: 'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.'
    },
    {
        img: 'https://spring.io/images/projects/spring-data-79cc203ed8c54191215a60f9e5dc638f.svg',
        title: 'Spring Data',
        text: 'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.'
    },
    {
        img: 'https://spring.io/images/projects/spring-cloud-81fe04ab129ab99da0e7c7115bb09920.svg',
        title: 'Spring Cloud',
        text: 'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.'
    },
    {
        img: 'https://spring.io/images/projects/spring-data-flow-9eb1733b76b6cd62cbdd9bc9a2b04e56.svg',
        title: 'Spring Cloud Data Flow',
        text: 'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.'
    },
    {
        img: 'https://spring.io/images/projects/spring-security-b712a4cdb778e72eb28b8c55ec39dbd1.svg',
        title: 'Spring Security',
        text: 'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.'
    },
    {
        img: 'https://spring.io/images/projects/spring-graphql-2ba54760cd0651ad26e7425a0f65385d.svg',
        title: 'Spring for GraphQL',
        text: 'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.'
    },
    {
        img: 'https://spring.io/images/projects/logo-session-5b3068613a1bee9a50a69f12c6d255f5.png',
        title: 'Spring Session',
        text: 'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.'
    },
    {
        img: 'https://spring.io/images/projects/spring-integration-ed45c92142d821851bf6c771f4c556bb.svg?v=2',
        title: 'Spring Integration',
        text: 'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.'
    },
    {
        img: 'https://spring.io/images/projects/spring-hateoas-7da375e1fbd0213275eaa7009926e1cb.svg?v=2',
        title: 'Spring HATEOAS',
        text: 'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.'
    },
    {
        img: 'https://spring.io/images/projects/spring-restdocs-7ba253b6470bc54f9dba54e12eef549b.png',
        title: 'Spring REST Docs',
        text: 'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.'
    },
    {
        img: 'https://spring.io/images/projects/spring-batch-4ed8fe7187bf70afd9c8efa229a4f77c.svg',
        title: 'Spring Batch',
        text: 'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.'
    },
    {
        img: 'https://spring.io/images/projects/spring-amqp-6d6aaf6b4861d1cb458e53fb029b4046.svg?v=2',
        title: 'Spring AMQP',
        text: 'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.'
    },
    {
        img: 'https://spring.io/images/projects/spring-edf462fec682b9d48cf628eaf9e19521.svg',
        title: 'Spring CredHub',
        text: 'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.'
    }
];

const whySpringTabContent = [
    { title: 'Overview', link: '' },
    { title: 'Microservices', link: '' },
    { title: 'Reactive', link: '' },
    { title: 'Event Driven', link: '' },
    { title: 'Cloud', link: '' },
    { title: 'Web Applications', link: '' },
    { title: 'Serverless', link: '' },
    { title: 'Batch', link: '' }
];
const learnTabContent = [
    { title: 'Overview', link: '' },
    { title: 'Quickstart', link: '' },
    { title: 'Guides', link: '' },
    { title: 'Blog', link: '' },
];
const projectsTabContent = [
    { title: 'Overview', link: '' },
    { title: 'Spring Boot', link: '' },
    { title: 'Spring Framework', link: '' },
    { title: 'Spring Cloud', link: '' },
    { title: 'Spring Cloud Data Flow', link: '' },
    { title: 'Spring Data', link: '' },
    { title: 'Spring Integration', link: '' },
    { title: 'Spring Batch', link: '' },
    { title: 'Spring Security', link: '' },
    { title: 'View all projects', link: '' },
];
const communityTabContent = [
    { title: 'Overview', link: '' },
    { title: 'Events', link: '' },
    { title: 'Team', link: '' },
];

searchbar.addEventListener('keyup', (e) => {
    const searcString = e.target.value.toLowerCase();

    const filteredCards = cardsArr.filter((card) => {
        return (
            card.title.toLowerCase().includes(searcString) ||
            card.text.toLowerCase().includes(searcString)
        )
    });

    displayCards(filteredCards);
    filteredCards.length < 1 ? nocards.innerHTML = ` <h2>No results</h2>` : nocards.innerHTML = ` </>`
})

const displayCards = (cardList) => {

    const htmlString = cardList.map((card) => {
        return `
            <div class="card">
                <img src="${card.img}" alt="img">
                <div class="text">
                    <h2>${card.title}</h2>
                    <p>${card.text}</p>
                </div>
            </div>
        `;
    }).join('');
    cards.innerHTML = htmlString;
}

const displayTabs = (whySpringTabContent, learnTabContent, projectsTabContent, communityTabContent) => {
    whySpringTab.innerHTML = whySpringTabContent.map((tab) => {
        return (
            ` <a href="#">${tab.title}</a> `
        )
    }).join('')
    learnTab.innerHTML = learnTabContent.map((tab) => {
        return (
            ` <a href="#">${tab.title}</a> `
        )
    }).join('')
    projectsTab.innerHTML = projectsTabContent.map((tab) => {
        return (
            ` <a href="#">${tab.title}</a> `
        )
    }).join('')
    communityTab.innerHTML = communityTabContent.map((tab) => {
        return (
            ` <a href="#">${tab.title}</a> `
        )
    }).join('')
}

displayCards(cardsArr);
displayTabs(whySpringTabContent, learnTabContent, projectsTabContent, communityTabContent);