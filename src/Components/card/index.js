import React, {useState, useContext, createContext} from 'react';
import {Container, Group, Title, SubTitle, Text, Feature, FeatureTitle, FeatureText, FeatureClose, Maturity, Content, Meta, Entities, Item, Image} from './styles/card'

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
    src={`/images/${catigory}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
    >
        <Content>
            <FeatureTitle>{itemFeature.title}</FeatureTitle>
            <FeatureText>{itemFeature.description}</FeatureText>
            <FeatureClose onClick={() => setShowFeature(false)}>
                <img src="/images/icons/close.png" alt="Close" />
            </FeatureClose>  
        </Content>
        <Group margin="30 0" flexDirection="row" alignItem="center">
            <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
            </Maturity>
            <FeatureText fontWeight="bold">
                {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slize(1)}
            </FeatureText>
        </Group>
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

