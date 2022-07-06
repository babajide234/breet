import React from 'react'
import { Stack } from '../../layouts/LayoutElements'
import { 
    RecentContainer, 
    RecentHeader,
    RecentItem,
    RecentIconContainer,
    RecentInfo,
    RecentTitle,
    RecentTitleText,
    RecentSubtitle,
    RecentSubtitleText2,
    RecentSubtitleText,
    SalesContainer, 
    SalesHeader, 
    SalesItem, 
    SalesList,
    SaleIconContainer,
    SaleTitle,
    SaleInfo,
    SaleSubtitle,
    SaleUp,
    SaleDown,
    SalesDetails,
    SalePrice,
    SalesTotal,
    Recentupicon,
    Icon,
    Button,
    Date
 } from './DashinfoElements'
import Sale from '../../assets/scaleup.png'
import Money from '../../assets/money.png'
import With from '../../assets/witdrawl.png'
import {BsChevronRight} from 'react-icons/bs'

const Recent = () => {
  return (
    <RecentContainer>
        <Stack>
            <SalesHeader>Recent Activity</SalesHeader>
        </Stack>
        <Stack>
            <SalesList>

            
            <SalesItem>
                <RecentIconContainer>
                    <Icon src={Money}/>
                    <Recentupicon>
                        <img src={Sale} alt="" />
                    </Recentupicon>
                </RecentIconContainer>
                <RecentInfo>
                    <RecentTitle>
                        <RecentTitleText>
                        <Date>July 7</Date>
                        Sold Bitcoin
                        </RecentTitleText>
                        <RecentTitleText>
                        0.0042 BTC
                        </RecentTitleText>
                    </RecentTitle>
                    <RecentSubtitle>
                        <RecentSubtitleText>
                            <span></span>
                            FW749374HFHWERHFIWH
                        </RecentSubtitleText>
                        <RecentSubtitleText2>
                            ₦69,000.00
                        </RecentSubtitleText2>
                    </RecentSubtitle>   
                </RecentInfo>
            </SalesItem>
            <SalesItem>
                <RecentIconContainer>
                    <Icon src={With}/>
                    {/* <Recentupicon>
                        <img src={} alt="" />
                    </Recentupicon> */}
                </RecentIconContainer>
                <RecentInfo>
                    <RecentTitle>
                        <RecentTitleText>
                        <Date>July 7</Date>
                        Withdrawal
                        </RecentTitleText>
                        <RecentTitleText>
                        ₦500,000
                        </RecentTitleText>
                    </RecentTitle>
                    <RecentSubtitle>
                        <RecentSubtitleText>
                            <span></span>
                            Access Bank
                        </RecentSubtitleText>
                        <RecentSubtitleText2>
                            0039847384
                        </RecentSubtitleText2>
                    </RecentSubtitle>   
                </RecentInfo>
            </SalesItem>
            </SalesList>
        </Stack>
        <Stack>
            <Button>View more <BsChevronRight/></Button>
        </Stack>
    </RecentContainer>
  )
}

export default Recent