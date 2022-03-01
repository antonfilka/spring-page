const cards = document.getElementById('cards');
const searchbar = document.getElementById('searchbar');
const nocards = document.getElementById('nocards');
const tabs = document.getElementById('tabs');

const dropdownIconLink = "components/icon-dropdown.png"
const springLinkBase = "https://spring.io/"


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

const tabsArr = [{
        tabTitle: 'Why spring',
        isDropdown: true,
        tabItems: [
            { itemTitle: 'Overview', link: springLinkBase + 'why-spring' },
            { itemTitle: 'Microservices', link: springLinkBase + 'microservices' },
            { itemTitle: 'Reactive', link: springLinkBase + 'reactive' },
            { itemTitle: 'Event Driven', link: springLinkBase + 'event-driven' },
            { itemTitle: 'Cloud', link: springLinkBase + 'cloud' },
            { itemTitle: 'Web Applications', link: springLinkBase + 'web-applications' },
            { itemTitle: 'Serverless', link: springLinkBase + '' },
            { itemTitle: 'Batch', link: springLinkBase + '' }
        ]
    },
    {
        tabTitle: 'Learn',
        isDropdown: true,
        tabItems: [
            { itemTitle: 'Overview', link: springLinkBase + 'learn' },
            { itemTitle: 'Quickstart', link: springLinkBase + 'quickstart' },
            { itemTitle: 'Guides', link: springLinkBase + 'guides' },
            { itemTitle: 'Blog', link: springLinkBase + 'blog' },
        ]
    },
    {
        tabTitle: 'Projects',
        isDropdown: true,
        tabItems: [
            { itemTitle: 'Overview', link: springLinkBase + 'projects' },
            { itemTitle: 'Spring Boot', link: springLinkBase + 'projects/spring-boot' },
            { itemTitle: 'Spring Framework', link: springLinkBase + 'projects/spring-framework' },
            { itemTitle: 'Spring Cloud', link: springLinkBase + 'projects/spring-cloud' },
            { itemTitle: 'Spring Cloud Data Flow', link: springLinkBase + 'projects/spring-cloud-dataflow' },
            { itemTitle: 'Spring Data', link: springLinkBase + 'projects/spring-data' },
            { itemTitle: 'Spring Integration', link: springLinkBase + 'projects/spring-integration' },
            { itemTitle: 'Spring Batch', link: springLinkBase + 'projects/spring-batch' },
            { itemTitle: 'Spring Security', link: springLinkBase + 'projects/spring-security' },
            { itemTitle: 'View all projects', link: springLinkBase + 'projects' },
        ]
    },
    {
        tabTitle: 'Training',
        isDropdown: false,
        link: springLinkBase + 'training'
    },
    {
        tabTitle: 'Support',
        isDropdown: false,
        link: springLinkBase + 'support'
    },
    {
        tabTitle: 'Community',
        isDropdown: true,
        tabItems: [
            { itemTitle: 'Overview', link: springLinkBase + 'community' },
            { itemTitle: 'Events', link: springLinkBase + 'events' },
            { itemTitle: 'Team', link: springLinkBase + 'team' },
        ]
    },

]

searchbar.addEventListener('keyup', (e) => {
    const searcString = e.target.value.toLowerCase();

    const filteredCards = cardsArr.filter((card) => {
        return (
            card.title.toLowerCase().includes(searcString) ||
            card.text.toLowerCase().includes(searcString)
        )
    });

    setTimeout(
        () => {
            displayCards(filteredCards);
            filteredCards.length < 1 ? nocards.innerHTML = ` <h2>No results</h2>` : nocards.innerHTML = ` </>`
        },
        300
    );

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

const displayTabs = (tabsArr) => {
        tabs.innerHTML = tabsArr.map((tab) => {
                    if (tab.isDropdown) {
                        return (
                                `
                    <div class="dropdown">
                    <button class="dropbtn"><h4>${tab.tabTitle}</h4></button>
                    <img src="${dropdownIconLink}" alt="img">
                    <div class="dropdown-content">
                    ${tab.tabItems.map((tabItem) => {
                        return (` <a href="${tabItem.link}">${tabItem.itemTitle}</a> `)
                    }).join('')}
                    </div>
                    </div>
                    `
                )} else {
                        return (`<a href="${tab.link}"><h4>${tab.tabTitle}</h4></a>`)
                    }
    }).join('');
}

displayCards(cardsArr);
displayTabs(tabsArr);