import React from 'react';
import BrowsContainer from '../Containers/browse';
import { useContent } from '../hooks';
import  selectionFilter  from '../utils/selection-filter';

export default function Browse() {
  // Series and movies
  const { series } = useContent('series')
  const { films} = useContent('films')
  console.log(films)
  
  // seides
  const slides = selectionFilter({series, films});
  console.log(slides)
  return <BrowsContainer  slides ={slides}/>;

} 