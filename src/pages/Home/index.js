import React from 'react';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native';

import {
  Container,
  SearchContainer,
  Input,
  SearchButton,
  Title,
  BannerButton,
  Banner,
  SliderMovie,
} from './styles';

import Header from '../../components/Header';
import SliderItem from '../../components/SliderItem';

function Home() {
  return (
    <Container>
      <Header title="React Prime" />

      <SearchContainer>
        <Input
          placeholder="Ex Vingadores"
          placeholderTextColor="#dddddd"
        />

        <SearchButton>
          <Feather
            name="search"
            size={30}
            color="#ffffff"
          />
        </SearchButton>
      </SearchContainer>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Em cartaz</Title>

        <BannerButton activeOpacity={0.9} onPress={() => alert('Test')}>
          <Banner
            resizeMethod="resize"
            source={{ uri: 'https://images.pexels.com/photos/918281/pexels-photo-918281.jpeg?cs=srgb&dl=pexels-obregonia-d-toretto-918281.jpg&fm=jpg' }}
          />
        </BannerButton>

        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1, 2, 3, 4]}
          renderItem={({ item }) => <SliderItem />}
        />

        <Title>Pupulares</Title>

        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1, 2, 3, 4]}
          renderItem={({ item }) => <SliderItem />}
        />

        <Title>Mais Votados</Title>

        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1, 2, 3, 4]}
          renderItem={({ item }) => <SliderItem />}
        />
      </ScrollView>

    </Container>
  );
};

export default Home;
