document.addEventListener('DOMContentLoaded', function() {
    // Article data
    const articles = [
        {
            id: 1,
            title: "The Holocaust: Systematic Genocide of European Jews",
            title_fa: "هولوکاست: نسل‌کشی سیستماتیک یهودیان اروپا",
            category: "genocide",
            year: 1941,
            tags: ["europe", "genocide", "war"],
            excerpt: "The Holocaust was the systematic, state-sponsored persecution and murder of six million Jews by the Nazi regime and its allies and collaborators.",
            excerpt_fa: "هولوکاست، آزار و قتل سیستماتیک و دولتی شش میلیون یهودی توسط رژیم نازی و متحدان و همکاران آن بود.",
            content: "The Holocaust was the systematic, state-sponsored persecution and murder of six million Jews by the Nazi regime and its allies and collaborators. The Nazis came to power in Germany in January 1933. They believed that the Germans belonged to a race that was 'superior' to all others. They claimed that the Jews belonged to a race that was 'inferior' and a threat to the so-called German racial community. By the end of the Holocaust, six million Jewish men, women and children had been murdered in ghettos, mass-shootings, in concentration camps and extermination camps.",
            content_fa: "هولوکاست، آزار و قتل سیستماتیک و دولتی شش میلیون یهودی توسط رژیم نازی و متحدان و همکاران آن بود. نازی‌ها در ژانویه ۱۹۳۳ در آلمان به قدرت رسیدند. آنها معتقد بودند که آلمانی‌ها متعلق به نژادی هستند که «برتر» از همه است. آنها ادعا می‌کردند که یهودیان متعلق به نژادی «پست» و تهدیدی برای به اصطلاح جامعه نژادی آلمان هستند. تا پایان هولوکاست، شش میلیون مرد، زن و کودک یهودی در گتوها، تیرباران‌های جمعی، در اردوگاه‌های کار اجباری و اردوگاه‌های مرگ به قتل رسیدند."
        },
        {
            id: 2,
            title: "The Great Famine in China",
            title_fa: "قحطی بزرگ چین",
            category: "disaster",
            year: 1959,
            tags: ["asia", "famine"],
            excerpt: "The Great Chinese Famine was a period between 1959 and 1961 in the history of the People's Republic of China characterized by widespread famine.",
            excerpt_fa: "قحطی بزرگ چین دوره‌ای بین سال‌های ۱۹۵۹ و ۱۹۶۱ در تاریخ جمهوری خلق چین بود که با قحطی گسترده مشخص می‌شد.",
            content: "The Great Chinese Famine was a period between 1959 and 1961 in the history of the People's Republic of China characterized by widespread famine. Some scholars have estimated the death toll at between 15 and 55 million people. The major contributing factors were the policies of the Great Leap Forward and people's communes, such as the 'Four Pests Campaign', which forced peasants to abandon all private food production, and the diversion of labor to steel production instead of agriculture. This was compounded by adverse weather conditions, including droughts and floods. In many instances, peasants were persecuted for failing to meet unrealistic production quotas.",
            content_fa: "قحطی بزرگ چین دوره‌ای بین سال‌های ۱۹۵۹ و ۱۹۶۱ در تاریخ جمهوری خلق چین بود که با قحطی گسترده مشخص می‌شد. برخی از محققان تعداد تلفات را بین ۱۵ تا ۵۵ میلیون نفر تخمین زده‌اند. عوامل اصلی مشارکت‌کننده، سیاست‌های جهش بزرگ به جلو و کمون‌های مردمی، مانند «کمپین چهار آفت» بودند که دهقانان را مجبور به ترک تمام تولید خصوصی غذا کردند و انحراف نیروی کار به تولید فولاد به جای کشاورزی. این با شرایط نامساعد آب و هوایی، از جمله خشکسالی و سیل تشدید شد. در بسیاری از موارد، دهقانان به دلیل عدم دستیابی به سهمیه‌های تولید غیرواقعی مورد آزار و اذیت قرار گرفتند."
        },
        {
            id: 3,
            title: "Hiroshima and Nagasaki Atomic Bombings",
            title_fa: "بمباران اتمی هیروشیما و ناگاساکی",
            category: "war",
            year: 1945,
            tags: ["asia", "war", "nuclear"],
            excerpt: "The United States detonated two atomic bombs over the Japanese cities of Hiroshima and Nagasaki on August 6 and 9, 1945, respectively.",
            excerpt_fa: "ایالات متحده دو بمب اتمی را بر فراز شهرهای ژاپنی هیروشیما و ناگاساکی به ترتیب در ۶ و ۹ اوت ۱۹۴۵ منفجر کرد.",
            content: "The United States detonated two atomic bombs over the Japanese cities of Hiroshima and Nagasaki on August 6 and 9, 1945, respectively. The two bombings killed between 129,000 and 226,000 people, most of whom were civilians, and remain the only use of nuclear weapons in armed conflict. In the final year of World War II, the Allies prepared for a costly invasion of the Japanese mainland. This undertaking was preceded by a conventional and firebombing campaign that devastated 67 Japanese cities. The war in Europe had concluded when Germany signed its instrument of surrender on May 8, 1945, but the Pacific War continued.",
            content_fa: "ایالات متحده دو بمب اتمی را بر فراز شهرهای ژاپنی هیروشیما و ناگاساکی به ترتیب در ۶ و ۹ اوت ۱۹۴۵ منفجر کرد. این دو بمباران بین ۱۲۹,۰۰۰ تا ۲۲۶,۰۰۰ نفر را کشت که اکثر آنها غیرنظامی بودند و تنها استفاده از سلاح‌های هسته‌ای در درگیری مسلحانه باقی مانده است. در سال آخر جنگ جهانی دوم، متفقین برای حمله پرهزینه به سرزمین اصلی ژاپن آماده شدند. این اقدام با یک کمپین بمباران متعارف و آتش‌زا که ۶۷ شهر ژاپن را ویران کرد، پیش‌زمینه داشت. جنگ در اروپا با امضای سند تسلیم آلمان در ۸ مه ۱۹۴۵ به پایان رسیده بود، اما جنگ اقیانوس آرام ادامه داشت."
        },
        {
            id: 4,
            title: "Chernobyl Disaster",
            title_fa: "فاجعه چرنوبیل",
            category: "disaster",
            year: 1986,
            tags: ["europe", "nuclear"],
            excerpt: "The Chernobyl disaster was a nuclear accident that occurred on 26 April 1986 at the Chernobyl Nuclear Power Plant in Ukraine.",
            excerpt_fa: "فاجعه چرنوبیل یک حادثه هسته‌ای بود که در ۲۶ آوریل ۱۹۸۶ در نیروگاه هسته‌ای چرنوبیل در اوکراین رخ داد.",
            content: "The Chernobyl disaster was a nuclear accident that occurred on 26 April 1986 at the Chernobyl Nuclear Power Plant in Ukraine. It is considered the worst nuclear disaster in history both in terms of cost and casualties. It is one of only two nuclear energy accidents rated at seven—the maximum severity—on the International Nuclear Event Scale, the other being the Fukushima Daiichi nuclear disaster in 2011. The battle to contain the contamination and avert a greater catastrophe ultimately involved over 500,000 workers and cost an estimated 18 billion rubles—so crippling the Soviet economy that some historians consider it a major factor in the dissolution of the Soviet Union.",
            content_fa: "فاجعه چرنوبیل یک حادثه هسته‌ای بود که در ۲۶ آوریل ۱۹۸۶ در نیروگاه هسته‌ای چرنوبیل در اوکراین رخ داد. این حادثه بدترین فاجعه هسته‌ای در تاریخ هم از نظر هزینه و هم از نظر تلفات محسوب می‌شود. این یکی از تنها دو حادثه انرژی هسته‌ای است که در مقیاس بین‌المللی رویدادهای هسته‌ای در سطح هفت—حداکثر شدت—رتبه‌بندی شده است، دیگری فاجعه هسته‌ای فوکوشیما دایچی در سال ۲۰۱۱ است. نبرد برای مهار آلودگی و جلوگیری از فاجعه بزرگتر در نهایت بیش از ۵۰۰,۰۰۰ کارگر را درگیر کرد و هزینه‌ای حدود ۱۸ میلیارد روبل داشت—به طوری که اقتصاد شوروی را چنان فلج کرد که برخی از مورخان آن را عامل اصلی در فروپاشی اتحاد جماهیر شوروی می‌دانند."
        },
        {
            id: 5,
            title: "Rwandan Genocide",
            title_fa: "نسل‌کشی رواندا",
            category: "genocide",
            year: 1994,
            tags: ["africa", "genocide"],
            excerpt: "The Rwandan genocide was a mass slaughter of Tutsi in Rwanda during the Rwandan Civil War.",
            excerpt_fa: "نسل‌کشی رواندا کشتار جمعی توتسی‌ها در رواندا در طول جنگ داخلی رواندا بود.",
            content: "The Rwandan genocide was a mass slaughter of Tutsi in Rwanda during the Rwandan Civil War, which had begun in 1990. It was directed by members of the core political elite. From April 7 to mid-July 1994, an estimated 500,000 to 1,000,000 Rwandans were killed, constituting possibly 70% of the Tutsi population. The genocide and widespread slaughter of Rwandans ended after the Tutsi-backed Rwandan Patriotic Front (RPF) took control of the country.",
            content_fa: "نسل‌کشی رواندا کشتار جمعی توتسی‌ها در رواندا در طول جنگ داخلی رواندا بود که در سال ۱۹۹۰ آغاز شده بود. این نسل‌کشی توسط اعضای اصلی نخبگان سیاسی هدایت می‌شد. از ۷ آوریل تا اواسط ژوئیه ۱۹۹۴، تخمین زده می‌شود که بین ۵۰۰,۰۰۰ تا ۱,۰۰۰,۰۰۰ رواندایی کشته شدند که احتمالاً ۷۰٪ جمعیت توتسی را تشکیل می‌دادند. نسل‌کشی و کشتار گسترده رواندایی‌ها پس از آنکه جبهه میهن‌پرستان رواندا (RPF) که مورد حمایت توتسی‌ها بود، کنترل کشور را به دست گرفت، پایان یافت."
        },
        {
            id: 6,
            title: "9/11 Terrorist Attacks",
            title_fa: "حملات تروریستی ۱۱ سپتامبر",
            category: "terrorism",
            year: 2001,
            tags: ["usa", "terrorism"],
            excerpt: "The September 11 attacks were a series of four coordinated terrorist attacks by the Islamic terrorist group al-Qaeda against the United States on the morning of Tuesday, September 11, 2001.",
            excerpt_fa: "حملات ۱۱ سپتامبر مجموعه‌ای از چهار حمله تروریستی هماهنگ توسط گروه تروریستی اسلامی القاعده علیه ایالات متحده در صبح سه‌شنبه، ۱۱ سپتامبر ۲۰۰۱ بود.",
            content: "The September 11 attacks were a series of four coordinated terrorist attacks by the Islamic terrorist group al-Qaeda against the United States on the morning of Tuesday, September 11, 2001. The attacks resulted in 2,977 fatalities, over 25,000 injuries, and substantial long-term health consequences, in addition to at least $10 billion in infrastructure and property damage. The attacks were the deadliest terrorist attacks on United States soil in history. The destruction of the World Trade Center and the damage to the Pentagon led to major American initiatives to combat terrorism and defined the presidency of George W. Bush.",
            content_fa: "حملات ۱۱ سپتامبر مجموعه‌ای از چهار حمله تروریستی هماهنگ توسط گروه تروریستی اسلامی القاعده علیه ایالات متحده در صبح سه‌شنبه، ۱۱ سپتامبر ۲۰۰۱ بود. این حملات منجر به ۲,۹۷۷ کشته، بیش از ۲۵,۰۰۰ مجروح و پیامدهای بهداشتی طولانی مدت قابل توجه، علاوه بر حداقل ۱۰ میلیارد دلار خسارت به زیرساخت‌ها و اموال شد. این حملات مرگبارترین حملات تروریستی در خاک ایالات متحده در تاریخ بودند. تخریب مرکز تجارت جهانی و آسیب به پنتاگون منجر به ابتکارات عمده آمریکایی برای مبارزه با تروریسم شد و ریاست جمهوری جورج دبلیو بوش را تعریف کرد."
        },
        {
            id: 7,
            title: "COVID-19 Pandemic",
            title_fa: "همه‌گیری کووید-۱۹",
            category: "pandemic",
            year: 2020,
            tags: ["global", "pandemic", "health"],
            excerpt: "The COVID-19 pandemic is an ongoing global pandemic of coronavirus disease 2019 (COVID-19) caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2).",
            excerpt_fa: "همه‌گیری کووید-۱۹ یک همه‌گیری جهانی در حال انجام بیماری کروناویروس ۲۰۱۹ (کووید-۱۹) است که توسط سندرم حاد تنفسی کروناویروس ۲ (سارس-کوو-۲) ایجاد شده است.",
            content: "The COVID-19 pandemic is an ongoing global pandemic of coronavirus disease 2019 (COVID-19) caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). The outbreak was first identified in Wuhan, China, in December 2019. The World Health Organization declared the outbreak a Public Health Emergency of International Concern in January 2020 and a pandemic in March 2020. As of 17 March 2023, the pandemic had caused more than 680 million cases and 6.8 million deaths globally, making it one of the deadliest pandemics in history.",
            content_fa: "همه‌گیری کووید-۱۹ یک همه‌گیری جهانی در حال انجام بیماری کروناویروس ۲۰۱۹ (کووید-۱۹) است که توسط سندرم حاد تنفسی کروناویروس ۲ (سارس-کوو-۲) ایجاد شده است. این شیوع اولین بار در ووهان، چین، در دسامبر ۲۰۱۹ شناسایی شد. سازمان بهداشت جهانی در ژانویه ۲۰۲۰ این شیوع را یک وضعیت اضطراری بهداشت عمومی با نگرانی بین‌المللی اعلام کرد و در مارس ۲۰۲۰ آن را یک همه‌گیری نامید. تا ۱۷ مارس ۲۰۲۳، این همه‌گیری بیش از ۶۸۰ میلیون مورد و ۶.۸ میلیون مرگ در سراسر جهان ایجاد کرده بود، که آن را به یکی از مرگبارترین همه‌گیری‌ها در تاریخ تبدیل می‌کند."
        },
        {
            id: 8,
            title: "The Atlantic Slave Trade",
            title_fa: "تجارت برده آتلانتیک",
            category: "disaster",
            year: 1619,
            tags: ["americas", "africa", "global"],
            excerpt: "The Atlantic slave trade was the systematic enslavement and transportation of people from Africa to the New World.",
            excerpt_fa: "تجارت برده آتلانتیک، برده‌داری سیستماتیک و حمل و نقل مردم از آفریقا به دنیای جدید بود.",
            content: "The Atlantic slave trade was the systematic enslavement and transportation of people from Africa to the New World, which lasted from the 16th to the 19th centuries. The slave trade is estimated to have transported 12 million Africans across the Atlantic over a span of 400 years. The slave trade not only led to the violent transportation overseas of millions of Africans but also to the deaths of many millions more. Millions of people were shipped to the New World during the Middle Passage of the triangular trade route where European vessels sailed to African kingdoms, exchanged goods for slaves, sailed to the Americas to trade slaves for colonial goods, and then returned to Europe.",
            content_fa: "تجارت برده آتلانتیک، برده‌داری سیستماتیک و حمل و نقل مردم از آفریقا به دنیای جدید بود که از قرن ۱۶ تا قرن ۱۹ ادامه داشت. تخمین زده می‌شود که تجارت برده ۱۲ میلیون آفریقایی را در طول ۴۰۰ سال از اقیانوس اطلس عبور داده است. تجارت برده نه تنها منجر به حمل و نقل خشونت‌آمیز میلیون‌ها آفریقایی به خارج از کشور شد، بلکه به مرگ میلیون‌ها نفر دیگر نیز منجر شد. میلیون‌ها نفر در طول عبور میانی مسیر تجارت مثلثی به دنیای جدید فرستاده شدند، جایی که کشتی‌های اروپایی به پادشاهی‌های آفریقایی سفر می‌کردند، کالاها را با برده‌ها مبادله می‌کردند، به آمریکا می‌رفتند تا برده‌ها را با کالاهای مستعمراتی معامله کنند و سپس به اروپا بازمی‌گشتند."
        },
        {
            id: 9,
            title: "The Spanish Flu Pandemic",
            title_fa: "همه‌گیری آنفولانزای اسپانیایی",
            category: "pandemic",
            year: 1918,
            tags: ["global", "pandemic"],
            excerpt: "The Spanish flu pandemic of 1918, the deadliest in history, infected an estimated 500 million people worldwide—about one-third of the planet's population.",
            excerpt_fa: "همه‌گیری آنفولانزای اسپانیایی سال ۱۹۱۸، مرگبارترین در تاریخ، تخمین زده می‌شود که ۵۰۰ میلیون نفر در سراسر جهان—حدود یک سوم جمعیت سیاره—را آلوده کرده است.",
            content: "The Spanish flu pandemic of 1918, the deadliest in history, infected an estimated 500 million people worldwide—about one-third of the planet's population—and killed an estimated 20 million to 50 million victims, including some 675,000 Americans. The 1918 flu was first observed in Europe, the United States and parts of Asia before swiftly spreading around the world. At the time, there were no effective drugs or vaccines to treat this killer flu strain. Citizens were ordered to wear masks, schools, theaters and businesses were shuttered and bodies piled up in makeshift morgues before the virus ended its deadly global march.",
            content_fa: "همه‌گیری آنفولانزای اسپانیایی سال ۱۹۱۸، مرگبارترین در تاریخ، تخمین زده می‌شود که ۵۰۰ میلیون نفر در سراسر جهان—حدود یک سوم جمعیت سیاره—را آلوده کرده و بین ۲۰ میلیون تا ۵۰ میلیون قربانی، از جمله حدود ۶۷۵,۰۰۰ آمریکایی را کشته است. آنفولانزای ۱۹۱۸ ابتدا در اروپا، ایالات متحده و بخش‌هایی از آسیا مشاهده شد و سپس به سرعت در سراسر جهان گسترش یافت. در آن زمان، هیچ داروی موثر یا واکسنی برای درمان این سویه آنفولانزای کشنده وجود نداشت. به شهروندان دستور داده شد ماسک بزنند، مدارس، تئاترها و کسب و کارها تعطیل شدند و اجساد در سردخانه‌های موقت انباشته شدند تا اینکه ویروس به راهپیمایی مرگبار جهانی خود پایان داد."
        },
        {
            id: 10,
            title: "The Chernobyl Nuclear Disaster",
            title_fa: "فاجعه هسته‌ای چرنوبیل",
            category: "disaster",
            year: 1986,
            tags: ["europe", "nuclear"],
            excerpt: "The Chernobyl disaster was a nuclear accident that occurred on April 26, 1986, at the No. 4 reactor in the Chernobyl Nuclear Power Plant.",
            excerpt_fa: "فاجعه چرنوبیل یک حادثه هسته‌ای بود که در ۲۶ آوریل ۱۹۸۶ در راکتور شماره ۴ در نیروگاه هسته‌ای چرنوبیل رخ داد.",
            content: "The Chernobyl disaster was a nuclear accident that occurred on April 26, 1986, at the No. 4 reactor in the Chernobyl Nuclear Power Plant, near the city of Pripyat in the north of the Ukrainian SSR in the Soviet Union. It is considered the worst nuclear disaster in history both in terms of cost and casualties. The initial emergency response, together with later decontamination of the environment, involved more than 500,000 personnel and cost an estimated 18 billion Soviet rubles—roughly US$68 billion in 2019, adjusted for inflation. The accident started during a safety test on an RBMK-type nuclear reactor, which was commonly used throughout the Soviet Union.",
            content_fa: "فاجعه چرنوبیل یک حادثه هسته‌ای بود که در ۲۶ آوریل ۱۹۸۶ در راکتور شماره ۴ در نیروگاه هسته‌ای چرنوبیل، نزدیک شهر پریپیات در شمال جمهوری سوسیالیستی شوروی اوکراین در اتحاد جماهیر شوروی رخ داد. این حادثه بدترین فاجعه هسته‌ای در تاریخ هم از نظر هزینه و هم از نظر تلفات محسوب می‌شود. واکنش اولیه اضطراری، همراه با آلودگی‌زدایی بعدی محیط زیست، بیش از ۵۰۰,۰۰۰ پرسنل را درگیر کرد و هزینه‌ای حدود ۱۸ میلیارد روبل شوروی—تقریباً ۶۸ میلیارد دلار آمریکا در سال ۲۰۱۹، با تعدیل تورم—داشت. این حادثه در طول یک آزمایش ایمنی روی یک راکتور هسته‌ای نوع RBMK، که به طور گسترده در سراسر اتحاد جماهیر شوروی استفاده می‌شد، آغاز شد."
        },
        {
            id: 11,
            title: "The Armenian Genocide",
            title_fa: "نسل‌کشی ارمنی‌ها",
            category: "genocide",
            year: 1915,
            tags: ["europe", "asia", "genocide"],
            excerpt: "The Armenian Genocide was the systematic destruction of the Armenian people and identity in the Ottoman Empire during World War I.",
            excerpt_fa: "نسل‌کشی ارمنی‌ها نابودی سیستماتیک مردم و هویت ارمنی در امپراتوری عثمانی در طول جنگ جهانی اول بود.",
            content: "The Armenian Genocide was the systematic destruction of the Armenian people and identity in the Ottoman Empire during World War I. With an estimated death toll of 1.5 million people, the genocide was carried out through mass killings, death marches through the Syrian Desert, and the forced Islamization of Armenian women and children. The genocide began on April 24, 1915, when Ottoman authorities arrested and executed several hundred Armenian intellectuals and community leaders in Constantinople. The Ottoman government's official justification for the deportations was that the Armenians were in league with Russia, then fighting against the Ottomans as part of the Triple Entente in World War I, despite the vast majority of Ottoman Armenians being civilians.",
            content_fa: "نسل‌کشی ارمنی‌ها نابودی سیستماتیک مردم و هویت ارمنی در امپراتوری عثمانی در طول جنگ جهانی اول بود. با تخمین تلفات ۱.۵ میلیون نفر، این نسل‌کشی از طریق کشتارهای جمعی، راهپیمایی‌های مرگ از طریق صحرای سوریه و اسلامی‌سازی اجباری زنان و کودکان ارمنی انجام شد. این نسل‌کشی در ۲۴ آوریل ۱۹۱۵ آغاز شد، زمانی که مقامات عثمانی چندین صد روشنفکر و رهبر جامعه ارمنی را در قسطنطنیه دستگیر و اعدام کردند. توجیه رسمی دولت عثمانی برای اخراج‌ها این بود که ارمنی‌ها با روسیه همدست بودند، که در آن زمان به عنوان بخشی از اتفاق مثلث در جنگ جهانی اول علیه عثمانی‌ها می‌جنگیدند، با وجود اینکه اکثریت قریب به اتفاق ارمنی‌های عثمانی غیرنظامی بودند."
        },
        {
            id: 12,
            title: "The Great Bengal Famine",
            title_fa: "قحطی بزرگ بنگال",
            category: "disaster",
            year: 1943,
            tags: ["asia", "famine", "war"],
            excerpt: "The Bengal famine of 1943 was a devastating famine that struck the Bengal province of British India during World War II, killing an estimated 2-3 million people.",
            excerpt_fa: "قحطی بنگال در سال ۱۹۴۳ قحطی ویرانگری بود که در طول جنگ جهانی دوم استان بنگال هند بریتانیا را فرا گرفت و تخمین زده می‌شود که ۲ تا ۳ میلیون نفر را کشت.",
            content: "The Bengal famine of 1943 was a devastating famine that struck the Bengal province of British India during World War II, killing an estimated 2-3 million people. The famine resulted from a combination of factors including policy failures, wartime inflation, hoarding, and the British government's prioritization of the war effort over civilian needs. The provincial government denied that a famine existed, and humanitarian aid was minimal despite Churchill's War Cabinet receiving warnings of the famine's severity. British wartime policies, including the 'denial policy' of destroying boats and rice stocks in coastal Bengal to prevent their use by the Japanese in case of invasion, exacerbated the crisis. The famine disproportionately affected the rural poor, particularly agricultural laborers, fishermen, transport workers, and craftspeople.",
            content_fa: "قحطی بنگال در سال ۱۹۴۳ قحطی ویرانگری بود که در طول جنگ جهانی دوم استان بنگال هند بریتانیا را فرا گرفت و تخمین زده می‌شود که ۲ تا ۳ میلیون نفر را کشت. این قحطی نتیجه ترکیبی از عوامل مختلف از جمله شکست‌های سیاستی، تورم زمان جنگ، احتکار و اولویت‌بندی دولت بریتانیا برای تلاش‌های جنگی بر نیازهای غیرنظامیان بود. دولت استانی وجود قحطی را انکار کرد و کمک‌های بشردوستانه علی‌رغم دریافت هشدارهایی درباره شدت قحطی توسط کابینه جنگی چرچیل، حداقل بود. سیاست‌های زمان جنگ بریتانیا، از جمله 'سیاست انکار' تخریب قایق‌ها و ذخایر برنج در سواحل بنگال برای جلوگیری از استفاده آنها توسط ژاپنی‌ها در صورت حمله، بحران را تشدید کرد. این قحطی به طور نامتناسبی بر فقرای روستایی، به ویژه کارگران کشاورزی، ماهیگیران، کارگران حمل و نقل و صنعتگران تأثیر گذاشت."
        },
        {
            id: 13,
            title: "The Cultural Revolution in China",
            title_fa: "انقلاب فرهنگی در چین",
            category: "disaster",
            year: 1966,
            tags: ["asia", "political"],
            excerpt: "The Cultural Revolution was a sociopolitical movement in China from 1966 until Mao Zedong's death in 1976, resulting in widespread persecution, destruction of cultural artifacts, and economic disruption.",
            excerpt_fa: "انقلاب فرهنگی یک جنبش اجتماعی-سیاسی در چین از سال ۱۹۶۶ تا مرگ مائو زدونگ در سال ۱۹۷۶ بود که منجر به آزار و اذیت گسترده، تخریب آثار فرهنگی و اختلال اقتصادی شد.",
            content: "The Cultural Revolution was a sociopolitical movement in China from 1966 until Mao Zedong's death in 1976. Launched by Mao, the Chairman of the Communist Party of China, its stated goal was to preserve Chinese communism by purging remnants of capitalist and traditional elements from Chinese society. The movement paralyzed China politically and significantly affected the country economically and socially. Millions of people were persecuted, with verified death tolls ranging from hundreds of thousands to millions. Historical relics and artifacts were destroyed, and cultural and religious sites were ransacked. Red Guards terrorized the streets, and massive numbers of people were forced to publicly criticize themselves, their friends, and their families. Many prominent political leaders, including Liu Shaoqi and Deng Xiaoping, were purged.",
            content_fa: "انقلاب فرهنگی یک جنبش اجتماعی-سیاسی در چین از سال ۱۹۶۶ تا مرگ مائو زدونگ در سال ۱۹۷۶ بود. این جنبش توسط مائو، رئیس حزب کمونیست چین، راه‌اندازی شد و هدف اعلام شده آن حفظ کمونیسم چینی با پاکسازی بقایای عناصر سرمایه‌داری و سنتی از جامعه چین بود. این جنبش چین را از نظر سیاسی فلج کرد و به طور قابل توجهی بر کشور از نظر اقتصادی و اجتماعی تأثیر گذاشت. میلیون‌ها نفر مورد آزار و اذیت قرار گرفتند، با تلفات تأیید شده از صدها هزار تا میلیون‌ها نفر. آثار تاریخی و اشیاء باستانی تخریب شدند و مکان‌های فرهنگی و مذهبی غارت شدند. گاردهای سرخ خیابان‌ها را به وحشت انداختند و تعداد زیادی از مردم مجبور شدند به طور علنی از خود، دوستان و خانواده‌های خود انتقاد کنند. بسیاری از رهبران سیاسی برجسته، از جمله لیو شائوچی و دنگ شیائوپینگ، تصفیه شدند."
        },
        {
            id: 14,
            title: "The Partition of India",
            title_fa: "تقسیم هند",
            category: "disaster",
            year: 1947,
            tags: ["asia", "political"],
            excerpt: "The Partition of India was the division of British India in 1947 into two independent dominions: India and Pakistan, leading to one of the largest mass migrations in human history and widespread violence.",
            excerpt_fa: "تقسیم هند، تقسیم هند بریتانیا در سال ۱۹۴۷ به دو قلمرو مستقل بود: هند و پاکستان، که منجر به یکی از بزرگترین مهاجرت‌های جمعی در تاریخ بشر و خشونت گسترده شد.",
            content: "The Partition of India was the division of British India in 1947 into two independent dominions: India and Pakistan. The partition was outlined in the Indian Independence Act 1947 and resulted in the dissolution of the British Raj. The partition displaced between 10-20 million people along religious lines, creating overwhelming refugee crises in the newly constituted dominions. The violent nature of the partition created an atmosphere of hostility and suspicion between India and Pakistan that plagues their relationship to this day. The term 'partition of India' does not cover the secession of Bangladesh from Pakistan in 1971, nor the earlier separations of Burma (now Myanmar) and Ceylon (now Sri Lanka) from the administration of British India. The partition was accompanied by massive violence on both sides of the new borders, with estimates of loss of life varying from several hundred thousand to two million.",
            content_fa: "تقسیم هند، تقسیم هند بریتانیا در سال ۱۹۴۷ به دو قلمرو مستقل بود: هند و پاکستان. این تقسیم در قانون استقلال هند ۱۹۴۷ مشخص شد و منجر به انحلال راج بریتانیا شد. این تقسیم بین ۱۰ تا ۲۰ میلیون نفر را در امتداد خطوط مذهبی جابجا کرد و بحران‌های پناهندگی فراگیری را در قلمروهای تازه تأسیس ایجاد کرد. ماهیت خشونت‌آمیز این تقسیم فضایی از خصومت و سوءظن بین هند و پاکستان ایجاد کرد که تا به امروز روابط آنها را مختل می‌کند. اصطلاح 'تقسیم هند' شامل جدایی بنگلادش از پاکستان در سال ۱۹۷۱، و نه جدایی‌های قبلی برمه (میانمار فعلی) و سیلان (سریلانکای فعلی) از اداره هند بریتانیا نمی‌شود. این تقسیم با خشونت گسترده در هر دو طرف مرزهای جدید همراه بود، با تخمین تلفات جانی از چند صد هزار تا دو میلیون نفر."
        },
        {
            id: 15,
            title: "The Killing Fields of Cambodia",
            title_fa: "میدان‌های کشتار کامبوج",
            category: "genocide",
            year: 1975,
            tags: ["asia", "genocide", "political"],
            excerpt: "The Killing Fields were a number of sites in Cambodia where collectively more than a million people were killed and buried by the Khmer Rouge regime.",
            excerpt_fa: "میدان‌های کشتار تعدادی از مکان‌ها در کامبوج بودند که در مجموع بیش از یک میلیون نفر توسط رژیم خمر سرخ کشته و دفن شدند.",
            content: "The Killing Fields were a number of sites in Cambodia where collectively more than a million people were killed and buried by the Khmer Rouge regime during its rule of the country from 1975 to 1979, immediately after the end of the Cambodian Civil War. The mass killings are widely regarded as part of a broad state-sponsored genocide. Analysis of 20,000 mass grave sites by the DC-Cam Mapping Program and Yale University indicate at least 1,386,734 victims of execution. Estimates of the total deaths resulting from Khmer Rouge policies, including disease and starvation, range from 1.7 to 2.5 million out of a 1975 population of roughly 8 million. The Khmer Rouge regime arrested and eventually executed almost everyone suspected of connections with the former government or with foreign governments, as well as professionals and intellectuals.",
            content_fa: "میدان‌های کشتار تعدادی از مکان‌ها در کامبوج بودند که در مجموع بیش از یک میلیون نفر توسط رژیم خمر سرخ در طول حکومت آن بر کشور از سال ۱۹۷۵ تا ۱۹۷۹، بلافاصله پس از پایان جنگ داخلی کامبوج، کشته و دفن شدند. این کشتارهای جمعی به طور گسترده به عنوان بخشی از یک نسل‌کشی گسترده تحت حمایت دولت در نظر گرفته می‌شوند. تجزیه و تحلیل ۲۰,۰۰۰ محل گور دسته جمعی توسط برنامه نقشه‌برداری DC-Cam و دانشگاه ییل نشان می‌دهد که حداقل ۱,۳۸۶,۷۳۴ قربانی اعدام شده‌اند. تخمین کل مرگ و میر ناشی از سیاست‌های خمر سرخ، از جمله بیماری و گرسنگی، از ۱.۷ تا ۲.۵ میلیون نفر از جمعیت حدود ۸ میلیون نفری سال ۱۹۷۵ است. رژیم خمر سرخ تقریباً همه کسانی را که مظنون به ارتباط با دولت قبلی یا با دولت‌های خارجی بودند، و همچنین متخصصان و روشنفکران را دستگیر و در نهایت اعدام کرد."
        },
        {
            id: 16,
            title: "The AIDS Epidemic",
            title_fa: "همه‌گیری ایدز",
            category: "pandemic",
            year: 1981,
            tags: ["global", "pandemic", "disease"],
            excerpt: "The AIDS epidemic, caused by HIV (Human Immunodeficiency Virus), has claimed more than 32 million lives since it was first identified in 1981.",
            excerpt_fa: "همه‌گیری ایدز، ناشی از HIV (ویروس نقص ایمنی انسانی)، از زمان شناسایی آن در سال ۱۹۸۱، بیش از ۳۲ میلیون جان را گرفته است.",
            content: "The AIDS epidemic, caused by HIV (Human Immunodeficiency Virus), has claimed more than 32 million lives since it was first identified in 1981. HIV targets the immune system and weakens people's defense against infections and some types of cancer. As the virus destroys and impairs the function of immune cells, infected individuals gradually become immunodeficient. The most advanced stage of HIV infection is Acquired Immunodeficiency Syndrome (AIDS), which can take from 2 to 15 years to develop depending on the individual. AIDS is defined by the development of certain cancers, infections, or other severe clinical manifestations. The epidemic was particularly devastating in the 1980s and 1990s before effective treatments were developed. Sub-Saharan Africa remains the most severely affected region, accounting for nearly two-thirds of the global total of new HIV infections.",
            content_fa: "همه‌گیری ایدز، ناشی از HIV (ویروس نقص ایمنی انسانی)، از زمان شناسایی آن در سال ۱۹۸۱، بیش از ۳۲ میلیون جان را گرفته است. HIV سیستم ایمنی را هدف قرار می‌دهد و دفاع افراد را در برابر عفونت‌ها و برخی انواع سرطان تضعیف می‌کند. همانطور که ویروس سلول‌های ایمنی را از بین می‌برد و عملکرد آنها را مختل می‌کند، افراد آلوده به تدریج دچار نقص ایمنی می‌شوند. پیشرفته‌ترین مرحله عفونت HIV، سندرم نقص ایمنی اکتسابی (ایدز) است که بسته به فرد، می‌تواند از ۲ تا ۱۵ سال طول بکشد. ایدز با توسعه برخی سرطان‌ها، عفونت‌ها یا سایر تظاهرات بالینی شدید تعریف می‌شود. این همه‌گیری به ویژه در دهه‌های ۱۹۸۰ و ۱۹۹۰ قبل از توسعه درمان‌های موثر، ویرانگر بود. آفریقای زیر صحرا همچنان شدیدترین منطقه آسیب‌دیده است که تقریباً دو سوم کل عفونت‌های جدید HIV جهانی را تشکیل می‌دهد."
        },
        {
            id: 17,
            title: "The Bosnian Genocide",
            title_fa: "نسل‌کشی بوسنی",
            category: "genocide",
            year: 1992,
            tags: ["europe", "genocide", "war"],
            excerpt: "The Bosnian Genocide refers to the genocide of Bosniaks (Bosnian Muslims) during the Bosnian War, particularly the Srebrenica massacre in July 1995.",
            excerpt_fa: "نسل‌کشی بوسنی به نسل‌کشی بوسنیاک‌ها (مسلمانان بوسنی) در طول جنگ بوسنی، به ویژه قتل عام سربرنیتسا در ژوئیه ۱۹۹۵ اشاره دارد.",
            content: "The Bosnian Genocide refers to the genocide of Bosniaks (Bosnian Muslims) during the Bosnian War, particularly the Srebrenica massacre in July 1995. The war followed the breakup of Yugoslavia and was part of the wider Yugoslav Wars. The International Criminal Tribunal for the former Yugoslavia (ICTY) and the International Court of Justice (ICJ) have ruled that the massacre of Bosniak men and boys in Srebrenica constituted genocide. In the ICTY's judgment in the case against Radislav Krstić, it was determined that 'the Srebrenica massacre was genocidal' and that 'Bosnian Serb forces committed genocide.' The massacre involved the killing of more than 8,000 Bosniak men and boys, as well as the mass expulsion of another 25,000–30,000 Bosniak civilians, in and around the town of Srebrenica.",
            content_fa: "نسل‌کشی بوسنی به نسل‌کشی بوسنیاک‌ها (مسلمانان بوسنی) در طول جنگ بوسنی، به ویژه قتل عام سربرنیتسا در ژوئیه ۱۹۹۵ اشاره دارد. این جنگ پس از فروپاشی یوگسلاوی رخ داد و بخشی از جنگ‌های گسترده‌تر یوگسلاوی بود. دادگاه بین‌المللی کیفری برای یوگسلاوی سابق (ICTY) و دیوان بین‌المللی دادگستری (ICJ) حکم داده‌اند که قتل عام مردان و پسران بوسنیاک در سربرنیتسا نسل‌کشی بوده است. در حکم ICTY در پرونده علیه رادیسلاو کرستیچ، مشخص شد که 'قتل عام سربرنیتسا نسل‌کشی بود' و 'نیروهای صرب بوسنی مرتکب نسل‌کشی شدند.' این قتل عام شامل کشتن بیش از ۸,۰۰۰ مرد و پسر بوسنیاک، و همچنین اخراج جمعی ۲۵,۰۰۰ تا ۳۰,۰۰۰ غیرنظامی بوسنیاک دیگر، در داخل و اطراف شهر سربرنیتسا بود."
        },
        {
            id: 18,
            title: "The Great Leap Forward Famine",
            title_fa: "قحطی جهش بزرگ به جلو",
            category: "disaster",
            year: 1958,
            tags: ["asia", "famine", "political"],
            excerpt: "The Great Leap Forward was an economic and social campaign in China that aimed to rapidly transform the country from an agrarian economy into a socialist society through rapid industrialization and collectivization.",
            excerpt_fa: "جهش بزرگ به جلو یک کمپین اقتصادی و اجتماعی در چین بود که هدف آن تبدیل سریع کشور از یک اقتصاد کشاورزی به یک جامعه سوسیالیستی از طریق صنعتی‌سازی سریع و اشتراکی‌سازی بود.",
            content: "The Great Leap Forward was an economic and social campaign in China that aimed to rapidly transform the country from an agrarian economy into a socialist society through rapid industrialization and collectivization. The campaign was led by Chairman Mao Zedong between 1958 and 1962 and resulted in the deadliest famine in history. Mao's radical policies, including the backyard furnace campaign where peasants were ordered to produce steel in small furnaces, diverted agricultural workers from food production. The collectivization of agriculture, combined with bad weather and the withdrawal of Soviet technical personnel, led to food shortages. Local officials, fearing punishment, falsified harvest figures, leading central authorities to requisition more grain than was actually available. The result was a massive famine that claimed between 15 and 55 million lives, making it the largest famine in human history.",
            content_fa: "جهش بزرگ به جلو یک کمپین اقتصادی و اجتماعی در چین بود که هدف آن تبدیل سریع کشور از یک اقتصاد کشاورزی به یک جامعه سوسیالیستی از طریق صنعتی‌سازی سریع و اشتراکی‌سازی بود. این کمپین توسط رئیس مائو زدونگ بین سال‌های ۱۹۵۸ و ۱۹۶۲ هدایت شد و منجر به مرگبارترین قحطی در تاریخ شد. سیاست‌های رادیکال مائو، از جمله کمپین کوره‌های حیاط خلوت که در آن به دهقانان دستور داده شد فولاد را در کوره‌های کوچک تولید کنند، کارگران کشاورزی را از تولید غذا منحرف کرد. اشتراکی‌سازی کشاورزی، همراه با آب و هوای بد و خروج پرسنل فنی شوروی، منجر به کمبود غذا شد. مقامات محلی، از ترس مجازات، آمار برداشت را جعل کردند، که باعث شد مقامات مرکزی غلات بیشتری از آنچه واقعاً در دسترس بود، مصادره کنند. نتیجه یک قحطی عظیم بود که بین ۱۵ تا ۵۵ میلیون جان را گرفت، که آن را بزرگترین قحطی در تاریخ بشر می‌کند."
        },
        {
            id: 19,
            title: "The Indonesian Mass Killings",
            title_fa: "کشتارهای جمعی اندونزی",
            category: "genocide",
            year: 1965,
            tags: ["asia", "genocide", "political"],
            excerpt: "The Indonesian mass killings of 1965–66 were large-scale killings targeting communists, ethnic Chinese, and alleged leftists during a political purge following a failed coup.",
            excerpt_fa: "کشتارهای جمعی اندونزی در سال‌های ۱۹۶۵-۶۶ کشتارهای گسترده‌ای بودند که کمونیست‌ها، چینی‌های قومی و چپ‌گرایان ادعایی را در طول یک تصفیه سیاسی پس از یک کودتای ناموفق هدف قرار دادند.",
            content: "The Indonesian mass killings of 1965–66 were large-scale killings targeting communists, ethnic Chinese, and alleged leftists during a political purge following a failed coup d'état in Indonesia. The violence occurred during a period of political instability known as the 'Indonesian tragedy' or 'Indonesian genocide.' The killings began in October 1965, sparked by the failed coup of the 30 September Movement, and continued until March 1966, with smaller-scale purges continuing for years afterward. The most widely accepted estimates are that more than 500,000 people were killed. The purge was a pivotal event in the transition to the 'New Order' and the elimination of the Indonesian Communist Party (PKI) as a political force, with impacts lasting well into the 21st century. The killings were done with the support of the United States and other Western governments, who provided lists of communists to the Indonesian military.",
            content_fa: "کشتارهای جمعی اندونزی در سال‌های ۱۹۶۵-۶۶ کشتارهای گسترده‌ای بودند که کمونیست‌ها، چینی‌های قومی و چپ‌گرایان ادعایی را در طول یک تصفیه سیاسی پس از یک کودتای ناموفق در اندونزی هدف قرار دادند. این خشونت در دوره‌ای از بی‌ثباتی سیاسی رخ داد که به عنوان 'تراژدی اندونزی' یا 'نسل‌کشی اندونزی' شناخته می‌شود. این کشتارها در اکتبر ۱۹۶۵ آغاز شد، که توسط کودتای ناموفق جنبش ۳۰ سپتامبر برانگیخته شد، و تا مارس ۱۹۶۶ ادامه یافت، با تصفیه‌های کوچک‌تر که سال‌ها بعد ادامه داشت. گسترده‌ترین تخمین‌های پذیرفته شده این است که بیش از ۵۰۰,۰۰۰ نفر کشته شدند. این تصفیه یک رویداد محوری در گذار به 'نظم نوین' و حذف حزب کمونیست اندونزی (PKI) به عنوان یک نیروی سیاسی بود، با تأثیراتی که تا قرن ۲۱ ادامه داشت. این کشتارها با حمایت ایالات متحده و سایر دولت‌های غربی انجام شد، که لیست‌هایی از کمونیست‌ها را به ارتش اندونزی ارائه دادند."
        },
        {
            id: 20,
            title: "The 2004 Indian Ocean Tsunami",
            title_fa: "سونامی اقیانوس هند ۲۰۰۴",
            category: "disaster",
            year: 2004,
            tags: ["asia", "natural", "global"],
            excerpt: "The 2004 Indian Ocean earthquake and tsunami occurred on December 26, 2004, becoming one of the deadliest natural disasters in recorded history.",
            excerpt_fa: "زلزله و سونامی اقیانوس هند در ۲۶ دسامبر ۲۰۰۴ رخ داد و به یکی از مرگبارترین بلایای طبیعی در تاریخ ثبت شده تبدیل شد.",
            content: "The 2004 Indian Ocean earthquake and tsunami occurred on December 26, 2004, becoming one of the deadliest natural disasters in recorded history. The earthquake was caused by a rupture along the fault between the Burma Plate and the Indian Plate. A series of massive tsunami waves grew up to 30 meters (100 ft) high once heading inland, after being created by the underwater seismic activity. Communities along the surrounding coasts of the Indian Ocean were devastated, and the tsunamis killed an estimated 227,898 people in 14 countries. The Indonesian city of Banda Aceh reported the largest number of victims. The tsunami caused serious damage and deaths as far as the east coast of Africa, with the farthest recorded death due to the tsunami occurring at Rooi Els in South Africa, 8,000 km (5,000 mi) away from the epicenter. The disaster prompted a huge worldwide humanitarian response, with more than $14 billion in humanitarian aid donated.",
            content_fa: "زلزله و سونامی اقیانوس هند در ۲۶ دسامبر ۲۰۰۴ رخ داد و به یکی از مرگبارترین بلایای طبیعی در تاریخ ثبت شده تبدیل شد. این زلزله توسط گسیختگی در امتداد گسل بین صفحه برمه و صفحه هند ایجاد شد. مجموعه‌ای از امواج عظیم سونامی پس از ایجاد توسط فعالیت زیر دریایی زمین‌لرزه، تا ۳۰ متر (۱۰۰ فوت) ارتفاع گرفتند. جوامع در امتداد سواحل اطراف اقیانوس هند ویران شدند و سونامی‌ها حدود ۲۲۷,۸۹۸ نفر را در ۱۴ کشور کشتند. شهر بندر آچه اندونزی بیشترین تعداد قربانیان را گزارش کرد. این سونامی خسارات و تلفات جدی را تا ساحل شرقی آفریقا ایجاد کرد، با دورترین مرگ ثبت شده ناشی از سونامی در روی الس در آفریقای جنوبی، ۸,۰۰۰ کیلومتر (۵,۰۰۰ مایل) دور از مرکز زلزله. این فاجعه باعث یک واکنش بشردوستانه عظیم جهانی شد، با بیش از ۱۴ میلیارد دلار کمک بشردوستانه اهدا شده."
        }
    ];

    // DOM elements
    const articlesContainer = document.getElementById('articles-container');
    const categoryLinks = document.querySelectorAll('.main-nav a');
    const yearFilter = document.getElementById('year-filter');
    const tagButtons = document.querySelectorAll('.tag-btn');
    const mainNavigation = document.getElementById('main-navigation');
    const languageToggle = document.getElementById('language-toggle');

    // Current filters
    let currentCategory = 'all';
    let currentYear = 'all';
    let currentTag = 'all';
    let lastScrollPosition = 0;
    
    // Get saved language from localStorage or default to 'en'
    let currentLanguage = localStorage.getItem('language') || 'en';

    // Initialize the page
    initializeLanguage();
    displayArticles();
    handleNavScroll();
    setupLanguageToggle();

    // Function to initialize language based on saved preference
    function initializeLanguage() {
        if (currentLanguage === 'fa') {
            document.documentElement.setAttribute('lang', 'fa');
            document.documentElement.setAttribute('dir', 'rtl');
            languageToggle.textContent = 'English';
        } else {
            document.documentElement.setAttribute('lang', 'en');
            document.documentElement.setAttribute('dir', 'ltr');
            languageToggle.textContent = 'فارسی';
        }
        
        // Update all translatable elements
        updateLanguage();
    }

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
            const noResultsText = currentLanguage === 'fa' 
                ? 'هیچ مقاله‌ای با فیلترهای شما مطابقت ندارد. لطفاً معیارهای دیگری را امتحان کنید.'
                : 'No articles match your filters. Please try different criteria.';
                
            articlesContainer.innerHTML = `<div class="no-results">${noResultsText}</div>`;
        } else {
            // Add animation delay for staggered appearance
            filteredArticles.forEach((article, index) => {
                const articleElement = document.createElement('article');
                articleElement.className = 'article';
                articleElement.style.animationDelay = `${index * 0.05}s`;
                
                // Get title and excerpt based on current language
                const title = currentLanguage === 'fa' && article.title_fa ? article.title_fa : article.title;
                const excerpt = currentLanguage === 'fa' && article.excerpt_fa ? article.excerpt_fa : article.excerpt;
                
                // Create tags HTML
                const tagsHTML = article.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
                
                // Get category text with first letter capitalized
                const categoryText = article.category.charAt(0).toUpperCase() + article.category.slice(1);
                
                // Get read more text based on language
                const readMoreText = currentLanguage === 'fa' ? 'خواندن مقاله کامل' : 'Read full article';
                
                articleElement.innerHTML = `
                    <div class="article-content">
                        <div class="article-meta">
                            <span class="category">${categoryText}</span>
                            <span class="year">${article.year}</span>
                        </div>
                        <h2>${title}</h2>
                        <p>${excerpt}</p>
                        <div class="article-tags">
                            ${tagsHTML}
                        </div>
                        <a href="javascript:void(0)" class="read-more" data-id="${article.id}">${readMoreText}</a>
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
        
        // Get title and content based on current language
        const title = currentLanguage === 'fa' && article.title_fa ? article.title_fa : article.title;
        const content = currentLanguage === 'fa' && article.content_fa ? article.content_fa : article.content;
        
        // Create article detail element
        const articleDetail = document.createElement('div');
        articleDetail.className = 'article-detail';
        
        // Create tags HTML
        const tagsHTML = article.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        
        // Get category text with first letter capitalized
        const categoryText = article.category.charAt(0).toUpperCase() + article.category.slice(1);
        
        // Get back button text based on language
        const backButtonText = currentLanguage === 'fa' ? 'بازگشت به مقالات' : 'Back to Articles';
        
        articleDetail.innerHTML = `
            <h1>${title}</h1>
            <div class="article-detail-meta">
                <span class="category">${categoryText}</span>
                <span class="year">${article.year}</span>
            </div>
            <div class="article-tags">
                ${tagsHTML}
            </div>
            <div class="article-full-content">
                <p>${content}</p>
            </div>
            <a href="javascript:void(0)" class="back-btn">${backButtonText}</a>
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

    // Function to set up language toggle
    function setupLanguageToggle() {
        languageToggle.addEventListener('click', function() {
            // Toggle language
            if (currentLanguage === 'en') {
                currentLanguage = 'fa';
                document.documentElement.setAttribute('lang', 'fa');
                document.documentElement.setAttribute('dir', 'rtl');
                this.textContent = 'English';
            } else {
                currentLanguage = 'en';
                document.documentElement.setAttribute('lang', 'en');
                document.documentElement.setAttribute('dir', 'ltr');
                this.textContent = 'فارسی';
            }
            
            // Save language preference to localStorage
            localStorage.setItem('language', currentLanguage);
            
            // Update all translatable elements
            updateLanguage();
            
            // Refresh the articles display to show translated content
            displayArticles();
            
            // If article detail is open, refresh it too
            const articleDetail = document.querySelector('.article-detail');
            if (articleDetail) {
                const articleId = parseInt(document.querySelector('.read-more').getAttribute('data-id'));
                articleDetail.remove();
                articlesContainer.style.display = 'grid';
                showArticleDetail(articleId);
            }
        });
    }

    // Function to update language on all elements
    function updateLanguage() {
        // Get all elements with data-en and data-fa attributes
        const translatableElements = document.querySelectorAll('[data-en][data-fa]');
        
        translatableElements.forEach(element => {
            // Get the translation for the current language
            const translation = element.getAttribute(`data-${currentLanguage}`);
            
            // Update the element's text content
            if (translation) {
                element.textContent = translation;
            }
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