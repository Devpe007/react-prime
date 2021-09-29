import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import {
  Container,
  BannerItem,
  Title,
  RateContainer,
  Rate,
} from './styles';

function SliderItem() {
  return (
    <Container activeOpacity={0.7}>
      <BannerItem
        source={{ uri: 'https://images.pexels.com/photos/918281/pexels-photo-918281.jpeg?cs=srgb&dl=pexels-obregonia-d-toretto-918281.jpg&fm=jpg' }}
      />

      <Title numberOfLines={1}>Vingadores</Title>

      <RateContainer>
        <Ionicons name="md-star" size={12} color="#e7a74e" />
        <Rate>9/10</Rate>
      </RateContainer>
    </Container>
  );
};

export default SliderItem;
