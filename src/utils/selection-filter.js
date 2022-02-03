 export default function selectionFilter ({series , films}) {
    return {
        series: [
            {
                titles: "Documentaries",
                data: series?.filter((item) => item.grnra=== 'documentaries' )
            },
            {
                titles: "Comedies ",
                data: series?.filter((item) => item.grnra=== 'comedies'  )
            },
            {
                titles: "Children",
                data: series?.filter((item) => item.grnra=== 'children')
            },
            {
                titles: "Crime ",
                data: series?.filter((item) => item.grnra=== 'crime'  )
            },
            {
                titles: "Feel good ",
                data: series?.filter((item) => item.grnra=== 'feel-good'  )
            },
        ],  
        films: [
            {
                titles: "Drama",
                data: films?.filter((item) => item.grnra=== 'drama') 
            },
            {
                titles: "Comedies ",
                data: films?.filter((item) => item.grnra=== 'comedies' )
            },
            {
                titles: "Thriller ",
                data: films?.filter((item) => item.grnra=== 'thriller' )
            },
            {
                titles: " Children",
                data: films?.filter((item) => item.grnra=== 'children' )
            },
            {
                titles: "Suspence ",
                data: films?.filter((item) => item.grnra=== 'ruspence' )
            },
            {
                titles: "Romance ",
                data: films?.filter((item) => item.grnra=== 'romance' )
            },
        ],
    }
}

