document.addEventListener('DOMContentLoaded', function() {
    // Article data
    const articles = [
        {
            id: 1,
            title: "The Holocaust: Systematic Genocide of European Jews",
            category: "genocide",
            year: 1941,
            tags: ["europe", "genocide", "war"],
            excerpt: "The Holocaust was the systematic, state-sponsored persecution and murder of six million Jews by the Nazi regime and its allies and collaborators.",
            content: "The Holocaust was the systematic, state-sponsored persecution and murder of six million Jews by the Nazi regime and its allies and collaborators. The Nazis came to power in Germany in January 1933. They believed that the Germans belonged to a race that was 'superior' to all others. They claimed that the Jews belonged to a race that was 'inferior' and a threat to the so-called German racial community. By the end of the Holocaust, six million Jewish men, women and children had been murdered in ghettos, mass-shootings, in concentration camps and extermination camps."
        },
        {
            id: 2,
            title: "The Great Famine in China",
            category: "disaster",
            year: 1959,
            tags: ["asia", "famine"],
            excerpt: "The Great Chinese Famine was a period between 1959 and 1961 in the history of the People's Republic of China characterized by widespread famine.",
            content: "The Great Chinese Famine was a period between 1959 and 1961 in the history of the People's Republic of China characterized by widespread famine. Some scholars have estimated the death toll at between 15 and 55 million people. The major contributing factors were the policies of the Great Leap Forward and people's communes, such as the 'Four Pests Campaign', which forced peasants to abandon all private food production, and the diversion of labor to steel production instead of agriculture. This was compounded by adverse weather conditions, including droughts and floods. In many instances, peasants were persecuted for failing to meet unrealistic production quotas."
        },
        {
            id: 3,
            title: "Hiroshima and Nagasaki Atomic Bombings",
            category: "war",
            year: 1945,
            tags: ["asia", "war", "nuclear"],
            excerpt: "The United States detonated two atomic bombs over the Japanese cities of Hiroshima and Nagasaki on August 6 and 9, 1945, respectively.",
            content: "The United States detonated two atomic bombs over the Japanese cities of Hiroshima and Nagasaki on August 6 and 9, 1945, respectively. The two bombings killed between 129,000 and 226,000 people, most of whom were civilians, and remain the only use of nuclear weapons in armed conflict. In the final year of World War II, the Allies prepared for a costly invasion of the Japanese mainland. This undertaking was preceded by a conventional and firebombing campaign that devastated 67 Japanese cities. The war in Europe had concluded when Germany signed its instrument of surrender on May 8, 1945, but the Pacific War continued."
        },
        {
            id: 4,
            title: "The Rwandan Genocide",
            category: "genocide",
            year: 1994,
            tags: ["africa", "genocide"],
            excerpt: "The Rwandan genocide was a mass slaughter of Tutsi and moderate Hutu in Rwanda by members of the Hutu majority government.",
            content: "The Rwandan genocide was a mass slaughter of Tutsi and moderate Hutu in Rwanda by members of the Hutu majority government between April and July 1994. During the approximate 100-day period from April 7 to mid-July, an estimated 500,000 to 1,000,000 Rwandans were killed, constituting as many as 70% of the Tutsi population. Additionally, 30% of the Pygmy Batwa were killed. The genocide was planned by members of the core Hutu political elite, many of whom occupied positions at top levels of the national government."
        },
        {
            id: 5,
            title: "The Black Death Pandemic",
            category: "pandemic",
            year: 1347,
            tags: ["europe", "global", "pandemic"],
            excerpt: "The Black Death was a devastating global epidemic of bubonic plague that struck Europe and Asia in the mid-1300s.",
            content: "The Black Death was a devastating global epidemic of bubonic plague that struck Europe and Asia in the mid-1300s. The plague arrived in Europe in October 1347, when 12 ships from the Black Sea docked at the Sicilian port of Messina. People gathered on the docks were met with a horrifying surprise: Most sailors aboard the ships were dead, and those still alive were gravely ill and covered in black boils that oozed blood and pus. Sicilian authorities hastily ordered the fleet of 'death ships' out of the harbor, but it was too late: Over the next five years, the Black Death would kill more than 20 million people in Europe—almost one-third of the continent's population."
        },
        {
            id: 6,
            title: "The Cambodian Genocide",
            category: "genocide",
            year: 1975,
            tags: ["asia", "genocide"],
            excerpt: "The Cambodian genocide was carried out by the Khmer Rouge regime under the leadership of Pol Pot, killing approximately 1.5 to 2 million people.",
            content: "The Cambodian genocide was carried out by the Khmer Rouge regime under the leadership of Pol Pot, killing approximately 1.5 to 2 million people from 1975 to 1979, nearly a quarter of Cambodia's population. The Khmer Rouge wanted to transform Cambodia into a rural, classless society. They forced millions of people from the cities to work on communal farms in the countryside. They attempted to rebuild the country's agriculture on the model of the 11th century. They also sought to eliminate anyone suspected of 'involvement in free-market activities.' Suspected capitalists encompassed professionals and almost everyone with an education, many urban dwellers, and anyone with connections to foreign governments."
        },
        {
            id: 7,
            title: "The Great Irish Famine",
            category: "disaster",
            year: 1845,
            tags: ["europe", "famine"],
            excerpt: "The Great Famine, also known as the Great Hunger, was a period of mass starvation and disease in Ireland from 1845 to 1849.",
            content: "The Great Famine, also known as the Great Hunger, was a period of mass starvation and disease in Ireland from 1845 to 1849. With the most severely affected areas in the west and south of Ireland, where the Irish language was dominant, the period was contemporaneously known in Irish as An Drochshaol, loosely translated as 'the hard times'. The worst year of the period was 1847, known as 'Black '47'. During the Great Hunger, about 1 million people died and more than a million fled the country, causing the country's population to fall by 20–25%, in some towns falling as much as 67% between 1841 and 1851."
        },
        {
            id: 8,
            title: "The Atlantic Slave Trade",
            category: "disaster",
            year: 1619,
            tags: ["americas", "africa", "global"],
            excerpt: "The Atlantic slave trade was the systematic enslavement and transportation of people from Africa to the New World.",
            content: "The Atlantic slave trade was the systematic enslavement and transportation of people from Africa to the New World, which lasted from the 16th to the 19th centuries. The slave trade is estimated to have transported 12 million Africans across the Atlantic over a span of 400 years. The slave trade not only led to the violent transportation overseas of millions of Africans but also to the deaths of many millions more. Millions of people were shipped to the New World during the Middle Passage of the triangular trade route where European vessels sailed to African kingdoms, exchanged goods for slaves, sailed to the Americas to trade slaves for colonial goods, and then returned to Europe."
        },
        {
            id: 9,
            title: "The Spanish Flu Pandemic",
            category: "pandemic",
            year: 1918,
            tags: ["global", "pandemic"],
            excerpt: "The Spanish flu pandemic of 1918, the deadliest in history, infected an estimated 500 million people worldwide—about one-third of the planet's population.",
            content: "The Spanish flu pandemic of 1918, the deadliest in history, infected an estimated 500 million people worldwide—about one-third of the planet's population—and killed an estimated 20 million to 50 million victims, including some 675,000 Americans. The 1918 flu was first observed in Europe, the United States and parts of Asia before swiftly spreading around the world. At the time, there were no effective drugs or vaccines to treat this killer flu strain. Citizens were ordered to wear masks, schools, theaters and businesses were shuttered and bodies piled up in makeshift morgues before the virus ended its deadly global march."
        },
        {
            id: 10,
            title: "The Chernobyl Nuclear Disaster",
            category: "disaster",
            year: 1986,
            tags: ["europe", "nuclear"],
            excerpt: "The Chernobyl disaster was a nuclear accident that occurred on April 26, 1986, at the No. 4 reactor in the Chernobyl Nuclear Power Plant.",
            content: "The Chernobyl disaster was a nuclear accident that occurred on April 26, 1986, at the No. 4 reactor in the Chernobyl Nuclear Power Plant, near the city of Pripyat in the north of the Ukrainian SSR in the Soviet Union. It is considered the worst nuclear disaster in history both in terms of cost and casualties. The initial emergency response, together with later decontamination of the environment, involved more than 500,000 personnel and cost an estimated 18 billion Soviet rubles—roughly US$68 billion in 2019, adjusted for inflation. The accident started during a safety test on an RBMK-type nuclear reactor, which was commonly used throughout the Soviet Union."
        },
        {
            id: 11,
            title: "The Armenian Genocide",
            category: "genocide",
            year: 1915,
            tags: ["europe", "asia", "genocide"],
            excerpt: "The Armenian Genocide was the systematic destruction of the Armenian people and identity in the Ottoman Empire during World War I.",
            content: "The Armenian Genocide was the systematic destruction of the Armenian people and identity in the Ottoman Empire during World War I. With an estimated death toll of 1.5 million people, the genocide was carried out through mass killings, death marches through the Syrian Desert, and the forced Islamization of Armenian women and children. The genocide began on April 24, 1915, when Ottoman authorities arrested and executed several hundred Armenian intellectuals and community leaders in Constantinople. The Ottoman government's official justification for the deportations was that the Armenians were in league with Russia, then fighting against the Ottomans as part of the Triple Entente in World War I, despite the vast majority of Ottoman Armenians being civilians."
        },
        {
            id: 12,
            title: "The Great Bengal Famine",
            category: "disaster",
            year: 1943,
            tags: ["asia", "famine", "war"],
            excerpt: "The Bengal famine of 1943 was a devastating famine that struck the Bengal province of British India during World War II, killing an estimated 2-3 million people.",
            content: "The Bengal famine of 1943 was a devastating famine that struck the Bengal province of British India during World War II, killing an estimated 2-3 million people. The famine resulted from a combination of factors including policy failures, wartime inflation, hoarding, and the British government's prioritization of the war effort over civilian needs. The provincial government denied that a famine existed, and humanitarian aid was minimal despite Churchill's War Cabinet receiving warnings of the famine's severity. British wartime policies, including the 'denial policy' of destroying boats and rice stocks in coastal Bengal to prevent their use by the Japanese in case of invasion, exacerbated the crisis. The famine disproportionately affected the rural poor, particularly agricultural laborers, fishermen, transport workers, and craftspeople."
        },
        {
            id: 13,
            title: "The Cultural Revolution in China",
            category: "disaster",
            year: 1966,
            tags: ["asia", "political"],
            excerpt: "The Cultural Revolution was a sociopolitical movement in China from 1966 until Mao Zedong's death in 1976, resulting in widespread persecution, destruction of cultural artifacts, and economic disruption.",
            content: "The Cultural Revolution was a sociopolitical movement in China from 1966 until Mao Zedong's death in 1976. Launched by Mao, the Chairman of the Communist Party of China, its stated goal was to preserve Chinese communism by purging remnants of capitalist and traditional elements from Chinese society. The movement paralyzed China politically and significantly affected the country economically and socially. Millions of people were persecuted, with verified death tolls ranging from hundreds of thousands to millions. Historical relics and artifacts were destroyed, and cultural and religious sites were ransacked. Red Guards terrorized the streets, and massive numbers of people were forced to publicly criticize themselves, their friends, and their families. Many prominent political leaders, including Liu Shaoqi and Deng Xiaoping, were purged."
        },
        {
            id: 14,
            title: "The Partition of India",
            category: "disaster",
            year: 1947,
            tags: ["asia", "political"],
            excerpt: "The Partition of India was the division of British India in 1947 into two independent dominions: India and Pakistan, leading to one of the largest mass migrations in human history and widespread violence.",
            content: "The Partition of India was the division of British India in 1947 into two independent dominions: India and Pakistan. The partition was outlined in the Indian Independence Act 1947 and resulted in the dissolution of the British Raj. The partition displaced between 10-20 million people along religious lines, creating overwhelming refugee crises in the newly constituted dominions. The violent nature of the partition created an atmosphere of hostility and suspicion between India and Pakistan that plagues their relationship to this day. The term 'partition of India' does not cover the secession of Bangladesh from Pakistan in 1971, nor the earlier separations of Burma (now Myanmar) and Ceylon (now Sri Lanka) from the administration of British India. The partition was accompanied by massive violence on both sides of the new borders, with estimates of loss of life varying from several hundred thousand to two million."
        },
        {
            id: 15,
            title: "The Killing Fields of Cambodia",
            category: "genocide",
            year: 1975,
            tags: ["asia", "genocide", "political"],
            excerpt: "The Killing Fields were a number of sites in Cambodia where collectively more than a million people were killed and buried by the Khmer Rouge regime.",
            content: "The Killing Fields were a number of sites in Cambodia where collectively more than a million people were killed and buried by the Khmer Rouge regime during its rule of the country from 1975 to 1979, immediately after the end of the Cambodian Civil War. The mass killings are widely regarded as part of a broad state-sponsored genocide. Analysis of 20,000 mass grave sites by the DC-Cam Mapping Program and Yale University indicate at least 1,386,734 victims of execution. Estimates of the total deaths resulting from Khmer Rouge policies, including disease and starvation, range from 1.7 to 2.5 million out of a 1975 population of roughly 8 million. The Khmer Rouge regime arrested and eventually executed almost everyone suspected of connections with the former government or with foreign governments, as well as professionals and intellectuals."
        },
        {
            id: 16,
            title: "The AIDS Epidemic",
            category: "pandemic",
            year: 1981,
            tags: ["global", "pandemic", "disease"],
            excerpt: "The AIDS epidemic, caused by HIV (Human Immunodeficiency Virus), has claimed more than 32 million lives since it was first identified in 1981.",
            content: "The AIDS epidemic, caused by HIV (Human Immunodeficiency Virus), has claimed more than 32 million lives since it was first identified in 1981. HIV targets the immune system and weakens people's defense against infections and some types of cancer. As the virus destroys and impairs the function of immune cells, infected individuals gradually become immunodeficient. The most advanced stage of HIV infection is Acquired Immunodeficiency Syndrome (AIDS), which can take from 2 to 15 years to develop depending on the individual. AIDS is defined by the development of certain cancers, infections, or other severe clinical manifestations. The epidemic was particularly devastating in the 1980s and 1990s before effective treatments were developed. Sub-Saharan Africa remains the most severely affected region, accounting for nearly two-thirds of the global total of new HIV infections."
        },
        {
            id: 17,
            title: "The Bosnian Genocide",
            category: "genocide",
            year: 1992,
            tags: ["europe", "genocide", "war"],
            excerpt: "The Bosnian Genocide refers to the genocide of Bosniaks (Bosnian Muslims) during the Bosnian War, particularly the Srebrenica massacre in July 1995.",
            content: "The Bosnian Genocide refers to the genocide of Bosniaks (Bosnian Muslims) during the Bosnian War, particularly the Srebrenica massacre in July 1995. The war followed the breakup of Yugoslavia and was part of the wider Yugoslav Wars. The International Criminal Tribunal for the former Yugoslavia (ICTY) and the International Court of Justice (ICJ) have ruled that the massacre of Bosniak men and boys in Srebrenica constituted genocide. In the ICTY's judgment in the case against Radislav Krstić, it was determined that 'the Srebrenica massacre was genocidal' and that 'Bosnian Serb forces committed genocide.' The massacre involved the killing of more than 8,000 Bosniak men and boys, as well as the mass expulsion of another 25,000–30,000 Bosniak civilians, in and around the town of Srebrenica."
        },
        {
            id: 18,
            title: "The Great Leap Forward Famine",
            category: "disaster",
            year: 1958,
            tags: ["asia", "famine", "political"],
            excerpt: "The Great Leap Forward was an economic and social campaign in China that aimed to rapidly transform the country from an agrarian economy into a socialist society through rapid industrialization and collectivization.",
            content: "The Great Leap Forward was an economic and social campaign in China that aimed to rapidly transform the country from an agrarian economy into a socialist society through rapid industrialization and collectivization. The campaign was led by Chairman Mao Zedong between 1958 and 1962 and resulted in the deadliest famine in history. Mao's radical policies, including the backyard furnace campaign where peasants were ordered to produce steel in small furnaces, diverted agricultural workers from food production. The collectivization of agriculture, combined with bad weather and the withdrawal of Soviet technical personnel, led to food shortages. Local officials, fearing punishment, falsified harvest figures, leading central authorities to requisition more grain than was actually available. The result was a massive famine that claimed between 15 and 55 million lives, making it the largest famine in human history."
        },
        {
            id: 19,
            title: "The Indonesian Mass Killings",
            category: "genocide",
            year: 1965,
            tags: ["asia", "genocide", "political"],
            excerpt: "The Indonesian mass killings of 1965–66 were large-scale killings targeting communists, ethnic Chinese, and alleged leftists during a political purge following a failed coup.",
            content: "The Indonesian mass killings of 1965–66 were large-scale killings targeting communists, ethnic Chinese, and alleged leftists during a political purge following a failed coup d'état in Indonesia. The violence occurred during a period of political instability known as the 'Indonesian tragedy' or 'Indonesian genocide.' The killings began in October 1965, sparked by the failed coup of the 30 September Movement, and continued until March 1966, with smaller-scale purges continuing for years afterward. The most widely accepted estimates are that more than 500,000 people were killed. The purge was a pivotal event in the transition to the 'New Order' and the elimination of the Indonesian Communist Party (PKI) as a political force, with impacts lasting well into the 21st century. The killings were done with the support of the United States and other Western governments, who provided lists of communists to the Indonesian military."
        },
        {
            id: 20,
            title: "The 2004 Indian Ocean Tsunami",
            category: "disaster",
            year: 2004,
            tags: ["asia", "natural", "global"],
            excerpt: "The 2004 Indian Ocean earthquake and tsunami occurred on December 26, 2004, becoming one of the deadliest natural disasters in recorded history.",
            content: "The 2004 Indian Ocean earthquake and tsunami occurred on December 26, 2004, becoming one of the deadliest natural disasters in recorded history. The earthquake was caused by a rupture along the fault between the Burma Plate and the Indian Plate. A series of massive tsunami waves grew up to 30 meters (100 ft) high once heading inland, after being created by the underwater seismic activity. Communities along the surrounding coasts of the Indian Ocean were devastated, and the tsunamis killed an estimated 227,898 people in 14 countries. The Indonesian city of Banda Aceh reported the largest number of victims. The tsunami caused serious damage and deaths as far as the east coast of Africa, with the farthest recorded death due to the tsunami occurring at Rooi Els in South Africa, 8,000 km (5,000 mi) away from the epicenter. The disaster prompted a huge worldwide humanitarian response, with more than $14 billion in humanitarian aid donated."
        }
    ];

    // DOM elements
    const articlesContainer = document.getElementById('articles-container');
    const categoryLinks = document.querySelectorAll('.main-nav a');
    const yearFilter = document.getElementById('year-filter');
    const tagButtons = document.querySelectorAll('.tag-btn');
    const mainNavigation = document.getElementById('main-navigation');

    // Current filters
    let currentCategory = 'all';
    let currentYear = 'all';
    let currentTag = 'all';
    let lastScrollPosition = 0;

    // Initialize the page
    displayArticles();
    handleNavScroll();

    // Add event listeners
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add animation class
            this.classList.add('nav-click');
            setTimeout(() => {
                this.classList.remove('nav-click');
            }, 300);
            
            // Update active class
            categoryLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Update filter
            currentCategory = this.getAttribute('data-category');
            displayArticles();
        });
    });

    yearFilter.addEventListener('change', function() {
        currentYear = this.value;
        displayArticles();
    });

    tagButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active class
            tagButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update filter
            currentTag = this.getAttribute('data-tag');
            displayArticles();
        });
    });

    // Handle navigation scroll behavior
    function handleNavScroll() {
        window.addEventListener('scroll', function() {
            const currentScrollPosition = window.pageYOffset;
            
            if (currentScrollPosition > 100) {
                mainNavigation.classList.add('nav-scrolled');
            } else {
                mainNavigation.classList.remove('nav-scrolled');
            }
            
            if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 200) {
                mainNavigation.classList.add('nav-hidden');
            } else {
                mainNavigation.classList.remove('nav-hidden');
            }
            
            lastScrollPosition = currentScrollPosition;
        });
    }

    // Function to display articles based on filters
    function displayArticles() {
        // Clear current articles
        articlesContainer.innerHTML = '';
        
        // Filter articles
        let filteredArticles = articles.filter(article => {
            // Filter by category
            if (currentCategory !== 'all' && article.category !== currentCategory) {
                return false;
            }
            
            // Filter by year
            if (currentYear !== 'all') {
                if (currentYear === 'pre-1900' && article.year >= 1900) {
                    return false;
                } else if (currentYear === '1900-1950' && (article.year < 1900 || article.year > 1950)) {
                    return false;
                } else if (currentYear === '1951-2000' && (article.year < 1951 || article.year > 2000)) {
                    return false;
                }
            }
            
            // Filter by tag
            if (currentTag !== 'all' && !article.tags.includes(currentTag)) {
                return false;
            }
            
            return true;
        });
        
        // Display filtered articles
        if (filteredArticles.length === 0) {
            articlesContainer.innerHTML = '<div class="no-results">No articles match your filters. Please try different criteria.</div>';
        } else {
            // Add animation delay for staggered appearance
            filteredArticles.forEach((article, index) => {
                const articleElement = document.createElement('article');
                articleElement.className = 'article';
                articleElement.style.animationDelay = `${index * 0.05}s`;
                
                // Create tags HTML
                const tagsHTML = article.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
                
                articleElement.innerHTML = `
                    <div class="article-content">
                        <div class="article-meta">
                            <span class="category">${article.category.charAt(0).toUpperCase() + article.category.slice(1)}</span>
                            <span class="year">${article.year}</span>
                        </div>
                        <h2>${article.title}</h2>
                        <p>${article.excerpt}</p>
                        <div class="article-tags">
                            ${tagsHTML}
                        </div>
                        <a href="javascript:void(0)" class="read-more" data-id="${article.id}">Read full article</a>
                    </div>
                `;
                
                articlesContainer.appendChild(articleElement);
                
                // Add fade-in animation
                setTimeout(() => {
                    articleElement.classList.add('article-visible');
                }, 10);
            });
            
            // Add event listeners to "Read More" links
            document.querySelectorAll('.read-more').forEach(link => {
                link.addEventListener('click', function() {
                    const articleId = parseInt(this.getAttribute('data-id'));
                    showArticleDetail(articleId);
                });
            });
        }
    }

    // Function to show article detail
    function showArticleDetail(id) {
        const article = articles.find(a => a.id === id);
        
        if (!article) return;
        
        // Save current scroll position
        const scrollPosition = window.scrollY;
        
        // Hide articles container
        articlesContainer.style.display = 'none';
        
        // Create article detail element
        const articleDetail = document.createElement('div');
        articleDetail.className = 'article-detail';
        
        // Create tags HTML
        const tagsHTML = article.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        
        articleDetail.innerHTML = `
            <h1>${article.title}</h1>
            <div class="article-detail-meta">
                <span class="category">${article.category.charAt(0).toUpperCase() + article.category.slice(1)}</span>
                <span class="year">${article.year}</span>
            </div>
            <div class="article-tags">
                ${tagsHTML}
            </div>
            <div class="article-full-content">
                <p>${article.content}</p>
            </div>
            <a href="javascript:void(0)" class="back-btn">Back to Articles</a>
        `;
        
        // Insert article detail after the filters
        const filtersSection = document.querySelector('.filters');
        filtersSection.insertAdjacentElement('afterend', articleDetail);
        
        // Add fade-in animation
        setTimeout(() => {
            articleDetail.classList.add('article-detail-visible');
        }, 10);
        
        // Add event listener to back button
        document.querySelector('.back-btn').addEventListener('click', function() {
            // Add fade-out animation
            articleDetail.classList.add('article-detail-hidden');
            
            setTimeout(() => {
                // Remove article detail
                articleDetail.remove();
                
                // Show articles container
                articlesContainer.style.display = 'grid';
                
                // Restore scroll position
                window.scrollTo(0, scrollPosition);
            }, 300);
        });
        
        // Scroll to top of article
        window.scrollTo({
            top: filtersSection.offsetTop - 80,
            behavior: 'smooth'
        });
    }

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .article {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeIn 0.5s forwards;
        }
        
        .article-visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .article-detail {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.3s, transform 0.3s;
        }
        
        .article-detail-visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .article-detail-hidden {
            opacity: 0;
            transform: translateY(20px);
        }
        
        .nav-scrolled {
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        
        .nav-hidden {
            transform: translateY(-100%);
            transition: transform 0.3s ease-in-out;
        }
        
        .nav-click {
            animation: navPulse 0.3s;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes navPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
});