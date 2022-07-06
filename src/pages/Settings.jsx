import Header from '../components/Header'
import {Container} from '../layouts/LayoutElements';
import React from 'react'
import { Title } from '../components/Header/HeaderElements';
import TabComponent from '../components/Tab';
import TextInput from './../components/Input/TextInput';
import { GridContainer } from './../layouts/LayoutElements';
import Select from './../components/Input/Select';

const Settings = () => {
  const currency =[
    {
      "id": 1,
      "name": "Cedis - GHS",
      "code": "GHS",
      "image": "https://www.countryflags.io/gh/flat/64.png"
      
    },
    {
      "id": 2,
      "name": "Naira - NGN",
      "code": "NGN",
      "image": "https://www.countryflags.io/ng/flat/64.png"
    }
  ]
  const Banks =[
    {
      "id": 1,
      "name": "Access Bank",
      "code": "0934888712",
      "image": null
      
    },
    {
      "id": 2,
      "name": "Zenith Bank",
      "code": "0934888712",
      "image": null
    },
    {
      "id": 3,
      "name": "First Bank",
      "code": "0934888712",
      "image": null
    }

  ]
  return (
    <>
      <Container>
        <Header/>
        <Title>Settings</Title>
        <TabComponent title={`Default Wallet`}>
           <GridContainer>
           </GridContainer>
        </TabComponent>
        <TabComponent title={`Change Password`}>
           <GridContainer>
           </GridContainer>
        </TabComponent>
        <TabComponent toggle={true} title={`Receive Notifications`}>
           <GridContainer>
           </GridContainer>
        </TabComponent>
        <TabComponent title={`Bank Details`}>
           <GridContainer>
              <Select options={currency} placeholder='Select Currency' id="1"/>
              <Select options={Banks} placeholder='Bank Name' id="2"/>
              <TextInput placeholder='Account Number' />
              <TextInput placeholder='Account Name' />
           </GridContainer>
        </TabComponent>
      </Container>
    </>
  )
}

export default Settings