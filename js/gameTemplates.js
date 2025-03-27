const gameTemplates = {
templates: [
    `(div)
        (section)
            (article)
                (h1)(lorem)(/h1)
                (div)
                    (p)(lorem)(/p)
                    (span)(lorem)(/span)
                (/div)
            (/article)
            (div)
                (h2)(lorem)(/h2)
                (p)(lorem)(/p)
            (/div)
        (/section)
    (/div)`,

    `(article)
        (div)
            (section)
                (h2)(lorem)(/h2)
                (div)
                    (p)(lorem)(/p)
                    (div)
                        (span)(lorem)(/span)
                    (/div)
                (/div)
            (/section)
            (p)(lorem)(/p)
        (/div)
    (/article)`,

    `(section)
        (div)
            (h1)(lorem)(/h1)
            (article)
                (div)
                    (p)(lorem)(/p)
                    (span)(lorem)(/span)
                (/div)
            (/article)
            (section)
                (h2)(lorem)(/h2)
            (/section)
        (/div)
    (/section)`,

    `(div)
        (div)
            (div)
                (h1)(lorem)(/h1)
                (span)(lorem)(/span)
            (/div)
            (section)
                (p)(lorem)(/p)
                (div)(lorem)(/div)
            (/section)
        (/div)
        (article)(lorem)(/article)
    (/div)`,

    `(article)
        (h2)(lorem)(/h2)
        (div)
            (section)
                (div)
                    (p)(lorem)(/p)
                    (div)
                        (span)(lorem)(/span)
                    (/div)
                (/div)
                (h1)(lorem)(/h1)
            (/section)
        (/div)
    (/article)`,

    `(div)
        (section)
            (article)
                (div)
                    (h1)(lorem)(/h1)
                    (p)(lorem)(/p)
                (/div)
                (section)
                    (span)(lorem)(/span)
                (/section)
            (/article)
            (div)(lorem)(/div)
        (/section)
    (/div)`,

    `(section)
        (article)
            (div)
                (h2)(lorem)(/h2)
                (div)
                    (p)(lorem)(/p)
                (/div)
            (/div)
            (section)
                (span)(lorem)(/span)
            (/section)
        (/article)
        (div)(lorem)(/div)
    (/section)`,

    `(div)
        (article)
            (h1)(lorem)(/h1)
            (div)
                (section)
                    (p)(lorem)(/p)
                    (div)
                        (span)(lorem)(/span)
                    (/div)
                (/section)
            (/div)
        (/article)
        (section)(lorem)(/section)
    (/div)`,

    `(article)
        (section)
            (div)
                (h2)(lorem)(/h2)
                (article)
                    (p)(lorem)(/p)
                (/article)
            (/div)
            (div)
                (span)(lorem)(/span)
            (/div)
        (/section)
    (/article)`,

    `(div)
        (div)
            (section)
                (h1)(lorem)(/h1)
                (div)
                    (article)
                        (p)(lorem)(/p)
                    (/article)
                (/div)
            (/section)
            (span)(lorem)(/span)
        (/div)
    (/div)`,

    `(section)
        (div)
            (article)
                (div)
                    (h2)(lorem)(/h2)
                    (section)
                        (p)(lorem)(/p)
                    (/section)
                (/div)
            (/article)
            (div)(lorem)(/div)
        (/div)
    (/section)`,

    `(article)
        (div)
            (h1)(lorem)(/h1)
            (section)
                (div)
                    (p)(lorem)(/p)
                    (article)
                        (span)(lorem)(/span)
                    (/article)
                (/div)
            (/section)
        (/div)
    (/article)`,

    `(div)
        (section)
            (div)
                (article)
                    (h2)(lorem)(/h2)
                    (div)
                        (p)(lorem)(/p)
                    (/div)
                (/article)
                (span)(lorem)(/span)
            (/div)
        (/section)
    (/div)`,

    `(section)
        (article)
            (div)
                (h1)(lorem)(/h1)
                (section)
                    (div)
                        (p)(lorem)(/p)
                    (/div)
                (/section)
            (/div)
            (div)(lorem)(/div)
        (/article)
    (/section)`,

    `(div)
        (div)
            (h2)(lorem)(/h2)
            (article)
                (section)
                    (p)(lorem)(/p)
                    (div)
                        (span)(lorem)(/span)
                    (/div)
                (/section)
            (/article)
        (/div)
    (/div)`,

    `(article)
        (section)
            (div)
                (h1)(lorem)(/h1)
                (div)
                    (article)
                        (p)(lorem)(/p)
                    (/article)
                (/div)
            (/div)
            (span)(lorem)(/span)
        (/section)
    (/article)`,

    `(div)
        (section)
            (article)
                (div)
                    (h2)(lorem)(/h2)
                    (section)
                        (p)(lorem)(/p)
                    (/section)
                (/div)
            (/article)
        (/section)
    (/div)`,

    `(section)
        (div)
            (h1)(lorem)(/h1)
            (article)
                (div)
                    (p)(lorem)(/p)
                    (div)
                        (span)(lorem)(/span)
                    (/div)
                (/div)
            (/article)
        (/div)
    (/section)`,

    `(article)
        (div)
            (section)
                (h2)(lorem)(/h2)
                (div)
                    (article)
                        (p)(lorem)(/p)
                    (/article)
                (/div)
            (/section)
            (div)(lorem)(/div)
        (/div)
    (/article)`,

    `(div)
        (article)
            (section)
                (div)
                    (h1)(lorem)(/h1)
                    (p)(lorem)(/p)
                (/div)
                (div)
                    (span)(lorem)(/span)
                (/div)
            (/section)
        (/article)
    (/div)`,

    `(section)
        (div)
            (article)
                (h2)(lorem)(/h2)
                (section)
                    (div)
                        (p)(lorem)(/p)
                    (/div)
                (/section)
            (/article)
        (/div)
    (/section)`,

    `(div)
        (div)
            (section)
                (h1)(lorem)(/h1)
                (article)
                    (div)
                        (p)(lorem)(/p)
                        (span)(lorem)(/span)
                    (/div)
                (/article)
            (/section)
        (/div)
    (/div)`,

    `(article)
        (section)
            (div)
                (h2)(lorem)(/h2)
                (div)
                    (article)
                        (p)(lorem)(/p)
                    (/article)
                (/div)
            (/div)
            (div)(lorem)(/div)
        (/section)
    (/article)`,

    `(div)
        (article)
            (div)
                (section)
                    (h1)(lorem)(/h1)
                    (div)
                        (p)(lorem)(/p)
                    (/div)
                (/section)
            (/div)
            (span)(lorem)(/span)
        (/article)
    (/div)`,

    `(section)
        (article)
            (div)
                (h2)(lorem)(/h2)
                (section)
                    (div)
                        (p)(lorem)(/p)
                        (div)
                            (span)(lorem)(/span)
                        (/div)
                    (/div)
                (/section)
            (/div)
        (/article)
    (/section)`,

    `(div)
        (div)
            (h1)(lorem)(/h1)
            (article)
                (section)
                    (div)
                        (p)(lorem)(/p)
                    (/div)
                (/section)
            (/article)
            (div)(lorem)(/div)
        (/div)
    (/div)`,

    `(article)
        (section)
            (div)
                (h2)(lorem)(/h2)
                (article)
                    (div)
                        (p)(lorem)(/p)
                        (span)(lorem)(/span)
                    (/div)
                (/article)
            (/div)
        (/section)
    (/article)`,

    `(section)
        (div)
            (article)
                (h1)(lorem)(/h1)
                (div)
                    (section)
                        (p)(lorem)(/p)
                    (/section)
                (/div)
            (/article)
        (/div)
    (/section)`,

    `(div)
        (article)
            (div)
                (section)
                    (h2)(lorem)(/h2)
                    (div)
                        (article)
                            (p)(lorem)(/p)
                        (/article)
                    (/div)
                (/section)
            (/div)
        (/article)
    (/div)`,

    `(article)
        (div)
            (h1)(lorem)(/h1)
            (section)
                (div)
                    (article)
                        (p)(lorem)(/p)
                        (div)
                            (span)(lorem)(/span)
                        (/div)
                    (/article)
                (/div)
            (/section)
        (/div)
    (/article)`
],
    
    correctTags: {
        'div': '<div>',
        'p': '<p>',
        'span': '<span>',
        'section': '<section>',
        'h1': '<h1>',
        'h2': '<h2>',
        'article': '<article>'
    },
    
incorrectTags: {
    'div': [
        '<div/>', '<div', '</div>',
        'div>', 'div', '<див>',
        '<vid>', '< div >', '"div"'
    ],
    'p': [
        '<p/>', '<p', '</p>',
        'p>', 'p', '<р>',
        '<п>', '< p >', '"p"'
    ],
    'span': [
        '<span/>', '<span', '</span>',
        'span>', 'span', '<спан>',
        '<сапн>', '< span >', '"span"'
    ],
    'section': [
        '<section/>', '<section', '</section>',
        'section>', 'section', '<секция>',
        '<секшин>', '< section >', '"section"'
    ],
    'h1': [
        '<h1/>', '<h1', '</h1>',
        'h1>', 'h1', '<ч1>',
        '<н1>', '< h1 >', '"h1"'
    ],
    'h2': [
        '<h2/>', '<h2', '</h2>',
        'h2>', 'h2', '<ч2>',
        '<н2>', '< h2 >', '"h2"'
    ],
    'article': [
        '<article/>', '<article', '</article>',
        'article>', 'article', '<артикл>',
        '<атикле>', '< article >', '"article"'
    ]
}
    
loremTexts: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    "Lorem ipsum dolor sit amet, consectetur cras amet.",
    "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.",
    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    "L0r3m 1psu d0l0r s1t @met, c0ns3ct3tur 4d1p1sc1ng 3l1t.",
    "Lorem? Ipsum! Dolor... sit amet: consectetur; adipiscing 'elit'.",
    "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.",
    "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "LoReM iPsUm DoLoR sIt AmEt, CoNsEcTeTuR aDiPiScInG eLiT.",
    "Лорем ипсум долор сит амет, consectetur adipiscing elit.",
    "Lorem ipsum 漢字 dolor sit amet, カタカナ adipiscing elit.",
    "Lorem ipsum ~!@#$%^&*()_+ dolor sit amet, {[]} adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
]
};
