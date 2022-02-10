 export default function selectionFilter ({series , films}) {
    return {
        series: [
            {
                title: "Documentaries",
                data: series?.filter((item) => item.genre=== 'documentaries' )
            },
            {
                title: "Comedies ",
                data: series?.filter((item) => item.genre=== 'comedies'  )
            },
            {
                title: "Children",
                data: series?.filter((item) => item.genre=== 'children')
            },
            {
                title: "Crime ",
                data: series?.filter((item) => item.genre=== 'crime'  )
            },
            {
                title: "Feel good ",
                data: series?.filter((item) => item.genre=== 'feel-good'  )
            },
        ],  
        films: [
            {
                title: "Drama",
                data: films?.filter((item) => item.genre=== 'drama') 
            },
            {
                title: "Comedies ",
                data: films?.filter((item) => item.genre=== 'comedies' )
            },
            {
                title: "Thriller ",
                data: films?.filter((item) => item.genre=== 'thriller' )
            },
            {
                title: " Children",
                data: films?.filter((item) => item.genre=== 'children' )
            },
            {
                title: "Suspence ",
                data: films?.filter((item) => item.genre=== 'suspence' )
            },
            {
                title: "Romance ",
                data: films?.filter((item) => item.genre=== 'romance' )
            },
        ],
    }
}

