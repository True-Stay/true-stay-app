import { Container, Content } from "native-base";
import React from "react";
import { View } from "react-native";
import Navbar from "../../components/Header";
import { ListViewData } from "../../components/ListCard";
import { GlobalStyles, themeColorPuff } from "../../styles/global-styles";
import { DescriptionCard } from "./DescriptionCard";
import { LandlordInfoCard } from "./LandlordInfoCard";
import { UnitCard } from "./UnitCard";

export function DetailsPageScreen({ route, navigation }) {
  const { data } = route.params;

  const _data: ListViewData = data;

  return (
    <Container style={{ flex: 1 }}>
      <Navbar
        headerTitle="Details"
        showBack
        onPress={() => navigation.goBack()}
      ></Navbar>
      <Container style={GlobalStyles.ContentContainer}>
        <Content style={{backgroundColor:themeColorPuff}}>
          {DescriptionCard(_data)}

          <View style={GlobalStyles.TextBody}>
            {UnitCard(_data)}
            {LandlordInfoCard(_data)}
          </View>
        </Content>
      </Container>
    </Container>
  );
}
