import React, {useState, useContext, createContext} from 'react';

export const FeatureContext = createContext();

export default function Card({children, ...restProps}) {
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState([]);

    return(
          <FeatureContext.Provider value={{showFeature, setShowFeature, itemFeature, setItemFeature}}>
              <Cintainer {...restProps}>{children}</Cintainer>
          </FeatureContext.Provider>
    );
}

Card.Group = function CardGroup ({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
};

Card.Title = function CardTitle ({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
};

Card.SubTitle = function CardSubTitle ({children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
};

Card.Title = function CardTitle ({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
};

Card.Text = function CardText ({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
};

Card.Meta = function CardMeta ({children, ...restProps}) {
    return <Meta {...restProps}>{children}</Meta>
};

Card.Item = function CardItem ({item,  children, ...restProps}) {;

    return <Item 
        onClick={() => {
            setItemFeature(item);
            setShowFeature(true);
    }}

    {...restProps}>{children}</Item>
};

Card.Title = function CardTitle ({...restProps}) {
    return <Title {...restProps}>{children}</Title>
};

