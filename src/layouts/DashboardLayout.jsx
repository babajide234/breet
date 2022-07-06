import React from 'react'
import { Outlet } from 'react-router-dom'
import { DashContainer, MainContainer, RightContent, SideBar } from './LayoutElements'
import Sidebar from './../components/Sidebar/index';
import Dashinfo from '../components/Dashinfo';

const DashboardLayout = () => {
  return (
    <>
      <DashContainer>
        <SideBar>
          <Sidebar/>
        </SideBar>
        <MainContainer>
          <Outlet/>
        </MainContainer>
        <RightContent>
          <Dashinfo/>
        </RightContent>
      </DashContainer>
    </>
  )
}

export default DashboardLayout