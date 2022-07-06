import {useState} from 'react'
import { Stack } from './../../layouts/LayoutElements';
import { 
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
    Button
} from './DashinfoElements';
import { coins } from '../../utils/constants';
import {BsChevronDoubleDown} from 'react-icons/bs';
const Sales = () => {
    const [total, setTotal] = useState(0);
  return (
        <SalesContainer>
            <Stack>
                <SalesHeader>Sell any of these</SalesHeader>
            </Stack>
            <Stack>
                <SalesList>
                    {coins.map((coin, index) => {
                        // setTotal(total + coin.amount);
                        return (
                            <SalesItem key={index}>
                                <SaleIconContainer>
                                    {coin.icon}
                                </SaleIconContainer>
                                <SaleInfo>
                                    <SaleUp>
                                        <SaleTitle>{coin.name}</SaleTitle>
                                        <SaleTitle>{coin.currencySymbol +' '+ coin.amount}</SaleTitle>
                                    </SaleUp>
                                    <SaleDown>
                                        <SaleSubtitle>{coin.symbol}</SaleSubtitle>
                                        <SaleSubtitle>{ coin.currency}</SaleSubtitle>
                                    </SaleDown>
                                </SaleInfo>
                            </SalesItem>
                        )
                    })
                }
                </SalesList>
            </Stack>
            <Stack>
                <Button><BsChevronDoubleDown/></Button>
            </Stack>
            <Stack>

                <SalesDetails>
                    <SalesTotal>Total NGN Balance</SalesTotal>
                    <SalePrice>₦289,043.00</SalePrice>
                </SalesDetails>
            </Stack>
        </SalesContainer>
  )
}

export default Sales