const gameTemplates = {
    templates: [
        `(div)
        (p)
            (lorem)
        (/p)
        (/div)
        (span)
            (lorem)
        (/span)`,
        
        `(section)
        (h1)
            (lorem)
        (/h1)
        (p)
            (lorem)
        (/p)
        (/section)`,
        
        `(article)
        (h2)
            (lorem)
        (/h2)
        (div)
            (lorem)
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
        'div': ['<div/>', '<div', '</div>'],
        'p': ['<p/>', '<p', '</p>'],
        'span': ['<span/>', '<span', '</span>'],
        'section': ['<section/>', '<section', '</section>'],
        'h1': ['<h1/>', '<h1', '</h1>'],
        'h2': ['<h2/>', '<h2', '</h2>'],
        'article': ['<article/>', '<article', '</article>']
    },
    
    loremTexts: [
        "Lorem ipsum dolor sit amet.",
        "Consectetur adipiscing elit.",
        "Sed do eiusmod tempor incididunt.",
        "Ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam."
    ]
};
