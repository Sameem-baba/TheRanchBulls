import { createContext, useEffect, useState } from 'react'
import {
  contractABI,
  contractAddress,
  CurrencyContract,
  currencyContractABI,
} from '../lib/constants'
import getWeb3 from '../lib/getWeb3'

export const ContractContext = createContext()

export const ContractProvider = ({ children }) => {
  const [contract, setContract] = useState(null)
  const [tokenContract, setTokenContract] = useState(null)
  const [open, setOpen] = useState(false)

  const loadTokenContract = async () => {
    const web3 = await getWeb3()

    const web3Contract = await new web3.eth.Contract(
      currencyContractABI,
      CurrencyContract
    )
    setTokenContract(web3Contract)
  }

  const loadMintContract = async () => {
    const web3 = await getWeb3()
    const web3Contract = await new web3.eth.Contract(
      contractABI,
      contractAddress
    )
    setContract(web3Contract)
  }

  useEffect(() => {
    loadMintContract()
    loadTokenContract()
  }, [])

  return (
    <ContractContext.Provider
      value={{ contract, tokenContract, open, setOpen }}
    >
      {children}
    </ContractContext.Provider>
  )
}
