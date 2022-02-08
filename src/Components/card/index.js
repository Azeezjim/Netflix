import React, {useState, useContext, createContext} from 'react';
import {Container, Group, Title, SubTitle, Text, Feature, FeatureTitle, FeatureText, FeatureClose, Maturity, Meta, Entities, Item, Image} from './styles/card'

export const FeatureContext = createContext();

export default function Card({children, ...restProps}) {
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState([]);

    return(
        <FeatureContext.Provider value={{showFeature, setShowFeature, itemFeature, setItemFeature}}>
            <Container {...restProps}>{children}</Container>
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

Card.Entities = function CardEntities ({children, ...restProps}) {
    return <Entities {...restProps}>{children}</Entities>
};

Card.Meta = function CardMeta ({children, ...restProps}) {
    return <Meta {...restProps}>{children}</Meta>
};

Card.Feature = function CardFeature ({children, catigory, ...restProps}) {

    const {showFeature, itemFeature, setShowFeature, setItemFeature} = useContext(FeatureContext  )
    return <Feature 
    {...restProps} 
    src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
    >
        <COntent>
            <FeatureTitle>{itemFeature.Title}</FeatureTitle>
            <FeatureTitle>{itemFeature.Title}</FeatureTitle>
        </COntent>
    </Feature>
};

Card.Item = function CardItem ({item,  children, ...restProps}) {;
    const { setItemFeature, setShowFeature } = useContext(FeatureContext)
    
    return <Item 
        onClick={() => {
            setItemFeature(item);
            setShowFeature(true);
    }}

    {...restProps}>{children}</Item>
};

Card.Image = function CardImage ({...restProps}) {
    return <Image {...restProps} />
};

