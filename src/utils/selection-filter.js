 export default function selectionFilter ({series , films}) {
    return {
        series: [
            {
                titles: "Documentaries",
                data: series?.filter((item) => item.genre=== 'documentaries' )
            },
            {
                titles: "Comedies ",
                data: series?.filter((item) => item.genre=== 'comedies'  )
            },
            {
                titles: "Children",
                data: series?.filter((item) => item.genre=== 'children')
            },
            {
                titles: "Crime ",
                data: series?.filter((item) => item.genre=== 'crime'  )
            },
            {
                titles: "Feel good ",
                data: series?.filter((item) => item.genre=== 'feel-good'  )
            },
        ],  
        films: [
            {
                titles: "Drama",
                data: films?.filter((item) => item.genre=== 'drama') 
            },
            {
                titles: "Comedies ",
                data: films?.filter((item) => item.genre=== 'comedies' )
            },
            {
                titles: "Thriller ",
                data: films?.filter((item) => item.genre=== 'thriller' )
            },
            {
                titles: " Children",
                data: films?.filter((item) => item.genre=== 'children' )
            },
            {
                titles: "Suspence ",
                data: films?.filter((item) => item.genre=== 'suspence' )
            },
            {
                titles: "Romance ",
                data: films?.filter((item) => item.genre=== 'romance' )
            },
        ],
    }
}

