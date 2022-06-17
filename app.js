const cards = document.getElementById('cards');
const searchbar = document.getElementById('searchbar');
const nocards = document.getElementById('nocards');
const tabs = document.getElementById('tabs');
const overlayContent = document.getElementById('overlayContent');

const dropdownIconLink = "components/icon-dropdown.png"
const springLinkBase = "https://spring.io/"


const cardsArr = [{
        title: 'Spring Boot',
        text: 'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.',
        img: 'https://spring.io/images/projects/spring-boot-7f2e24fb962501672cc91ccd285ed2ba.svg',
        id: 1,
    },
    {
        title: 'Spring Framework',
        text: 'Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.',
        img: 'https://spring.io/images/projects/spring-framework-640ad1b04f7efa89e0f0f7353e6b5e02.svg?v=2',
        id: 2,
    },
    {
        title: 'Spring Data',
        text: 'Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.',
        img: 'https://spring.io/images/projects/spring-data-79cc203ed8c54191215a60f9e5dc638f.svg',
        id: 3,
    },
    {
        title: 'Spring Cloud',
        text: 'Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.',
        img: 'https://spring.io/images/projects/spring-cloud-81fe04ab129ab99da0e7c7115bb09920.svg',
        id: 4,
    },
    {
        title: 'Spring Cloud Data Flow',
        text: 'Provides an orchestration service for composable data microservice applications on modern runtimes.',
        img: 'https://spring.io/images/projects/spring-data-flow-9eb1733b76b6cd62cbdd9bc9a2b04e56.svg',
        id: 5,
    },
    {
        title: 'Spring Security',
        text: 'Protects your application with comprehensive and extensible authentication and authorization support.',
        img: 'https://spring.io/images/projects/spring-security-b712a4cdb778e72eb28b8c55ec39dbd1.svg',
        id: 6,
    },
    {
        title: 'Spring for GraphQL',
        text: 'Spring for GraphQL provides support for Spring applications built on GraphQL Java.',
        img: 'https://spring.io/images/projects/spring-graphql-2ba54760cd0651ad26e7425a0f65385d.svg',
        id: 7,
    },
    {
        title: 'Spring Session',
        text: 'Provides an API and implementations for managing a user’s session information.',
        img: 'https://spring.io/images/projects/logo-session-5b3068613a1bee9a50a69f12c6d255f5.png',
        id: 8,
    },
    {
        title: 'Spring Integration',
        text: 'Supports the well-known Enterprise Integration Patterns through lightweight messaging and declarative adapters.',
        img: 'https://spring.io/images/projects/spring-integration-ed45c92142d821851bf6c771f4c556bb.svg?v=2',
        id: 9,
    },
    {
        title: 'Spring HATEOAS',
        text: 'Simplifies creating REST representations that follow the HATEOAS principle.',
        img: 'https://spring.io/images/projects/spring-hateoas-7da375e1fbd0213275eaa7009926e1cb.svg?v=2',
        id: 10,
    },
    {
        title: 'Spring REST Docs',
        text: 'Lets you document RESTful services by combining hand-written documentation with auto-generated snippets produced with Spring MVC Test or REST Assured.',
        img: 'https://spring.io/images/projects/spring-restdocs-7ba253b6470bc54f9dba54e12eef549b.png',
        id: 11,
    },
    {
        title: 'Spring Batch',
        text: 'Simplifies and optimizes the work of processing high-volume batch operations.',
        img: 'https://spring.io/images/projects/spring-batch-4ed8fe7187bf70afd9c8efa229a4f77c.svg',
        id: 12,
    },
    {
        title: 'Spring AMQP',
        text: 'Applies core Spring concepts to the development of AMQP - based messaging solutions.',
        img: 'https://spring.io/images/projects/spring-amqp-6d6aaf6b4861d1cb458e53fb029b4046.svg?v=2',
        id: 13,
    },
    {
        title: 'Spring CredHub',
        text: 'Provides client-side support for storing, retrieving, and deleting credentials from a CredHub server running in a Cloud Foundry platform.',
        img: 'https://spring.io/images/projects/spring-edf462fec682b9d48cf628eaf9e19521.svg',
        id: 14,
    },
    {
        title: 'Spring Flo',
        text: 'Provides a JavaScript library that offers a basic embeddable HTML5 visual builder for pipelines and simple graphs.',
        img: 'https://spring.io/images/projects/spring-flo-9b976862b11e6dd682bcc4ae9f0eca1b.svg?v=2',
        id: 15,
    },
    {
        title: 'Spring for Apache Kafka',
        text: 'Provides Familiar Spring Abstractions for Apache Kafka.',
        img: 'https://spring.io/images/projects/spring-kafka-1f159a30a8723794dfa7260ffbdae5b0.svg?v=2',
        id: 16,
    },
];

const tabsArr = [{
        tabTitle: 'Why Spring',
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
        ],
        id: 1,
    },
    {
        tabTitle: 'Learn',
        isDropdown: true,
        tabItems: [
            { itemTitle: 'Overview', link: springLinkBase + 'learn' },
            { itemTitle: 'Quickstart', link: springLinkBase + 'quickstart' },
            { itemTitle: 'Guides', link: springLinkBase + 'guides' },
            { itemTitle: 'Blog', link: springLinkBase + 'blog' },
        ],
        id: 2,
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
        ],
        id: 3,
    },
    {
        tabTitle: 'Training',
        isDropdown: false,
        link: springLinkBase + 'training',
        id: 4,
    },
    {
        tabTitle: 'Support',
        isDropdown: false,
        link: springLinkBase + 'support',
        id: 5,
    },
    {
        tabTitle: 'Community',
        isDropdown: true,
        tabItems: [
            { itemTitle: 'Overview', link: springLinkBase + 'community' },
            { itemTitle: 'Events', link: springLinkBase + 'events' },
            { itemTitle: 'Team', link: springLinkBase + 'team' },
        ],
        id: 6,
    },
]


function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function dropContent(id) {
    document.getElementById(`drop${id}`).style.getPropertyValue("display") == "block" ? document.getElementById(`drop${id}`).style.display = "none" : document.getElementById(`drop${id}`).style.display = "block"
}

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

const displayOverlayContent = (tabsArr) => {
        overlayContent.innerHTML = tabsArr.map((tab, index) => {
                    if (tab.isDropdown) {
                        return (
                                `
                <div class="isDropdown">
                <a href="${tab.link}">${tab.tabTitle}</a>
                <img src="${dropdownIconLink}" alt="img" onclick="dropContent(${index})">
                </div>
                <hr>
                <div class="dropContent" id="drop${index}">
                ${
                    tab.tabItems.map( (item) => {
                    return(`<a href="#${item.link}">${item.itemTitle}</a>`)
                }).join("")
                }   
                </div>
                `
            )
        } else {
            return (
                `
                <div>
                <a href="#">${tab.tabTitle}</a>
                <hr>
                </div>
                `
            )
        }
    }).join('');
}

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
displayOverlayContent(tabsArr);